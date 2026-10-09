# Grow My Therapy — Project Plan & Requirements Tracker

**Candidate**: Aditya  
**Position**: Front-End Developer Internship  
**Repository**: [https://github.com/adityanath4735-svg/maya-reynolds-therapy-website.git](https://github.com/adityanath4735-svg/maya-reynolds-therapy-website.git)  
**Reference Site**: [Conejo Valley Family Counseling](https://www.conejovalleycounseling.com/home)  
**Client Single Source of Truth**: [Dr. Maya Reynolds, PsyD Profile](https://docs.google.com/document/d/1-IJVKEjuqV9CTd9QH16UNHJ7SQfdiweS4oAIZ8vmgHU/edit?usp=sharing)  

---

## 1. Required Deliverables Tracking

- [x] **Accurate reference website clone**: Preserved 12-section layout, 3-column card grids, 2-column editorial splits, and visual hierarchy.
- [x] **Redesigned therapist homepage**: Transformed with "Quiet Confidence" California coastal palette (Calm Sage & Sand), editorial serif typography, and custom styling.
- [x] **Next.js implementation**: Built on Next.js 16 App Router with React 19.
- [x] **Tailwind CSS styling**: Tailwind v4 architecture with CSS variable theme tokens (`--primary`, `--secondary`, `--accent`, `--surface`, `--ink`).
- [x] **Rewritten homepage copy**: 100% profile-supported copy based strictly on Dr. Maya Reynolds' profile document (zero invented facts).
- [x] **Three selected therapy services**:
  1. *Anxiety & Panic Therapy*
  2. *Trauma Therapy & EMDR*
  3. *Burnout & Perfectionism*
- [x] **Updated images**: Replaced all stock photos with curated, high-intent assets; downloaded official headshot and office photos directly from Dr. Maya's Google Drive folder.
- [x] **Custom "Our Office" section with 2–3 images**: Integrated section featuring `office-1.jpg`, `office-2.jpg`, `office-3.jpg`, Santa Monica address (`123th Street 45 W`), and natural light notes.
- [x] **Responsive mobile and desktop layouts**: Tested and verified across 375px, 390px, 768px, 1024px, and 1440px viewports.
- [x] **Functional navigation and interactive elements**: Smooth anchor scrolling with header offset, interactive consultation booking modal, FAQ accordion, dynamic multi-theme switcher, and mobile drawer menu.
- [x] **Live deployment readiness**: Fully ready for 1-click Vercel deployment.
- [x] **Public GitHub repository**: Configured with professional git commit history.
- [x] **Client-style walkthrough video (5 minutes)**: Rehearsed, non-technical script speaking directly to Dr. Maya Reynolds.

---

## 2. Quality Assurance & Defect Prevention

- [x] **No horizontal overflow on mobile**: `overflow-x: hidden` and fluid containers verified at 375px and 390px.
- [x] **No overlapping navigation or headings**: Sticky navbar configured with `scroll-mt-28` across all anchor targets (`#about`, `#services`, `#approach`, `#office`, `#faq`, `#contact`).
- [x] **No broken image assets**: All images hosted locally in `public/images/` and verified with Next.js image optimization.
- [x] **No dead links or non-functional controls**: All phone (`tel:`), email (`mailto:`), and navigation links operate as expected.
- [x] **No unsupported therapist or office claims**: Verified single address (`123th Street 45 W, Santa Monica, CA 90401`), removed unverified amenities, strictly used facts from the Google Doc.
- [x] **Single portrait consistency**: Dr. Maya Reynolds’ approved headshot (`maya-reynolds.png`) is the sole clinician portrait on the site; approach and service sections use serene environment imagery without conflicting portraits.
- [x] **Production build succeeds**: `npm run build` compiles static pages cleanly in under 1 second with 0 errors.
- [x] **README contains setup and deployment instructions**: Complete documentation in `README.md` and `research/`.

---

## 3. Evaluation Weighting & Target Alignment

| Milestone | Weight | Implementation Details |
| :--- | :---: | :--- |
| **Original UI clone** | 25% | 1:1 structural alignment with Conejo Valley Counseling homepage. |
| **New design/theme** | 25% | Replaced with "Quiet Confidence" Calm Sage & Sand, plus live 4-theme previewer. |
| **Copy & Images** | 10% | 100% sourced from Dr. Maya profile + local Santa Monica SEO H1 + Google Drive images. |
| **Our Office Section** | 10% | Custom section with 3-image collage from Google Drive. |
| **Walkthrough Video** | 30% | Timed 5-minute benefit-focused presentation to Dr. Maya Reynolds. |
