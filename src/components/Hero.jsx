import React, { useEffect, useState } from 'react';
import socialMedia from './data/social-links.json';
import bannerContent from './data/banner.json';

const Hero = () => {
    const [social, setSocial] = useState([]);
    const [banner, setBanner] = useState([]);


    useEffect(() => {
        setSocial(socialMedia.socialLinks);
        setBanner(bannerContent.bannerSection);
    });

    return (
        <section class="home-hero">
                <div class="home-hero__content">
                    <h1 class="heading-primary">{banner.title}</h1>
                    <div class="home-hero__info">
                        <p class="text-primary">
                           {banner.description}
                        </p>
                    </div>
                    <div class="home-hero__cta">
                        <a href="index.html#projects" class="btn btn--bg">Projects</a>
                    </div>
                </div>
                <div class="home-hero__socials">
                    {social.map((social) => (
                        <div class="home-hero__social">
                            <a
                                href={social.link}
                                className="home-hero__social-icon-link"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <img src={social.img} alt={social.alt} class="home-hero__social-icon"/>
                            </a>
                        </div>
                    ))}
                </div>
                <div class="home-hero__mouse-scroll-cont">
                    <div class="mouse"></div>
                </div>
        </section>
    );
};

export default Hero;