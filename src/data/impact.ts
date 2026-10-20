export interface EngineeringImpactItem {
  id: string;
  title: string;
  contribution: string;
  outcome: string;
}

// Selected professional contributions supported by the supplied résumé.
export const engineeringImpacts: EngineeringImpactItem[] = [
  {
    id: 'platform-modernization',
    title: '.NET Platform Modernization',
    contribution:
      'Contributed to the modernization of critical CCH SureTax applications from .NET Framework to .NET Core.',
    outcome:
      'Improved maintainability and supported long-term platform evolution.',
  },
  {
    id: 'performance-reliability',
    title: 'Performance & Reliability',
    contribution:
      'Improved application performance through Redis caching, SQL optimization, and production tuning. Investigated issues across distributed systems and Azure infrastructure.',
    outcome:
      'Resolved production issues involving application performance and authentication.',
  },
  {
    id: 'identity-integration',
    title: 'Reusable Identity Integration',
    contribution:
      'Implemented OneID single sign-on and contributed to reusable, configuration-driven OIDC integration for OneID, Google, and FusionAuth.',
    outcome:
      'Supported consistent authentication across applications and identity providers.',
  },
  {
    id: 'delivery-automation',
    title: 'Delivery Automation',
    contribution:
      'Contributed CI/CD automation with Azure DevOps and recently set up GitHub Actions during the ongoing transition toward GitHub-based development and delivery.',
    outcome:
      'Supported repeatable deployments to Azure while the delivery tooling evolves.',
  },
];

export const enterpriseAIContributions = [
  {
    id: 'sku-mapping',
    title: 'SKU-to-Product Mapping',
    summary:
      'Contributed to RAG-based classification that maps customer SKU descriptions to product categories for tax determination.',
    details:
      'Integrated FAB-hosted agents with structured outputs, confidence-based acceptance, and alternative recommendations, using asynchronous .NET and Azure service integration.',
  },
  {
    id: 'tax-filing',
    title: 'Agentic Tax Returns Filing',
    summary:
      'Contributed to AI-assisted filing workflows combining browser automation, document extraction, and human approval checkpoints.',
    details:
      'Work included Stagehand/Playwright automation, PDF-to-JSON extraction and validation, LLM tool calling, and configurable workflows with approval and pause/resume checkpoints.',
  },
  {
    id: 'dor-extractor',
    title: 'AI DOR Extractor',
    summary:
      'Initiated an experimental prototype to collect and structure state Department of Revenue updates. It later evolved into a product feature.',
    details:
      'Built the prototype using C#/.NET, Playwright, Quartz.NET, FAB agents, and Azure services. Productionization and production ownership were handed over to another team.',
  },
];

export const modernizationCaseStudy = {
  title: 'Modernizing CCH SureTax',
  sections: [
    {
      title: 'The situation',
      description:
        'Critical applications within the CCH SureTax enterprise platform used .NET Framework. Modernization focused on improving maintainability and supporting the platform’s long-term evolution.',
    },
    {
      title: 'My contribution',
      description:
        'I contributed to modernizing critical applications from .NET Framework to .NET Core. My role involves hands-on software engineering, participation in solution design and implementation, and close collaboration with software architects and fellow developers.',
    },
    {
      title: 'The engineering approach',
      description:
        'Move the applications to .NET Core as a foundation for continued platform development. The focus was maintainability and long-term evolution, alongside the wider engineering requirements of secure, scalable enterprise software.',
    },
    {
      title: 'The outcome',
      description:
        'The modernization improved maintainability and enabled long-term platform evolution. This work sits alongside my ongoing contributions to REST APIs, cloud-native applications, production reliability, and enterprise integrations.',
    },
  ],
};
