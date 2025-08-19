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
