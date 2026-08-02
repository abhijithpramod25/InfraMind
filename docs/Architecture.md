# Architecture

## Repository boundaries

`apps/web` and `apps/api` are deployable applications. `packages` contains future reusable components and contracts. `infra` contains runtime definitions. Applications may depend on packages; packages must never depend on applications.

## API boundaries

The FastAPI code is deliberately layered:

- `api/` owns HTTP routes, middleware, exception translation, and request schemas.
- `application/` owns use-case orchestration and reusable services.
- `domain/` is reserved for framework-independent business concepts.
- `infrastructure/` owns database, cache, and configuration adapters.
- `core/` contains cross-cutting concerns such as logging and request context.
- `utils/` contains small reusable helpers with no business policy.

## Request lifecycle

1. Request ID middleware accepts or creates `X-Request-ID` and stores it in request context.
2. The route delegates work to an application service.
3. Successful versioned responses use the standard API envelope.
4. Exception handlers translate known and unknown errors to safe standard envelopes.
5. The request ID is returned in the response header and body and added to structured logs.

## Versioning

New public API surface is mounted under `/api/v1`. Future versions are added as sibling routers, for example `/api/v2`, without modifying existing contracts. Legacy health paths remain as compatibility endpoints.
