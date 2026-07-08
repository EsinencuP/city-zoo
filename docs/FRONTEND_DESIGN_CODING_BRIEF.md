# Frontend Design Coding Brief - Zoo

## Purpose

This document converts the UI/UX design brief into coding-ready frontend tasks for the current `city zoo` project.

Use it before writing UI code. The goal is not to invent a new direction; the direction is fixed:

**Editorial Wildlife + Interactive Guide + Fresh Botanical**

## Current Project Reality

- Stack: Vite + React + TypeScript + Tailwind CSS v4 + Motion.
- Public routes are implemented for RU/RO/EN.
- The project is an MVP/demo public site.
- Admin panel and all backoffice features are explicitly out of scope.
- Existing redesign foundation is partially present:
  - `src/index.css` has botanical tokens.
  - `src/lib/motion.ts` exists.
  - reusable UI components exist under `src/components/ui`.
  - botanical decoration components exist under `src/components/decorative`.
  - home hero and featured animals already follow most of the target style.

## Release Blockers Before Client Demo

### 1. Fix Corrupted Text In Public UI

Several visible public components still contain corrupted RU/RO strings and must be corrected before any demo:

- `src/pages/AnimalsList.tsx`
- `src/components/MapSection.tsx`

Coding rule:

- Move repeated text into `src/data/translations.ts` where possible.
- Keep RU/RO/EN clean.
- Run a mojibake scan after edits using the same pattern list already used in project QA, but do not leave corrupted examples in user-facing docs.

### 2. Replace Remaining One-Off Inline Styling

High-priority files still use many raw hex classes:

- `src/pages/AnimalsList.tsx`
- `src/components/MapSection.tsx`

Required cleanup:

- Replace raw hex classes with existing tokens:
  - `canopy`
  - `leaf`
  - `cream`
  - `mint`
  - `moss`
  - `terracotta`
  - `terracotta-deep`
- Use `soft-card`, `botanical-map-grid`, `editorial-heading`, and component primitives instead of repeated arbitrary class clusters.

## Page-Level Coding Tasks

### Home Page

Relevant files:

- `src/pages/Home.tsx`
- `src/components/Hero.tsx`
- `src/components/QuickInfo.tsx`
- `src/components/FeaturedAnimals.tsx`
- `src/components/MapSection.tsx`
- `src/components/NewsSection.tsx`
- `src/components/TrustSection.tsx`

Status:

- Hero already has editorial typography, terracotta CTA, organic shape, floating leaves, image reveal, and quick facts.
- Featured animals already use editorial cards and local images.
- Map section still needs text cleanup and token cleanup.

Required refinements:

- Ensure every section has a distinct rhythm, not the same card grid repeated.
- Keep botanical decoration subtle and non-overlapping on mobile.
- Ensure hero badge/copy is localized or intentionally neutral.
- Confirm CTA labels remain practical: ticket, map, plan visit.

### Animals List

Relevant file:

- `src/pages/AnimalsList.tsx`

Problem:

- Text is corrupted.
- The page uses inline SVG thumbnails instead of the existing local animal image system.
- It has hardcoded hex styles and older visual structure.

Required redesign:

- Use `animalImages` from `src/data/animalImages.ts`.
- Reuse the same editorial animal card anatomy as `FeaturedAnimals`.
- Keep search if already implemented, but do not add new complex filtering beyond current simple biome/search behavior.
- Remove all corrupted strings.
- Use botanical page header with `SectionShell` or matching container pattern.
- Use real card photos, biome badge, Latin name, short fact, feeding cue, CTA.
- On mobile, cards should stack and not rely on hover-only content.

Acceptance:

- `/ru/animals`, `/ro/animals`, `/en/animals` show clean text.
- No placeholder thumbnail SVGs where animal images are available.
- Cards visually match the home editorial system.

### Animal Detail / QR Page

Relevant file:

- `src/pages/AnimalDetail.tsx`

Status:

- Good foundation for mobile-first QR page.
- Uses local animal images and motion.
- Includes image, title, Latin name, biome, description, warning, feeding, range.

Required refinements:

- Localize visible fixed labels like `QR active` if the client will see this page.
- Gallery currently repeats the same image three times. For MVP this is acceptable only if presented as visual placeholders; better to show one strong image unless final photo set exists.
- Add accessible labels for tabs and back button if missing after QA.
- Confirm QR route smoke test after edits.

Acceptance:

- `/qr/tiger` redirects/opens correctly.
- Page is readable on mobile width.
- No demo/admin wording.
- No broken images.

### Interactive Map

Relevant file:

- `src/components/MapSection.tsx`

Problem:

- Infrastructure marker text is corrupted.
- Marker type names do not fully match the final brief naming:
  - current: `entry`, `cafe`, `kids`, `first_aid`
  - target meaning: entrance/exit, food, playground, medical help
