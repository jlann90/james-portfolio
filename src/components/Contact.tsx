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
        I'm always excited to connect with teams looking to build exceptional
        user experiences. Whether you're seeking a frontend developer to enhance
        your design system, need help scaling your component library, or want to
        collaborate on innovative projects, I'd love to hear from you. Let's
        discuss how we can work together to create impactful, accessible, and
        scalable solutions that drive real value for your users and business.
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
