deploy:
	grunt build
	rsync -az ./dist/ stefan@git.stefanwienert.de:/var/www/stefanwienert.de/baufinanzierer/
