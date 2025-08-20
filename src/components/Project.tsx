import Button from "./Button";
import { projectDetails } from "../data/projects";

interface ProjectProps {
  projectId: string;
}

export default function Project({
  projectId,
}: ProjectProps): React.ReactElement {
  // Get project data based on projectId
  const projects = projectDetails;

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
    <section className="page-section">
      <div className="flex justify-center lg:justify-start">
        <img
          className="animate-fade-in-staggered w-full max-w-[350px] sm:max-w-[400px] lg:max-w-[500px]"
          style={{ "--delay": "0.4s" } as React.CSSProperties}
          src={foundProject.image}
          alt={foundProject.title}
          width="500"
        />
      </div>
      <h1
        className="climate-crisis text-small-28 text-1054px-64 text-shadow-title animate-fade-in-staggered page-title"
        style={{ "--delay": "0.6s" } as React.CSSProperties}
      >
        {foundProject.title}
      </h1>
      <p
        className="barlow-bold animate-fade-in-staggered page-body-text"
        style={{ "--delay": "0.8s" } as React.CSSProperties}
      >
        {foundProject.description}
      </p>
      <div
        className="animate-fade-in-staggered page-button-container"
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
