import logging
from typing import Any

from fastapi import FastAPI, HTTPException, Request, status
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse
from redis.exceptions import RedisError
from sqlalchemy.exc import SQLAlchemyError

from app.core.exceptions import ApplicationError
from app.utils.responses import error_response

logger = logging.getLogger(__name__)


def _validation_errors(errors: list[dict[str, Any]]) -> list[dict[str, Any]]:
    return [
        {
            "field": ".".join(str(part) for part in error.get("loc", [])),
            "message": error.get("msg", "Invalid value"),
            "type": error.get("type", "validation_error"),
        }
        for error in errors
    ]


def register_exception_handlers(app: FastAPI) -> None:
    @app.exception_handler(RequestValidationError)
    async def validation_exception_handler(
        request: Request, exception: RequestValidationError
    ) -> JSONResponse:
        return error_response(
            request,
            "Request validation failed",
            errors=_validation_errors(exception.errors()),
            status_code=status.HTTP_422_UNPROCESSABLE_CONTENT,
        )

    @app.exception_handler(ApplicationError)
    async def application_exception_handler(
        request: Request, exception: ApplicationError
    ) -> JSONResponse:
        return error_response(
            request,
            exception.message,
            errors=exception.errors,
            status_code=exception.status_code,
        )

    @app.exception_handler(HTTPException)
    async def http_exception_handler(request: Request, exception: HTTPException) -> JSONResponse:
        detail = exception.detail if isinstance(exception.detail, str) else "Request failed"
        return error_response(request, detail, status_code=exception.status_code)

    @app.exception_handler(SQLAlchemyError)
    async def database_exception_handler(
        request: Request, exception: SQLAlchemyError
    ) -> JSONResponse:
        logger.exception("Database operation failed")
        return error_response(
            request,
            "A database dependency is unavailable",
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
        )

    @app.exception_handler(RedisError)
    async def redis_exception_handler(request: Request, exception: RedisError) -> JSONResponse:
        logger.exception("Redis operation failed")
        return error_response(
            request,
            "A cache dependency is unavailable",
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
        )

    @app.exception_handler(Exception)
    async def unhandled_exception_handler(request: Request, exception: Exception) -> JSONResponse:
        logger.exception("Unhandled request exception")
        return error_response(request, "An unexpected server error occurred")
