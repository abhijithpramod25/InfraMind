.DEFAULT_GOAL := help

.PHONY: up down build logs test lint format help

up: ## Start the local development stack
	docker compose up --build

down: ## Stop local services
	docker compose down

build: ## Build application images
	docker compose build

logs: ## Follow service logs
	docker compose logs --follow

test: ## Run backend tests in the API container
	docker compose run --rm api pytest

lint: ## Run backend and frontend static checks
	docker compose run --rm api sh -c "ruff check . && black --check . && isort --check-only . && mypy app"
	pnpm lint && pnpm typecheck

format: ## Apply backend and frontend formatting
	docker compose run --rm api sh -c "black . && isort . && ruff check . --fix"
	pnpm format

help: ## Show available targets
	@grep -E '^[a-zA-Z_-]+:.*?## ' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "%-12s %s\n", $$1, $$2}'
