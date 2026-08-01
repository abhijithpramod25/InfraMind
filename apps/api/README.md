# API

FastAPI application structured for clean boundaries. Routes are transport adapters, `application` coordinates use cases, `domain` is framework-independent core code, and `infrastructure` provides external dependencies.

## Local commands

```bash
# From the repository root after copying .env.example to .env
pip install -r apps/api/requirements-dev.txt
uvicorn app.main:app --app-dir apps/api --reload
pytest apps/api/tests
```
