import { useMenu } from "../../context/MenuContext";

interface ProjectsMenuProps {
  menuId: string;
  children: React.ReactNode;
}

export default function ProjectsMenu({
  menuId,
  children,
}: ProjectsMenuProps): React.ReactElement {
  const { menuSelection, handleMenuSelect } = useMenu();
  const menuListClass = "text-right pt-[24px] pr-[24px]";
  const menuBtnClass = "climate-crisis text-2xl uppercase text-th-db underline";

  const isActive =
    menuSelection.menuId === menuId ||
    menuSelection.menuId.startsWith("project-");
  const hoverClass = isActive ? "" : "hover:drop-shadow-menu-item";

  const projects = [
    {
      id: "indeed-component-library",
      title: "Indeed Component Library",
    },
    {
      id: "cambia-component-library",
      title: "Cambia Component Library",
    },
    {
      id: "portfolio-website",
      title: "Portfolio Website",
    },
  ];

  return (
    <>
      <li className={menuListClass}>
        <button
          disabled={isActive}
          onClick={() => handleMenuSelect(menuId)}
          className={`${menuBtnClass} ${hoverClass}${isActive ? " text-th-rd" : ""}`}
        >
          {children}
        </button>
      </li>
      {isActive && (
        <div className="animate-slide-down">
          {projects.map((project, index) => {
            const isProjectActive =
              menuSelection.menuId === `project-${project.id}`;
            const projectHoverClass = isProjectActive
              ? ""
              : "hover:drop-shadow-menu-item";
            return (
              <li
                key={project.id}
                className="text-right pt-[12px] pr-[24px] animate-project-fade-in"
                style={
                  {
                    "--delay": `${index * 0.3}s`,
                    animationDelay: `${index * 0.3}s`,
                  } as React.CSSProperties
                }
              >
                <button
                  disabled={isProjectActive}
                  onClick={() => handleMenuSelect(`project-${project.id}`)}
                  className={`barlow-bold text-lg text-th-db ${projectHoverClass}`}
                >
                  {isProjectActive ? (
                    <>
                      <span className="project-arrow animate-fade-in-staggered">
                        ➜
                      </span>{" "}
                      {project.title}
                    </>
                  ) : (
                    project.title
                  )}
                </button>
              </li>
            );
          })}
        </div>
      )}
    </>
  );
}