- Map popup is desktop side-panel style; acceptable for MVP, but mobile usability must be checked.

Required cleanup:

- Fix all RU/RO strings.
- Add `aria-label` to marker buttons.
- Add `type="button"` to buttons where relevant.
- Keep pulse only for active/hover/focus.
- Do not add routes or filters.
- Consider mobile bottom-sheet behavior only if quick to implement safely; otherwise ensure the current panel appears immediately below the map.

Acceptance:

- Marker names and popups are readable in RU/RO/EN.
- Clicking animal marker opens a clear mini-card with CTA.
- Infrastructure marker popups show short practical descriptions.
- No constant noisy animation.

### Header And Navigation

Relevant file:

- `src/components/Header.tsx`

Required checks:

- Brand must say `Zoo`.
- RU/RO/EN switcher must remain visible.
- Ticket CTA must remain visible on desktop and accessible in mobile menu.
- Mobile menu motion should be smooth and not hide content permanently.

### Ticket Modal

Relevant file:

- `src/components/TicketModal.tsx`

Demo rule:

- The public client-facing text should not say "demo" or imply incomplete backend if avoidable.
- Since real payment is not implemented, phrase it as preliminary request / reservation interest, not a paid checkout.

Required check:

- No real payment promise.
- No admin/backoffice wording.
- No email automation promise.

## Component Rules For Implementation

### Use Existing Primitives

Prefer:

- `Button`
- `Card`
- `Badge`
- `Container`
- `SectionShell`
- `MotionSection`
- `StaggeredList`
- `AnimatedImage`
- `BotanicalPattern`
- `FloatingLeaves`
- `LeafCorner`
- `OrganicShape`
- `SectionBotanicalDivider`

Avoid:

- Writing large one-off JSX layout directly inside pages.
- Random arbitrary colors in every component.
- Repeating card anatomy with slight differences.

### Motion Rules

Use variants from:

- `src/lib/motion.ts`

Required patterns for MVP:

- Hero image reveal.
- Hero text reveal.
- Floating leaves.
- Organic shape drift.
- Section reveal.
- Staggered cards.
- Animal card hover.
- CTA microinteraction.
- Map marker active pulse.
- Map popup transition.
- Mobile menu transition.

Do not add:

- GSAP unless absolutely necessary.
- WebGL/Three.js.
- Autoplay carousel.
- Particle background.
- 3D tilt.

## Exact Coding Order

### Phase 1 - Public Demo Safety

1. Fix all corrupted strings in `AnimalsList.tsx`.
2. Fix all corrupted strings in `MapSection.tsx`.
3. Scan `src` for encoding artifacts.
4. Remove or rephrase any public "demo" wording visible to customer.
5. Confirm `Zoo` naming and Chisinau contact data remain intact.

### Phase 2 - Visual System Consistency

1. Refactor `AnimalsList.tsx` to use `animalImages` and editorial card styling.
2. Refactor `MapSection.tsx` to use design tokens instead of raw hex classes.
3. Localize fixed labels in `Hero.tsx` and `AnimalDetail.tsx` if still English-only.
4. Ensure `SectionShell`, `Container`, `Button`, and `Badge` are used consistently.

### Phase 3 - Mobile And Accessibility QA

1. Check `/ru`, `/ro`, `/en`.
2. Check `/ru/animals`, `/ro/animals`, `/en/animals`.
3. Check `/ru/animals/tiger` and `/qr/tiger`.
4. Check `/ru/map`.
5. Verify keyboard focus for header, buttons, tabs, and map markers.
6. Verify no decoration overlaps text at mobile width.

### Phase 4 - Build Verification

1. Run `npm.cmd run lint`.
2. Run `npm.cmd run build`.
3. Smoke-test key routes on `http://localhost:3005`.

## Do Not Implement In This MVP

- Admin panel.
- Authentication.
- Database CRUD.
- Upload UI.
- Visual map editor.
- QR export UI.
- Payment processing.
- Email delivery automation.
- Map routes.
- Map filters.
- Animal videos.
- Animal sounds.
- Mini quizzes.
- Kids mode.
- Nearby animals.
- Separate feeding schedule page.
- Heavy conservation storytelling module.
- WebGL hero.
- 3D galleries.
- E-commerce behavior for animals.

## Definition Of Done

- Public UI is clean in RU/RO/EN.
- No corrupted encoding artifacts remain in `src`.
- Main page visibly matches Fresh Botanical.
- Animals list visually matches editorial animal cards.
- Map text and popups are clean and useful.
- QR animal pages work on mobile.
- Terracotta CTA is the dominant conversion color.
- Backend/admin scope remains untouched.
- Lint and build pass.
