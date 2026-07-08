# Design System - Zoo

## Product Context

- **What this is:** public MVP website for Zoo, a city zoo visitor guide for Chisinau.
- **Who it is for:** families, tourists, school groups, repeat visitors, and people scanning QR codes near animal enclosures.
- **Project type:** multilingual public website and mobile-first visitor guide.
- **Languages:** RU, RO, EN must stay visible and functional.
- **Demo boundary:** public-facing MVP only. Admin panel, auth, content CRUD, uploads, map editor, QR export UI, payments, and email automation are deferred.

## Memorable Thing

The first impression must be: **Zoo feels like a living botanical visitor guide, not a municipal template and not an e-commerce catalog.**

Every design decision should support that: real animals first, practical visit actions second, botanical atmosphere throughout.

## Aesthetic Direction

- **Direction:** Editorial Wildlife + Interactive Guide + Fresh Botanical.
- **Decoration level:** intentional to expressive, but controlled.
- **Mood:** fresh garden air, documentary animals, editorial rhythm, soft city-park warmth.
- **Reference synthesis:** Taronga clarity, Mandai practicality, Beauval emotion, without copying their visual identity.

## Safe Choices

- **Visitor-first navigation:** tickets, map, animals, visit planning, contacts must be reachable quickly because zoo visitors come with practical tasks.
- **Realistic animal imagery:** documentary visuals make the project credible and avoid cartoon/children-only framing.
- **Mobile-first QR pages:** animal pages must load quickly and read well with one hand because QR scanning happens inside the zoo.

## Creative Risks

- **Editorial asymmetry:** sections should use overlap, offset cards, and varied grid rhythm instead of repeated equal cards. This creates a memorable magazine feel, but requires stricter QA on mobile.
- **Botanical decoration system:** leaf patterns, organic shapes, and soft dividers give the site a signature. The cost is that opacity and density must be tightly controlled so decoration never competes with content.
- **Terracotta CTA over green UI:** the primary action should not be another green button. Terracotta separates conversion actions from botanical surfaces and improves hierarchy.

## Typography

- **Display/Hero:** Fraunces. Use for H1, H2, editorial card titles, and large animal names.
- **Body/UI:** IBM Plex Sans. Use for body text, buttons, forms, navigation, map popups, and long copy.
- **Data/Labels:** JetBrains Mono. Use sparingly for badges, quick facts, coordinates, hours, feeding time, and small labels.
- **Do not use:** Inter, Roboto, Arial, Helvetica, Montserrat, Poppins, playful/cartoon fonts, or decorative novelty fonts as the main identity.

### Type Scale

- **Hero H1:** `clamp(3rem, 9vw, 7.25rem)`, line-height `0.9`, tight letter spacing.
- **Page H1:** `clamp(2.75rem, 6vw, 5.5rem)`, line-height `0.95`.
- **Section H2:** `clamp(2rem, 4vw, 4rem)`, line-height `1`.
- **Card title:** `1.5rem-2rem`, line-height `1.05`.
- **Body:** `1rem-1.125rem`, line-height `1.65-1.8`.
- **Labels:** `10px-12px`, uppercase, mono, letter spacing `0.14em-0.22em`.

## Color System

The palette must feel fresh botanical, not dark forest, acidic lime, corporate gray, or luxury resort.

| Role | Token | Hex | Usage |
|---|---:|---:|---|
| Base background | `cream` | `#fbf4e8` | page base, cards, warm sections |
| Secondary background | `cream-2` | `#f3ead8` | alternating sections |
| Fresh surface | `mint` | `#e4f0dd` | quick actions, map canvas, badges |
| Soft mint | `mint-soft` | `#eef7ea` | subtle botanical panels |
| Botanical primary | `leaf` | `#789c61` | icons, secondary accents, quiet UI |
| Deep text | `canopy` | `#253721` | primary text, dark surfaces |
| Muted text | `moss` | `#5f715a` | body support text |
| Soft green-gray | `sage` | `#a9b99c` | dividers, secondary UI |
| Primary CTA | `terracotta` | `#d87949` | buy ticket, main conversion |
| CTA hover | `terracotta-deep` | `#bd663d` | primary CTA hover |
| Warm decorative | `clay` | `#e8b596` | small decorative highlights |
| Water accent | `water` | `#cfe1df` | map water, calm zones |

### Color Rules

- Primary CTA must be terracotta, not green.
- Secondary CTA should be green outline/ghost or neutral botanical.
- Do not hardcode random green shades inside JSX when a token exists.
- Use biome colors only as small badges or section accents, not full-page themes.
- Avoid generic AI gradients; gradients must look like light, air, garden, or natural depth.

## Layout

- **Approach:** creative-editorial for public pages, grid-disciplined inside cards/forms.
- **Desktop grid:** 12-column mental model, central max width around `1200px`.
- **Mobile:** one-column priority, with CTA and quick facts visible early.
- **Section rhythm:** alternate practical sections with emotional/editorial sections.
- **Hero:** asymmetric photo/text composition, organic shape behind image, floating quick fact card, no carousel.
- **Cards:** consistent anatomy per family, but vary section composition so the site does not become a repeated product grid.

