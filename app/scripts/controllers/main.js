'use strict';

/**
 * @ngdoc function
 * @name projectsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projectsApp
 */
angular.module('projectsApp')
  .controller('BaufinanzCtrl', function ($scope,storage, grunderwerbssteuern) {
    $scope.grunderwerbssteuern = grunderwerbssteuern;
    storage.bind($scope, 'kaufpreis', {defaultValue: 345000});
    storage.bind($scope, 'provision', {defaultValue: 5.95});
    storage.bind($scope, 'steuer', {defaultValue: 6.0});
    storage.bind($scope, 'auslagen', {defaultValue: 1.5});
    storage.bind($scope, 'eigenkapital', {defaultValue: 0});
    storage.bind($scope, 'eigenkapital2', {defaultValue: 0});
    storage.bind($scope, 'zinsrate', {defaultValue: 2.0});
    storage.bind($scope, 'tilgungsrate', {defaultValue: 2.0});
    $scope.provisionBetrag = function() {
      return parseFloat($scope.kaufpreis) * parseFloat($scope.provision) / 100;
    };
    $scope.steuerBetrag = function() {
      return parseFloat($scope.kaufpreis) * parseFloat($scope.steuer) / 100;
    };
    $scope.auslagenBetrag = function() {
      return parseFloat($scope.kaufpreis) * parseFloat($scope.auslagen) / 100;
    };
    $scope.kaufnebenkosten = function() {
      return $scope.provisionBetrag() + $scope.steuerBetrag() + $scope.auslagenBetrag();
    };
    $scope.kosten = function() {
      return parseFloat($scope.kaufpreis) + $scope.kaufnebenkosten();
    };
    $scope.eigenkapitalBetrag = function() {
      return parseFloat($scope.eigenkapital) + parseFloat($scope.eigenkapital2);
    };
    $scope.min = function(val) {
      var fac = (100 - val) / 100;
      return $scope.kaufnebenkosten() + fac * $scope.kaufpreis;
    };
    $scope.kreditart = function() {
      if ($scope.min(90) <= $scope.eigenkapitalBetrag()) {
        return 90;
      } else if ($scope.min(100) <= $scope.eigenkapitalBetrag()) {
        return 100;
      } else {
        return 110;
      }
    };
    $scope.kredit = function() {
      return ($scope.kreditart() / 100) * parseFloat($scope.kaufpreis);
    };
    $scope.zinsen = function() {
      return Math.round(parseFloat($scope.zinsrate) / 100 * $scope.kredit());
    };
    $scope.tilgung = function() {
      return Math.round(parseFloat($scope.tilgungsrate) / 100 * $scope.kredit());
    };
    $scope.monatsrate = function() {
      return Math.round($scope.rate() / 12);
    };
    $scope.rate = function() {
      return $scope.zinsen() + $scope.tilgung();
    };
    $scope.laufzeitN = function() {
      var i = parseFloat($scope.zinsrate) / 100;
      var t = parseFloat($scope.tilgungsrate) / 100;
      var m = 12;
      return Math.ceil(
        Math.log2(1 + (i/t) ) / Math.log2(1 + (i/m) )
      );
    };
    $scope.laufzeitString = function() {
      var months = $scope.laufzeitN();
      var years = Math.ceil(months / 12);
      var rest  = months % 12;
      return '' + years + ' Jahre, ' + rest + ' Monate';
    };

  }).filter('euro', function () {
    return function (text) {
      var stripped = null;
      if (text === undefined || text === null || !text) {
        stripped = 0;
      } else {
        stripped = Math.round(parseFloat(text)).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.');
      }
      return  stripped + ' €';
    };
  });
