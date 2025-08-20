import ProfilePhoto from "./../assets/ProfilePhoto.png";
import Button from "./Button";

export default function Homepage(): React.ReactElement {
  return (
    <section className="page-section">
      <div className="flex justify-center lg:justify-start">
        <img
          className="animate-roll-in w-full max-w-[250px] sm:max-w-[300px] lg:max-w-[400px] lg:w-[400px]"
          src={ProfilePhoto}
          alt="Pencil sketch style photo of James Lannon"
          width="400"
        />
      </div>
      <h1
        className="climate-crisis text-small-28 text-1054px-64 text-shadow-title animate-fade-in-staggered page-title"
        style={{ "--delay": "0.2s" } as React.CSSProperties}
      >
        James Lannon
      </h1>
      <p
        className="barlow-bold animate-fade-in-staggered page-body-text"
        style={{ "--delay": "0.4s" } as React.CSSProperties}
      >
        Hi, I'm James. Frontend UX Developer with 7+ years of experience
        building scalable design systems and accessible UI components. Led
        high-visibility initiatives at Indeed and Cambia, including dark mode
        implementation for Indeeds React library used by millions. Skilled in
        React, Typescript, HTML, CSS, accessibility requirements and design
        tooling, bridging the gap between design and engineering.
      </p>
      <div
        className="animate-fade-in-staggered page-button-container"
        style={{ "--delay": "0.5s" } as React.CSSProperties}
      >
        <a
          href="/james-portfolio/JamesResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>Download Resume</Button>
        </a>
      </div>
    </section>
  );
}
