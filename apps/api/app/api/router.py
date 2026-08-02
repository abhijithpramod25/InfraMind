from fastapi import APIRouter

from app.api.routes.health import legacy_router, router as health_router

api_router = APIRouter()
api_router.include_router(legacy_router, tags=["health"])
api_router.include_router(health_router, tags=["health"])
