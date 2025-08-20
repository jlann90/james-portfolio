import { useState } from "react";
import { useMenu } from "../../context/MenuContext";
import MobileMenuItem from "./MobileMenuItem";
import GitHubIcon from "./../../assets/GitHubIcon.svg";
import LinkedInIcon from "./../../assets/LinkedInIcon.svg";

export default function MobileMenu(): React.ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const { menuSelection, handleMenuSelect } = useMenu();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = (menuId: string) => {
    handleMenuSelect(menuId);
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 lg:hidden bg-th-yw rounded-lg p-2 sm:p-3 shadow-[var(--box-shadow-hamburger-menu)] outline-4 outline-th-db animate-fade-in"
        style={{ "--delay": "0.1s" } as React.CSSProperties}
        aria-label="Toggle menu"
      >
        <div className="w-5 h-5 sm:w-6 sm:h-6 flex flex-col justify-center items-center">
          <span
            className={`block w-4 sm:w-5 h-0.5 bg-th-db transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-1" : ""
            }`}
          ></span>
          <span
            className={`block w-4 sm:w-5 h-0.5 bg-th-db transition-all duration-300 mt-1 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-4 sm:w-5 h-0.5 bg-th-db transition-all duration-300 mt-1 ${
              isOpen ? "-rotate-45 -translate-y-1" : ""
            }`}
          ></span>
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-th-db-dark transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Mobile Menu Content */}
      <nav
        className={`mobile-menu fixed top-0 left-0 z-50 w-full h-full bg-th-yw transform transition-transform duration-300 ease-in-out lg:hidden outline-4 outline-th-db ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ listStyle: "none" }}
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-6 right-6 z-10 text-th-db hover:drop-shadow-menu-item text-2xl font-bold transition-all duration-200"
          aria-label="Close menu"
        >
          ×
        </button>

        <div className="flex flex-col justify-center items-center h-full space-y-8">
          <MobileMenuItem
            menuId="home"
            currentMenuId={menuSelection.menuId}
            delay="0.1s"
            onClick={handleMenuClick}
          >
            Home
          </MobileMenuItem>
          <MobileMenuItem
            menuId="projects"
            currentMenuId={menuSelection.menuId}
            delay="0.2s"
            onClick={handleMenuClick}
          >
            Projects
          </MobileMenuItem>
          <MobileMenuItem
            menuId="experience"
            currentMenuId={menuSelection.menuId}
            delay="0.3s"
            onClick={handleMenuClick}
          >
            Experience
          </MobileMenuItem>
          <MobileMenuItem
            menuId="contact"
            currentMenuId={menuSelection.menuId}
            delay="0.4s"
            onClick={handleMenuClick}
          >
            Contact
          </MobileMenuItem>

          {/* Social Icons */}
          <div
            className="flex justify-center items-center space-x-6 animate-fade-in-staggered"
            style={{ "--delay": "0.5s" } as React.CSSProperties}
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              aria-label="link to James Lannon Github"
              href="https://github.com/jlann90"
              className="hover:drop-shadow-menu-item p-[4px] transition-all duration-200"
            >
              <img src={GitHubIcon} alt="GitHub Logo" width="24" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              aria-label="link to James Lannon LinkedIn"
              href="https://www.linkedin.com/in/james-lannon/"
              className="hover:drop-shadow-menu-item p-[4px] transition-all duration-200"
            >
              <img src={LinkedInIcon} alt="LinkedIn Logo" width="24" />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
