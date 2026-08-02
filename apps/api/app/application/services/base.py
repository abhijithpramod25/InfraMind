import logging


class BaseService:
    """Common service base with a module-scoped structured logger."""

    @property
    def logger(self) -> logging.Logger:
        return logging.getLogger(f"{self.__class__.__module__}.{self.__class__.__name__}")
