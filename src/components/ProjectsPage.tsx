import IndeedExamples from "./../assets/IndeedExamples.png";
import RegenceExamples from "./../assets/RegenceExamples.png";

export default function ProjectsPage(): React.ReactElement {
  const projects = [
    {
      title: "Indeed Component Library",
      description: "Example emails created with the React based module library",
      image: IndeedExamples,
    },
    {
      title: "Cambia Component Library",
      description: "Example emails created with Salesforce Email Studio",
      image: RegenceExamples,
    },
    {
      title: "Indeed Component Library",
      description: "Example emails created with the React based module library",
      image: IndeedExamples,
    },
    {
      title: "Indeed Component Library",
      description: "Example emails created with the React based module library",
      image: IndeedExamples,
    },
    {
      title: "Indeed Component Library",
      description: "Example emails created with the React based module library",
      image: IndeedExamples,
    },
    {
      title: "Indeed Component Library",
      description: "Example emails created with the React based module library",
      image: IndeedExamples,
    },
  ];

  return (
    <section className="pt-[120px] max-w-[890px] flex flex-wrap gap-[66px] pl-[8px]">
      {projects.map((project, index) => (
        <button
          key={project.title}
          className="w-[250px] hover:drop-shadow-menu-item"
        >
          <img
            className="animate-fade-in-staggered"
            style={{ "--delay": `${index * 0.2}s` } as React.CSSProperties}
            src={project.image}
            alt={project.title}
            width="250"
          />
          <h2
            className="w-[250px] climate-crisis text-[24px] uppercase pt-[18px] text-th-yw animate-fade-in-staggered"
            style={{ "--delay": `${index * 0.3}s` } as React.CSSProperties}
          >
            {project.title}
          </h2>
        </button>
      ))}
    </section>
  );
}
