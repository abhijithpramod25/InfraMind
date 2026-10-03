# Frontend platform shell

The web application is organized around a stable `PlatformShell`: responsive navigation, workspace selection, search commands, notifications, profile controls, breadcrumbs, and a shared content region.

Feature pages are defined through App Router segments and share common headers, empty states, loading skeletons, and status indicators. Future feature modules should own their API adapters and local UI in `apps/web/src/features`, while consuming primitives from `components/ui` and navigation contracts from `constants`.

The persisted Zustand store owns only browser preferences: theme, sidebar state, and selected workspace. Server data must remain in typed service adapters and TanStack Query when integration begins.
