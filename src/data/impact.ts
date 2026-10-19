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
  role: "Senior Software Engineer (Technical Lead)",
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
      "Led the phased migration of critical service components from .NET Framework to modern .NET Core. Restructured service boundaries around domain responsibilities, decoupled database dependencies using clean interfaces, standardized OpenAPI specifications, and eliminated deprecated APIs.",
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
    id: "enterprise-ai-workflow",
    title: "Enterprise AI Workflow Integration",
    tagline: "Contributing to the integration of Wolters Kluwer's FAB Agent framework into the Credit Carry Forward workflow.",
    category: "Enterprise AI",
    challenge:
      "Integrating emerging autonomous AI agent capabilities into high-compliance tax workflows while upholding strict enterprise security standards, regulatory auditability, and execution traceability.",
    solution:
      "Contributing to the architecture and implementation of Wolters Kluwer's FAB (Foundation & Beyond) Agent framework integrated into the Credit Carry Forward workflow. Developing API integration contracts, context hydration pipelines, and guarded prompt boundaries that maintain complete audit trails for every automated decision.",
    outcomes: [
      "Enabled secure, auditable AI-assisted automation within existing enterprise tax processing pipelines.",
      "Applied Spec-Driven Development practices ensuring implementation consistency and architectural compliance.",
      "Maintained zero-compromise security posture by keeping AI agent actions verifiable and fully traceable.",
    ],
    technologies: ["FAB Agent Framework", "Spec-Driven Development", "OpenSpec", "SpecKit", "GitHub Copilot", "OpenAPI", "C#"],
  },
];
