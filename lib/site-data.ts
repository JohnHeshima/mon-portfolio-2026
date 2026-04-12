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
    period: "Jan 2025 · Now",
    role: "Backend Developer & ML Engineer",
    company: "Kin Distribution · Kinshasa",
    companyHref: "https://kindistribution.com/",
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
    companyHref:
      "https://engageforchange.orange.com/fr/country/cd/programs/a0178fcc-c5ad-4ae6-8287-3680775ccb33",
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
    companyHref: "https://mascodeproduct.com/",
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
    href: "https://www.credly.com/badges/a758fb7a-5191-46e9-9866-a19dcbb318fd/public_url",
  },
  {
    period: "Nov 2024 · Jan 2025",
    title: "AWS re/Start Graduate",
    provider: "Orange Digital Center",
    href: undefined,
  },
  {
    period: "Mars 2025 · Mai 2025",
    title: "Google Cloud Digital Leader",
    provider: "Skills Boost / Google Cloud",
    href: undefined,
  },
  {
    period: "Juin 2025",
    title: "Google Cloud Digital Leader",
    provider: "Google Skills Boost",
    href: undefined,
  },
  {
    period: "Oct 2025",
    title: "Google Cloud Machine Learning Engineer",
    provider: "Google Skills Boost",
    href: "https://www.skills.google/course_templates/593",
  },
  {
    period: "Dec 2024",
    title: "Linux for System Administrators",
    provider: "Orange Digital Center",
    href: undefined,
  },
  {
    period: "Nov 2023",
    title: "Network Administration",
    provider: "NetAcademy Cisco",
    href: undefined,
  },
  {
    period: "Juin 2023",
    title: "Fundamental Linux",
    provider: "HTB Academy",
    href: undefined,
  },
  {
    period: "Nov 2022",
    title: "Data Analysis with Python",
    provider: "Formation spécialisée",
    href: undefined,
  },
  {
    period: "Août 2022",
    title: "Python for Machine Learning",
    provider: "Machine Learnia",
    href: undefined,
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
    title: "Machine Learning & IA",
    description:
      "Mon premier centre d’intérêt est le machine learning et l’intelligence artificielle, au cœur même de mon parcours de recherche en master.",
  },
  {
    step: "02",
    title: "Software Engineering",
    description:
      "Je suis profondément engagé dans l’ingénierie logicielle, avec une pratique fullstack actuelle centrée sur l’écosystème JavaScript.",
  },
  {
    step: "03",
    title: "Cloud Infrastructure",
    description:
      "L’infrastructure cloud m’intéresse fortement, avec une base validée par des certifications AWS et Google Cloud.",
  },
  {
    step: "04",
    title: "Digitalisation des services",
    description:
      "Je travaille sur la numérisation des services de mon pays afin de contribuer à l’élévation de son niveau technologique sur le continent.",
  },
] as const;

