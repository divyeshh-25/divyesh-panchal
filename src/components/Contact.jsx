import React, { useState } from "react";
import emailjs from "@emailjs/browser";

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
    type: "", // success or error
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage({ text: "", type: "" });

    emailjs
      .send(
        "service_wkldl5f",
        "template_c9um3hl",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "uTiDBBJpcUXfK2e7d"
      )
      .then(
        (response) => {
          setStatusMessage({
            text: "Your message has been sent successfully!",
            type: "success-message",
          });
          setIsSending(false);
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          setStatusMessage({
            text: "Failed to send message. Please try again.",
            type: "error-message",
          });
          setIsSending(false);
        }
      );
  };

  return (
    <section id="contact" className="contact sec-pad dynamicBg">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main heading-sec__main--lt">Contact</span>
          <span className="heading-sec__sub heading-sec__sub--lt">
            Don't hesitate to contact me by submitting the form below, and <br /> I'll respond as soon as possible.
          </span>
        </h2>
        <div className="contact__form-container">
          <form onSubmit={handleSubmit} className="contact__form">
            <div className="contact__form-field">
              <label className="contact__form-label" htmlFor="name">Name <span className="required-field">*</span></label>
              <input
                required
                placeholder="Enter Your Name"
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
                placeholder="Enter Your Email"
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
                placeholder="Enter Your Phone Number"
                type="text"
                className="contact__form-input"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="contact__form-field">
              <label className="contact__form-label" htmlFor="message">Message <span className="required-field">*</span></label>
              <textarea
                required
                cols="30"
                rows="5"
                className="contact__form-input"
                placeholder="Enter Your Message"
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn--theme contact__btn" disabled={isSending}>
              {isSending ? "Sending..." : "Submit"}
            </button>
            {statusMessage.text && (
              <p className={`status-message ${statusMessage.type}`}>{statusMessage.text}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
