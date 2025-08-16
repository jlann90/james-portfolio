import { useMenu } from "../context/MenuContext";
import IndeedExamples from "./../assets/IndeedExamples.png";
import RegenceExamples from "./../assets/RegenceExamples.png";
import PortfolioWebsite from "./../assets/PortfolioWebsite.png";

export default function ProjectsPage(): React.ReactElement {
  const { handleMenuSelect } = useMenu();

  const projects = [
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
    {
      id: "indeed-component-library",
      title: "Indeed Component Library",
      description: "Example emails created with the React based module library",
      image: IndeedExamples,
    },
    {
      id: "indeed-component-library",
      title: "Indeed Component Library",
      description: "Example emails created with the React based module library",
      image: IndeedExamples,
    },
    {
      id: "indeed-component-library",
      title: "Indeed Component Library",
      description: "Example emails created with the React based module library",
      image: IndeedExamples,
    },
  ];

  const handleProjectClick = (projectId: string) => {
    handleMenuSelect(`project-${projectId}`);
  };

  return (
    <section className="pt-[120px] max-w-[890px] flex flex-wrap gap-[66px] pl-[8px]">
      {projects.map((project, index) => (
        <button
          key={`${project.id}-${index}`}
          className="w-[250px] hover:drop-shadow-button"
          onClick={() => handleProjectClick(project.id)}
        >
          <img
            className="animate-fade-in-staggered"
            style={{ "--delay": `${index * 0.4}s` } as React.CSSProperties}
            src={project.image}
            alt={project.title}
            width="250"
          />
          <h2
            className="w-[250px] climate-crisis text-[24px] uppercase pt-[18px] text-th-yw text-left animate-fade-in-staggered"
            style={{ "--delay": `${index * 0.5}s` } as React.CSSProperties}
          >
            {project.title}
          </h2>
        </button>
      ))}
    </section>
  );
}
