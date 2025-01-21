import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact sec-pad dynamicBg">
            <div className="main-container">
                <h2 className="heading heading-sec heading-sec__mb-med">
                    <span className="heading-sec__main heading-sec__main--lt">Contact</span>
                    <span className="heading-sec__sub heading-sec__sub--lt">
                        Don't hesitate to contact me by submitting the form below, and <br/> I'll respond as soon as possible.
                    </span>
                </h2>
                <div className="contact__form-container">
                    <form action="index.html#" className="contact__form" method="post">
                        <input type="hidden" name="form-name" value="form 1"/>
                        <div className="contact__form-field">
                            <label className="contact__form-label" htmlFor="name">Name</label>
                            <input
                                required
                                placeholder="Enter Your Name"
                                type="text"
                                className="contact__form-input"
                                name="name"
                                id="name"
                            />
                        </div>
                        <div className="contact__form-field">
                            <label className="contact__form-label" htmlFor="email">Email</label>
                            <input
                                required
                                placeholder="Enter Your Email"
                                type="email"
                                className="contact__form-input"
                                name="email"
                                id="email"
                            />
                        </div>
                        <div className="contact__form-field">
                            <label className="contact__form-label" htmlFor="message">Message</label>
                            <textarea
                                required
                                cols="30"
                                rows="10"
                                className="contact__form-input"
                                placeholder="Enter Your Message"
                                name="message"
                                id="message"
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn--theme contact__btn">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
  );
};

export default Contact;
