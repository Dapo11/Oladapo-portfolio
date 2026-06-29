import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Oladapo Ezekiel portfolio website.",
    },
  },
  skills: {
    title: "Skills",
    description: "Key skills that define my professional identity.",
    metadata: {
      title: "Skills",
      description:
        "Oladapo Ezekiel's key skills that define his professional identity.",
    },
  },
  projects: {
    title: "Projects",
    description: "Showcasing impactful projects and technical achievements.",
    metadata: {
      title: "Projects",
      description:
        "Oladapo Ezekiel's impactful projects in building web applications.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect and explore collaborations.",
    metadata: {
      title: "Contact",
      description: "Contact Oladapo Ezekiel for collaborations and inquiries.",
    },
  },
  contributions: {
    title: "Contributions",
    description: "Open-source contributions and community involvement.",
    metadata: {
      title: "Contributions",
      description:
        "Oladapo Ezekiel's open-source contributions and community involvement.",
    },
  },
  resume: {
    title: "Resume",
    description: "Oladapo Ezekiel's resume.",
    metadata: {
      title: "Resume",
      description: "Oladapo Ezekiel's resume.",
    },
  },
  blogs: {
    title: "Blogs",
    description: "Thoughts on software engineering, and building in public.",
    metadata: {
      title: "Blogs",
      description:
        "Oladapo Ezekiel's blog — thoughts on AI, software engineering, and building in public.",
    },
  },
  experience: {
    title: "Experience",
    description: "Professional journey and career timeline.",
    metadata: {
      title: "Experience",
      description:
        "Oladapo Ezekiel's professional journey and experience timeline.",
    },
  },
};
