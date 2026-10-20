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
    "I’m a Senior Software Engineer based in Pune, with 12+ years of experience across .NET, Azure, and web applications. At Wolters Kluwer, I contribute to enterprise platform modernization and AI-enabled capabilities within CCH SureTax.",
  location: "Pune, India",
  phone: "+91-8817381752",
  currentCompany: "Wolters Kluwer",
  currentRole: "Senior Software Engineer",
  experienceYears: "12+",
  highlights: [
    "12+ Years Enterprise .NET & C#",
    "Microsoft Azure & Kubernetes (AKS)",
    "CI/CD with Azure DevOps",
    "Applied AI & Modern Workflows",
  ],
  social: {
    github: "https://github.com/akaradhey92",
    linkedin: "https://www.linkedin.com/in/ankit-kumar-aradhey",
    email: "akaradhey92@gmail.com",
    resumePdf: "/resume/resume.pdf",
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Work", href: "#impact" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#expertise" },
    { label: "Contact", href: "#contact" },
  ],
  meta: {
    title: "Ankit Aradhey | Senior Software Engineer (.NET, Azure & AI Systems)",
    description:
      "Senior Software Engineer based in Pune, India, with 12+ years of enterprise experience in .NET Core, Microsoft Azure, Kubernetes, SQL Server, and Enterprise AI initiatives.",
    siteUrl: "https://akaradhey92.github.io",
    ogImage: "/images/og-card.png",
  },
};
