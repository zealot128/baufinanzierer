'use strict';

/**
 * @ngdoc service
 * @name projectsApp.grunderwerbssteuer
 * @description
 * # grunderwerbssteuer
 * Value in the projectsApp.
 */
angular.module('projectsApp').value('grunderwerbssteuern', [
  {'name': 'Baden-Württemberg'      , 'steuer': 5.0 },
  {'name': 'Bayern'                 , 'steuer': 3.5 },
  {'name': 'Berlin'                 , 'steuer': 6.0 },
  {'name': 'Brandenburg'            , 'steuer': 5.0 },
  {'name': 'Bremen'                 , 'steuer': 5.0 },
  {'name': 'Hamburg'                , 'steuer': 4.5 },
  {'name': 'Hessen'                 , 'steuer': 6.0 },
  {'name': 'Mecklenburg-Vorpommern' , 'steuer': 5.0 },
  {'name': 'Niedersachsen'          , 'steuer': 5.0 },
  {'name': 'Nordrhein-Westfalen'    , 'steuer': 6.5 },
  {'name': 'Rheinland-Pfalz'        , 'steuer': 5.0 },
  {'name': 'Saarland'               , 'steuer': 6.5 },
  {'name': 'Sachsen'                , 'steuer': 3.5 },
  {'name': 'Sachsen-Anhalt'         , 'steuer': 5.0 },
  {'name': 'Schleswig-Holstein'     , 'steuer': 6.5 },
  {'name': 'Thüringen'              , 'steuer': 5.0 }
]);
