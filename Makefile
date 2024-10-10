PROJECT_NAME := vue-micro-frontend

up:
	docker compose up -d

build:
	docker exec -it $(PROJECT_NAME) npm run build

rebuild:
	docker compose -p $(PROJECT_NAME) up --build --force-recreate -d

stop: ## stop container
	docker stop $(PROJECT_NAME)

exec-cli: ## allocate a pseudo TTY
	docker exec -it $(PROJECT_NAME) /bin/bash


