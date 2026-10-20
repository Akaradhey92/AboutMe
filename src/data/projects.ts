export interface Project {
  published: boolean;
  id: string;
  slug: string;
  title: string;
  status: "In Progress" | "Planned" | "Completed";
  statusNote?: string;
  category: "AI Systems" | "Cloud & .NET" | "Infrastructure" | "Architecture";
  problemStatement: string;
  summary: string;
  description: string;
  technologies: string[];
  keyDecisions: string[];
  architectureOverview: string;
  architectureComponents?: { name: string; description: string }[];
  repoUrl: string | null;
  demoUrl: string | null;
  hasCaseStudy: boolean;
}

export const projects: Project[] = [
  {
    id: "ai-knowledge-assistant",
    published: false,
    slug: "ai-knowledge-assistant",
    title: "AI Knowledge Assistant (RAG Document Q&A)",
    status: "In Progress",
    statusNote: "Architecture and ingestion pipeline prototyped; evaluation and refinement in progress.",
    category: "AI Systems",
    problemStatement:
      "Enterprise teams waste valuable hours navigating fragmented internal documentation, while generic LLMs produce ungrounded hallucinations lacking verifiable citations.",
    summary:
      "A Retrieval-Augmented Generation (RAG) system for grounded document question-answering, featuring document ingestion, text chunking, vector embeddings, and semantic retrieval.",
    description:
      "A hands-on implementation project exploring enterprise search and knowledge retrieval. Rather than relying on simple prompt stuffing, this project builds a deterministic pipeline that extracts text from structured and unstructured documents, calculates token-aware embeddings, stores vectors in a local/hosted index, and synthesizes grounded answers with verifiable source citations.",
    technologies: [
      "C#",
      ".NET",
      "Semantic Kernel",
      "Azure OpenAI",
      "Vector Embeddings",
      "Qdrant / Vector Store",
      "REST APIs",
    ],
    keyDecisions: [
      "Recursive chunking with token overlap to maintain contextual continuity across paragraph boundaries.",
      "Hybrid search strategy combining dense semantic vector embeddings with keyword matching for domain-specific terminology.",
      "Strict context grounding: System prompt constraints explicitly instruct the model to cite retrieved passages and decline to answer when information is absent.",
      "Deterministic benchmarks: Evaluating retrieval precision and citation accuracy before delegating to LLM synthesis.",
    ],
    architectureOverview:
      "Document ingestion pipeline reads source files (PDF, Markdown), splits them into normalized chunks with metadata, generates vector embeddings, and queries a vector store during user interaction before passing top-k documents to the LLM context window.",
    architectureComponents: [
      { name: "Document Loader & Preprocessor", description: "Parses PDF, Markdown, and text docs; cleans whitespace and strips metadata." },
      { name: "Chunker & Tokenizer", description: "Splits text into 500-token chunks with 50-token overlap to prevent boundary clipping." },
      { name: "Vector Index", description: "Stores high-dimensional embedding vectors alongside original passage text and page numbers." },
      { name: "Retrieval & Re-ranker", description: "Retrieves top 10 candidates by cosine similarity and re-ranks top 3 for optimal context density." },
      { name: "LLM Synthesizer", description: "Formulates user-facing answer strictly grounded on supplied retrieved passages." },
    ],
    repoUrl: null, // Placeholder: Update when repo is made public
    demoUrl: null,
    hasCaseStudy: true,
  },
  {
    id: "cloud-native-dotnet-api",
    published: false,
    slug: "cloud-native-dotnet-api",
    title: "Cloud-Native .NET Web API Reference",
    status: "In Progress",
    statusNote: "Core API and clean architecture scaffolded; adding comprehensive test suites and Docker configuration.",
    category: "Cloud & .NET",
    problemStatement:
      "Enterprise backend APIs frequently suffer from tight coupling to database contexts, inconsistent error envelopes, missing telemetry spans, and brittle manual deployments.",
    summary:
      "A production-grade ASP.NET Core REST API demonstrating Clean Architecture, JWT/OIDC authentication, FluentValidation, Serilog structured logging, and containerized deployment.",
    description:
      "A reference template distilling 12+ years of .NET enterprise experience into a clean, modern, cloud-ready service. Built on .NET 8/9, it provides a blueprint for scalable backend systems featuring strict domain boundaries, CQRS patterns, standardized error envelopes, health checks, and CI/CD pipelines.",
    technologies: [
      "C#",
      ".NET 8/9",
      "ASP.NET Core Web API",
      "Entity Framework Core",
      "SQL Server / PostgreSQL",
      "MediatR (CQRS)",
      "Docker",
      "xUnit & FluentAssertions",
    ],
    keyDecisions: [
      "Clean Architecture with strict dependency inversion: Domain and Application layers have zero knowledge of EF Core, SQL Server, or presentation concerns.",
      "CQRS pattern using MediatR to decouple query read paths from mutating command handlers.",
      "Result<T> pattern for explicit error handling, avoiding heavy exception throw/catch cycles for expected business failures.",
      "Structured observability: Structured JSON logs via Serilog, OpenTelemetry tracing spans, and RFC 7807 ProblemDetails for client error responses.",
    ],
    architectureOverview:
      "Presentation layer (Minimal APIs or Controllers) routes HTTP requests through MediatR pipeline behaviors (validation, logging, auth) down to Application handlers, which coordinate Domain entities and Infrastructure repositories.",
    architectureComponents: [
      { name: "Domain Layer", description: "Pure C# domain models, value objects, domain events, and repository interfaces." },
      { name: "Application Layer", description: "Commands, queries, MediatR handlers, and FluentValidation validators." },
      { name: "Infrastructure Layer", description: "EF Core DbContext, migrations, external service adapters, and database configurations." },
      { name: "API / Host Layer", description: "Middleware, dependency injection setup, authentication handlers, and OpenAPI documentation." },
    ],
    repoUrl: null, // Placeholder: Update with GitHub URL when ready
    demoUrl: null,
    hasCaseStudy: true,
  },
  {
    id: "homelab-infrastructure",
    published: false,
    slug: "homelab-infrastructure",
    title: "Homelab & Self-Hosted Infrastructure",
    status: "Planned",
    statusNote: "Architecture planned; hardware topology and service composition in progress.",
    category: "Infrastructure",
    problemStatement:
      "Developers require a cost-effective, private testbed to benchmark container orchestration, reverse proxy routing, and automated disaster recovery without cloud subscription costs.",
    summary:
      "A containerized self-hosted home laboratory environment for continuous learning, experiment sandboxing, automated backups, and secure private networking.",
    description:
      "A personal engineering sandbox created to evaluate infrastructure tooling, container orchestration, reverse proxy configurations, and storage resilience in an environment separate from corporate clouds.",
    technologies: [
      "Docker & Docker Compose",
      "Linux / Debian",
      "Traefik / Nginx Reverse Proxy",
      "Tailscale / WireGuard",
      "Uptime Kuma & Prometheus",
      "Automated Restic Backup",
    ],
    keyDecisions: [
      "Infrastructure as Code: Every service defined in declarative Compose specifications with version-controlled env templates.",
      "Zero-Trust Remote Access: Using Tailscale (WireGuard) mesh VPN rather than opening direct public inbound ports on the router.",
      "Automated 3-2-1 Backups: Encrypted incremental snapshots using Restic with automated integrity verification.",
      "Isolated Bridge Networks: Strict Docker network separation between public-facing reverse proxies and database/backend services.",
    ],
    architectureOverview:
      "Hardware hosts Docker engine managing separate isolated network stacks, with Traefik routing SSL-terminated requests and Tailscale granting secure administrative tunnels.",
    architectureComponents: [
      { name: "Host OS & Container Runtime", description: "Hardened Linux server with automated security updates and Docker daemon." },
      { name: "Reverse Proxy & TLS", description: "Traefik container handling Let's Encrypt automated SSL cert renewal and routing." },
      { name: "Secure Mesh VPN", description: "WireGuard/Tailscale daemon enabling private encrypted access without open firewall ports." },
      { name: "Observability Stack", description: "Lightweight metric collection and uptime checks alerting on service interruptions." },
    ],
    repoUrl: null, // Placeholder
    demoUrl: null,
    hasCaseStudy: true,
  },
  {
    id: "cloud-architecture-reference",
    published: false,
    slug: "cloud-architecture-reference",
    title: "Azure Cloud Architecture Reference Blueprint",
    status: "Planned",
    statusNote: "Conceptual architecture modeled; terraform scripts and service specs under development.",
    category: "Architecture",
    problemStatement:
      "Monolithic cloud APIs face performance degradation and high latency under sudden traffic spikes when order intake and document generation execute synchronously.",
    summary:
      "An end-to-end distributed system blueprint on Microsoft Azure, modeling asynchronous messaging, resilient storage, API gateways, and multi-tier monitoring.",
    description:
      "A reference design demonstrating enterprise cloud patterns for a high-availability distributed business application on Microsoft Azure. Features asynchronous event-driven integration between services using Azure Service Bus, tiered Blob storage for document management, and Azure Monitor / Application Insights for unified telemetry.",
    technologies: [
      "Microsoft Azure",
      "Azure App Services",
      "Azure Functions",
      "Azure Service Bus",
      "Azure Blob Storage",
      "Azure SQL Database",
      "Azure Application Insights",
      "Bicep / Terraform",
    ],
    keyDecisions: [
      "Event-Driven Asynchrony: Decoupled order/document processing via Azure Service Bus topics to absorb traffic spikes without degrading user-facing APIs.",
      "Serverless Workers: Azure Functions consuming Service Bus messages for auto-scaling batch processing with near-zero idle compute costs.",
      "Managed Identities: 100% elimination of connection strings and passwords in config files by enforcing Azure Managed Identities across all services.",
      "Defense-in-depth Security: VNet integration, private endpoints for Azure SQL and Storage, and API gateway routing.",
    ],
    architectureOverview:
      "User traffic hits Azure Front Door / Application Gateway, routes to ASP.NET Core on App Service. Operations publish events to Service Bus, which trigger Azure Functions workers to update SQL Server and store payloads in Blob Storage.",
    architectureComponents: [
      { name: "Edge & Ingress", description: "Azure Front Door / App Gateway with Web Application Firewall (WAF) policies." },
      { name: "Core API Tier", description: "Autoscaling App Service running ASP.NET Core with regional failover readiness." },
      { name: "Message Broker", description: "Azure Service Bus Standard/Premium with dead-letter queues and duplicate detection." },
      { name: "Serverless Workers", description: "Azure Functions in Consumption/Premium tier executing long-running background tasks." },
      { name: "Data Tier", description: "Azure SQL Database with geo-redundant backups alongside tiered Azure Blob Storage." },
    ],
    repoUrl: null, // Placeholder
    demoUrl: null,
    hasCaseStudy: true,
  },
];

// Retain project material as drafts until it is ready to share publicly.
export const publishedProjects = projects.filter((project) => project.published);
