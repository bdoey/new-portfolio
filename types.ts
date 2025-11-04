export enum Tab {
  Resume = 'resume',
  Publications = 'publications',
  Projects = 'projects',
}

// FIX: Add Section enum for components/Content.tsx to correctly reference content sections.
export enum Section {
  Publications = 'publications',
  GenerativeAI = 'generative-ai',
  FinTechApps = 'fintech-apps',
  DataScience = 'data-science',
  MachineLearning = 'machine-learning',
}

export interface Publication {
  title: string;
  date: string;
  journal: string;
  doi: string;
  doiLink: string;
  authors: string;
  abstract: string;
}

export interface Project {
  title: string;
  imageUrl: string;
  description: string;
  link: string;
}

export interface Resume {
  contact: {
    name: string;
    title: string;
    location: string;
    phone: string;
    email: string;
    website: string;
    websiteUrl: string;
  };
  summary: string;
  skills: { title: string; points: string[] }[];
  experience: {
    title: string;
    company: string;
    dates: string;
    description: string[];
  }[];
  education: {
    degree: string;
    institution: string;
    description: string;
  }[];
}
