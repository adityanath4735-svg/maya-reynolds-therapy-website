// src/data/content.js
// Single Source of Truth for all website content.
// Fully based on Dr. Maya Reynolds, PsyD profile document + Conejo Valley Counseling clone structure.

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
    modes: "In-Person in Santa Monica & Secure California Telehealth",
  },

  nav: {
    brand: "Dr. Maya Reynolds, PsyD",
    brandSubtitle: "Clinical Psychologist • Santa Monica, CA",
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
      "A warm, grounded, and evidence-based space for thoughtful adults, creatives, and professionals navigating anxiety, burnout, and trauma to find clarity and lasting calm.",
    ctaPrimary: "Book a Free Consultation",
    ctaSecondary: "Explore Our Approach",
    trustBadges: [
      { title: "Licensed Psychologist", desc: "Doctor of Psychology (PsyD)" },
      { title: "Dual Format Care", desc: "Santa Monica & CA Telehealth" },
      { title: "Evidence-Based", desc: "CBT • EMDR • Somatic Practices" },
    ],
    heroImage: "/images/hero-calm.jpg",
    heroAlt: "Peaceful coastal sunlight representing calm and grounded therapy in Santa Monica",
  },

  intro: {
    eyebrow: "A COMPASSIONATE START",
    heading: "You're holding onto hope that life can feel lighter and more grounded than it does right now.",
    paragraphs: [
      "Many of the people who walk through my door in Santa Monica are high-achieving, thoughtful, and deeply self-aware. On the outside, life looks composed and capable. But internally, you may be feeling exhausted, trapped in cycles of overthinking, or constantly bracing for the other shoe to drop.",
      "Whether you are coping with chronic anxiety, panic, lingering emotional wounds from your past, or severe burnout from unrelenting expectations, what you are experiencing is real, valid, and worthy of attentive care.",
      "Therapy is not about fixing you—it is about creating a secure, collaborative environment where you can slow down, untangle the roots of your distress, and rebuild confidence in your own nervous system.",
    ],
  },

  whoWeHelp: {
    eyebrow: "WHO WE WORK WITH",
    heading: "Tailored Therapy for Adults Ready for Deep, Sustainable Change",
    introText:
      "In my Santa Monica practice and online throughout California, I specialize in working with adults who recognize that pushing through is no longer working.",
    cards: [
      {
        id: "high-achievers",
        title: "High Achievers & Professionals",
        subtitle: "Overcoming perfectionism & internal pressure",
        description:
          "Entrepreneurs, corporate professionals, and creatives who feel disconnected from themselves after years of high-performance demands, imposter feelings, and unrelenting internal standards.",
        tag: "Burnout & Stress",
      },
      {
        id: "anxiety-panic",
        title: "Adults Living With Anxiety & Panic",
        subtitle: "Quieting overthinking & somatic distress",
        description:
          "Those who feel functional on the surface while quietly battling constant dread, physical tension, insomnia, or sudden surges of panic that disrupt daily peace and presence.",
        tag: "Anxiety & Nervous System",
      },
      {
        id: "trauma-recovery",
        title: "Trauma Survivors & Complex PTSD",
        subtitle: "Healing past wounds with safety and pacing",
        description:
          "Individuals carrying the weight of single-incident events or complex, relational patterns from childhood that continue to shape present boundaries, trust, and self-worth.",
        tag: "EMDR & Somatic Healing",
      },
    ],
  },

  quoteBanner: {
    quote:
      "“You deserve a space where your full story is heard, valued, and understood. Nothing you bring is too heavy for us to hold and untangle together.”",
    attribution: "Dr. Maya Reynolds, PsyD",
  },

  expertisePills: {
    eyebrow: "AREAS OF CLINICAL FOCUS",
    heading: "Specialized Support Grounded in Evidence and Empathy",
    items: [
      "Generalized Anxiety",
      "EMDR Therapy",
      "Panic Disorder",
      "Complex Trauma & PTSD",
      "Executive & Creative Burnout",
      "High-Functioning Perfectionism",
      "Somatic & Nervous System Regulation",
      "Cognitive Behavioral Therapy (CBT)",
      "Boundary & Relationship Challenges",
      "Mindfulness-Based Stress Reduction",
    ],
  },

  howWeWork: {
    eyebrow: "HOW WE WORK",
    heading: "A grounded blend of clinical depth and practical tools.",
    subheading:
      "Therapy is most effective when structured enough to feel safe, while spacious enough for genuine self-discovery.",
    paragraphs: [
      "In our sessions, your needs and nervous system lead the way. I take a warm, collaborative, and grounded approach that honors both the emotional and physiological dimensions of what you are experiencing.",
      "Rather than relying on one-size-fits-all advice, we integrate evidence-based modalities including Cognitive Behavioral Therapy (CBT), Eye Movement Desensitization and Reprocessing (EMDR), somatic awareness, and mindfulness practices.",
      "Together, we explore actionable strategies for day-to-day relief while gently addressing the root causes underneath—helping you feel more regulated, clear-headed, and connected in everyday life.",
    ],
    modalitiesList: [
      {
        title: "EMDR (Eye Movement Desensitization and Reprocessing)",
        desc: "A gold-standard, neuroscience-backed method to help the brain reprocess traumatic memories and reduce intense physiological triggers.",
      },
      {
        title: "Cognitive-Behavioral Therapy (CBT)",
        desc: "Practical frameworks to identify automatic negative thoughts, break repetitive worry loops, and build cognitive flexibility.",
      },
      {
        title: "Somatic & Nervous System Regulation",
        desc: "Body-oriented techniques that help soothe chronic fight-or-flight activation, calm tension, and restore internal safety.",
      },
      {
        title: "Mindfulness & Self-Compassion",
        desc: "Cultivating present-moment awareness to lessen reactive self-criticism and nurture emotional resilience.",
      },
    ],
    ctaText: "Learn More About My Practice",
  },

  transitionBanner: {
    text: "Honoring where you've been — and helping you cultivate steady ground for where you're headed.",
  },

  services: {
    eyebrow: "OUR SPECIALTIES",
    heading: "Three Core Pathways to Healing & Resilience",
    subheading:
      "All services are available in-person at our Santa Monica office or virtually across California.",
    cards: [
      {
        id: "anxiety",
        title: "Anxiety & Panic Therapy",
        image: "/images/service-anxiety.jpg",
        alt: "Calm room with natural lighting and plants representing peaceful mental space",
        shortDesc:
          "Targeted relief for persistent worry, racing thoughts, insomnia, and physical tension using CBT and somatic grounding.",
        fullDesc:
          "Constant worry and panic can leave your body feeling as if it is in an unending state of emergency. We work together to unpack the triggers fueling your anxiety, understand your nervous system's threat responses, and practice dependable tools that calm your physiological response.",
        benefits: [
          "Break free from spiraling 'what-if' thoughts",
          "Regulate physical symptoms of panic and shortness of breath",
          "Restore restful sleep and daily mental calm",
        ],
      },
      {
        id: "trauma",
        title: "Trauma Therapy & EMDR",
        image: "/images/service-trauma.jpg",
        alt: "Grounded quiet therapy chair with soft blanket in Santa Monica",
        shortDesc:
          "Gentle, phased processing of past traumatic events, developmental injuries, and emotional triggers to reclaim personal safety.",
        fullDesc:
          "Whether you have survived a specific overwhelming event or carry the quiet residues of emotional neglect, relationship pain, or childhood stress, trauma work is paced with your absolute safety at the forefront. Using EMDR and stabilization techniques, we help you digest painful memories without becoming re-traumatized.",
        benefits: [
          "Desensitize distress linked to painful memories",
          "Strengthen your window of emotional tolerance",
          "Re-establish a deep, trustworthy sense of safety",
        ],
      },
      {
        id: "burnout",
        title: "Burnout & Perfectionism",
        image: "/images/service-burnout.jpg",
        alt: "Sunlit desk and peaceful notebook representing balance for busy professionals",
        shortDesc:
          "Support for ambitious professionals, tech leaders, and creatives experiencing exhaustion, disconnection, and chronic self-criticism.",
        fullDesc:
          "When self-worth becomes intertwined with nonstop output, chronic exhaustion and cynicism soon follow. Therapy becomes your private sanctuary to step off the hamster wheel, establish protective boundaries, unhook from toxic perfectionism, and rediscover what truly nourishes your vitality.",
        benefits: [
          "Release relentless internal standards and imposter feelings",
          "Establish guilt-free personal and professional boundaries",
          "Cultivate sustainable pacing and genuine fulfillment",
        ],
      },
    ],
  },

  about: {
    eyebrow: "MEET DR. MAYA REYNOLDS",
    heading: "A grounded guide on your journey toward clarity, healing, and self-trust.",
    image: "/images/maya-reynolds.png",
    alt: "Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist in Santa Monica, CA",
    credentials: [
      "PsyD in Clinical Psychology",
      "Licensed Clinical Psychologist (CA)",
      "EMDR Trained Clinician",
      "Certified Mindfulness & CBT Practitioner",
    ],
    paragraphs: [
      "Hello, I'm Dr. Maya Reynolds. I am a licensed clinical psychologist based in Santa Monica, California, dedicated to helping adults navigate anxiety, trauma, and burnout with insight and compassionate care.",
      "Throughout my career, I've observed how easily intelligent, thoughtful people get caught in silent suffering—maintaining an impressive outward facade while internally battling relentless anxiety, emotional exhaustion, or the unresolved echoes of past distress.",
      "My therapeutic style is warm, collaborative, and unhurried. You will find that our sessions are neither rigid lectures nor passive nods. Instead, we engage in meaningful, active dialogue where your voice is respected, your boundaries are honored, and your innate resilience is awakened.",
      "I believe true healing occurs when we attend to both the stories we tell ourselves and the sensations our bodies hold. My goal is not just symptom relief, but helping you cultivate deep self-trust and sustainable peace of mind that lasts far beyond our therapy room.",
    ],
    quote:
      "“Therapy works best when you feel deeply seen, respected, and equipped with tools that genuinely fit your life.”",
  },

  // PART 3: The Custom "Our Office" Section
  office: {
    badge: "OUR HEALING ENVIRONMENT",
    heading: "A Calm, Private Space for Healing in Santa Monica",
    subheading:
      "Step into a thoughtfully designed sanctuary intentionally crafted to quiet sensory overload, respect your privacy, and invite stillness.",
    description:
      "Located at 123th Street 45 W in Santa Monica, CA, our office is an uncluttered, light-filled haven just moments from the Pacific coastline. From warm natural wood and soft textiles to abundant natural daylight and dedicated soundproofing, every detail has been intentionally curated so your nervous system can downshift the moment you arrive.",
    addressNote: "123th Street 45 W, Santa Monica, CA 90401 • Suite 200",
    features: [
      {
        title: "Abundant Natural Light",
        desc: "Large windows invite soft daylight, creating an open, uplifting atmosphere that avoids sterile medical feels.",
      },
      {
        title: "Strict Privacy & Confidentiality",
        desc: "Equipped with white noise insulation and dedicated private entrances to ensure your sessions remain entirely confidential.",
      },
      {
        title: "Comfortable, Grounding Decor",
        desc: "Thoughtfully arranged seating, organic textures, and soothing plants selected to ground your nervous system.",
      },
      {
        title: "Convenient Coastal Location",
        desc: "Centrally situated in Santa Monica with convenient parking and accessibility for West Los Angeles clients.",
      },
    ],
    images: [
      {
        src: "/images/office-1.jpg",
        alt: "Main therapy seating area with comfortable armchairs and soft natural lighting in Santa Monica office",
        caption: "Main Consultation Space",
      },
      {
        src: "/images/office-2.jpg",
        alt: "Serene secondary angle of Dr. Maya Reynolds Santa Monica counseling office",
        caption: "Quiet & Uncluttered Sanctuary",
      },
      {
        src: "/images/office-3.jpg",
        alt: "Warm wooden interior details with green plant life and calming books",
        caption: "Intentionally Curated Details",
      },
    ],
    telehealthNote:
      "Prefer virtual care? Secure, HIPAA-compliant telehealth sessions are available for residents across the entire state of California.",
  },

  faq: {
    eyebrow: "COMMON QUESTIONS",
    heading: "Frequently Asked Questions",
    subheading:
      "Here are answers to the questions clients most frequently ask when considering therapy with Dr. Maya Reynolds.",
    questions: [
      {
        q: "What issues do you specialize in?",
        a: "I specialize in adult therapy for generalized anxiety, panic disorder, complex trauma/PTSD, and professional burnout. I frequently work with high-achievers, entrepreneurs, and creatives in Santa Monica and across California who feel functional externally but exhausted internally.",
      },
      {
        q: "Do you offer in-person or online sessions?",
        a: "I offer both. In-person therapy is provided from my private, quiet office in Santa Monica, California (123th Street 45 W). For clients residing anywhere throughout California, I also provide secure, HIPAA-compliant telehealth video sessions.",
      },
      {
        q: "What is your approach to therapy?",
        a: "My approach is warm, collaborative, and grounded. I blend practical, evidence-based tools (Cognitive Behavioral Therapy and somatic regulation) with depth-oriented trauma processing (EMDR). We balance symptom relief with understanding the deeper roots of what you are experiencing.",
      },
      {
        q: "What happens during our initial consultation?",
        a: "We begin with a complimentary 15-minute phone or video consultation. This is a gentle, pressure-free opportunity to discuss what brings you to therapy, ask questions about my approach and logistics, and determine whether we are an aligned clinical fit.",
      },
      {
        q: "How does EMDR therapy work for trauma?",
        a: "EMDR (Eye Movement Desensitization and Reprocessing) is an evidence-based approach that helps your brain reprocess memories that feel emotionally 'stuck.' We carefully focus on safety and stabilization first, ensuring you feel grounded before processing distressing events.",
      },
      {
        q: "Do you take insurance?",
        a: "I am an out-of-network provider. Upon request, I provide detailed monthly superbills (statements) that you may submit to your insurance company for potential out-of-network mental health reimbursement.",
      },
    ],
  },

  ctaBanner: {
    badge: "BEGIN YOUR JOURNEY",
    heading: "Ready to feel more grounded, regulated, and at ease?",
    subheading:
      "Taking the first step toward therapy requires courage. I invite you to reach out for a confidential conversation about how we can work together.",
    buttonPrimary: "Schedule Your Free 15-Minute Call",
    buttonSecondary: "Email My Practice",
    directContact: "Direct Inquiries: (310) 555-0194 • contact@mayareynoldspsyd.com",
  },

  footer: {
    bioSummary:
      "Dr. Maya Reynolds, PsyD is a Licensed Clinical Psychologist based in Santa Monica, CA, providing specialized therapy for anxiety, trauma, and burnout in-person and via telehealth statewide.",
    disclaimer:
      "The information on this website is for educational and informational purposes only and does not constitute formal medical or psychological advice. If you are experiencing an acute mental health emergency, please dial 988 or visit your nearest emergency room.",
    addressBlock: {
      title: "Santa Monica Office",
      address: "123th Street 45 W, Suite 200\nSanta Monica, CA 90401",
      phone: "(310) 555-0194",
      email: "contact@mayareynoldspsyd.com",
    },
    quickLinks: [
      { label: "Home", href: "#" },
      { label: "About Dr. Reynolds", href: "#about" },
      { label: "Anxiety Therapy", href: "#services" },
      { label: "EMDR Trauma Care", href: "#services" },
      { label: "Our Santa Monica Office", href: "#office" },
      { label: "Frequently Asked Questions", href: "#faq" },
    ],
    serviceLocations:
      "Serving Santa Monica, Venice, Brentwood, Westwood, Malibu, Beverly Hills, and all California residents via Telehealth.",
    copyright: "© 2026 Dr. Maya Reynolds, PsyD. All rights reserved.",
  },
};
