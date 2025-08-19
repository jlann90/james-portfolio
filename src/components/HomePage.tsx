import ProfilePhoto from "./../assets/ProfilePhoto.png";

export default function Homepage(): React.ReactElement {
  return (
    <section className="pt-[120px] max-w-[900px]">
      <img
        className="animate-roll-in"
        src={ProfilePhoto}
        alt="Pencil sketch style photo of James Lannon"
        width="400"
      />
      <h1
        className="climate-crisis text-[64px] uppercase pt-[30px] pl-[10px] text-th-yw text-shadow-title animate-fade-in-staggered"
        style={{ "--delay": "0.2s" } as React.CSSProperties}
      >
        James Lannon
      </h1>
      <p
        className="barlow-bold text-th-wh text-2xl pt-[24px]   animate-fade-in-staggered"
        style={{ "--delay": "0.4s" } as React.CSSProperties}
      >
        Hi, I'm James. Frontend UX Developer with 7+ years of experience
        building scalable design systems and accessible UI components. Led
        high-visibility initiatives at Indeed and Cambia, including dark mode
        implementation for Indeeds React library used by millions. Skilled in
        React, Typescript, HTML, CSS, accessibility requirements and design
        tooling, bridging the gap between design and engineering.
      </p>
    </section>
  );
}
