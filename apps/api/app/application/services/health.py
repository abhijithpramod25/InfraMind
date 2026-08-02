from dataclasses import asdict, dataclass
from typing import Awaitable, Callable

from app.application.services.base import BaseService
from app.core.constants import STATUS_DEGRADED, STATUS_HEALTHY
from app.infrastructure.cache.redis_client import check_redis_connection
from app.infrastructure.database.session import check_database_connection


@dataclass(frozen=True)
class DependencyCheck:
    name: str
    status: str


class HealthService(BaseService):
    """Reusable dependency health coordinator for current and future checks."""

    async def liveness(self) -> dict[str, str]:
        return {"status": STATUS_HEALTHY}

    async def readiness(self) -> dict[str, object]:
        checks = await self._run_checks(
            {"database": check_database_connection, "redis": check_redis_connection}
        )
        is_ready = all(check.status == STATUS_HEALTHY for check in checks)
        return {
            "status": STATUS_HEALTHY if is_ready else STATUS_DEGRADED,
            "checks": [asdict(check) for check in checks],
        }

    async def _run_checks(
        self,
        checks: dict[str, Callable[[], Awaitable[None]]],
    ) -> list[DependencyCheck]:
        results: list[DependencyCheck] = []
        for name, check in checks.items():
            try:
                await check()
                results.append(DependencyCheck(name=name, status=STATUS_HEALTHY))
            except Exception:
                self.logger.exception("Health dependency check failed", extra={"dependency": name})
                results.append(DependencyCheck(name=name, status=STATUS_DEGRADED))
        return results
