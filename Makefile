install:
		npm install

start:
		npm run babel-node -- src/bin/bin-search.js

publish:
		npm publish

lint:
		npm run eslint .