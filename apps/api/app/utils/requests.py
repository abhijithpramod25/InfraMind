from fastapi import Request

from app.core.constants import REQUEST_ID_HEADER


def get_request_id(request: Request) -> str:
    """Read the correlation identifier assigned by request middleware."""
    return getattr(request.state, "request_id", request.headers.get(REQUEST_ID_HEADER, "-"))
