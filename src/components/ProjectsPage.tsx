import { useMenu } from "../context/MenuContext";
import { projects } from "../data/projects";

export default function ProjectsPage(): React.ReactElement {
  const { handleMenuSelect } = useMenu();

  const handleProjectClick = (projectId: string) => {
    handleMenuSelect(`project-${projectId}`);
  };

  return (
    <section className="page-section max-w-[950px] lg:pl-[8px] relative h-full flex flex-col">
      <h1
        className="climate-crisis text-small-28 text-1054px-64 text-shadow-title animate-fade-in-staggered page-title pb-[24px]"
        style={{ "--delay": "0.1s" } as React.CSSProperties}
      >
        Things I've built
      </h1>
      <div className="overflow-y-auto scrollbar-hide flex-1">
        <div className="flex flex-wrap gap-8 lg:gap-[66px] mt-[40px] justify-center lg:justify-start pl-4 sm:pl-6 lg:pl-2 pr-4 sm:pr-6 lg:pr-2">
          {projects.map((project, index) => (
            <button
              key={`${project.id}-${index}`}
              className="w-[280px] sm:w-[240px] md:w-[250px] hover:drop-shadow-button transition-all duration-200 mb-8 sm:mb-0"
              onClick={() => handleProjectClick(project.id)}
            >
              <img
                className="animate-fade-in-staggered w-full h-auto"
                style={{ "--delay": `${index * 0.4}s` } as React.CSSProperties}
                src={project.image}
                alt={project.title}
                width="250"
              />
              <h2
                className="climate-crisis text-[16px] sm:text-[18px] md:text-[24px] uppercase pt-[8px] sm:pt-[12px] md:pt-[18px] text-th-yw text-left animate-fade-in-staggered w-full"
                style={{ "--delay": `${index * 0.5}s` } as React.CSSProperties}
              >
                {project.title}
              </h2>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
