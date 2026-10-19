export interface EngineeringImpactItem {
  id: string;
  title: string;
  tagline: string;
  category: "Platform Modernization" | "Cloud & DevOps" | "Security & Identity" | "Production Resiliency" | "Enterprise AI";
  challenge: string;
  solution: string;
  outcomes: string[];
  technologies: string[];
}

export const platformContext = {
  platformName: "CCH SureTax Enterprise Platform",
  company: "Wolters Kluwer",
  role: "Senior Software Engineer",
  summary:
    "My core enterprise engineering work centers on backend services supporting high-volume US and Canadian tax calculation engines. These mission-critical systems integrate complex multi-state business location rules, nexus determination algorithms, and exemption-certificate validation logic under strict performance and accuracy requirements.",
};

export const engineeringImpacts: EngineeringImpactItem[] = [
  {
    id: "platform-modernization",
    title: "Enterprise Platform Modernization",
    tagline: "Migrated legacy monolithic .NET Framework services to .NET Core microservices architecture.",
    category: "Platform Modernization",
    challenge:
      "Core tax calculation and transaction services ran on legacy .NET Framework components, creating technical debt, limiting testability, and constraining CI/CD automation and container adoption.",
    solution:
      "Drove the phased migration of critical service components from .NET Framework to modern .NET Core. Restructured service boundaries around domain responsibilities, decoupled database dependencies using clean interfaces, standardized OpenAPI specifications, and eliminated deprecated APIs.",
    outcomes: [
      "Streamlined testing workflows and reduced maintenance overhead across core backend services.",
      "Established modular, service-oriented architecture enabling containerized cloud deployments on Kubernetes (AKS).",
      "Significantly reduced technical debt while ensuring backward compatibility for existing enterprise consumers.",
    ],
    technologies: [".NET Core", "C#", "ASP.NET Core Web API", "Entity Framework Core", "REST APIs", "OpenAPI"],
  },
  {
    id: "cicd-modernization",
    title: "CI/CD Modernization & GitHub Actions",
    tagline: "Established CI/CD automation in Azure DevOps and set up GitHub Actions during enterprise workflow modernization.",
    category: "Cloud & DevOps",
    challenge:
      "Manual deployment handoffs and legacy release procedures required modernization during an enterprise-wide transition from Azure DevOps toward GitHub-based development and delivery workflows, without disrupting active production cloud services.",
    solution:
      "Established CI/CD automation using Azure DevOps and set up GitHub Actions as part of the enterprise transition toward GitHub-based development and delivery workflows. Focused on deployment automation, release consistency, reduced manual intervention, and maintainable delivery pipelines targeting containerized workloads on Microsoft Azure.",
    outcomes: [
      "Set up GitHub Actions workflows while maintaining established Azure DevOps pipelines during ongoing enterprise migration.",
      "Replaced manual deployment handoffs with automated, repeatable pipelines enforcing consistent release validation gates.",
      "Significantly improved deployment consistency and eliminated manual execution errors across release environments.",
    ],
    technologies: ["GitHub Actions", "Azure DevOps", "CI/CD Pipelines", "Git & GitHub", "Docker", "Kubernetes (AKS)", "Microsoft Azure"],
  },
  {
    id: "identity-integration",
    title: "Reusable Enterprise Identity Integration",
    tagline: "Engineered single sign-on with Wolters Kluwer OneID and built a configuration-driven reusable OIDC component.",
    category: "Security & Identity",
    challenge:
      "Multiple tax platform applications required secure, standardized single sign-on across different environments and identity providers without duplicating custom authentication logic in each service.",
    solution:
      "Implemented enterprise Single Sign-On (SSO) using Wolters Kluwer OneID. Designed and engineered an extensible, configuration-driven OIDC authentication component that centralizes token validation, claims transformation, and session handling across multiple identity providers, including Google and FusionAuth.",
    outcomes: [
      "Delivered a modular, plug-and-play authentication library adopted across internal platform services.",
      "Abstracted multi-provider identity integration into declarative configuration with zero code changes required per client.",
      "Strengthened enterprise security compliance and streamlined authentication workflows for enterprise users.",
    ],
    technologies: ["OpenID Connect (OIDC)", "OAuth 2.0", "JWT", "OneID (SSO)", "FusionAuth", "Google Identity", "C#"],
  },
  {
    id: "production-reliability",
    title: "Production Reliability & Root-Cause Remediation",
    tagline: "Diagnosed critical memory leaks and Azure Service Bus authentication failures to restore system stability.",
    category: "Production Resiliency",
    challenge:
      "High-throughput production services experienced memory leaks during peak transaction periods, alongside intermittent Azure Service Bus authentication failures caused by static credential expiration.",
    solution:
      "Conducted in-depth root-cause analysis using runtime memory dumps, diagnostic profiling, and distributed tracing. Remediated resource leakage in connection handling, optimized distributed caching patterns with Redis, and implemented automated secret rotation using Azure Key Vault and Managed Identities.",
    outcomes: [
      "Resolved memory leaks and stabilized memory consumption across high-volume production services.",
      "Eliminated Azure Service Bus authentication drops through automated, zero-downtime secret rotation.",
      "Strengthened system observability and proactive alerting to detect resource anomalies before impacting end users.",
    ],
    technologies: ["Azure Service Bus", "Azure Key Vault", "Managed Identities", "Redis Caching", "SQL Profiling", "Diagnostics"],
  },
  {
    id: "sku-product-mapping",
    title: "AI-Powered SKU-to-Product Mapping",
    tagline: "Contributed to an AI-powered classification solution mapping customer SKUs to product categories using RAG.",
    category: "Enterprise AI",
    challenge:
      "Customer transaction payloads frequently contain non-standardized, ambiguous SKU descriptions that require accurate mapping to standardized Product Group and Product Item categories for tax determination.",
    solution:
      "Contributed to an AI-powered classification solution integrating a FAB-hosted RAG agent. Implemented prompt engineering and context hydration from reference catalog knowledge, structured output parsing, confidence-scoring logic with alternative recommendations, and asynchronous processing using Azure Service Bus and Blob Storage with Key Vault security.",
    outcomes: [
      "Supported automated SKU classification generating structured outputs with confidence scores and explainable rationale.",
      "Provided alternative category recommendations when classification confidence fell below automated thresholds.",
      "Integrated decoupled asynchronous request processing via Azure Service Bus to support enterprise transaction batches.",
    ],
    technologies: [
      "C#",
      ".NET",
      "RAG",
      "LLM Integration",
      "Prompt Engineering",
      "Azure Service Bus",
      "Azure Blob Storage",
      "Azure Key Vault",
      "Structured Outputs",
    ],
  },
  {
    id: "agentic-tax-filing",
    title: "Agentic Tax Returns Filing Platform",
    tagline: "Contributed to an AI-assisted tax-filing platform combining browser automation, document extraction, and approval checkpoints.",
    category: "Enterprise AI",
    challenge:
      "Automating enterprise tax returns across diverse state portals requires navigating varied web form layouts, extracting structured figures from reporting PDFs, and maintaining strict regulatory compliance with human oversight.",
    solution:
      "Contributed to an AI-assisted filing platform that combines LLM-driven browser automation using Stagehand and Playwright with backend workflow services. Assisted in implementing PDF-to-structured-JSON extraction and schema validation, configurable state-specific workflows, automated verification against transaction records, and human-in-the-loop approval checkpoints with pause/resume capabilities.",
    outcomes: [
      "Contributed to browser automation workflows navigating multi-step state tax portal forms with pre-submission validation.",
      "Implemented PDF-to-structured-JSON extraction pipelines transforming return documents into verified payload schemas.",
      "Incorporated human-in-the-loop checkpoints enabling compliance reviewers to inspect, pause, approve, or resume filings.",
    ],
    technologies: [
      "TypeScript",
      "Node.js",
      "Stagehand",
      "Playwright",
      "LLM Tool Calling",
      "C#",
      ".NET",
      "Azure Service Bus",
      "Azure Blob Storage",
      "Azure Key Vault",
    ],
  },
  {
    id: "dor-extractor",
    title: "AI DOR Extractor — Prototype to Product",
    tagline: "Initiated an experimental AI prototype for extracting state tax notices, later handed over for productionization.",
    category: "Enterprise AI",
    challenge:
      "Monitoring frequent tax rate changes, legislative updates, and regulatory notices across multiple state Department of Revenue (DOR) websites was manual and resource-intensive.",
    solution:
      "Initiated and developed an experimental AI-assisted prototype to automate the discovery and extraction of state DOR updates. Built scheduled collection using Playwright and Quartz.NET in C#/.NET, applied FAB prompt-only and RAG agents to transform unstructured web text into structured tax-change data, and integrated Azure Service Bus, Blob Storage, and SQL Server for resilient event buffering. Following successful proof-of-concept validation, the prototype evolved into a formal product feature and was handed over to another team for full productionization.",
    outcomes: [
      "Demonstrated automated scheduled scraping and LLM-assisted extraction of regulatory tax notices from state DOR portals.",
      "Structured and enriched raw web content into normalized tax-change records using prompt-only and RAG agents.",
      "Delivered a validated prototype that advanced to product feature status and was successfully handed over to a dedicated team for production delivery.",
    ],
    technologies: [
      "C#",
      ".NET",
      "Playwright",
      "Quartz.NET",
      "FAB Agents",
      "RAG",
      "Azure Service Bus",
      "Azure Blob Storage",
      "SQL Server",
      "Azure Key Vault",
    ],
  },
];
