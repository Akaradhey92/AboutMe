export interface PhilosophyPrinciple {
  number: string;
  title: string;
  quote: string;
  description: string;
  keyPractices: string[];
}

export const engineeringPrinciples: PhilosophyPrinciple[] = [
  {
    number: "01",
    title: "Maintainability & Pragmatic Architecture",
    quote: "Code is read ten times more often than it is written.",
    description:
      "Clever code often becomes tomorrow's production incident. I prioritize clean domain boundaries, explicit naming, predictable control flows, and simple abstractions that allow any engineer to read, debug, and safely extend the system. Architecture is kept pragmatic and documented through clear Architectural Decision Records (ADRs) rather than dogmatic rules.",
    keyPractices: [
      "Explicit error handling and predictable control flow",
      "Domain-driven boundaries with minimal cognitive overhead",
      "Living documentation via Architectural Decision Records (ADRs)",
    ],
  },
  {
    number: "02",
    title: "Resilience, Observability & Data Integrity",
    quote: "Reliability is designed into architecture, not patched in after release.",
    description:
      "You cannot scale or debug what you cannot observe. I build systems with defense-in-depth security, structured logging with correlation IDs, and actionable health probes from day one. APIs and database schemas are treated as long-lasting contracts that require thoughtful normalization, indexing strategies, and idempotent operations.",
    keyPractices: [
      "Structured observability with correlation IDs and OpenTelemetry",
      "Durable schema design, indexing, and transactional boundaries",
      "Idempotent API contracts with RFC 7807 problem details",
    ],
  },
  {
    number: "03",
    title: "Automated Delivery & Disciplined AI Engineering",
    quote: "Automate routine operations; bring engineering rigor to modern frontiers.",
    description:
      "Manual production steps invite human error. I automate test verification, container packaging, and CI/CD delivery pipelines so releases are predictable non-events. As software engineering expands into LLMs and RAG architectures, I apply the same foundational discipline: strict context grounding, evaluation benchmarks, and reliable integration.",
    keyPractices: [
      "Automated CI/CD pipelines and repeatable container runtimes",
      "Zero-trust security and automated configuration validation",
      "Deterministic benchmarks and strict grounding for AI systems",
    ],
  },
];
