# InfraMind

Infrastructure Intelligence Powered by AI.

InfraMind is a cloud-native SaaS foundation for an eventual AI-powered SRE platform. This repository intentionally contains only the platform baseline: a web application, API, PostgreSQL, Redis, and development tooling.

## Architecture

The monorepo separates deployable applications from reusable packages and infrastructure. The FastAPI application follows a layered architecture (`api` -> `application` -> `domain` / `infrastructure`) so future integrations and services can be added without leaking transport or storage concerns into core business logic.

## Folder structure

```text
apps/       Deployable web and API applications
packages/   Reusable UI, shared utilities, and TypeScript contracts
infra/      Container and infrastructure configuration
docs/       Architecture and operational documentation
scripts/    Repository automation
```

## Technology stack

- Next.js, TypeScript, Tailwind CSS, TanStack Query, Zustand
- FastAPI, Pydantic Settings, SQLAlchemy 2, Alembic
- PostgreSQL and Redis
- Docker Compose for consistent local development

## Setup

1. Copy `.env.example` to `.env` and set development-only values.
2. Start all services:

   ```bash
   docker compose up --build
   ```

3. Open `http://localhost:3000`. API docs are at `http://localhost:8000/docs`.

The API liveness endpoint is `GET http://localhost:8000/health`. Dependency readiness is available at `GET http://localhost:8000/health/ready`.

## Development workflow

Install frontend dependencies with `pnpm install`, then use `pnpm dev`, `pnpm lint`, `pnpm format:check`, and `pnpm typecheck`. For the API, create a Python 3.13 virtual environment, install `apps/api/requirements-dev.txt`, and run `uvicorn app.main:app --reload` from `apps/api`.

Database schema changes must be created through Alembic migrations; there are deliberately no business models or migrations yet.

## Future roadmap

- Authentication and organization tenancy
- Observability data ingestion and integrations
- Deployment and incident correlation
- Kubernetes topology and infrastructure visualization
- AI-assisted incident investigation

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution requirements.
