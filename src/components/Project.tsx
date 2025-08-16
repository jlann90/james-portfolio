import IndeedExamples from "./../assets/IndeedExamples.png";
import RegenceExamples from "./../assets/RegenceExamples.png";
import PortfolioWebsite from "./../assets/PortfolioWebsite.png";

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

  const foundProject = projects.find((p) => p.id === projectId);

  if (!foundProject) {
    return (
      <section className="pt-[120px] max-w-[700px]">
        <h1 className="climate-crisis text-[64px] uppercase text-th-yw drop-shadow-title">
          Project Not Found
        </h1>
      </section>
    );
  }

  return (
    <section className="pt-[120px] max-w-[700px]">
      <img
        className="animate-fade-in-staggered"
        style={{ "--delay": "0.4s" } as React.CSSProperties}
        src={foundProject.image}
        alt={foundProject.title}
        width="500"
      />
      <h1
        className="climate-crisis text-[64px] uppercase pt-[30px] pl-[10px] text-th-yw drop-shadow-title animate-fade-in-staggered"
        style={{ "--delay": "0.6s" } as React.CSSProperties}
      >
        {foundProject.title}
      </h1>
      <p
        className="barlow-bold text-th-wh text-2xl pt-[20px] animate-fade-in-staggered"
        style={{ "--delay": "0.8s" } as React.CSSProperties}
      >
        {foundProject.description}
      </p>
    </section>
  );
}
