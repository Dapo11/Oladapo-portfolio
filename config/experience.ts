import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "personal-projects",
    position: "Full-Stack Developer",
    company: "Independent Projects",
    location: "Remote",
    startDate: new Date("2020-01-01"),
    endDate: "Present",
    description: [
      "Designed and developed full-stack applications using React, Next.js, Node.js, and modern web technologies.",
      "Built production-style projects including an e-commerce platform, a real-time news dashboard, and event discovery applications.",
      "Managed the entire development lifecycle from architecture planning and database design to deployment and maintenance.",
    ],
    achievements: [
      "Built NovaCart, a full-stack e-commerce platform using Next.js, Prisma, PostgreSQL, and TypeScript.",
      "Developed Trendly, a real-time entertainment news dashboard powered by external APIs and a custom Express backend.",
      "Created DevEvents, a responsive platform for discovering developer conferences and tech events.",
      "Deployed full-stack applications using Vercel and Render while implementing secure environment management.",
      "Gained hands-on experience with API integration, database design, authentication, and state management.",
    ],
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "TypeScript",
      "JavaScript",
      "Prisma",
      "PostgreSQL",
      "MongoDB",
      "Tailwind CSS",
      "REST APIs",
      "Git",
      "GitHub",
      "Vercel",
      "Render",
    ],
    companyUrl: "https://github.com/Dapo11",
    logo: "/experience/personal-projects-logo.png",
  },

  {
    id: "softcode-innovations",
    position: "Web Developer Intern",
    company: "SoftCode Innovations",
    location: "Lagos, Nigeria",
    startDate: new Date("2022-10-16"),
    endDate: new Date("2025-07-28"),
    description: [
      "Learned Angular and contributed to a real-world application during my internship at Softcode Innovations, focusing primarily on frontend development and component-based architecture.",
      "Worked closely with the team to implement features, consume APIs, and understand real-world development workflows, version control, and collaborative software engineering practices.",
    ],
    achievements: [
      "Built responsive and reusable Angular components for a real-world application during my internship at Softcode Innovations.",
      "Collaborated with a development team to implement frontend features and integrate REST APIs.",
      "Gained practical experience with Git, version control workflows, and professional software development practices.",
    ],
    skills: [
      "React",
      "Angular",
      "GraphQL",
      "REST APIs",
      "HTML 5",
      "CSS 3",
      "Javascript",
    ],
    companyUrl: "https://softcode.ng/",
    logo: "/experience/softcode innovations.png",
  },
];
