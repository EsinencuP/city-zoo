# Project Instructions - Zoo

## Design System

Always read `DESIGN.md` before making visual or UI decisions.

All font choices, colors, spacing, motion, botanical decoration, and aesthetic direction are defined there. Do not deviate without explicit user approval.

## MVP Scope

This project is a public-facing MVP for Zoo. Do not implement or expose:

- admin panel;
- authentication;
- database CRUD;
- upload UI;
- visual map editor;
- QR export UI;
- payment processing;
- email delivery automation;
- backend/admin workflows.

## Frontend Coding Order

Before visual polish, follow `docs/FRONTEND_DESIGN_CODING_BRIEF.md`.

Priority order:

1. Fix corrupted RU/RO/EN text in public UI.
2. Replace one-off inline styling with design tokens and reusable components.
3. Preserve the Editorial Wildlife + Interactive Guide + Fresh Botanical direction.
4. Verify mobile, accessibility, lint, build, and key public routes.

