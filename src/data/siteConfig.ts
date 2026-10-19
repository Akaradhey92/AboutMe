export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  wordmark: string;
  title: string;
  tagline: string;
  shortBio: string;
  location: string;
  phone: string;
  currentCompany: string;
  currentRole: string;
  experienceYears: string;
  highlights: string[];
  social: {
    github: string;
    linkedin: string;
    email: string;
    resumePdf: string;
  };
  nav: NavItem[];
  meta: {
    title: string;
    description: string;
    siteUrl: string;
    ogImage: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Ankit Aradhey",
  wordmark: "Ankit Aradhey",
  title: "Senior Software Engineer | Enterprise Platform Engineering",
  tagline: "Building Reliable Software. Engineering Scalable Systems.",
  shortBio:
    "Senior Software Engineer with 12+ years of experience building, modernizing, and supporting enterprise software platforms across C#, .NET, Microsoft Azure, Kubernetes, SQL Server, and Angular. Technical lead for strategic cloud modernization and enterprise AI initiatives within the CCH SureTax platform at Wolters Kluwer.",
  location: "Pune, India",
  phone: "+91-8817381752",
  currentCompany: "Wolters Kluwer",
  currentRole: "Senior Software Engineer (Tech Lead)",
  experienceYears: "12+",
  highlights: [
    "12+ Years Enterprise .NET & C#",
    "Microsoft Azure & Kubernetes (AKS)",
    "CI/CD Modernization (GitHub & Azure DevOps)",
    "Enterprise AI & Spec-Driven Development",
  ],
  social: {
    github: "https://github.com/akaradhey",
    linkedin: "https://www.linkedin.com/in/ankit-kumar-aradhey",
    email: "akaradhey92@gmail.com",
    resumePdf: "/resume/resume.pdf",
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Expertise", href: "#expertise" },
    { label: "Impact", href: "#impact" },
    { label: "Experience", href: "#experience" },
    { label: "Philosophy", href: "#philosophy" },
    { label: "Lab", href: "#lab" },
    { label: "Contact", href: "#contact" },
  ],
  meta: {
    title: "Ankit Aradhey | Senior Software Engineer (.NET, Azure & AI Systems)",
    description:
      "Senior Software Engineer based in Pune, India, with 12+ years of enterprise experience in .NET Core, Microsoft Azure, Kubernetes, SQL Server, and Enterprise AI initiatives.",
    siteUrl: "https://akaradhey.github.io",
    ogImage: "/images/og-card.svg",
  },
};
