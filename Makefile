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

.PHONY: start-prod
start-prod: ## Запустить прод реализацию контейнеров
	@docker compose -f docker-compose.yaml up

.PHONY: start-prod-d
start-prod-d: ## Запустить прод реализацию контейнеров в фоновом режиме
	@docker compose -f docker-compose.prod.yaml up -d
.PHONY: tests
