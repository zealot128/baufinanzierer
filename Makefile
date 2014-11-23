deploy:
	grunt build
	grunt gh-pages

install:
	sudo npm install -g grunt-cli bower
	npm install
	bower install

serve:
	grunt serve
