from typing import Any, cast

from fastapi import APIRouter, Request, status
from pydantic import BaseModel

from app.application.services.health import HealthService
from app.core.constants import (
    API_V1_PREFIX,
    HEALTH_LEGACY_PATH,
    HEALTH_READINESS_PATH,
    STATUS_HEALTHY,
)
from app.core.exceptions import ApplicationError
from app.utils.responses import SuccessResponse, success_response

legacy_router = APIRouter()
router = APIRouter(prefix=API_V1_PREFIX)
health_service = HealthService()


class LegacyHealthResponse(BaseModel):
    status: str


@legacy_router.get(HEALTH_LEGACY_PATH, response_model=LegacyHealthResponse)
async def legacy_health() -> LegacyHealthResponse:
    """Compatibility liveness endpoint; use `/api/v1/health` for new clients."""
    return LegacyHealthResponse(**await health_service.liveness())


@legacy_router.get(HEALTH_READINESS_PATH, response_model=LegacyHealthResponse)
async def legacy_readiness() -> LegacyHealthResponse:
    """Compatibility readiness endpoint; use `/api/v1/health/ready` for new clients."""
    result = await health_service.readiness()
    return LegacyHealthResponse(status=str(result["status"]))


@router.get(
    "/health",
    response_model=SuccessResponse[dict[str, str]],
    status_code=status.HTTP_200_OK,
)
async def health(request: Request) -> SuccessResponse[dict[str, str]]:
    """Versioned liveness probe independent of backing services."""
    return success_response(request, await health_service.liveness(), "Service is live")


@router.get("/health/ready", response_model=SuccessResponse[dict[str, Any]])
async def readiness(request: Request) -> SuccessResponse[dict[str, Any]]:
    """Versioned readiness probe that reports dependency availability."""
    result = await health_service.readiness()
    if result["status"] != STATUS_HEALTHY:
        raise ApplicationError(
            "One or more required dependencies are unavailable",
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            errors=cast(list[dict[str, Any]], result["checks"]),
        )
    return success_response(request, result, "Service is ready")
