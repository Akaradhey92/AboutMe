export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent: boolean;
  platform?: string;
  summary: string;
  responsibilities: string[];
  podPractices?: {
    badge: string;
    title: string;
    description: string;
    points: string[];
  };
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  year: string;
}

export const experiences: ExperienceItem[] = [
  {
    id: "wolters-kluwer",
    role: "Senior Software Engineer (Technical Lead)",
    company: "Wolters Kluwer",
    location: "Pune, India",
    period: "Jul 2018 – Present",
    isCurrent: true,
    platform: "CCH SureTax Platform",
    summary:
      "Serve as Senior Software Engineer and Technical Lead on the CCH SureTax enterprise platform, steering backend engineering, architectural alignment, cloud operations, and developer mentorship.",
    responsibilities: [
      "Provide technical leadership across backend service design, ensuring alignment with enterprise architecture standards, high availability, and software quality benchmarks.",
      "Drive platform evolution, code reviews, architectural documentation, and technical onboarding for cross-functional engineering teams.",
      "Collaborate closely with enterprise software architects to evaluate solution designs, API specifications, sequence diagrams, and technology trade-offs.",
      "Oversee production application health, diagnostics, and performance optimization across Microsoft Azure and Kubernetes (AKS) environments.",
      "Champion modern engineering practices, including automated testing with xUnit/Moq, Spec-Driven Development, and secure API governance.",
      "Partner with product managers and business stakeholders to translate complex compliance and tax domain rules into dependable technical deliverables.",
    ],
    podPractices: {
      badge: "Delivery Model & Engineering Practices",
      title: "Pod-Based Engineering & Spec-Driven Development",
      description:
        "Work within an evolving pod-based engineering model of small, autonomous, self-sufficient teams aligned to specific platform domains, partnering directly with Product Owners to drive predictable delivery.",
      points: [
        "Autonomous Pod Collaboration: Engage in cross-functional pods with direct Product Owner and stakeholder alignment, minimizing handoff latency and maximizing end-to-end feature ownership.",
        "Spec-Driven Development (SDD): Apply structured specification workflows using OpenSpec and SpecKit to align functional requirements, API contracts, and implementation blueprints before coding begins.",
        "Disciplined AI-Augmented Delivery: Leverage GitHub Copilot alongside rigorous peer reviews to accelerate implementation velocity and code consistency while targeting faster, more predictable release cycles.",
      ],
    },
    technologies: [
      "C#",
      ".NET Core",
      "Microsoft Azure",
      "Kubernetes (AKS)",
      "Docker",
      "SQL Server",
      "Redis",
      "GitHub Actions",
      "Azure DevOps",
      "Angular",
      "SpecKit / OpenSpec",
      "OAuth2 / OIDC",
    ],
  },
  {
    id: "cybage-software",
    role: "Software Engineer",
    company: "Cybage Software Pvt Ltd",
    location: "Pune, India",
    period: "Sep 2014 – Jun 2018",
    isCurrent: false,
    summary:
      "Engineered scalable enterprise web applications, REST services, and database layers using the Microsoft .NET technology stack and Azure cloud services.",
    responsibilities: [
      "Developed backend business logic and RESTful APIs using ASP.NET MVC, ASP.NET Web API, and C#.",
      "Designed normalized SQL Server database structures, stored procedures, and Entity Framework data access layers.",
      "Built responsive frontend modules using AngularJS and modern JavaScript to interface with backend services.",
      "Participated in Agile sprint ceremonies, technical estimation, peer code reviews, and production release support.",
    ],
    technologies: [
      "ASP.NET MVC",
      "ASP.NET Web API",
      "C#",
      ".NET Framework",
      "SQL Server",
      "AngularJS",
      "Microsoft Azure",
      "Entity Framework",
      "Agile",
    ],
  },
];

export const educationList: EducationItem[] = [
  {
    degree: "Post Graduate Diploma in Advanced Computing (PG-DAC)",
    institution: "CDAC ACTS",
    location: "Pune, India",
    year: "2014",
  },
  {
    degree: "Bachelor of Engineering (Electronics & Telecommunication)",
    institution: "S.S.E.C",
    location: "Bhilai, India",
    year: "2013",
  },
];
