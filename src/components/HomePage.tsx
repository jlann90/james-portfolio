import ProfilePhoto from "./../assets/ProfilePhoto.png";
import Button from "./Button";

export default function Homepage(): React.ReactElement {
  return (
    <section className="pt-[60px] sm:pt-[80px] lg:pt-[120px] pb-[24px] max-w-[900px] px-6 sm:px-4 lg:px-0">
      <div className="flex justify-center lg:justify-start">
        <img
          className="animate-roll-in w-full max-w-[250px] sm:max-w-[300px] lg:max-w-[400px] lg:w-[400px]"
          src={ProfilePhoto}
          alt="Pencil sketch style photo of James Lannon"
          width="400"
        />
      </div>
      <h1
        className="climate-crisis text-small-28 text-[36px] sm:text-[40px] lg:text-[48px] text-1054px-64 uppercase pt-[30px] pl-[10px] text-th-yw text-shadow-title animate-fade-in-staggered"
        style={{ "--delay": "0.2s" } as React.CSSProperties}
      >
        James Lannon
      </h1>
      <p
        className="barlow-bold text-th-wh text-base sm:text-lg md:text-2xl pt-[24px] animate-fade-in-staggered"
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
        className="pt-[20px] flex justify-end animate-fade-in-staggered"
        style={{ "--delay": "0.5s" } as React.CSSProperties}
      >
        <a href="/JamesResume.pdf" target="_blank" rel="noopener noreferrer">
          <Button>Download Resume</Button>
        </a>
      </div>
    </section>
  );
}
