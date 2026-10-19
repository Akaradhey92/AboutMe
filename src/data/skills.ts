export interface SkillItem {
  name: string;
  context?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  badge: string;
  isLearning?: boolean;
  summary: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    title: "Backend & Frameworks",
    badge: "Core Expertise",
    isLearning: false,
    summary:
      "Modern server-side architecture, enterprise .NET Core modernization, high-performance REST APIs, and microservices.",
    skills: [
      { name: "C#", context: "Modern language features, asynchronous patterns, LINQ" },
      { name: ".NET Core & .NET", context: "Core modernization, dependency injection, middleware" },
      { name: "ASP.NET Web API & MVC", context: "RESTful services, content negotiation, OpenAPI" },
      { name: "Entity Framework", context: "EF Core migrations, query optimization, repositories" },
      { name: "WCF & Legacy Services", context: "Enterprise migration to modern .NET microservices" },
      { name: "Testing (xUnit, Moq)", context: "Unit testing, mock frameworks, integration test suites" },
    ],
  },
  {
    id: "cloud-platform",
    title: "Cloud & DevOps",
    badge: "Core Expertise",
    isLearning: false,
    summary:
      "Enterprise cloud-native infrastructure, automated CI/CD deployment pipelines, and container orchestration.",
    skills: [
      { name: "Microsoft Azure", context: "App Services, Azure Functions, Resource Groups" },
      { name: "Kubernetes (AKS)", context: "Cluster management, container deployments, ingress" },
      { name: "Docker", context: "Containerization, image hardening, multi-stage builds" },
      { name: "Azure Service Bus", context: "Asynchronous decoupled messaging, queues, topics" },
      { name: "Azure Blob Storage", context: "Tiered object storage, lifecycle management" },
      { name: "Azure DevOps & CI/CD", context: "YAML release pipelines, branch policies, automated gates" },
      { name: "Git", context: "Branching strategies, code review workflows, pull requests" },
    ],
  },
  {
    id: "data-architecture",
    title: "Data, Security & Architecture",
    badge: "Core Expertise",
    isLearning: false,
    summary:
      "Relational data persistence, in-memory caching, distributed architecture design, and enterprise zero-trust identity.",
    skills: [
      { name: "Microsoft SQL Server", context: "Stored procedures, indexing, execution plans, query tuning" },
      { name: "Redis Caching", context: "Distributed cache, high-throughput session state, caching patterns" },
      { name: "OAuth2 & OIDC", context: "OpenID Connect, JWT tokens, SSO integration" },
      { name: "Azure Key Vault", context: "Secret management, certificates, encryption keys" },
      { name: "Microservices & Distributed Systems", context: "Decoupled services, event-driven design, resiliency" },
      { name: "API Design & OpenAPI", context: "REST contract governance, Swagger/OpenAPI specifications" },
      { name: "SOLID & Design Patterns", context: "Domain design, separation of concerns, maintainability" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    badge: "Production Applied",
    isLearning: false,
    summary:
      "Client-side web development building intuitive enterprise dashboards and single-page applications.",
    skills: [
      { name: "Angular", context: "Enterprise components, TypeScript, RxJS, routing" },
      { name: "TypeScript", context: "Strict typing, interfaces, generics, maintainable architecture" },
      { name: "JavaScript", context: "Modern ES6+, DOM manipulation, asynchronous programming" },
      { name: "HTML & CSS", context: "Responsive layouts, Flexbox, CSS Grid, semantic standards" },
    ],
  },
  {
    id: "ai-engineering",
    title: "Enterprise AI & Modernization",
    badge: "Enterprise AI & Exploration",
    isLearning: true,
    summary:
      "Actively driving enterprise AI capabilities within CCH SureTax using Spec-Driven Development, RAG pipelines, and agent integration.",
    skills: [
      { name: "Spec-Driven Development", context: "OpenSpec, SpecKit, OpenAPI contract-first workflows" },
      { name: "Enterprise AI Integration", context: "Foundation & Beyond Agent workflows within enterprise platforms" },
      { name: "Retrieval-Augmented Generation (RAG)", context: "Document ingestion, embeddings, semantic retrieval, indexes" },
      { name: "GitHub Copilot Integration", context: "Augmenting engineering workflows with disciplined AI tooling" },
      { name: "Python & LLM Pipelines", context: "Prototyping knowledge retrieval and grounded assistant workflows" },
    ],
  },
];
