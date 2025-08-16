import { useState, useEffect } from "react";
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
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  const menuListClass = "text-right pt-[24px] pr-[24px]";
  const menuBtnClass = "climate-crisis text-2xl uppercase text-th-db underline";

  const isActive = menuSelection.menuId === menuId;
  const shouldShowSubmenu =
    isActive || menuSelection.menuId.startsWith("project-");
  const hoverClass = isActive ? "" : "hover:drop-shadow-menu-item";

  useEffect(() => {
    if (shouldShowSubmenu && !isExpanded) {
      setIsExpanded(true);
      setIsAnimatingOut(false);
    } else if (!shouldShowSubmenu && isExpanded) {
      setIsAnimatingOut(true);
      const timer = setTimeout(() => {
        setIsExpanded(false);
        setIsAnimatingOut(false);
      }, 400); // Match animation duration
      return () => clearTimeout(timer);
    }
  }, [shouldShowSubmenu]);

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
      {isExpanded && (
        <div
          className={
            isAnimatingOut ? "animate-slide-up-menu" : "animate-slide-down"
          }
        >
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
                      <span className="project-arrow">➜</span> {project.title}
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
