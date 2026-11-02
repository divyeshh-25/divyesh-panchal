import React, { useEffect, useState } from 'react';
import socialMedia from './data/social-links.json';

const Footer = () => {
    const [social, setSocial] = useState([]);

    useEffect(() => {
        setSocial(socialMedia.socialLinks);
    }, []);

    return (
        <footer className="main-footer">
            <div className="main-container main-footer__inner">
                <p className="main-footer__copy">
                    &copy; {new Date().getFullYear()} <a href="/">Divyesh Panchal</a>. All rights reserved.
                </p>
                <div className="main-footer__social-cont">
                    {social.map((item, index) => (
                        <a target="_blank" rel="noreferrer" href={item.link} key={index} aria-label={item.alt}>
                            <img className="main-footer__icon" src={item.lightImg} alt="" />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
