from datetime import UTC, datetime


def utc_now_isoformat() -> str:
    """Return an RFC 3339-compatible UTC timestamp."""
    return datetime.now(UTC).isoformat()
