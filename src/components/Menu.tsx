import GitHubIcon from "./../assets/GitHubIcon.svg";
import LinkedInIcon from "./../assets/LinkedInIcon.svg";
import MenuItems from "./MenuItems";

export default function Menu(): React.ReactElement {
  return (
    <section className="pt-[36px] pl-[102px] h-screen">
      <nav className="w-[282px] h-[101vh] bg-th-yw drop-shadow-menu rounded-xl outline-6 outline-th-db flex flex-col justify-between">
        <ul>
          <MenuItems menuId="home">Home</MenuItems>
          <MenuItems menuId="projects">Projects</MenuItems>
          <MenuItems menuId="experience">Experience</MenuItems>
          <MenuItems menuId="contact">Contact</MenuItems>
        </ul>
        <div className="flex justify-end pb-15 pr-[24px]">
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="link to James Lannon Github"
            href="https://github.com/jlann90"
            className="pr-[18px] hover:drop-shadow-menu-item"
          >
            <img src={GitHubIcon} alt="GitHub Logo" width="24" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            aria-label="link to James Lannon LinkedIn"
            href="https://www.linkedin.com/in/james-lannon/"
            className="hover:drop-shadow-menu-item"
          >
            <img src={LinkedInIcon} alt="LinkedIn Logo" width="24" />
          </a>
        </div>
      </nav>
    </section>
  );
}
