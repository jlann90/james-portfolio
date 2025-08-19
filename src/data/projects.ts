import IndeedExamples from "../assets/IndeedExamples.png";
import RegenceExamples from "../assets/RegenceExamples.png";
import PortfolioWebsite from "../assets/PortfolioWebsite.png";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  websiteUrl?: string;
  buttonText?: string;
}

export const projects: Project[] = [
  {
    id: "indeed-component-library",
    title: "Indeed Component Library",
    description: "Example emails created with the React based module library",
    image: IndeedExamples,
  },
  {
    id: "cambia-component-library",
    title: "Cambia Component Library",
    description: "Example emails created with Salesforce Email Studio",
    image: RegenceExamples,
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description: "Example emails created with the React based module library",
    image: PortfolioWebsite,
  },
];

// Extended project data for the Project component
export const projectDetails: Project[] = [
  {
    id: "indeed-component-library",
    title: "Indeed Component Library",
    description:
      "I contributed to the development of Indeed's React-based Design Library, focusing on creating consistent, accessible, and high-performance components. Collaborating with design and engineering teams, I translated Figma specs into responsive React components, improving both UX and design system efficiency. I also mentored teams on best practices, streamlined workflows, and addressed technical debt, leading to faster development and better reusability across projects. This experience deepened my expertise in building scalable, user-centric design systems. Due to company policy, I'm unable to share work that isn't publicly available. However, I'd be happy to provide more details in a conversation, and you can view design library examples on the company's website.",
    image: IndeedExamples,
    websiteUrl: "https://indeed.com",
    buttonText: "Visit Indeed",
  },
  {
    id: "cambia-component-library",
    title: "CHS Component Library",
    description:
      "I helped develop a component library for email campaigns using Salesforce Marketing Cloud, AMPscript, HTML, and CSS, streamlining workflows and improving efficiency. I collaborated with design and engineering teams to align templates with brand design systems (Regence, Asuris, BridgeSpan, and Cambia), ensuring consistency and reducing errors. My focus on accessibility and best practices enhanced email usability. This experience strengthened my front-end development skills within design systems to create scalable, high-quality marketing solutions. Due to company policy, I can't share non-public work, but I'd be happy to discuss it further, and you can view design library examples on the company's website.",
    image: RegenceExamples,
    websiteUrl: "https://regence.com",
    buttonText: "Visit Regence",
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "I designed and developed this portfolio website to showcase my frontend development skills and design system expertise. Built with React, TypeScript, and Tailwind CSS v4, it demonstrates my ability to create modern, accessible, and performant web applications. The site features custom animations, responsive design, and a cohesive design system with carefully crafted color palettes and typography. I implemented smooth page transitions, interactive hover states, and a modular component architecture that reflects my experience with scalable design systems. This project highlights my proficiency in modern frontend technologies while maintaining clean, maintainable code and excellent user experience.",
    image: PortfolioWebsite,
    websiteUrl: "https://github.com/jlann90/james-portfolio",
    buttonText: "View Code",
  },
];
