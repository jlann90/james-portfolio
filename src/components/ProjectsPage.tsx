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
    <section className="pt-[120px] max-w-[882px] flex flex-wrap gap-[66px]">
      {projects.map((project) => (
        <div key={project.title} className="w-[250px]">
          <img src={project.image} alt={project.title} width="250" />
          <h2 className="w-[250px] climate-crisis text-[24px] uppercase pt-[18px] text-th-yw">
            {project.title}
          </h2>
        </div>
      ))}
    </section>
  );
}
