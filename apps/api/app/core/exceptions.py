from typing import Any


class ApplicationError(Exception):
    """Safe, expected API error with a client-facing message and status code."""

    def __init__(
        self,
        message: str,
        *,
        status_code: int = 400,
        errors: list[dict[str, Any]] | None = None,
    ) -> None:
        self.message = message
        self.status_code = status_code
        self.errors = errors or []
        super().__init__(message)
