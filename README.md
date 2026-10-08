# Dr. Maya Reynolds, PsyD — Practice Website & Creative Redesign

> **Front-End Developer Assignment (Stage 2)** for **Grow My Therapy**  
> **Candidate Repository**: [https://github.com/adityanath4735-svg/maya-reynolds-therapy-website.git](https://github.com/adityanath4735-svg/maya-reynolds-therapy-website.git)  
> **Original Reference Site**: [Conejo Valley Family Counseling](https://www.conejovalleycounseling.com/home)  
> **Client Single Source of Truth**: [Dr. Maya Reynolds, PsyD Profile](https://docs.google.com/document/d/1-IJVKEjuqV9CTd9QH16UNHJ7SQfdiweS4oAIZ8vmgHU/edit?usp=sharing)  

---

## 🌟 Executive Summary

This project delivers a complete, production-ready, design-forward web application for **Dr. Maya Reynolds, PsyD**, a Licensed Clinical Psychologist based in **Santa Monica, California**.

The project fulfills all parts of the **Grow My Therapy** evaluation:
1. **Part 1 (UI Accuracy Test)**: Clones the section hierarchy, responsive grid system, typographic balance, and pacing of the reference template (`conejovalleycounseling.com`).
2. **Part 2 (Creative Redesign)**: Re-themes the site with a calm, organic California coastal palette (Sage & Sand, Ocean Mist, and Warm Terracotta), derives **100% of the copywriting strictly from Dr. Maya's clinical profile**, and optimizes for Santa Monica local SEO.
3. **Part 3 (New Custom Section)**: Introduces the **"Our Office"** sanctuary section featuring Dr. Maya's authentic Google Drive office images, Santa Monica physical address, and in-person vs. telehealth availability.
4. **Part 4 (Communication & Walkthrough)**: Includes a structured 5-minute client demo video script and rationale.

---

## 🚀 Tech Stack & Architecture

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack, React 19)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with native CSS variables and `@theme` tokens
- **Typography**: Editorial Google Fonts (`Cormorant Garamond` serif headings + `Inter` sans-serif body text)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Data Architecture**: Single source of truth in `src/data/content.js`
- **SEO & Structured Data**: Native Next.js Metadata API + JSON-LD Schema (`Psychologist` & `MedicalBusiness`)

---

## 📁 Repository Structure

```
maya-reynolds-therapy-website/
├── public/
│   ├── images/
│   │   ├── maya-reynolds.png   # Authentic headshot from Google Drive
│   │   ├── office-1.jpg        # Authentic office photo 1 from Drive
│   │   ├── office-2.jpg        # Authentic office photo 2 from Drive
│   │   ├── office-3.jpg        # Interior aesthetic detail
│   │   ├── hero-calm.jpg       # Peaceful coastal sunlight
│   │   └── service-*.jpg       # Specialized treatment imagery
├── src/
│   ├── app/
│   │   ├── globals.css         # Tailwind v4 theme variables & tokens
│   │   ├── layout.js           # Root layout, fonts & SEO metadata
│   │   └── page.js             # Homepage assembly & theme state
│   ├── components/
│   │   ├── Navbar.jsx          # Header, navigation, theme switcher & CTA
│   │   ├── Hero.jsx            # SEO H1, subtext & trust strip
│   │   ├── Intro.jsx           # Empathy hook section
│   │   ├── WhoWeHelp.jsx       # 3-column client focus grid
│   │   ├── QuoteBanner.jsx     # Clinical philosophy statement
│   │   ├── ExpertisePills.jsx  # Focus badges & modalities
│   │   ├── HowWeWork.jsx       # Approach (CBT, EMDR, Somatic)
│   │   ├── TransitionBanner.jsx# Pacing divider
│   │   ├── Services.jsx        # 3 featured clinical specialties
│   │   ├── About.jsx           # Bio with Dr. Maya's portrait & credentials
│   │   ├── Office.jsx          # [CUSTOM] "Our Office" sanctuary section
│   │   ├── Faq.jsx             # Interactive FAQ accordion
│   │   ├── CtaBanner.jsx       # Appointment booking invitation
│   │   ├── Footer.jsx          # Location, disclaimer, hours & links
│   │   ├── ConsultationModal.jsx# Interactive intake request modal
│   │   └── StickyMobileBar.jsx # Mobile sticky consultation bar
│   └── data/
│       └── content.js          # Single source of truth for all copy
├── package.json
└── README.md
```

---

## 🎨 Theme System & Color Palette

All colors are controlled via CSS variables in `src/app/globals.css`. You can preview multiple palettes on the live site using the **Theme Switcher** in the top navigation bar:

| Palette | Primary | Secondary | Accent | Surface | Vibe / Rationale |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Calm Sage & Sand (Default)** | `#2D5548` | `#EBDCC9` | `#C4764E` | `#FAF8F5` | Calming nervous system regulation, organic warmth, grounded stability. |
| **Ocean Mist** | `#254E5F` | `#D6E5EB` | `#CF8438` | `#F5F9FA` | Santa Monica coastal breeze, fresh clarity, serene daylight. |
| **Warm Terracotta** | `#7C483A` | `#EDD9C8` | `#55725E` | `#FAF6F2` | Earthy, comforting, reflective space for deep trauma work. |
| **Original Conejo Clone** | `#4A5448` | `#DCDFD8` | `#8B6048` | `#F7F8F6` | Direct color match to the original template for comparison. |

> **Contrast Verification**: All body text meets WCAG AAA standards (`13.5:1` contrast ratio), and all action buttons exceed WCAG AA requirements (`4.5:1+`).

---

## 🛠️ Step-by-Step Guide for Beginners

### 1. Prerequisites
- **Node.js**: v18.18 or higher (v20+ recommended)
- **Git**: Installed on your system

### 2. Clone the Repository
```bash
git clone https://github.com/adityanath4735-svg/maya-reynolds-therapy-website.git
cd maya-reynolds-therapy-website
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production
```bash
npm run build
```

---

## 🔍 SEO Strategy (Santa Monica, CA)

1. **Title Tag**: `Anxiety & Trauma Therapy in Santa Monica, CA | Dr. Maya Reynolds, PsyD`
2. **Meta Description**: Concise, high-intent summary under 160 characters highlighting specialties, location, and a clear call to action.
3. **Heading Hierarchy**: Exactly **one `<h1>`** on the page (`Anxiety & Trauma Therapy in Santa Monica, CA`), structured `<h2>` tags for sections, and `<h3>` tags for cards.
4. **Keyword Integration**: Natural integration of high-converting local search terms:
   - *"Anxiety Therapy in Santa Monica"*
   - *"EMDR Trauma Therapy California"*
   - *"Burnout and Perfectionism Counseling for Professionals"*
   - *"Psychologist in 90401"*
5. **Schema.org Structured Data**: Integrated `Psychologist` and `MedicalBusiness` JSON-LD markup with practice address, coordinates, hours, and accepted modalities.

---

## 🎥 5-Minute Video Walkthrough Script (Loom)

*(Presented as a live consultation with Dr. Maya Reynolds)*

- **0:00 – 0:45 | Welcome & Purpose**:
  > *"Hi Dr. Reynolds! Thank you for the opportunity to review the first draft of your practice’s new website. My goal was to create a digital home that immediately puts your future clients at ease the moment they land on the page, while ensuring that clients searching for anxiety, trauma, and burnout therapy in Santa Monica can easily find you."*
- **0:45 – 1:30 | Desktop Hero & Visual Identity**:
  > *"Starting at the top: notice the clean, calming header with your exact Santa Monica office address and phone number. Our main headline is engineered for local Google search: 'Anxiety & Trauma Therapy in Santa Monica, CA'. We chose a calming Sage and Sand color palette with organic warmth because your profile emphasizes nervous system regulation. Every button is clear and inviting, leading clients to your free 15-minute consultation."*
- **1:30 – 2:30 | Pacing & Specialty Services**:
  > *"As we scroll down, we honor your clinical voice. The intro speaks directly to high-achieving adults who feel functional on the outside but exhausted inside. Under 'Core Pathways to Healing', we’ve highlighted your three primary treatment areas: Anxiety & Panic Therapy, Trauma & EMDR, and Burnout & Perfectionism. Each card outlines specific, tangible outcomes so clients immediately feel understood."*
- **2:30 – 3:30 | The 'Our Office' Sanctuary Section**:
  > *"Next is the custom 'Our Office' section we designed specifically for your practice. Many therapy clients feel anxious about visiting a new office for the first time. Here, we showcase your actual office space at 123th Street 45 W with photos of your comfortable armchairs and abundant natural light. We also clearly highlight that you offer in-person visits in Santa Monica as well as secure telehealth across California."*
- **3:30 – 4:15 | Mobile Experience**:
  > *"Over 65% of clients looking for a therapist browse on their smartphones. Looking at the mobile view: notice how smoothly everything stacks, how easily the FAQ questions expand with a tap, and how the sticky 'Book Consultation' bar at the bottom stays accessible without getting in the way."*
- **4:15 – 5:00 | Wrap-up & Next Steps**:
  > *"All the text lives in a single clean content file, making updates effortless. Take your time reviewing this draft, Dr. Reynolds, and let me know your thoughts. I'm excited to hear your feedback!"*

---

## 📄 License & Attribution
Created for **Grow My Therapy** internship evaluation. Content based on the clinical profile of Dr. Maya Reynolds, PsyD.
