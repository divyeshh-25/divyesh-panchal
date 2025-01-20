import React, { useEffect, useState } from 'react';
import socialMedia from './data/social-links.json';

const Footer = () => {
    const [social, setSocial] = useState([]);

    useEffect(() => {
        setSocial(socialMedia.socialLinks);
    });
  
    return (
        <footer class="main-footer">
        <div class="main-container">
            <div class="main-footer__upper">
                <div class="main-footer__row main-footer__row-1">
                    <h2 class="heading heading-sm main-footer__heading-sm">
                        <span>Social</span>
                    </h2>
                    <div class="main-footer__social-cont">
                    {social.map((social) => (
                        <a target="_blank" rel="noreferrer" href={social.link}>
                            <img class="main-footer__icon" src={social.logo} alt={social.name}/>
                        </a>
                    ))}
                    </div>
                </div>
                <div class="main-footer__row main-footer__row-2">
                    <h2 class="heading heading-sm text-lt">Divyesh Panchal</h2>
                    <p class="main-footer__short-desc">
                        A Frontend focused Web Developer building the Frontend of Websites
        and Web Applications that leads to the success of the overall
        product
                    </p>
                </div>
            </div>
            {/* <!-- If you give me some credit or shoutout here by linking to my website, then it will be a big thing for me and will help me a lot :) --> */}
            <div class="main-footer__lower">
                &copy; Copyright
                <script>
        document.write(new Date().getFullYear());
                </script>
                . Made by
                <a rel="noreferrer" target="_blank" href="https://rammaheshwari.com">Divyesh Panchal
                </a
    >
            </div>
        </div>
        </footer>
    );
};

export default Footer;
