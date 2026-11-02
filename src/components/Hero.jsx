import React, { useEffect, useState } from 'react';
import socialMedia from './data/social-links.json';
import useReveal from './useReveal';

const Hero = () => {
    const [social, setSocial] = useState([]);
    const ref = useReveal();

    useEffect(() => {
        setSocial(socialMedia.socialLinks);
    }, []);

    return (
        <section id="home" className="hero" ref={ref}>
            <div className="main-container">
                <div className="hero__grid">
                    <div className="reveal">
                        <div className="hero__kicker">
                            <span className="hero__status-dot"></span>
                            Available for new projects
                        </div>
                        <h1 className="hero__title">
                            Building digital<br />
                            products that<br />
                            solve <em>real</em> problems.
                        </h1>
                    </div>
                    <div className="hero__col-right reveal">
                        <p className="hero__role">Full Stack Developer &amp; AI Engineer</p>
                        <p className="hero__desc">
                            I&rsquo;m Divyesh, helping businesses build scalable applications,
                            intelligent solutions, and exceptional digital experiences.
                        </p>
                        <div className="hero__cta">
                            <a href="#contact" className="btn btn--primary">
                                Let&rsquo;s Build Something <span className="btn-arrow">&rarr;</span>
                            </a>
                            <a href="#projects" className="btn btn--outline">
                                Explore My Work
                            </a>
                        </div>
                    </div>
                </div>

                <div className="hero__meta reveal">
                    <div className="hero__meta-item">
                        <strong>Ahmedabad, India</strong>
                        Working with clients worldwide
                    </div>
                    <div className="hero__meta-item">
                        <strong>3+ Years</strong>
                        Full stack &amp; AI development experience
                    </div>
                    <div className="hero__socials">
                        {social.map((item, index) => (
                            <a
                                href={item.link}
                                className="hero__social-link"
                                rel="noreferrer"
                                target="_blank"
                                key={index}
                                aria-label={item.alt}
                            >
                                <img src={item.darkImg} alt="" className="hero__social-icon" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
