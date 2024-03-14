.PHONY: run
run:
	node ./dist/src/app.ts

.PHONY: bare-run
bare-run:
	node ./src/app.ts

.PHONY: build
build:
	npx tsc

.PHONY: dev-config
dev-config:
	./scripts/dev-config.sh
