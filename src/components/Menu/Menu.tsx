import GitHubIcon from "./../../assets/GitHubIcon.svg";
import LinkedInIcon from "./../../assets/LinkedInIcon.svg";
import MenuItems from "./MenuItems";
import ProjectsMenu from "./ProjectsMenu";

export default function Menu(): React.ReactElement {
  return (
    <section className="pt-[36px] pl-[102px] h-screen">
      <nav className="w-[282px] h-[100vh] bg-th-yw rounded-t-xl outline-6 outline-th-db flex flex-col justify-between animate-slide-up shadow-[var(--box-shadow-menu)]">
        <ul>
          <li
            className="animate-fade-in-staggered"
            style={{ "--delay": ".2s" } as React.CSSProperties}
          >
            <MenuItems menuId="home">Home</MenuItems>
          </li>
          <li
            className="animate-fade-in-staggered"
            style={{ "--delay": "0.4s" } as React.CSSProperties}
          >
            <ProjectsMenu menuId="projects">Projects</ProjectsMenu>
          </li>
          <li
            className="animate-fade-in-staggered"
            style={{ "--delay": "0.6s" } as React.CSSProperties}
          >
            <MenuItems menuId="experience">Experience</MenuItems>
          </li>
          <li
            className="animate-fade-in-staggered"
            style={{ "--delay": "0.8s" } as React.CSSProperties}
          >
            <MenuItems menuId="contact">Contact</MenuItems>
          </li>
        </ul>
        <div className="flex justify-end pb-15 pr-[24px]">
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="link to James Lannon Github"
            href="https://github.com/jlann90"
            className="pr-[18px] animate-fade-in-staggered"
            style={{ "--delay": "1s" } as React.CSSProperties}
          >
            <div className="hover:drop-shadow-menu-item p-[4px] transition-all duration-200">
              <img src={GitHubIcon} alt="GitHub Logo" width="24" />
            </div>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="link to James Lannon LinkedIn"
            href="https://www.linkedin.com/in/james-lannon/"
            className="animate-fade-in-staggered"
            style={{ "--delay": "1.2s" } as React.CSSProperties}
          >
            <div className="hover:drop-shadow-menu-item p-[4px] transition-all duration-200">
              <img src={LinkedInIcon} alt="LinkedIn Logo" width="24" />
            </div>
          </a>
        </div>
      </nav>
    </section>
  );
}
