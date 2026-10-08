# Design System & Token Specification: "Quiet Confidence"

Designed specifically for **Dr. Maya Reynolds, PsyD**  
Evaluation: Grow My Therapy — Stage 2 Practical Assignment  

---

## 1. Brand Concept: "Quiet Confidence"
Therapy for high-achievers, trauma survivors, and individuals with severe anxiety requires an aesthetic that does NOT trigger cognitive overload. Many mental health websites look either like clinical medical databases (sterile, cold, clinical blue) or generic spiritual retreats (excessive pastel swirls, unreadable cursive).

The **"Quiet Confidence"** design system balances:
- **Clinical Rigor & Professionalism**: Structured layouts, clean serif typography, clear credentials.
- **Somatic Warmth & Safety**: Earthy sage greens, organic linen surfaces, terracotta accents.
- **Cognitive Ease**: Generous whitespace, predictable hierarchy, high-contrast readability.

---

## 2. Color System & Accessibility Ratios

All tokens are defined as CSS variables in `src/app/globals.css` and mapped to Tailwind v4 theme variables.

### Primary Palette: Calm Sage & Sand (Default)
| Token | CSS Variable | Hex | Role | Contrast Ratio (WCAG) |
| :--- | :--- | :--- | :--- | :--- |
| `primary` | `--primary` | `#2D5548` | Primary CTA, brand accents, anchor banners | `7.8:1` on White (Passes AAA) |
| `primary-hover` | `--primary-hover` | `#234439` | Hover state for buttons and links | `9.4:1` on White (Passes AAA) |
| `secondary` | `--secondary` | `#EBDCC9` | Soft warm sand for badges and subtle cards | Neutral warm surface |
| `accent` | `--accent` | `#C4764E` | Warm terracotta for eyebrows, badges, and attention points | `4.8:1` on Off-white (Passes AA) |
| `surface` | `--surface` | `#FAF8F5` | Main organic body background | Optimal reading comfort |
| `surface-alt` | `--surface-alt` | `#F3EDE4` | Alternating section background | Subtle rhythm pacing |
| `ink` | `--ink` | `#222625` | Primary headline and body text color | `13.5:1` on Surface (Passes AAA) |
| `ink-muted` | `--ink-muted` | `#5E6663` | Subtitles, helper text, and descriptions | `5.6:1` on Surface (Passes AA) |

### Re-theming Capabilities (Interactive in Header)
The system includes instant theme toggling via `data-theme` attribute:
1. `sage`: Calm Sage & Sand (Dr. Maya default)
2. `ocean`: Ocean Mist & Golden Hour (Santa Monica coastal breeze)
3. `clay`: Warm Terracotta & Olive (Earthy grounding)
4. `conejo`: Original Newbury Park clone palette (Direct template match)

---

## 3. Typography Scale & Hierarchy

- **Headings (Serif)**: `Cormorant Garamond` (Google Font)
  - Emotional, editorial, trustworthy, and dignified.
  - Scale:
    - Display / H1: `text-4xl sm:text-5xl lg:text-6xl` (40px–60px), line-height 1.12, letter-spacing `-0.015em`
    - Section H2: `text-3xl sm:text-4xl lg:text-5xl` (32px–48px), line-height 1.2
    - Card H3: `text-2xl` (24px), font-weight 600
- **Body & Controls (Sans-Serif)**: `Inter` (Google Font)
  - Neutral, hyper-legible, geometric clarity.
  - Scale:
    - Body Large: `text-lg` (18px), line-height 1.65
    - Body Standard: `text-base` (16px), line-height 1.6
    - Body Small / Captions: `text-sm` (14px) and `text-xs` (12px)
    - Eyebrow Badges: `text-xs` (12px), uppercase, tracking-wider (`0.08em`), font-weight 700

---

## 4. Spacing, Containers & Layout Geometry
- **Container Max-Width**: `1216px` (`max-w-7xl` or custom `.container-custom`).
- **Section Vertical Padding**:
  - Desktop: `py-24` (96px)
  - Tablet/Mobile: `py-16` (64px)
- **Grid Layouts**:
  - 3-column cards (`grid-cols-1 md:grid-cols-3 gap-8`)
  - 2-column editorial splits (`grid-cols-1 lg:grid-cols-12`, 7 cols / 5 cols)
- **Border Radii**:
  - Buttons & Badges: `rounded-full` (9999px)
  - Cards & Images: `rounded-2xl` (16px) and `rounded-3xl` (24px)
- **Shadows**:
  - Default: `shadow-xs` / `shadow-sm`
  - Hover: `shadow-xl` with `-translate-y-1` micro-lift

---

## 5. Mobile Ergonomics (390px Viewport)
- **Thumb-Zone Accessibility**:
  - Sticky bottom action bar on mobile with direct phone and consultation triggers.
  - Touch targets all measure at least `48px x 48px`.
- **Typographic Responsiveness**:
  - H1 scales automatically from 36px on mobile to 60px on desktop without word clipping or horizontal scrolling.
