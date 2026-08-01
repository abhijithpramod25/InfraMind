# Contributing to InfraMind

## Git workflow

Create a focused branch from `main`, open a pull request, and merge only after review and required checks pass. Keep each pull request scoped to one coherent change.

## Branch naming

Use `<type>/<short-description>`, for example `feature/service-health`, `fix/redis-timeout`, or `chore/upgrade-fastapi`.

## Commit convention

Use Conventional Commits: `feat:`, `fix:`, `docs:`, `refactor:`, `test:`, `chore:`, or `ci:`. Write imperative, concise subjects.

## Coding standards

- Keep boundaries explicit: HTTP concerns stay in API routes; business rules stay in the application/domain layers.
- TypeScript must pass strict type checking. Python must pass Ruff, Black, isort, and mypy.
- Do not hardcode configuration or credentials; use typed settings and documented environment variables.
- Add or update tests with behavior changes.
- Keep imports organized and avoid unrelated formatting changes.

## Project structure

Deployable code belongs in `apps/`; reusable cross-application contracts belong in `packages/`; container configuration belongs in `infra/docker/`. Each major directory includes a README with its scope.

## Pull request rules

Describe the problem, solution, testing performed, and any rollout or migration impact. Link related work, include screenshots for user interface changes, and ensure all local checks pass before requesting review.
