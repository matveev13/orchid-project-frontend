SHELL=/bin/bash
.DEFAULT_GOAL := help
THIS_FILE := $(lastword $(MAKEFILE_LIST))
OS := `uname -s`
DOCKER_UID := `id -u`
DOCKER_GID := `id -g`

ifndef PROJECT
	PROJECT=kweek
endif

ifndef ENV
	ENV=dev
endif

ifndef UID
	UID=`id -u`
endif

ifndef GID
	GID=`id -g`
endif

.PHONY: help
help: ## Отобразить данное сообщение. Для дополнительной информации загляните в README.md
	@cat $(MAKEFILE_LIST) | grep -e "^[a-zA-Z_\-]*: *.*## *" | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.PHONY: build-prod
build-prod: ## Собрать контейнер, как backend так и frontend (для backend) часть (запускает build)
	@$(MAKE) build-prod-frontend-npm
	@$(MAKE) build-prod-frontend

.PHONY: build-prod-frontend-npm
build-prod-frontend-npm: ## Собрать npm файлы для App
	@docker pull node:22
	@if [[ ! -f './.env' ]]; then cp ./.build/prod.env ./.env; fi
	@docker run --rm $$(if [ ! -n "${CI}" ]; then echo " -it" ; fi) \
		--name kweek-node \
		--volume ${PWD}:/app:rw \
		-w /app \
		node:22 bash -c "npm run build; chown ${DOCKER_UID}:${DOCKER_GID} -R ."

.PHONY: start-prod
start-prod: ## Запустить прод реализацию контейнеров
	@docker compose -f docker-compose.yaml up

.PHONY: start-prod-d
start-prod-d: ## Запустить прод реализацию контейнеров в фоновом режиме
	@docker compose -f docker-compose.prod.yaml up -d
.PHONY: tests
