from functools import lru_cache
from typing import Literal

from pydantic import PostgresDsn, RedisDsn, SecretStr, field_validator, model_validator
from pydantic_settings import BaseSettings, SettingsConfigDict

from app.core.constants import DEFAULT_CORS_ORIGIN


class Settings(BaseSettings):
    app_name: str = "InfraMind API"
    app_env: Literal["development", "test", "staging", "production"] = "development"
    log_level: str = "INFO"
    database_url: PostgresDsn
    redis_url: RedisDsn
    cors_origins: tuple[str, ...] = (DEFAULT_CORS_ORIGIN,)
    secret_key: SecretStr | None = None

    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8", extra="ignore")

    @field_validator("cors_origins", mode="before")
    @classmethod
    def split_cors_origins(cls, value: str | tuple[str, ...]) -> tuple[str, ...]:
        if isinstance(value, str):
            return tuple(origin.strip() for origin in value.split(",") if origin.strip())
        return value

    @model_validator(mode="after")
    def validate_deployment_security(self) -> "Settings":
        database_authority = str(self.database_url).split("//", maxsplit=1)[-1].split(
            "/", maxsplit=1
        )[0]
        if "@" not in database_authority or ":" not in database_authority.split("@", maxsplit=1)[0]:
            raise ValueError("DATABASE_URL must include database credentials")
        if not self.cors_origins or "*" in self.cors_origins:
            raise ValueError("CORS_ORIGINS must contain explicit origins")
        if any(not origin.startswith(("http://", "https://")) for origin in self.cors_origins):
            raise ValueError("CORS_ORIGINS must contain valid HTTP(S) origins")
        if self.app_env == "production":
            secret_value = self.secret_key.get_secret_value() if self.secret_key else ""
            if len(secret_value) < 32:
                raise ValueError("SECRET_KEY must be at least 32 characters in production")
            if any(not origin.startswith("https://") for origin in self.cors_origins):
                raise ValueError("CORS_ORIGINS must use HTTPS in production")
        return self

    @property
    def is_development(self) -> bool:
        return self.app_env == "development"


@lru_cache
def get_settings() -> Settings:
    return Settings()
