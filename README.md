# Zoo Demo

Public demo of a multilingual Zoo visitor guide.

Current scope is intentionally public-only. The admin panel, authentication, content CRUD, password reset, visual map editor, upload UI, QR export UI, publish/archive workflow, and all other backoffice features are deferred.

## Implemented demo flows

- Locale routes: `/ru`, `/ro`, `/en`
- Animal directory: `/ru/animals`, `/ro/animals`, `/en/animals`
- Animal detail pages: `/ru/animals/tiger`, `/ro/animals/tiger`, `/en/animals/tiger`
- QR redirect route: `/qr/tiger`, `/qr/red_panda`, `/qr/snow_leopard`
- Custom interactive map: `/ru/map`, `/ro/map`, `/en/map`
- News/events list and detail pages
- FAQ and visit planning page
- Demo ticket request modal without real payment processing

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3005/ru`.

## Demo boundary

This build is for a fast project demonstration. It uses local TypeScript data instead of PostgreSQL/Prisma runtime wiring so the public product can be shown quickly. The backend architecture remains documented in `BACKEND_SPECIFICATION.md`, but the current visible demo does not include the admin or database control surface.

See `DEMO_SCOPE.md` for the exact deferred list.
