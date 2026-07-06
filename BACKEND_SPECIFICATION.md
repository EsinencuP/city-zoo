# SYSTEM SPECIFICATION: CHISINAU ZOO PORTAL DEMO
## Backend, Data Models, API Architecture & QR Scanning Flow

### 1. High-Level Architecture
This specification outlines the technical design for the **Chisinau Zoo & Botanical Portal** demo. It establishes a robust, highly performant, server-assisted stack designed for near-instant rendering, offline-ready layout configurations, and localized metadata.

- **Frontend Core**: React 19, TypeScript 5.8+, Vite 6+
- **Styling Architecture**: Tailwind CSS 4.0 (pure inline utility classes, custom botanical theme color palette)
- **Database Engine & ORM**: PostgreSQL, Prisma ORM, utilizing Scale-to-Zero serverless endpoints
- **Multilingual Support**: Fully localized routing structure preserving state segment variables (`/[locale]/...`) supporting **RU**, **RO**, and **EN**.

---

### 2. Entity Relationship & Data Schema
The database architecture uses a normalized relational model. The tables represent animals, botanical species, feeding routines, security zones, and interactive map coordinate markers.

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

enum ProtectionStatus {
  LEAST_CONCERN
  NEAR_THREATENED
  VULNERABLE
  ENDANGERED
  CRITICALLY_ENDANGERED
  EXTINCT_IN_THE_WILD
}

model Biome {
  id          String   @id @default(uuid())
  slug        String   @unique
  name_ru     String
  name_ro     String
  name_en     String
  colorClass  String
  animals     Animal[]
  createdAt   DateTime @default(now())
}

model Animal {
  id               String            @id @default(uuid())
  slug             String            @unique
  name_ru          String
  name_ro          String
  name_en          String
  latinName        String
  shortFact_ru     String
  shortFact_ro     String
  shortFact_en     String
  description_ru   String            @db.Text
  description_ro   String            @db.Text
  description_en   String            @db.Text
  warning_ru       String            @db.Text
  warning_ro       String            @db.Text
  warning_en       String            @db.Text
  range_ru         String
  range_ro         String
  range_en         String
  feedingTime_ru   String
  feedingTime_ro   String
  feedingTime_en   String
  mapX             Float             // percentage coordinate on layout map
  mapY             Float             // percentage coordinate on layout map
  status           ProtectionStatus  @default(LEAST_CONCERN)
  biomeId          String
  biome            Biome             @relation(fields: [biomeId], references: [id])
  feedingSchedules FeedingSchedule[]
  createdAt        DateTime          @default(now())
}

model FeedingSchedule {
  id          String   @id @default(uuid())
  animalId    String
  animal      Animal   @relation(fields: [animalId], references: [id])
  timeOfDay   String   // e.g. "11:30"
  notes_ru    String?
  notes_ro    String?
  notes_en    String?
  isActive    Boolean  @default(true)
}

model MapMarker {
  id          String   @id @default(uuid())
  markerType  String   // 'animal' | 'entry' | 'cafe' | 'kids' | 'first_aid'
  name_ru     String
  name_ro     String
  name_en     String
  mapX         Float
  mapY         Float
  refId       String?  // References Animal.slug or other resource id if applicable
}
```

---

### 3. API Contract Specifications

All API endpoints reside under the `/api/v1` namespace. They accept and respond with `application/json`.

#### 3.1 Get All Animals Directory
- **Endpoint**: `GET /api/v1/animals`
- **Query Params**:
  - `lang`: `ru` | `ro` | `en` (default: `ru`)
  - `biome`: string (optional, filters by biome slug)
- **Response Payload (200 OK)**:
```json
[
  {
    "id": "tiger",
    "name": "Амурский тигр",
    "latinName": "Panthera tigris altaica",
    "biome": "Сибирская тайга",
    "biomeColor": "bg-amber-100 text-amber-800 border-amber-200",
    "shortFact": "Крупнейший подвид тигра в мире, приспособленный к холодам.",
    "feedingTime": "11:30",
    "mapCoordinates": { "x": 62, "y": 28 }
  }
]
```

#### 3.2 Get Specific Animal Profile
- **Endpoint**: `GET /api/v1/animals/:slug`
- **Response Payload (200 OK)**:
```json
{
  "id": "tiger",
  "name": "Амурский тигр",
  "latinName": "Panthera tigris altaica",
  "biome": "Сибирская тайга",
  "shortFact": "Крупнейший подвид тигра в мире...",
  "description": "Населяет густые леса Дальнего Востока...",
  "warning": "Приближаться к вольеру во время уборочных работ строго запрещено.",
  "feedingTime": "Ежедневно в 11:30",
  "range": "Амурская область, Приморский край",
  "mapCoordinates": { "x": 62, "y": 28 }
}
```

---

### 4. Interactive QR Scanning Flow Specification

To deliver an elite physical-to-digital guide experience, Chisinau Zoo integrates QR-Codes directly onto the enclosure plaques. When visitors scan these codes, the system processes the transition without forcing application re-installation or sign-up.

#### Step-by-Step Flow:
1. **Physical Tag Scanned**: Visitor scans the sticker with their phone's native camera.
2. **URL Payload**: The QR code encodes a secure URL target containing deep link metadata:
   `https://zoo.chisinau.md/en/animals?qr=tiger` or `https://zoo.chisinau.md/ro/animals?qr=snow_leopard`
3. **Deep Link Parsing**: The portal parses the URL search parameters inside `App.tsx` or `Router.tsx`.
4. **Instant View Transition**: The application routes directly to the `/animals` section, automatically scrolls to the specific card, highlights it with an ambient green pulse, and triggers the dedicated modal/page profile immediately.
5. **No Auth Block**: The profile is 100% public to guarantee instant loading even under low cellular reception inside the park.
