import Button from "./Button";

export default function Contact(): React.ReactElement {
  const handleContactClick = () => {
    // This will be handled by the modal portal
    const modalRoot = document.getElementById("modal-root");
    if (modalRoot) {
      // Trigger modal opening logic here
      // We'll need to create a custom event or use a different approach
      const event = new CustomEvent("openContactModal");
      document.dispatchEvent(event);
    }
  };

  return (
    <section className="page-section">
      <h1
        className="climate-crisis text-small-28 text-1054px-64 text-shadow-title animate-fade-in-staggered page-title"
        style={{ "--delay": "0.1s" } as React.CSSProperties}
      >
        Let's work together
      </h1>
      <p
        className="barlow-bold animate-fade-in-staggered page-body-text"
        style={{ "--delay": "0.2s" } as React.CSSProperties}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare
        ultrices varius. Donec enim libero, cursus vel dui vitae, tempor lacinia
        nunc. Nam elementum ipsum suscipit massa posuere tempus. Phasellus
        consectetur justo lorem, vitae pretium orci aliquam nec. Cras gravida
        turpis vel velit sollicitudin tempor vitae eu mauris. Sed nunc urna,
        iaculis ac pellentesque nec, vulputate sed neque. In porta ex lorem, in
        rhoncus lacus mollis sed. Ut commodo erat sed dapibus aliquam.
      </p>
      <div
        className="animate-fade-in-staggered page-button-container"
        style={{ "--delay": "0.3s" } as React.CSSProperties}
      >
        <Button onClick={handleContactClick}>Contact Me</Button>
      </div>
    </section>
  );
}
