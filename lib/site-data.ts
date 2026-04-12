// Content is centralized here so narrative updates do not require layout rewrites.
export const profile = {
  name: "John Heshima",
  initials: "JH",
  role: "Développeur Fullstack, Backend Engineer & ML Engineer",
  headline:
    "Je construis des interfaces soignées, des APIs robustes et des solutions data prêtes pour la production.",
  summary:
    "Basé à Kinshasa, je combine plus de trois ans d’expérience en développement web et en machine learning avec une formation scientifique solide en mathématiques, statistiques et informatique. J’interviens avec une logique d’ingénieur sur le front, le backend et l’infrastructure cloud.",
  location: "Kinshasa, RDC",
  address: "Mont-Ngafula, Bypass 288, Kinshasa",
  email: "johnheshima6@gmail.com",
  phone: "+243 976 757 874",
  phoneRaw: "+243976757874",
  nationality: "Congolais",
  availability: "Disponible pour poste, mission ou collaboration",
  resumeHref: "/john-heshima-cv.pdf",
  highlights: [
    "Next.js",
    "Node.js",
    "API Design",
    "Machine Learning",
    "Cloud",
    "Linux",
  ],
} as const;

export const quickStats = [
  { value: "3+ ans", label: "Expérience terrain" },
  { value: "2 axes", label: "Backend + ML" },
  { value: "AWS / GCP", label: "Certifications cloud" },
] as const;

export const expertiseAreas = [
  {
    kicker: "01",
    title: "Ingénierie backend",
    description:
      "Je structure la logique métier, les APIs, la fiabilité du runtime et l’intégration entre services avec une approche orientée maintenabilité et performance.",
    points: [
      "Conception d’APIs et structuration de services Node",
      "Validation, traitement serveur et séparation claire des responsabilités",
      "Approche propre pour la sécurité, la résilience et la lisibilité du code",
    ],
  },
  {
    kicker: "02",
    title: "Produits web fullstack",
    description:
      "Je peux livrer une interface premium côté client sans sacrifier la cohérence technique côté serveur, ce qui est précisément la promesse de ce portfolio.",
    points: [
      "Interfaces Next.js modernes, responsive et éditoriales",
      "Composants cohérents, design system et hiérarchie visuelle forte",
      "Capacité à vendre le profil autant par l’UX que par le code",
    ],
  },
  {
    kicker: "03",
    title: "Data, ML & cloud",
    description:
      "Ma base académique et mes certifications me permettent d’aller au-delà du CRUD classique et de penser systèmes, données, déploiement et IA appliquée.",
    points: [
      "Machine learning orienté production et exploitation de données",
      "Culture cloud AWS et Google Cloud",
      "Base Linux, réseau et logique d’infrastructure moderne",
    ],
  },
] as const;

export const experiences = [
  {
    period: "Jan 2025 · Feb 2026",
    role: "Backend Developer & ML Engineer",
    company: "Kin Distribution · Kinshasa",
    description:
      "Position hybride entre engineering backend et machine learning, avec une montée en responsabilité sur des solutions orientées métier, données et efficacité opérationnelle.",
    points: [
      "Développement backend pour des besoins métier concrets",
      "Contribution sur des sujets ML et data-driven",
      "Travail dans un contexte de production et d’intégration réelle",
      "Interface entre logique applicative et exploitation des données",
    ],
  },
  {
    period: "Nov 2024 · Feb 2025",
    role: "Stagiaire professionnel",
    company: "Orange Digital Center · Kinshasa",
    description:
      "Immersion structurante dans un environnement orienté compétences cloud, delivery et professionnalisation, avec un accent fort sur la discipline technique.",
    points: [
      "Exposition à des pratiques de delivery modernes",
      "Renforcement des bases Linux et cloud",
      "Travail encadré dans un cadre professionnel exigeant",
      "Progression rapide sur la rigueur d’exécution",
    ],
  },
  {
    period: "Jan 2023 · Jul 2024",
    role: "Backend Developer",
    company: "Pamoja Tech Solution · Kinshasa",
    description:
      "Première expérience longue en entreprise sur des problématiques backend, avec mise en pratique de la conception d’applications, de la logique métier et de la stabilité serveur.",
    points: [
      "Implémentation de fonctionnalités backend",
      "Participation à des applications web orientées production",
      "Structuration de logique serveur pour des cas d’usage réels",
      "Montée en compétences sur l’architecture applicative",
    ],
  },
] as const;

