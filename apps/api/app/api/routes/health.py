from fastapi import APIRouter, status
from pydantic import BaseModel

from app.infrastructure.cache.redis_client import check_redis_connection
from app.infrastructure.database.session import check_database_connection

router = APIRouter()


class HealthResponse(BaseModel):
    status: str


@router.get("/health", response_model=HealthResponse, status_code=status.HTTP_200_OK)
async def health() -> HealthResponse:
    """Return process liveness without querying dependencies."""
    return HealthResponse(status="healthy")


@router.get("/health/ready", response_model=HealthResponse, status_code=status.HTTP_200_OK)
async def readiness() -> HealthResponse:
    """Confirm required backing services accept connections."""
    await check_database_connection()
    await check_redis_connection()
    return HealthResponse(status="healthy")
