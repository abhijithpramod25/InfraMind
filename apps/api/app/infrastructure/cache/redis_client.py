from redis.asyncio import Redis

from app.infrastructure.config.settings import get_settings

settings = get_settings()
redis_client = Redis.from_url(str(settings.redis_url), decode_responses=True)


async def check_redis_connection() -> None:
    await redis_client.ping()


async def close_redis_client() -> None:
    await redis_client.aclose()