export const studies = [
  {
    period: "Depuis 2025",
    title: "Master orienté recherche en Data Science & Intelligence Artificielle",
    institution: "Université de Kinshasa",
  },
  {
    period: "Nov 2020 · Jan 2025",
    title: "Bachelor en Mathématiques, Statistiques et Informatique",
    institution:
      "Faculté des Sciences et Technologies, Université de Kinshasa",
  },
  {
    period: "Sept 2014 · Août 2020",
    title: "Diplôme d’État",
    institution: "Institut Mwanga, Uvira · Sud-Kivu · RDC",
  },
] as const;

export const certifications = [
  {
    period: "2025",
    title: "AWS Certified Cloud Practitioner",
    provider: "Amazon Web Services",
  },
  {
    period: "Nov 2024 · Jan 2025",
    title: "AWS re/Start Graduate",
    provider: "Orange Digital Center",
  },
  {
    period: "Mars 2025 · Mai 2025",
    title: "Google Cloud Digital Leader",
    provider: "Skills Boost / Google Cloud",
  },
  {
    period: "Juin 2025",
    title: "Google Cloud Digital Leader",
    provider: "Google Skills Boost",
  },
  {
    period: "Oct 2025",
    title: "Google Cloud Machine Learning Engineer",
    provider: "Google Skills Boost",
  },
  {
    period: "Dec 2024",
    title: "Linux for System Administrators",
    provider: "Orange Digital Center",
  },
  {
    period: "Nov 2023",
    title: "Network Administration",
    provider: "NetAcademy Cisco",
  },
  {
    period: "Juin 2023",
    title: "Fundamental Linux",
    provider: "HTB Academy",
  },
  {
    period: "Nov 2022",
    title: "Data Analysis with Python",
    provider: "Formation spécialisée",
  },
  {
    period: "Août 2022",
    title: "Python for Machine Learning",
    provider: "Machine Learnia",
  },
] as const;

export const languages = [
  { name: "Français", level: "Courant" },
  { name: "Anglais", level: "Intermédiaire" },
  { name: "Swahili", level: "Natif" },
  { name: "Lingala", level: "Natif" },
] as const;

export const stackGroups = [
  {
    title: "Frontend",
    items: [
      "Next.js App Router",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Responsive UI systems",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js runtime",
      "Route handlers Next.js",
      "Validation de payloads",
      "APIs REST légères",
      "Journalisation locale",
    ],
  },
  {
    title: "Cloud & Ops",
    items: [
      "AWS fundamentals",
      "Google Cloud fundamentals",
      "Linux administration",
      "Base réseau",
      "Thinking deployment-ready",
    ],
  },
  {
    title: "Data & ML",
    items: [
      "Python orienté data",
      "Machine learning",
      "Analyse de données",
      "Fondamentaux statistiques",
      "Vision production-minded",
    ],
  },
] as const;

