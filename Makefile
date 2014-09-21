all:
	brunch build

setup:
	rm -rf node_modules
	rm -rf bower_components
	npm i
	bower i

watch:
	brunch watch --server

production:
	rm -rf public
	brunch build --production

release: production
	git checkout gh-pages
	cp -r public/* .
	git add .
	git commit -m "Production release"
	git push origin gh-pages
	git checkout master

