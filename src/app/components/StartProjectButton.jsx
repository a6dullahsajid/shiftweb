"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const email = "shiftweb.in@gmail.com";
const whatsappNumber = "6393170895";

const whatsappMessage = encodeURIComponent(
  "Hi Shift Web, I would like to discuss a project.",
);

const StartProjectButton = ({
  className = "",
  isHeader = false,
  openCallForm = false,
  label = "Start a project",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCallFormOpen, setIsCallFormOpen] = useState(false);
  const [isCallFormFlipping, setIsCallFormFlipping] = useState(false);
  const [isCallFormClosing, setIsCallFormClosing] = useState(false);
  const [isReturningToOptions, setIsReturningToOptions] = useState(false);
  const [formData, setFormData] = useState({ name: "", mobile: "" });
  const [formStatus, setFormStatus] = useState({ type: "idle", message: "" });

  useEffect(() => {
    if (!isOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", closeOnEscape);

    // Prevent background scrolling while modal is open
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isCallFormFlipping) return undefined;

    const transitionTimer = setTimeout(() => {
      setIsCallFormOpen(true);
      setIsCallFormFlipping(false);
    }, 300);

    return () => clearTimeout(transitionTimer);
  }, [isCallFormFlipping]);

  useEffect(() => {
    if (!isCallFormClosing) return undefined;

    const transitionTimer = setTimeout(() => {
      setIsCallFormOpen(false);
      setIsCallFormClosing(false);
      setIsReturningToOptions(true);
    }, 300);

    return () => clearTimeout(transitionTimer);
  }, [isCallFormClosing]);

  const closeModal = () => {
    setIsOpen(false);
    setIsCallFormOpen(false);
    setIsCallFormFlipping(false);
    setIsCallFormClosing(false);
    setIsReturningToOptions(false);
    setFormData({ name: "", mobile: "" });
    setFormStatus({ type: "idle", message: "" });
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((currentData) => ({ ...currentData, [name]: value }));
  };

  const handleCallRequest = async (event) => {
    event.preventDefault();
    setFormStatus({ type: "loading", message: "Sending your request..." });

    try {
      const response = await fetch("/api/request-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send your request.");
      }

      setFormStatus({
        type: "success",
        message: "Thanks. We will contact you shortly.",
      });
      setFormData({ name: "", mobile: "" });
    } catch (error) {
      setFormStatus({ type: "error", message: error.message });
    }
  };

  return (
    <>
      {/* Trigger */}
      <button
        type="button"
        className={className}
        onClick={() => {
          setIsOpen(true);
          setIsCallFormOpen(openCallForm);
          setIsCallFormFlipping(false);
          setIsCallFormClosing(false);
          setIsReturningToOptions(false);
        }}
      >
        {label}
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          className={`${isHeader ? 'absolute top-0 left-0' : 'fixed top-0 left-0'}  z-60 flex flex-col w-screen h-screen items-center justify-center bg-slate-950/50 px-5 py-8 backdrop-blur-[2px]`}
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsOpen(false);
            }
          }}
        >
          <div
            className="modal-pop-in absolute top-1/2 left-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 bg-white p-7 shadow-2xl sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby="start-project-title"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-6 cursor-pointer top-6 flex h-8 w-8 items-center justify-center text-2xl leading-none text-secondary transition-colors hover:text-primary"
              aria-label="Close contact options"
            >
              &times;
            </button>

            {/* Header */}
            <div className="pr-8">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 bg-primary" />

                <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-secondary">
                  Start a project
                </p>
              </div>

              <h2
                id="start-project-title"
                className="mt-5 max-w-sm text-4xl font-semibold leading-[1.08] tracking-tight text-primary"
              >
                Let&apos;s build
                <br />
                something great.
              </h2>

              {!isCallFormOpen && (
                <p className="mt-5 max-w-sm text-sm leading-6 text-secondary">
                  Have a project in mind? Tell us what you&apos;re looking to
                  build and we&apos;ll help you figure out the next step.
                </p>
              )}
            </div>

            {/* Contact options */}
            {!isCallFormOpen && (
              <div
                className={`mt-7 ${isCallFormFlipping ? "page-flip-out" : isReturningToOptions ? "page-flip-in" : ""}`}
              >
                <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.15em] text-secondary">
                  How would you like to connect?
                </p>

                <div className="flex flex-col gap-2.5">
                    {/* WhatsApp */}
                    <Link
                      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex min-h-[68px] items-center justify-between border border-primary bg-primary px-5 text-white transition-all hover:-translate-y-[1px] hover:shadow-lg"
                    >
                      <div className="flex items-center gap-4">
                        <svg
                          aria-hidden="true"
                          className="h-6 w-6"
                          viewBox="0 0 22 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z" />
                          <path d="M8.5 9.5c.3 1.3 1.7 2.7 3.5 3.5 .5.1.9-.1 1.2-.5l.4-.5 1.7.8c.2.1.3.4.2.6-.3.8-1 1.2-1.8 1.1-2.7-.3-5.3-2.9-5.6-5.6-.1-.8.3-1.5 1.1-1.8.2-.1.5 0 .6.2l.8 1.7-.5.4c-.4.3-.6.7-.5 1.2Z" />
                        </svg>
                        <div>
                          <p className="text-sm font-medium">WhatsApp</p>
                          <p className="mt-1 text-xs text-white/70">
                            Chat with us directly
                          </p>
                        </div>
                      </div>

                      <span className="text-xl transition-transform duration-200 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>

                    {/* Request a call */}
                    <button
                      type="button"
                      onClick={() => {
                        setIsReturningToOptions(false);
                        setIsCallFormFlipping(true);
                      }}
                      className="group flex min-h-[68px] items-center cursor-pointer justify-between border border-divider bg-white px-5 text-primary transition-all hover:-translate-y-[1px] hover:border-primary hover:shadow-md"
                    >
                      <div className="flex items-center gap-4 text-left">
                        <svg
                          aria-hidden="true"
                          className="h-6 w-6 shrink-0"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.7 2.6a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6.3 6.3l1.3-1.3a2 2 0 0 1 2.1-.5c.8.4 1.7.6 2.6.7a2 2 0 0 1 1.7 2Z" />
                        </svg>
                        <div>
                          <p className="text-sm font-medium">Request a call</p>
                          <p className="mt-1 text-xs text-secondary">
                            Talk through your requirements
                          </p>
                        </div>
                      </div>

                      <span className="text-xl transition-transform duration-200 group-hover:translate-x-1">
                        →
                      </span>
                    </button>

                    {/* Email */}
                    <Link
                      href={`mailto:${email}`}
                      className="group flex min-h-[68px] items-center justify-between border border-divider bg-white px-5 text-primary transition-all hover:-translate-y-[1px] hover:border-primary hover:shadow-md"
                    >
                      <div className="flex items-center gap-4">
                        <svg
                          aria-hidden="true"
                          className="h-6 w-6 shrink-0"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x="3" y="5" width="18" height="14" rx="1.5" />
                          <path d="m3 7 9 6 9-6" />
                        </svg>
                        <div>
                          <p className="text-sm font-medium">Email us</p>
                          <p className="mt-1 text-xs text-secondary">
                            Send us your project details
                          </p>
                        </div>
                      </div>

                      <span className="text-xl transition-transform duration-200 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                </div>
              </div>
            )}

            {isCallFormOpen && (
              <form
                className={`${isCallFormClosing ? "page-flip-out" : "page-flip-in"} mt-5`}
                onSubmit={handleCallRequest}
              >
                <button
                  type="button"
                  onClick={() => setIsCallFormClosing(true)}
                  className="mb-2 text-xs text-secondary cursor-pointer transition-colors hover:text-primary"
                >
                  &larr; Back to contact options
                </button>
                <h3 className="text-2xl font-semibold leading-tight text-primary">
                  Request a call
                </h3>
                <p className="mt-1 text-sm leading-6 text-secondary">
                  Share your details and we&apos;ll reach out to understand your
                  project and find a convenient time to talk.
                </p>

                <div className="mt-6 flex flex-col gap-4">
                  <label className="flex flex-col gap-2 text-xs font-medium text-secondary">
                    Name
                    <input
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      autoComplete="name"
                      className="h-12 border border-divider px-4 text-sm text-primary outline-none transition-colors focus:border-primary"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-xs font-medium text-secondary">
                    10 digit mobile number
                    <input
                      required
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleFormChange}
                      inputMode="numeric"
                      autoComplete="tel"
                      pattern="[0-9]{10}"
                      maxLength={10}
                      className="h-12 border border-divider px-4 text-sm text-primary outline-none transition-colors focus:border-primary"
                      placeholder="9876543210"
                    />
                  </label>
                </div>

                {formStatus.message && (
                  <p
                    className={`mt-4 text-xs ${formStatus.type === "error" ? "text-red-600" : formStatus.type === "success" ? "text-green-600" : "text-secondary"}`}
                    role="status"
                  >
                    {formStatus.message}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={formStatus.type === "loading"}
                  className="mt-5 h-12 w-full bg-primary text-sm text-white transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {formStatus.type === "loading"
                    ? "Sending..."
                    : "Request a call"}
                </button>
              </form>
            )}

            {/* Footer reassurance */}
            <div className="mt-6 border-t border-secondary/40 pt-1">
              <p className="text-xs text-secondary">
                No commitment. Just a conversation.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StartProjectButton;
