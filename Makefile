install:
	npm install

run:
	npm run dev

test-unit:
	npm run test:unit

lint:
	npm run lint

test-e2e:
	npm run test:e2e

test: test-unit test-e2e

.PHONY: run test-unit test-e2e test