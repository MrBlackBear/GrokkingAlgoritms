install:
		npm install

start:
		npm run babel-node -- src/bin/bin-search.js

recursion:
		npm run babel-node -- src/bin/bin-recursion.js

publish:
		npm publish

lint:
		npm run eslint .