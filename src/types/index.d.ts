export type Site = {
  name: string;
  title: string;
  description: string;
  keywords: string[];
  siteUrl: string;
  creator: {
    name: string;
    url: string;
  };
  ogImage: string;
  links: {
    x: string;
    github: string;
  };
};

export type Portfolio = {
  name: string;
  tagline: string;
  bio: string;
  resume: string;
  image: Array;
  links: {
    x: string;
    github: string;
    linkedin: string;
    mail: string;
    discord: string;
  };
};

type defaultProfile = {
  name: string;
  url?: string;
  image?: string;
};

export type Experience = {
  title: string;
  employmentType: string;
  company: defaultProfile;
  location: defaultProfile;
  start: string;
  end: string;
  description: string[];
};

export type NavItem = {
  title: string;
  url: string;
};

export type Article = {
  url: string;
  slug: string;
  title: string;
  description: string;
  date: string; // ISO date string
  published: boolean;
  tags: string[];
  body: string; // Assuming MDX content as a string
  image?: string;
  imageDark?: string;
  toc?: any; // Table of contents structure, define explicitly if needed
  author: string;
};
