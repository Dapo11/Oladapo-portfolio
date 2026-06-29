import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "Trendly",
    companyName: "Trendly",
    type: "Personal",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription: "Real-Time Entertainment News Dashboard",
    websiteLink:
      "https://trendly-e5x7nz47t-oladapos-projects-d425a67b.vercel.app",
    githubLink: "https://github.com/Dapo11/Trendly",
    techStack: [
      "React",
      "Javascript",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
      "Node.js",
      "Express.js",
      "REST API",
      "vite",
    ],
    startDate: new Date("2025-12-28"),
    endDate: new Date("2026-01-12"),
    companyLogoImg: "/projects/Trendly/Trendly.png",
    pagesInfoArr: [
      {
        title: "Landing & Sections",
        description:
          "Built a full-stack news dashboard that fetches trending music and entertainment stories from external APIs and presents them in a clean, responsive interface.",
        imgArr: ["/projects/Trendly/Trendly.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Trendly is a full-stack news aggregation platform designed to help users quickly discover trending entertainment and pop-culture stories in a clean, modern interface. The application fetches live news data from external APIs and transforms it into visually engaging, easy-to-read news cards optimized for both desktop and mobile experienceS",

        "One of the key challenges during development was working within the limitations of free API plans, including request quotas and delayed updates. To address this, the application was designed with cost-awareness in mind, implementing efficient data fetching strategies and user feedback mechanisms such as update notifications and graceful handling of API limitations.",

        "Although the initial vision included AI-powered news summarization, the project evolved into an exercise in practical engineering and product decision-making—focusing on building a reliable, production-ready application while optimizing for scalability and cost constraints.",
      ],
      bullets: [
        "Real-time entertainment and trending news aggregation",
        "Responsive, mobile-friendly user interface",
        "Dark and light mode support",
        "Dynamic data fetching with loading and error states",
        "Backend API integration and data transformation",
        "Update notification system for API refresh limitations",
        "Production deployment with separate frontend and backend services",
      ],
    },
  },
  {
    id: "dev-events",
    companyName: "Dev Events",
    type: "Personal",
    category: ["Full Stack", "Backend", "Web Dev"],
    shortDescription:
      "A modern event discovery platform built with Next.js that helps developers find conferences, meetups, hackathons, and tech events in one place through a responsive and intuitive interface.",
    techStack: ["Next.js", "React", "Node.js", "Typescript", "Tailwind CSS"],
    startDate: new Date("2026-04-01"),
    endDate: new Date("2024-04-22"),
    companyLogoImg: "/projects/DevEvents/devevents2-big.png",
    pagesInfoArr: [
      {
        title: "Discover and Organize Developer Conferences Worldwide",
        description:
          "Discover and organize developer conferences, hackathons, and meetups in one modern platform. Built with Next.js for speed, scalability, and a seamless user experience.",
        imgArr: ["/projects/DevEvents/devevents1-small.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "DevEvents is a modern web application designed to help developers discover and explore upcoming tech events around the world. From hackathons and meetups to large-scale conferences, the platform brings everything together into a single, easy-to-navigate experience with a clean, responsive user interface.",
        "Built with Next.js, the project focuses on performance, scalability, and user experience. It demonstrates modern frontend development practices including server-side rendering, component-based architecture, responsive design, and dynamic content rendering to deliver a fast and engaging event browsing experience.",
      ],
      bullets: [
        "Browse upcoming developer conferences and meetups",
        "Discover events by location and date",
        "Responsive design optimized for desktop and mobile",
        "Modern card-based UI with smooth user interactions",
        "Dedicated pages for viewing and creating events",
        "Clean and scalable component architecture",
      ],
    },
  },
  {
    id: "nova-cart",
    companyName: "Nova Cart",
    type: "Personal",
    category: ["Full Stack", "Web Dev", "UI/UX"],
    shortDescription:
      "NovaCart is a high-performance, full-stack e-commerce platform designed to provide a seamless shopping experience for modern consumers.",
    githubLink: "https://github.com/Dapo11/Novacart",
    techStack: ["Next.js", "React", "Typescript", "Supabase", "Tailwind CSS"],
    startDate: new Date("2026-06-10"),
    endDate: new Date("2026-06-18"),
    companyLogoImg: "/projects/Novacart/novacart-1-fullscreen.png",
    pagesInfoArr: [
      {
        title: "Landing Page",
        description:
          "The high-conversion storefront entry point, featuring responsive hero sections, categorized product navigation, and real-time product listing feeds.",
        imgArr: ["/projects/Novacart/novacart-1-fullscreen.png"],
      },
      {
        title: "Cart Page",
        description:
          "A reactive shopping interface that utilizes custom state management to provide instant subtotals, quantity adjustments, and seamless item removal.",
        imgArr: ["/projects/Novacart/novacart-cartpage.png"],
      },
      {
        title: "Checkout Page",
        description:
          "A secure, validation-heavy shipping and order summary workflow, designed to capture customer delivery details and process transactional intent.",
        imgArr: ["/projects/Novacart/novacart-checkout.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "NovaCart is a full-stack e-commerce platform built to deliver a smooth and modern online shopping experience. It combines a powerful backend with an intuitive frontend, allowing users to browse products, manage their carts, and place orders seamlessly.",
        "The application was designed with scalability in mind. Products can be organized into categories, inventory can be managed efficiently, and the system is structured to support future features and growth.",
        "For development, NovaCart uses SQLite for fast local testing and PostgreSQL for production environments. The project also uses TypeScript and Prisma to keep data consistent and reduce bugs, ensuring that information flows reliably from the database to the user interface.",
        "Beyond being an online store, NovaCart represents my journey into full-stack development. From planning the architecture and setting up the database to building cart functionality and managing application state, the project demonstrates my ability to build and structure real-world web applications using modern technologies.",
      ],
      bullets: [
        "Engineered a dual-database environment setup to maintain stability across development and deployment pipelines.",
        "Implemented TypeScript type-safety and Prisma schema modeling to ensure consistent data flow between the database and the UI.",
        "Applied professional environment variable management and Git security best practices to protect sensitive system credentials.",
        "Developed efficient context-based cart logic and dynamic checkout validation to provide a seamless user purchasing journey.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