export const deliveryAreas = [
  {
    kicker: "Image",
    title: "Un rendu premium sans être gratuit",
    description:
      "Le site affirme une maîtrise de l’interface avec une direction artistique nette, sobre et intentionnelle. Il vend la crédibilité avant même la lecture détaillée du CV.",
  },
  {
    kicker: "Système",
    title: "Un backend réel, pas une simple vitrine",
    description:
      "Le formulaire de contact, l’API profil et la route de santé montrent qu’il s’agit bien d’un portfolio fullstack, pas juste d’une page statique décorée.",
  },
  {
    kicker: "Profilage",
    title: "Une narration alignée sur le marché",
    description:
      "Le contenu met en avant backend, cloud, machine learning et discipline d’ingénieur, soit exactement les signaux attendus pour projeter un profil professionnel solide.",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Analyse",
    description:
      "Je clarifie le besoin, les contraintes métier et les attentes produit avant de structurer la solution.",
  },
  {
    step: "02",
    title: "Architecture",
    description:
      "Je définis une base cohérente côté interface, logique serveur, données et déploiement.",
  },
  {
    step: "03",
    title: "Implémentation",
    description:
      "Je livre un code lisible, validé et aligné avec des standards de production modernes.",
  },
  {
    step: "04",
    title: "Stabilisation",
    description:
      "Je sécurise l’expérience finale avec des ajustements UI, validation backend et finition produit.",
  },
] as const;

export const showcaseCards = [
  {
    title: "Backend & ML chez Kin Distribution",
    category: "Expérience",
    description:
      "Une expérience hybride entre engineering backend et machine learning sur des cas métier concrets.",
    href: "#experience",
  },
  {
    title: "Backend Engineering chez Pamoja",
    category: "Expérience",
    description:
      "Travail sur des applications web et de la logique serveur en environnement professionnel.",
    href: "#experience",
  },
  {
    title: "Professional Internship à ODC",
    category: "Expérience",
    description:
      "Renforcement des pratiques cloud, Linux et delivery dans un cadre professionnel structurant.",
    href: "#experience",
  },
  {
    title: "Bachelor en Maths, Stats & Info",
    category: "Parcours",
    description:
      "Une base scientifique solide utile pour l’ingénierie logicielle, la data et l’IA appliquée.",
    href: "#profil",
  },
  {
    title: "AWS Cloud Practitioner",
    category: "Certification",
    description:
      "Validation d’un socle cloud crédible pour penser architecture, services et déploiement.",
    href: "#certifications",
  },
  {
    title: "Google Cloud ML Engineer",
    category: "Certification",
    description:
      "Une ligne forte pour un profil qui combine backend moderne, cloud et machine learning.",
    href: "#certifications",
  },
] as const;

export const serviceCards = [
  {
    title: "Frontend soigné",
    description:
      "Interfaces Next.js propres, lisibles, intuitives et pensées pour valoriser un produit ou un profil.",
  },
  {
    title: "Backend fiable",
    description:
      "APIs, validation, logique métier et structuration serveur avec une approche rigoureuse.",
  },
  {
    title: "Cloud & infrastructure",
    description:
      "Sensibilité aux environnements Linux, à l’architecture cloud et aux pratiques de déploiement.",
  },
  {
    title: "Data & ML",
    description:
      "Exploitation de données et machine learning avec une base académique et technique cohérente.",
  },
] as const;

export const references = [
  {
    name: "David Kayembe",
    role: "Chief of IT Department",
    company: "Kin Distribution",
  },
  {
    name: "Gilbert Mboma",
    role: "Re-Start Program Manager",
    company: "Orange Digital Center",
  },
  {
    name: "Constantin Kalembu",
    role: "Co-founder",
    company: "Pamoja Tech Solution",
  },
] as const;

export const workedWith = [
  "Kin Distribution",
  "Orange Digital Center",
  "Pamoja Tech Solution",
  "University of Kinshasa",
  "Amazon Web Services",
  "Google Cloud",
] as const;

export const publicProfilePayload = {
  basics: {
    name: profile.name,
    role: profile.role,
    location: profile.location,
    email: profile.email,
    phone: profile.phone,
    nationality: profile.nationality,
    availability: profile.availability,
    resumeHref: profile.resumeHref,
  },
  quickStats,
  expertiseAreas,
  experiences,
  studies,
  certifications,
  languages,
  stackGroups,
  processSteps,
  showcaseCards,
  serviceCards,
  references,
  workedWith,
} as const;
