# Demo Scope Boundary

## Current Demo Scope

The current build is a public visitor-facing demo. It is meant to show the working user journey in a compressed timeframe:

- multilingual public site in RU / RO / EN;
- direct locale paths instead of hash-only navigation;
- animal directory and animal detail pages;
- neutral QR route `/qr/{animalSlug}` that redirects to the localized animal card;
- custom read-only zoo map with clickable public markers;
- news, events, FAQ, visit information, and ticket tariff demo;
- demo ticket request flow without real payment, email, or backend ticket issuing.

## Deferred Admin Scope

The following items are intentionally excluded from this demo and must not be treated as current acceptance criteria:

- `/admin` area;
- login, logout, sessions, password reset, and email auth;
- roles, permissions, and operator access control;
- admin CRUD for animals, biomes, news, events, tickets, FAQ, homepage, contacts, or map;
- draft / published / archived management UI;
- visual map editor;
- media upload UI and media library;
- QR preview, QR PNG/SVG download, and print tools;
- confirmation dialogs for admin actions;
- Prisma migrations and PostgreSQL runtime connection in the visible demo;
- production backup and restore workflows.

## Implementation Note

The public demo can still keep architecture-ready naming and route behavior, but all admin-related implementation belongs to a later phase after the public demonstration is approved.
