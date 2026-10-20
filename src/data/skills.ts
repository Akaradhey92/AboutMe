export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    title: 'Backend',
    skills: ['C# & .NET', 'ASP.NET Web API & MVC', 'Entity Framework', 'REST & OpenAPI', 'xUnit & Moq'],
  },
  {
    id: 'frontend',
    title: 'Frontend & Web',
    skills: ['Angular', 'TypeScript', 'JavaScript', 'AngularJS (earlier projects)'],
  },
  {
    id: 'cloud-platform',
    title: 'Cloud & Delivery',
    skills: ['Microsoft Azure', 'Docker', 'Kubernetes (AKS)', 'Azure DevOps CI/CD', 'GitHub Actions', 'Git'],
  },
  {
    id: 'data-architecture',
    title: 'Data & Security',
    skills: ['SQL Server', 'Redis', 'OAuth2 & OIDC', 'JWT & SSO', 'Azure Key Vault'],
  },
  {
    id: 'ai-engineering',
    title: 'Applied AI',
    skills: ['RAG & Indexes', 'Foundation & Beyond Agent', 'OpenSpec & SpecKit', 'GitHub Copilot'],
  },
];

export const currentFocus =
  'I’m working on AI-enabled capabilities within CCH SureTax. Recent work spans two projects in a newly introduced pod-based engineering model, collaborating directly with Product Owners and stakeholders. I use OpenSpec, SpecKit, GitHub Copilot, and OpenAPI to structure requirements and implementation.';
