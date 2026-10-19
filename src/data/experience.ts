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
    role: "Senior Software Engineer",
    company: "Wolters Kluwer",
    location: "Pune, India",
    period: "Jul 2018 – Present",
    isCurrent: true,
    platform: "CCH SureTax Platform",
    summary:
      "Senior Software Engineer on the CCH SureTax enterprise platform, contributing to backend engineering, architectural alignment, cloud operations, and developer mentorship.",
    responsibilities: [
      "Contribute to backend service design, ensuring alignment with enterprise architecture standards, high availability, and software quality benchmarks.",
      "Take technical ownership of core service modules, conducting code reviews, maintaining architectural documentation, and onboarding engineering peers.",
      "Collaborate closely with enterprise software architects to evaluate solution designs, API specifications, sequence diagrams, and technology trade-offs.",
      "Contribute to enterprise AI initiatives including RAG-based SKU classification, agentic tax return filing workflows, and DOR web extraction prototypes.",
      "Support production application health, diagnostics, and performance optimization across Microsoft Azure and Kubernetes (AKS) environments.",
      "Apply modern engineering practices, including automated unit and integration testing with xUnit/Moq and secure API governance.",
      "Partner with product managers and business stakeholders to translate complex compliance and tax domain rules into dependable technical deliverables.",
    ],
    podPractices: {
      badge: "Recent Engineering Initiative (~6 Months)",
      title: "Pod-Based Engineering & Spec-Driven Development",
      description:
        "Recently working within an evolving pod-based engineering model introduced approximately six months ago, contributing to two projects with small, autonomous teams. Collaborating directly with Product Owners and stakeholders and applying Spec-Driven Development to structure requirements and implementation.",
      points: [
        "Two Projects in Model: Contributed as a Senior Software Engineer across two platform projects under this evolving model, focusing on small, self-sufficient team collaboration.",
        "Direct PO & Stakeholder Collaboration: Collaborated directly with Product Owners and stakeholders to clarify requirements and reduce handoffs, fostering greater team ownership of feature delivery.",
        "Spec-Driven Implementation: Applied OpenSpec and SpecKit to structure requirements and implementation blueprints, with faster and more predictable delivery as the key objective.",
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
      "Playwright",
      "Stagehand",
      "TypeScript",
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
