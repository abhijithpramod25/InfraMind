# Web application

The Next.js App Router frontend provides InfraMind's platform shell. It is intentionally disconnected from backend systems and uses only meaningful empty states and placeholder presentation copy.

## Structure

- `app/` defines App Router pages and layouts.
- `components/platform/` provides the shell: sidebar, topbar, and command palette.
- `components/ui/` contains reusable presentation primitives.
- `components/shared/` provides cross-page elements such as headers and error boundaries.
- `constants/`, `types/`, `hooks/`, `stores/`, and `services/` contain reusable contracts and behavior.
- `features/` is reserved for independently owned future capabilities.

## State and theme

Zustand persists the selected theme, workspace label, and sidebar preference in browser storage. The dark theme is the default; the topbar switcher applies the light theme without a reload.

## Extensibility

All new pages should use the platform layout, shared `PageHeader`, response-independent feature modules, and typed service adapters. Replace placeholder services with API clients at the feature boundary rather than embedding data access in route components.