export const profileLayers = [
  {
    id: "01",
    domain: "Web Engineering",
    title:
      "Applications web lisibles, scalables et prêtes à convaincre dès l’interface.",
    description:
      "Le profil ne repose pas seulement sur de la théorie. Il y a plus de trois ans d’expérience en développement web avec une capacité à transformer un besoin en expérience produit propre et crédible.",
    evidence: [
      "3+ ans d’expérience professionnelle en web development",
      "Approche fullstack avec exécution UI + logique métier",
      "Capacité à diriger les équipes",
      "Capacité à livrer des produits premium et structurés",
    ],
    signal: "Produit",
    accent: "teal",
  },
  {
    id: "02",
    domain: "Backend Systems",
    title:
      "Un cœur de profil orienté backend, architecture applicative et services.",
    description:
      "L’expérience chez Pamoja Tech Solution puis Kin Distribution confirme une montée en gamme cohérente sur les problématiques serveur, la structuration des APIs et la stabilité applicative.",
    evidence: [
      "Backend Developer & ML Engineer chez Kin Distribution",
      "Backend Developer chez Pamoja Tech Solution",
      "Travail sur logique serveur, intégration et fiabilité sur des projets à l'échelle nationale et internationnale.",
    ],
    signal: "Serveur",
    accent: "cyan",
  },
  {
    id: "03",
    domain: "Cloud & Infrastructure",
    title:
      "Une crédibilité cloud appuyée par des certifications et une culture système réelle.",
    description:
      "Le socle cloud ne sert pas juste à faire joli dans un CV. Il renforce la manière de penser architecture, déploiement, Linux, réseau et environnements modernes de production.",
    evidence: [
      "AWS Certified Cloud Practitioner",
      "Google Cloud Digital Leader",
      "Google Cloud ML Engineer",
      "Linux for System Administrators + Network Administration",
    ],
    signal: "Infra",
    accent: "amber",
  },
  {
    id: "04",
    domain: "Data Science & ML",
    title:
      "Une couche analytique sérieuse, ancrée dans les maths, la statistique et l’IA.",
    description:
      "Le bachelor en mathématiques, statistiques et informatique, prolongé par un master orienté recherche en data science et intelligence artificielle, donne au profil une profondeur rare pour un développeur fullstack.",
    evidence: [
      "Bachelor en Mathématiques, Statistiques et Informatique",
      "Master en Data Science & Intelligence Artificielle",
      "Python for Machine Learning + Data Analysis with Python",
    ],
    signal: "Intelligence",
    accent: "slate",
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
    id: "01",
    title: "Applications web et interfaces produit",
    summary:
      "Conception d’interfaces web structurées, lisibles et alignées sur des objectifs de crédibilité, de clarté et d’usage.",
    details: [
      "Développement d’interfaces Next.js propres, responsive et adaptées à des environnements professionnels.",
      "Structuration de composants, hiérarchie visuelle et cohérence d’expérience sur l’ensemble d’un produit.",
      "Approche centrée sur l’utilité réelle de l’interface, pas seulement sur l’esthétique.",
    ],
  },
  {
    id: "02",
    title: "Backend, APIs et logique métier",
    summary:
      "Mise en place de socles backend fiables pour porter la logique applicative, les flux de données et les intégrations métier.",
    details: [
      "Conception d’APIs, validation des entrées et structuration claire des responsabilités côté serveur.",
      "Organisation de la logique métier pour faciliter la maintenance, l’évolution et la robustesse du système.",
      "Exécution orientée lisibilité du code, stabilité et préparation à la production.",
    ],
  },
  {
    id: "03",
    title: "Cloud, environnement Linux et readiness infra",
    summary:
      "Accompagnement technique sur les fondations cloud et les environnements d’exécution nécessaires à un delivery sérieux.",
    details: [
      "Lecture technique des besoins de déploiement, des contraintes d’environnement et des exigences d’exploitation.",
      "Base concrète sur AWS, Google Cloud, Linux et fondamentaux réseau.",
      "Vision orientée architecture propre, continuité de service et préparation opérationnelle.",
    ],
  },
  {
    id: "04",
    title: "Data, machine learning et IA appliquée",
    summary:
      "Intervention sur des sujets data et ML avec une base scientifique réelle et une logique tournée vers les usages concrets.",
    details: [
      "Analyse de données et modélisation sur des cas d’usage où la compréhension métier reste centrale.",
      "Capacité à articuler développement logiciel, données et intelligence artificielle dans une même solution.",
      "Positionnement renforcé par un parcours académique orienté mathématiques, statistique et recherche en IA.",
    ],
  },
] as const;

export const references = [
  {
    name: "David Kayembe",
    role: "Chief of IT Department",
    company: "Kin Distribution",
    companyHref: "https://kindistribution.com/",
  },
  {
    name: "Gilbert Mboma",
    role: "Re-Start Program Manager",
    company: "Orange Digital Center",
    companyHref:
      "https://engageforchange.orange.com/fr/country/cd/programs/a0178fcc-c5ad-4ae6-8287-3680775ccb33",
  },
  {
    name: "Constantin Kalembu",
    role: "Co-founder",
    company: "Pamoja Tech Solution",
    companyHref: "https://mascodeproduct.com/",
  },
] as const;

export const workedWith = [
  { label: "Kin Distribution", href: "https://kindistribution.com/" },
  {
    label: "Orange Digital Center",
    href: "https://engageforchange.orange.com/fr/country/cd/programs/a0178fcc-c5ad-4ae6-8287-3680775ccb33",
  },
  { label: "Pamoja Tech Solution", href: "https://mascodeproduct.com/" },
  { label: "University of Kinshasa", href: undefined },
  { label: "Amazon Web Services", href: undefined },
  { label: "Google Cloud", href: undefined },
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
  profileLayers,
  showcaseCards,
  serviceCards,
  references,
  workedWith,
} as const;
