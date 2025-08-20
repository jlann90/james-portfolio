import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

export default function Modal(): React.ReactElement | null {
  const [isOpen, setIsOpen] = useState(false);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const handleOpenModal = () => {
      setIsOpen(true);
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    // Listen for custom event to open modal
    document.addEventListener("openContactModal", handleOpenModal);

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("openContactModal", handleOpenModal);
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic input validation
    if (!subject.trim() || !message.trim()) {
      return;
    }

    // Sanitize inputs (basic)
    const sanitizedSubject = subject.trim().slice(0, 100); // Limit subject length
    const sanitizedMessage = message.trim().slice(0, 2000); // Limit message length

    // Create mailto link with form data
    const mailtoLink = `mailto:jmlann90@gmail.com?subject=${encodeURIComponent(sanitizedSubject)}&body=${encodeURIComponent(sanitizedMessage)}`;

    // Open default email client
    window.open(mailtoLink);

    // Close modal and reset form
    setIsOpen(false);
    setSubject("");
    setMessage("");
  };

  const handleClose = () => {
    setIsOpen(false);
    setSubject("");
    setMessage("");
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 sm:p-6">
      <div className="bg-th-yw p-6 sm:p-8 rounded-lg max-w-md sm:max-w-lg lg:max-w-xl w-full min-h-[500px] sm:min-h-[550px] animate-slide-down">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between items-center">
            <label
              htmlFor="subject"
              className="climate-crisis text-[20px] sm:text-[24px] lg:text-[28px] uppercase pt-[18px] text-th-db"
            >
              Subject
            </label>
            <button
              onClick={handleClose}
              className="text-th-db hover:drop-shadow-menu-item text-2xl font-bold transition-all duration-200"
            >
              ×
            </button>
          </div>
          <div className="pt-[18px]">
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              className="w-full px-3 py-2 bg-th-wh border border-th-db rounded-md text-th-db text-lg sm:text-xl lg:text-2xl focus:outline-none focus:drop-shadow-button"
              placeholder="What's this about?"
            />
          </div>

          <div className="pt-[30px]">
            <label
              htmlFor="message"
              className="climate-crisis text-[20px] sm:text-[24px] lg:text-[28px] uppercase text-th-db"
            >
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={6}
              className="w-full px-3 py-2 bg-th-wh border border-th-db rounded-md text-th-db text-lg sm:text-xl lg:text-2xl focus:outline-none focus:drop-shadow-button resize-none scrollbar-hide mt-[18px]"
              placeholder="Enter your message here..."
            />
          </div>

          <div className="pt-4 flex justify-end">
            <Button
              type="submit"
              className="px-[24px] py-[6px] barlow-bold text-lg sm:text-xl lg:text-2xl rounded-xl border-4 border-th-db text-th-db bg-th-yw hover:drop-shadow-button hover:text-th-rd transition-all duration-200"
            >
              Send
            </Button>
          </div>
        </form>
      </div>
    </div>,
    document.getElementById("modal-root")!
  );
}
