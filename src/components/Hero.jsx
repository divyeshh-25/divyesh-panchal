import React, { useEffect, useState } from 'react';
import socialMedia from './data/social-links.json';
import bannerContent from './data/banner.json';

const Hero = () => {
    const [social, setSocial] = useState([]);
    const [banner, setBanner] = useState([]);


    useEffect(() => {
        setSocial(socialMedia.socialLinks);
        setBanner(bannerContent.bannerSection);
    },[]);

    return (
        <section className="home-hero">
                <div className="home-hero__content">
                    <h1 className="heading-primary">{banner.title}</h1>
                    <div className="home-hero__info">
                        <p className="text-primary">
                           {banner.description}
                        </p>
                    </div>
                    <div className="home-hero__cta">
                        <a href="index.html#projects" className="btn btn--bg">Projects</a>
                    </div>
                </div>
                <div className="home-hero__socials">
                    {social.map((social, index) => (
                        <div className="home-hero__social" key={index}>
                            <a
                                href={social.link}
                                className="home-hero__social-icon-link"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <img src={social.img} alt={social.alt} className="home-hero__social-icon"/>
                            </a>
                        </div>
                    ))}
                </div>
                <div className="home-hero__mouse-scroll-cont">
                    <div className="mouse"></div>
                </div>
        </section>
    );
};

export default Hero;