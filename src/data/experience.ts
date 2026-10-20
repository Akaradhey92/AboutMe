export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent: boolean;
  summary: string;
  responsibilities: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  year: string;
}

export const experiences: ExperienceItem[] = [
  {
    id: 'wolters-kluwer',
    role: 'Senior Software Engineer',
    company: 'Wolters Kluwer',
    location: 'Pune, India',
    period: 'Jul 2018 – Present',
    isCurrent: true,
    summary: 'Enterprise backend engineering for the CCH SureTax platform.',
    responsibilities: [
      'Design and maintain backend services and REST APIs using C#, .NET, SQL Server, Azure, and Angular.',
      'Contribute to cloud-native solutions and enterprise authentication using Azure, Docker, Kubernetes, OAuth2, and OIDC.',
    ],
  },
  {
    id: 'cybage-software',
    role: 'Software Engineer',
    company: 'Cybage Software Pvt Ltd',
    location: 'Pune, India',
    period: 'Sep 2014 – Jun 2018',
    isCurrent: false,
    summary: 'Enterprise web application development with the Microsoft .NET stack.',
    responsibilities: [
      'Developed applications using ASP.NET MVC, ASP.NET Web API, AngularJS, SQL Server, and Azure.',
      'Collaborated with business stakeholders on technical solutions and supported Azure deployments and Agile delivery.',
    ],
  },
];

export const engineeringCollaboration = {
  summary:
    'I contribute to solution design and implementation, collaborate with software architects, and support teammates through code reviews and technical discussions.',
  areas: [
    {
      title: 'Solution Design',
      description: 'Collaborate with architects on solution designs, API specifications, technical documents, and sequence diagrams.',
    },
    {
      title: 'Team Collaboration',
      description: 'Share knowledge through code reviews, design discussions, debugging sessions, and day-to-day collaboration.',
    },
    {
      title: 'Engineering Standards',
      description: 'Design secure, maintainable APIs and integration workflows that align with enterprise engineering standards.',
    },
  ],
};

export const educationList: EducationItem[] = [
  {
    degree: 'Post Graduate Diploma in Advanced Computing (PG-DAC)',
    institution: 'CDAC ACTS',
    location: 'Pune, India',
    year: '2014',
  },
  {
    degree: 'Bachelor of Engineering (Electronics & Telecommunication)',
    institution: 'S.S.E.C',
    location: 'Bhilai, India',
    year: '2013',
  },
];
