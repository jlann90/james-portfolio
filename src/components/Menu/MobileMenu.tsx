import { useState } from "react";
import { useMenu } from "../../context/MenuContext";

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
        className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 lg:hidden bg-th-yw rounded-lg p-2 sm:p-3 shadow-[var(--box-shadow-hamburger-menu)] outline-4 outline-th-db"
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
          <div
            className="animate-fade-in-staggered list-none text-center"
            style={{ "--delay": "0.1s" } as React.CSSProperties}
          >
            <button
              disabled={menuSelection.menuId === "home"}
              onClick={() => handleMenuClick("home")}
              className={`climate-crisis text-2xl uppercase text-th-db ${
                menuSelection.menuId === "home" ? "text-th-rd" : ""
              }`}
            >
              <span className="underline">Home</span>
            </button>
          </div>
          <div
            className="animate-fade-in-staggered list-none text-center"
            style={{ "--delay": "0.2s" } as React.CSSProperties}
          >
            <button
              disabled={menuSelection.menuId === "projects"}
              onClick={() => handleMenuClick("projects")}
              className={`climate-crisis text-2xl uppercase text-th-db ${
                menuSelection.menuId === "projects" ? "text-th-rd" : ""
              }`}
            >
              <span className="underline">Projects</span>
            </button>
          </div>
          <div
            className="animate-fade-in-staggered list-none text-center"
            style={{ "--delay": "0.3s" } as React.CSSProperties}
          >
            <button
              disabled={menuSelection.menuId === "experience"}
              onClick={() => handleMenuClick("experience")}
              className={`climate-crisis text-2xl uppercase text-th-db ${
                menuSelection.menuId === "experience" ? "text-th-rd" : ""
              }`}
            >
              <span className="underline">Experience</span>
            </button>
          </div>
          <div
            className="animate-fade-in-staggered list-none text-center"
            style={{ "--delay": "0.4s" } as React.CSSProperties}
          >
            <button
              disabled={menuSelection.menuId === "contact"}
              onClick={() => handleMenuClick("contact")}
              className={`climate-crisis text-2xl uppercase text-th-db ${
                menuSelection.menuId === "contact" ? "text-th-rd" : ""
              }`}
            >
              <span className="underline">Contact</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
