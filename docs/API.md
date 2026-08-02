# API conventions

## Versioning

All new endpoints are versioned under `/api/v1`. Do not introduce unversioned public API endpoints.

## Successful responses

```json
{
  "success": true,
  "message": "Service is live",
  "data": {},
  "timestamp": "2026-08-02T00:00:00+00:00",
  "requestId": "uuid"
}
```

## Error responses

```json
{
  "success": false,
  "message": "Request validation failed",
  "errors": [],
  "requestId": "uuid",
  "timestamp": "2026-08-02T00:00:00+00:00"
}
```

Send an `X-Request-ID` header to propagate an upstream correlation ID, or allow InfraMind to generate one. The same ID is always returned in the response header.

Legacy `/health` and `/health/ready` retain their original response shape for compatibility. New consumers must use `/api/v1/health` endpoints.
