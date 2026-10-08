# Photography & Asset Art Direction Plan

**Project**: Dr. Maya Reynolds, PsyD Practice Website  
**Principle**: Intentional, unified photographic world. Avoid generic corporate stock photos (no fake handshakes, no cheesy clinical doctor coats).

---

## 1. Photographic Style Guidelines
- **Lighting**: Warm, diffused morning daylight; natural golden hour tones.
- **Color Temperature**: Earthy, organic (warm greens, creams, sandy terracotta).
- **Subject Matter**: Grounded therapy spaces, serene coastal atmosphere, organic plants, thoughtful human moments.
- **Compression & Formats**: WebP/JPEG optimized with Next.js image optimization (`next/image`) with responsive `sizes` attributes and descriptive alt tags.

---

## 2. Asset Catalog & Section Allocation

| Section | Image File | Source | Purpose & Art Direction | Alt Text |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Frame** | `public/images/hero-calm.jpg` | Curated Unsplash | Coastal Santa Monica sunrise with peaceful shoreline. Immediately communicates calmness and nervous system regulation. | *"Peaceful coastal sunlight representing calm and grounded therapy in Santa Monica"* |
| **How We Work** | `public/images/service-anxiety.jpg` | Curated Unsplash | Natural daylight, warm wood, and quiet reflection. Sets the scene for clinical depth and practical CBT/EMDR work. | *"A tranquil, sunlit therapy office space promoting calm and grounded reflection in Santa Monica"* |
| **Specialty 1: Anxiety** | `public/images/service-anxiety.jpg` | Curated Unsplash | Quiet, comfortable interior promoting breath and nervous system stabilization. | *"Calm room with natural lighting and plants representing peaceful mental space"* |
| **Specialty 2: Trauma** | `public/images/service-trauma.jpg` | Curated Unsplash | Grounded, rooted lone tree in serene still water, symbolizing emotional resilience and solid grounding. | *"Grounded quiet therapy chair with soft blanket in Santa Monica"* |
| **Specialty 3: Burnout** | `public/images/service-burnout.jpg` | Curated Unsplash | Meditative sunrise contemplation, symbolizing sustainable pacing, mindfulness, and relief from overwork. | *"Sunlit desk and peaceful notebook representing balance for busy professionals"* |
| **About Section** | `public/images/maya-reynolds.png` | **Official Google Drive Folder** (`Dr. Maya Reynolds.png`) | Authentic portrait of Dr. Maya Reynolds, PsyD. Warm, approachable, thoughtful, and professional. Establishes deep clinical trust. | *"Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist in Santa Monica, CA"* |
| **Our Office (Primary)** | `public/images/office-1.jpg` | **Official Google Drive Folder** (`office1.jpeg`) | Actual consultation space at 123th Street 45 W with sofa, armchair, coffee table, and large window daylight. | *"Main therapy seating area with comfortable armchairs and soft natural lighting in Santa Monica office"* |
| **Our Office (Secondary 1)** | `public/images/office-2.jpg` | **Official Google Drive Folder** (`office2.jpeg`) | Second view of office with bookshelves, gentle decor, and private setting. | *"Serene secondary angle of Dr. Maya Reynolds Santa Monica counseling office"* |
| **Our Office (Secondary 2)** | `public/images/office-3.jpg` | Curated Aesthetic Interior | Uncluttered wooden interior with soft armchair and plant life matching the profile description. | *"Warm wooden interior details with green plant life and calming books"* |

---

## 3. Image Optimization & SEO Checklist
- [x] All images hosted locally in `public/images/` for zero third-party latency.
- [x] Every image element uses `next/image` with `sizes`, `priority` (for hero), and `quality={80+}`.
- [x] Every image contains rich, keyword-aware alt text tailored to Santa Monica therapy.
- [x] Aspect ratios are fixed with CSS `aspect-[*]` containers to prevent Cumulative Layout Shift (CLS = 0).