## Spacing

- **Base unit:** 4px.
- **Density:** medium-comfortable.
- **Section spacing:** `64px-96px` desktop, `48px-64px` mobile.
- **Card padding:** `24px-32px`.
- **Card gap:** `24px-32px`.
- **Hero spacing:** compact enough that visitor actions appear quickly on mobile.

## Radius And Shadows

- **Outer radius:** `32px-44px` for hero media, major cards, map frame.
- **Inner radius:** `20px-28px` for cards and panels.
- **Button radius:** `999px`.
- **Shadow:** soft botanical shadow, never harsh black UI shadow.
- **Image outline:** subtle inner outline is allowed to prevent washed-out SVG/photo edges.

## Motion

- **Approach:** intentional, soft, natural, accessible.
- **Durations:** micro `120-180ms`, short `200-280ms`, medium `450-700ms`, decorative drift `6-12s`.
- **Easing:** use smooth ease-out for entry, ease-in-out for movement.
- **Required reusable variants:** `fadeUp`, `fadeIn`, `scaleIn`, `staggerContainer`, `staggerItem`, `imageReveal`, `cardHover`, `softFloat`, `popupMotion`, `markerPulse`, `botanicalDrift`.
- **Reduced motion:** all decorative and non-critical animation must simplify under `prefers-reduced-motion`.

## Botanical Decoration

Use decoration as a system, not one-off blobs.

- **BotanicalPattern:** low opacity section texture.
- **LeafCorner:** corners of hero, featured animals, map teaser, trust.
- **OrganicShape:** behind hero image and key editorial visuals.
- **FloatingLeaves:** 2-4 leaves on desktop, fewer or hidden on mobile.
- **SectionBotanicalDivider:** soft separators between major rhythm changes.

Rules:

- Decoration must never cover text.
- No cartoon animals, paw-print overload, jungle chaos, sparkles, cyber gradients, or dense patterns.
- SVG/CSS decoration is preferred over heavy image assets.

## Component Direction

### Header

- Floating/soft header is allowed.
- Must include Zoo brand, nav, RU/RO/EN switcher, ticket CTA, and mobile menu.
- Sticky behavior is useful, but should not steal too much mobile height.

### Buttons

- Primary: terracotta fill, cream text, small lift on hover, active scale `0.98`, visible focus ring.
- Secondary: green outline or pale botanical fill.
- Tertiary: text link with small arrow motion.

### Hero

- Real animal visual is the anchor.
- H1 must be short, large, and editorial.
- Primary CTA: buy ticket.
- Secondary CTA: open map or plan visit.
- Include quick facts: hours, address, ticket info, map.

### Animal Cards

- Must not feel like e-commerce product cards.
- Required anatomy: photo, biome badge, name, Latin name, short fact, feeding/visit cue, CTA.
- Hover: card lift, image scale max `1.03`, deeper soft shadow.

### Animal QR Page

- Mobile-first.
- Required: main image, name, Latin name, biome badge, description, gallery up to 5, feeding, range, warning, practical scan context.
- Avoid quizzes, sound, video, nearby animals, and long encyclopedia blocks for MVP.

### Map

- Custom internal map via SVG/image-map style.
- Marker types: animal, entrance/exit, food, playground, medical help.
- No routes and no filters for MVP.
- Marker pulse only on hover/focus/active.
- Mobile popup should behave like a usable card/bottom-sheet, not tiny desktop tooltip.

## Accessibility

- Semantic headings and sections.
- Keyboard-visible focus states.
- Map markers should be buttons with accessible labels.
- Popups must be closable.
- Do not hide essential content behind hover-only interactions.
- Contrast must pass for text, CTA, labels, and map markers.

## Performance

- No WebGL, Three.js, background video, heavy carousel, particle storm, or decorative image bloat.
- Lazy-load below-fold images.
- Keep QR pages fast on mobile internet.
- Prefer local optimized assets or SVG placeholders until final real photos are supplied.

## Implementation Guardrails

- Do not change backend, database, API, Prisma, auth, admin, or business logic unless explicitly requested.
- Do not add new functionality outside the public MVP scope.
- Do not expose admin-panel language or demo/internal wording in public UI shown to the client.
- Keep all text clean in RU/RO/EN; any mojibake is a release blocker.

## QA Checklist

- First viewport is understandable in 5 seconds.
- CTA is clearly terracotta and visible.
- Main page has botanical patterns and organic shapes.
- Animal cards read as editorial wildlife cards, not shop products.
- Map is calm, usable, and not blinking constantly.
- QR animal page is fast and usable on mobile.
- RU/RO/EN text is readable and not corrupted.
- Mobile layout has no decorative overlap on text.
- Backend/admin scope remains untouched.

