from typing import Any, Generic, TypeVar

from fastapi import Request, status
from fastapi.responses import JSONResponse
from pydantic import BaseModel, ConfigDict, Field

from app.utils.datetime import utc_now_isoformat
from app.utils.requests import get_request_id

DataT = TypeVar("DataT")


class SuccessResponse(BaseModel, Generic[DataT]):
    success: bool = True
    message: str
    data: DataT
    timestamp: str = Field(default_factory=utc_now_isoformat)
    request_id: str = Field(serialization_alias="requestId")

    model_config = ConfigDict(populate_by_name=True)


class ErrorResponse(BaseModel):
    success: bool = False
    message: str
    errors: list[dict[str, Any]] = Field(default_factory=list)
    request_id: str = Field(serialization_alias="requestId")
    timestamp: str = Field(default_factory=utc_now_isoformat)

    model_config = ConfigDict(populate_by_name=True)


def success_response(
    request: Request,
    data: DataT,
    message: str = "Request completed",
) -> SuccessResponse[DataT]:
    return SuccessResponse(message=message, data=data, request_id=get_request_id(request))


def error_response(
    request: Request,
    message: str,
    *,
    errors: list[dict[str, Any]] | None = None,
    status_code: int = status.HTTP_500_INTERNAL_SERVER_ERROR,
) -> JSONResponse:
    payload = ErrorResponse(
        message=message,
        errors=errors or [],
        request_id=get_request_id(request),
    )
    return JSONResponse(status_code=status_code, content=payload.model_dump(by_alias=True))
