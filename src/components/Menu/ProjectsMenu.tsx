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
  const menuBtnClass = "climate-crisis text-2xl uppercase text-th-db";

  const isActive = menuSelection.menuId === menuId;
  const shouldShowSubmenu =
    isActive || menuSelection.menuId.startsWith("project-");
  const hoverClass = isActive ? "" : "group";

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
          {isActive ? (
            <span className="underline">{children}</span>
          ) : (
            <>
              <span className="project-arrow opacity-0 group-hover:opacity-100 transition-opacity duration-200 mr-2">
                ➜
              </span>
              <span className="underline">{children}</span>
            </>
          )}
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
            const projectHoverClass = isProjectActive ? "" : "group";
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
                  className={`barlow-bold text-lg ${isProjectActive ? "text-th-rd" : "text-th-db"} ${projectHoverClass}`}
                >
                  {isProjectActive ? (
                    <span className="underline">{project.title}</span>
                  ) : (
                    <>
                      <span className="project-arrow opacity-0 group-hover:opacity-100 transition-opacity duration-200 mr-2 no-underline">
                        ➜
                      </span>
                      <span className="underline">{project.title}</span>
                    </>
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
