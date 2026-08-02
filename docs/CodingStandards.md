# Coding standards

- Use explicit types and meaningful full names. Avoid hidden mutable state.
- Keep HTTP concerns in `api`, integration details in `infrastructure`, and orchestration in `application`.
- Use API response builders and application errors; never return ad-hoc error payloads.
- Do not log secrets, authorization data, or raw user payloads.
- Prefer small, cohesive modules and dependency injection at application boundaries.
- New public endpoints must be versioned and documented.
- Use Ruff, Black, isort, mypy, ESLint, and Prettier; do not suppress errors without a documented reason.
