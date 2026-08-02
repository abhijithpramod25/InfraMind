# Development

## Configuration

Copy `.env.example` to `.env`; this local file is ignored by Git. Production requires a minimum 32-character `SECRET_KEY`, database credentials in `DATABASE_URL`, and HTTPS CORS origins. Use a secret manager in production rather than a committed environment file.

## Local stack

`docker compose up --build` starts web, API, PostgreSQL, and Redis. Named volumes preserve service data and frontend dependencies between restarts. `docker compose down` stops services without deleting data.

## Quality checks

Run `make lint` and `make test` before opening a pull request. CI applies backend linting, formatting, typing, tests, and frontend lint/type/build checks.

## Migrations

After persistence models exist, generate reviewed Alembic revisions from `apps/api`. Never mutate a schema manually in a deployed environment.

## Observability

Logs are structured JSON sent to stdout and include timestamp, level, request ID, module, and message. This format can be collected by Loki or another centralized log system without a logging-library replacement.
