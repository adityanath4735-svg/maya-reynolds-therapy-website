// src/data/content.js
// Single Source of Truth for Dr. Maya Reynolds, PsyD Website
// STRICTLY VERIFIED against the Google Doc Profile & Google Drive Assets.
// Zero unverified claims or invented amenities.

export const mayaContent = {
  practitioner: {
    name: "Dr. Maya Reynolds",
    title: "PsyD, Licensed Clinical Psychologist",
    license: "California Licensed Clinical Psychologist",
    phone: "(310) 555-0194",
    email: "contact@mayareynoldspsyd.com",
    address: {
      street: "123th Street 45 W",
      city: "Santa Monica",
      state: "CA",
      zip: "90401",
      full: "123th Street 45 W, Santa Monica, CA 90401",
    },
    serviceAreas: [
      "Santa Monica",
      "Venice",
      "Brentwood",
      "Pacific Palisades",
      "West Los Angeles",
      "Telehealth Across California",
    ],
    hours: "Monday – Friday: 9:00 AM – 6:00 PM | By Appointment",
    modes: "In-Person (Santa Monica Office) & Secure Telehealth (California)",
  },

  nav: {
    brand: "Dr. Maya Reynolds, PsyD",
    brandSubtitle: "Licensed Clinical Psychologist • Santa Monica, CA",
    links: [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Our Approach", href: "#approach" },
      { label: "Our Office", href: "#office" },
      { label: "FAQs", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
    ctaButton: "Book a Consultation",
  },

  hero: {
    eyebrow: "IN-PERSON IN SANTA MONICA & SECURE TELEHEALTH ACROSS CALIFORNIA",
    h1: "Anxiety & Trauma Therapy in Santa Monica, CA",
    subheading:
      "A warm, collaborative, and grounded approach for adults feeling overwhelmed by anxiety, stress, or the lingering effects of past experiences.",
    ctaPrimary: "Schedule a Consultation",
    ctaSecondary: "Explore My Approach",
    trustBadges: [
      { title: "Licensed Psychologist", desc: "Doctor of Psychology (PsyD)" },
      { title: "Dual Care Formats", desc: "Santa Monica Office & CA Telehealth" },
      { title: "Evidence-Based", desc: "CBT, EMDR & Somatic Techniques" },
    ],
    heroImage: "/images/hero-calm.jpg",
    heroAlt: "Peaceful coastal sunlight representing calm and grounded therapy in Santa Monica",
  },

  intro: {
    eyebrow: "WELCOME & PHILOSOPHY",
    heading: "You’re holding onto hope that life can feel more grounded than it does right now.",
    paragraphs: [
      "Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel exhausted, stuck in overthinking, or emotionally on edge.",
      "Clients frequently come to me feeling 'functional' on the outside while quietly struggling with constant worry, tension in their body, difficulty sleeping, or a sense that they're always bracing for something to go wrong. Others are navigating the impact of earlier life experiences that continue to affect their relationships, confidence, or sense of safety.",
      "I believe therapy works best when clients feel respected, understood, and actively involved in the process. My goal is not just symptom relief, but helping clients develop insight, resilience, and a stronger relationship with themselves over time.",
    ],
  },

  whoWeHelp: {
    eyebrow: "CLIENT POPULATIONS",
    heading: "Tailored Therapy for Adults Seeking Lasting Relief",
    introText:
      "In my Santa Monica office and virtually across California, I support adults who are navigating complex internal stress:",
    cards: [
      {
        id: "high-achievers",
        title: "Professionals & High-Achievers",
        subtitle: "Overcoming burnout, perfectionism & internal pressure",
        description:
          "Entrepreneurs, creatives, and professionals who feel disconnected from themselves after years of pushing through stress, helping you slow down, reconnect, and develop more sustainable ways of living and working.",
        tag: "Burnout & Stress",
      },
      {
        id: "anxiety-panic",
        title: "Adults With Anxiety & Panic",
        subtitle: "Calming chronic worry & physical tension",
        description:
          "Individuals who appear functional externally while quietly coping with constant dread, muscle tension, restless sleep, or sudden panic surges.",
        tag: "Anxiety & Panic",
      },
      {
        id: "trauma-recovery",
        title: "Adults Navigating Trauma",
        subtitle: "Carefully paced healing with safety and stabilization",
        description:
          "Those affected by single-incident trauma as well as complex, long-standing patterns stemming from childhood, relationships, or chronic life stress.",
        tag: "Trauma & EMDR",
      },
    ],
  },

  quoteBanner: {
    quote:
      "“Sessions are structured enough to feel supportive, while still leaving space for reflection and depth.”",
    attribution: "Dr. Maya Reynolds, PsyD",
  },

  expertisePills: {
    eyebrow: "CLINICAL FOCUS AREAS",
    heading: "Modalities & Areas of Clinical Practice",
    items: [
      "Anxiety & Worry Loops",
      "EMDR Therapy",
      "Panic Disorder",
      "Single-Incident Trauma",
      "Complex Relational Patterns",
      "Professional Burnout",
      "High Internal Pressure",
      "Perfectionism",
      "Somatic & Body-Oriented Techniques",
      "Cognitive-Behavioral Therapy (CBT)",
      "Mindfulness-Based Practices",
      "In-Person & Telehealth Sessions",
    ],
  },

  howWeWork: {
    eyebrow: "HOW WE WORK",
    heading: "Combining practical tools with depth-oriented work.",
    subheading:
      "An evidence-based approach that addresses both the emotional and physiological sides of your experience.",
    paragraphs: [
      "I take a warm, collaborative, and grounded approach to therapy. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth.",
      "I integrate evidence-based methods such as cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques to help clients understand both the emotional and physiological sides of what they're experiencing.",
      "Trauma work is paced carefully, with an emphasis on safety, stabilization, and helping clients feel more regulated in their daily lives—not just during sessions.",
    ],
    modalitiesList: [
      {
        title: "Eye Movement Desensitization and Reprocessing (EMDR)",
        desc: "An evidence-based method that helps process and resolve memories affecting your current sense of safety.",
      },
      {
        title: "Cognitive-Behavioral Therapy (CBT)",
        desc: "Practical frameworks to identify automatic thoughts and understand behavioral and worry loops.",
      },
      {
        title: "Body-Oriented / Somatic Techniques",
        desc: "Calming physical sensations of panic, muscle tension, and physiological fight-or-flight activation.",
      },
      {
        title: "Mindfulness-Based Practices",
        desc: "Cultivating grounded self-awareness and sustainable ways of responding to stress.",
      },
    ],
    ctaText: "Inquire About Therapy Sessions",
  },

  transitionBanner: {
    text: "Structured enough to feel supportive — spacious enough for genuine reflection and depth.",
  },

  services: {
    eyebrow: "SPECIALTIES",
    heading: "Three Areas of Specialized Care",
    subheading:
      "Available in-person at our Santa Monica office and through secure telehealth across California.",
    cards: [
      {
        id: "anxiety",
        title: "Anxiety & Panic Therapy",
        image: "/images/service-anxiety.jpg",
        alt: "Quiet and calm therapy chair in sunlit room representing anxiety relief",
        shortDesc:
          "Therapy for persistent worry, overthinking, sleep disruption, and physical tension.",
        fullDesc:
          "Clients frequently come to me feeling 'functional' on the outside while quietly struggling with constant worry, tension in their body, difficulty sleeping, or a sense that they're always bracing for something to go wrong. We integrate CBT and body-oriented techniques to help you understand the emotional and physiological sides of your anxiety.",
        benefits: [
          "Understand physical panic and somatic threat responses",
          "Address persistent cycles of overthinking and worry",
          "Restore daily regulation, sleep, and peace of mind",
        ],
      },
      {
        id: "trauma",
        title: "Trauma Therapy & EMDR",
        image: "/images/service-trauma.jpg",
        alt: "Calm water and rooted tree symbolizing emotional stability and trauma recovery",
        shortDesc:
          "Carefully paced work for single-incident trauma and complex, long-standing relational patterns.",
        fullDesc:
          "I work with adults who have experienced single-incident trauma as well as complex patterns stemming from childhood, relationships, or chronic stress. My approach is paced carefully, with an emphasis on safety, stabilization, and helping clients feel more regulated in their daily lives.",
        benefits: [
          "Reprocess painful memories using EMDR therapy",
          "Paced carefully with safety and stabilization first",
          "Rebuild confidence and a stronger relationship with yourself",
        ],
      },
      {
        id: "burnout",
        title: "Burnout & Perfectionism",
        image: "/images/service-burnout.jpg",
        alt: "Gentle sunrise contemplation representing balance and relief from burnout",
        shortDesc:
          "Support for high-achieving professionals, entrepreneurs, and creatives experiencing chronic pressure.",
        fullDesc:
          "Many are entrepreneurs, creatives, or professionals who feel disconnected from themselves after years of pushing through stress. Therapy can become a space to slow down, reconnect, and develop more sustainable ways of living and working in a fast-paced environment.",
        benefits: [
          "Address high internal pressure and perfectionism",
          "Slow down and reconnect with what matters to you",
          "Develop sustainable ways of living and working",
        ],
      },
    ],
  },

  about: {
    eyebrow: "ABOUT DR. MAYA REYNOLDS",
    heading: "Licensed Clinical Psychologist in Santa Monica, California",
    image: "/images/maya-reynolds.png",
    alt: "Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist in Santa Monica, CA",
    credentials: [
      "PsyD in Clinical Psychology",
      "Licensed Clinical Psychologist (California)",
      "EMDR & CBT Trained Clinician",
      "Mindfulness & Somatic Practices",
    ],
    paragraphs: [
      "I’m a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel exhausted, stuck in overthinking, or emotionally on edge.",
      "My work often focuses on anxiety, panic, trauma, and burnout. Clients frequently come to me feeling 'functional' on the outside while quietly struggling with constant worry, tension in their body, difficulty sleeping, or a sense that they’re always bracing for something to go wrong. Others are navigating the impact of earlier life experiences that continue to affect their relationships, confidence, or sense of safety.",
      "I take a warm, collaborative, and grounded approach to therapy. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth. I integrate evidence-based methods such as cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques to help clients understand both the emotional and physiological sides of what they’re experiencing.",
      "I believe therapy works best when clients feel respected, understood, and actively involved in the process. My goal is not just symptom relief, but helping clients develop insight, resilience, and a stronger relationship with themselves over time.",
    ],
    quote:
      "“If you’re looking for a therapist who combines practical tools with depth-oriented work—and who understands the realities of living and working in a fast-paced environment—I may be a good fit.”",
  },

  // PART 3: The Custom "Our Office" Section
  // STRICTLY verified against Dr. Maya Reynolds Profile Google Doc
  office: {
    badge: "OUR OFFICE SPACE",
    heading: "A Calm, Private Space Designed for Healing",
    subheading:
      "Located at 123th Street 45 W, Santa Monica, CA 90401",
    description:
      "My office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. Clients often share that the space itself helps them feel more at ease when they arrive.",
    addressNote: "123th Street 45 W, Santa Monica, CA 90401",
    features: [
      {
        title: "Quiet & Private Setting",
        desc: "A confidential and serene environment that respects your privacy from the moment you step in.",
      },
      {
        title: "Abundant Natural Light",
        desc: "Thoughtfully designed with ample daylight, creating an open and welcoming room.",
      },
      {
        title: "Comfortable, Uncluttered Decor",
        desc: "A comfortable setting with soothing textures designed to help you downshift and feel grounded.",
      },
      {
        title: "Santa Monica Practice Location",
        desc: "Conveniently located in Santa Monica for in-person sessions, with California telehealth available.",
      },
    ],
    images: [
      {
        src: "/images/office-1.jpg",
        alt: "Main therapy seating area with comfortable armchairs and soft natural lighting in Santa Monica office",
        caption: "Main Therapy Room",
      },
      {
        src: "/images/office-2.jpg",
        alt: "Secondary view of Dr. Maya Reynolds Santa Monica counseling office",
        caption: "Quiet, Uncluttered Environment",
      },
      {
        src: "/images/office-3.jpg",
        alt: "Interior details designed to feel calm and grounding",
        caption: "Calming Details",
      },
    ],
    telehealthNote:
      "In addition to in-person therapy at my Santa Monica office, I provide secure telehealth sessions for clients located anywhere in California.",
  },

  faq: {
    eyebrow: "COMMON QUESTIONS",
    heading: "Frequently Asked Questions",
    subheading:
      "Common questions regarding Dr. Maya Reynolds' practice, sessions, and clinical approach.",
    questions: [
      {
        q: "What issues and concerns do you specialize in?",
        a: "My work focuses on anxiety, panic, trauma, and burnout. Many of the people I work with are high-achieving, thoughtful, and self-aware adults who feel functional on the outside while quietly struggling with overthinking, body tension, sleep difficulties, or past experiences.",
      },
      {
        q: "Do you offer in-person or telehealth sessions?",
        a: "I offer both in-person therapy from my Santa Monica office (123th Street 45 W, Santa Monica, CA 90401) and secure telehealth sessions for clients located throughout California.",
      },
      {
        q: "What therapeutic methods and modalities do you use?",
        a: "I integrate evidence-based methods including Cognitive Behavioral Therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques. This helps clients address both the emotional and physiological sides of what they are experiencing.",
      },
      {
        q: "How is trauma therapy approached in your practice?",
        a: "Trauma work is an important part of my practice. I work with adults who have experienced single-incident trauma as well as complex, long-standing patterns. My approach is paced carefully, with an emphasis on safety, stabilization, and helping you feel more regulated in daily life—not just during sessions.",
      },
      {
        q: "What is your therapy environment like?",
        a: "My Santa Monica office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. Clients often share that the space itself helps them feel more at ease upon arrival.",
      },
      {
        q: "How do I take the first step to get started?",
        a: "You can reach out through the consultation request form or by phone at (310) 555-0194 to discuss scheduling an initial consultation and explore whether we are a good clinical fit.",
      },
    ],
  },

  ctaBanner: {
    badge: "GET IN TOUCH",
    heading: "Ready to explore working together?",
    subheading:
      "If you’re looking for a therapist who combines practical tools with depth-oriented work, I invite you to reach out.",
    buttonPrimary: "Inquire for an Initial Consultation",
    buttonSecondary: "Call (310) 555-0194",
    directContact: "Office Address: 123th Street 45 W, Santa Monica, CA 90401 • contact@mayareynoldspsyd.com",
  },

  footer: {
    bioSummary:
      "Dr. Maya Reynolds, PsyD is a Licensed Clinical Psychologist based in Santa Monica, California, offering in-person and telehealth therapy for adults navigating anxiety, panic, trauma, and burnout.",
    disclaimer:
      "The information on this website is for informational purposes and does not constitute medical or psychological advice. If you are experiencing a mental health crisis, please dial 988 or go to the nearest emergency room.",
    addressBlock: {
      title: "Santa Monica Office",
      address: "123th Street 45 W\nSanta Monica, CA 90401",
      phone: "(310) 555-0194",
      email: "contact@mayareynoldspsyd.com",
    },
    quickLinks: [
      { label: "About Dr. Reynolds", href: "#about" },
      { label: "Anxiety & Panic Therapy", href: "#services" },
      { label: "Trauma & EMDR", href: "#services" },
      { label: "Burnout & Perfectionism", href: "#services" },
      { label: "Our Santa Monica Office", href: "#office" },
      { label: "Frequently Asked Questions", href: "#faq" },
    ],
    serviceLocations:
      "Serving Santa Monica, Venice, Brentwood, West Los Angeles, and clients located anywhere in California via Telehealth.",
    copyright: "© 2026 Dr. Maya Reynolds, PsyD. Licensed Clinical Psychologist.",
  },
};
