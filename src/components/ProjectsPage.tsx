import { useMenu } from "../context/MenuContext";
import { projects } from "../data/projects";

export default function ProjectsPage(): React.ReactElement {
  const { handleMenuSelect } = useMenu();

  const handleProjectClick = (projectId: string) => {
    handleMenuSelect(`project-${projectId}`);
  };

  return (
    <section className="pt-[120px] max-w-[900px] pl-[8px]">
      <h1
        className="climate-crisis text-[64px] uppercase pt-[30px] pl-[10px] text-th-yw text-shadow-title animate-fade-in-staggered"
        style={{ "--delay": "0.1s" } as React.CSSProperties}
      >
        Things I've built
      </h1>
      <div className="flex flex-wrap gap-[66px] mt-[40px]">
        {projects.map((project, index) => (
          <button
            key={`${project.id}-${index}`}
            className="w-[250px] hover:drop-shadow-button transition-all duration-200"
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
      </div>
    </section>
  );
}
