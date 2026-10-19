export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent: boolean;
  isPlaceholder?: boolean;
  platform?: string;
  summary: string;
  responsibilities: string[];
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
    isPlaceholder: false,
    platform: "CCH SureTax Platform",
    summary:
      "Act as technical lead for strategic product initiatives within the CCH SureTax enterprise platform, driving solution design, cloud modernization, and architecture documentation while collaborating closely with software architects and mentoring developers.",
    responsibilities: [
      "Design, develop, and modernize enterprise backend services using C#, .NET, SQL Server, Azure, and Angular for the CCH SureTax platform.",
      "Led modernization of critical enterprise applications from .NET Framework to .NET Core, dramatically improving maintainability and long-term platform evolution.",
      "Designed and implemented cloud-native solutions using Microsoft Azure, Docker, Kubernetes (AKS), and Azure DevOps CI/CD pipelines.",
      "Built secure, scalable REST APIs with emphasis on high performance, maintainability, and extensibility.",
      "Improved application throughput and database response times through Redis caching, SQL stored procedure optimization, and execution plan tuning.",
      "Contribute to strategic enterprise AI initiatives within CCH SureTax by designing AI-enabled capabilities using Spec-Driven Development (OpenSpec, SpecKit, GitHub Copilot, and OpenAPI).",
      "Implement enterprise security and identity protocols using OAuth2, OpenID Connect (OIDC), JWT, Single Sign-On (SSO), and Azure Key Vault.",
      "Collaborate with architects on sequence diagrams and system specifications; mentor developers through code reviews and architecture discussions.",
    ],
    technologies: [
      "C#",
      ".NET Core",
      "Microsoft Azure",
      "Kubernetes (AKS)",
      "Docker",
      "SQL Server",
      "Redis",
      "Azure DevOps",
      "Angular",
      "OAuth2 / OIDC",
      "Spec-Driven AI",
    ],
  },
  {
    id: "cybage-software",
    role: "Software Engineer",
    company: "Cybage Software Pvt Ltd",
    location: "Pune, India",
    period: "Sep 2014 – Jun 2018",
    isCurrent: false,
    isPlaceholder: false,
    summary:
      "Engineered enterprise web applications, REST services, and database layers across the full software development lifecycle using the Microsoft .NET technology stack and Azure.",
    responsibilities: [
      "Developed robust enterprise web applications and backend services using ASP.NET MVC, ASP.NET Web API, AngularJS, and Microsoft Azure.",
      "Designed relational database schemas, stored procedures, and data access layers using Microsoft SQL Server and Entity Framework.",
      "Collaborated directly with business stakeholders and cross-functional teams to translate complex functional requirements into scalable technical implementations.",
      "Supported Azure cloud deployments, production environments, performance optimization, and continuous improvement initiatives in an Agile delivery model.",
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
