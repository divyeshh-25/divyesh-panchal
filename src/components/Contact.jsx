import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import socialMedia from './data/social-links.json';
import useReveal from './useReveal';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState({
    text: "",
    type: "",
  });
  const [social, setSocial] = useState([]);
  const ref = useReveal();

  useEffect(() => {
    setSocial(socialMedia.socialLinks);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[\d+\-.() ]{7,20}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage({ text: "", type: "" });

    if (!validateEmail(formData.email)) {
      setStatusMessage({
        text: "Please enter a valid email address.",
        type: "error-message",
      });
      setIsSending(false);
      return;
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      setStatusMessage({
        text: "Please enter a valid phone number.",
        type: "error-message",
      });
      setIsSending(false);
      return;
    }

    emailjs
      .send(
        "service_ediyv0i",
        "template_t7rr3tg",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "CbjsvcgB-0-0_I6Da"
      )
      .then(
        () => {
          setStatusMessage({
            text: "Thank you for reaching out! Your message has been sent, and I'll get back to you shortly.",
            type: "success-message",
          });
          setIsSending(false);
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        () => {
          setStatusMessage({
            text: "Failed to send message. Please try again.",
            type: "error-message",
          });
          setIsSending(false);
        }
      );
  };

  const whatsapp = social.find((s) => s.name === "Whatsapp");
  const linkedin = social.find((s) => s.name === "LinkedIn");
  const github = social.find((s) => s.name === "GitHub");

  return (
    <section id="contact" className="contact sec-pad" ref={ref}>
      <div className="main-container">
        <div className="section-head reveal">
          <span className="eyebrow">Contact</span>
          <h2 className="section-head__title">Have an idea? Let&rsquo;s make it happen.</h2>
          <p className="section-head__sub">
            Whether you&rsquo;re building something new, improving an existing product,
            or exploring AI solutions, I&rsquo;d love to hear about it.
          </p>
        </div>

        <div className="contact__grid">
          <div className="contact__channels reveal">
            {whatsapp && (
              <a href={whatsapp.link} className="contact__channel" target="_blank" rel="noreferrer">
                <span className="contact__channel-label">WhatsApp</span>
                <span className="contact__channel-value">
                  Message me <span className="contact__channel-arrow">&rarr;</span>
                </span>
              </a>
            )}
            {linkedin && (
              <a href={linkedin.link} className="contact__channel" target="_blank" rel="noreferrer">
                <span className="contact__channel-label">LinkedIn</span>
                <span className="contact__channel-value">
                  Connect <span className="contact__channel-arrow">&rarr;</span>
                </span>
              </a>
            )}
            {github && (
              <a href={github.link} className="contact__channel" target="_blank" rel="noreferrer">
                <span className="contact__channel-label">GitHub</span>
                <span className="contact__channel-value">
                  View Work <span className="contact__channel-arrow">&rarr;</span>
                </span>
              </a>
            )}
          </div>

          <div className="contact__form-container reveal">
            <form onSubmit={handleSubmit} className="contact__form">
              <div className="contact__form-field">
                <label className="contact__form-label" htmlFor="name">Name <span className="required-field">*</span></label>
                <input
                  required
                  placeholder="Your name"
                  type="text"
                  className="contact__form-input"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="contact__form-field">
                <label className="contact__form-label" htmlFor="email">Email <span className="required-field">*</span></label>
                <input
                  required
                  placeholder="you@company.com"
                  type="email"
                  className="contact__form-input"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="contact__form-field">
                <label className="contact__form-label" htmlFor="phone">Phone</label>
                <input
                  placeholder="Optional"
                  type="text"
                  className="contact__form-input"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="contact__form-field">
                <label className="contact__form-label" htmlFor="message">Project Details <span className="required-field">*</span></label>
                <textarea
                  required
                  rows="4"
                  className="contact__form-input"
                  placeholder="Tell me a little about what you're building"
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="btn btn--primary contact__btn" disabled={isSending}>
                {isSending ? "Sending..." : "Send Message"}
              </button>
              {statusMessage.text && (
                <p className={`status-message ${statusMessage.type}`}>{statusMessage.text}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
