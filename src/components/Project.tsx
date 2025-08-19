import IndeedExamples from "./../assets/IndeedExamples.png";
import RegenceExamples from "./../assets/RegenceExamples.png";
import PortfolioWebsite from "./../assets/PortfolioWebsite.png";
import Button from "./Button";

interface ProjectProps {
  projectId: string;
}

export default function Project({
  projectId,
}: ProjectProps): React.ReactElement {
  // Get project data based on projectId
  const projects = [
    {
      id: "indeed-component-library",
      title: "Indeed Component Library",
      description:
        "I contributed to the development of Indeed’s React-based Design Library, focusing on creating consistent, accessible, and high-performance components. Collaborating with design and engineering teams, I translated Figma specs into responsive React components, improving both UX and design system efficiency. I also mentored teams on best practices, streamlined workflows, and addressed technical debt, leading to faster development and better reusability across projects. This experience deepened my expertise in building scalable, user-centric design systems. Due to company policy, I’m unable to share work that isn’t publicly available. However, I’d be happy to provide more details in a conversation, and you can view design library examples on the company’s website.",
      image: IndeedExamples,
      websiteUrl: "https://indeed.com",
      buttonText: "Visit Indeed",
    },
    {
      id: "cambia-component-library",
      title: "CHS Component Library",
      description:
        "I helped develop a component library for email campaigns using Salesforce Marketing Cloud, AMPscript, HTML, and CSS, streamlining workflows and improving efficiency. I collaborated with design and engineering teams to align templates with brand design systems (Regence, Asuris, BridgeSpan, and Cambia), ensuring consistency and reducing errors. My focus on accessibility and best practices enhanced email usability. This experience strengthened my front-end development skills within design systems to create scalable, high-quality marketing solutions. Due to company policy, I can’t share non-public work, but I’d be happy to discuss it further, and you can view design library examples on the company’s website.",
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

  const foundProject = projects.find((p) => p.id === projectId);

  if (!foundProject) {
    return (
      <section className="pt-[120px] max-w-[900px]">
        <h1 className="climate-crisis text-[64px] uppercase text-th-yw text-shadow-title">
          Project Not Found
        </h1>
      </section>
    );
  }

  return (
    <section className="pt-[120px] max-w-[900px]">
      <img
        className="animate-fade-in-staggered"
        style={{ "--delay": "0.4s" } as React.CSSProperties}
        src={foundProject.image}
        alt={foundProject.title}
        width="500"
      />
      <h1
        className="climate-crisis text-[40px] uppercase pt-[30px] text-th-yw animate-fade-in-staggered"
        style={{ "--delay": "0.6s" } as React.CSSProperties}
      >
        {foundProject.title}
      </h1>
      <p
        className="barlow-bold text-th-wh text-2xl pt-[24px] animate-fade-in-staggered"
        style={{ "--delay": "0.8s" } as React.CSSProperties}
      >
        {foundProject.description}
      </p>
      <div
        className="pt-[20px] flex justify-end animate-fade-in-staggered"
        style={{ "--delay": "1.0s" } as React.CSSProperties}
      >
        <a
          href={foundProject.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>{foundProject.buttonText}</Button>
        </a>
      </div>
    </section>
  );
}
