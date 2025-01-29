import React, { useEffect, useState } from 'react';
import skillsData from './data/skill.json';


const About = () => {
    const [skills, seSkills] = useState([]);

    useEffect(() => {
        seSkills(skillsData.skills);
    },[]);

  return (
    <section id="about" className="about sec-pad">
    <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
            <span className="heading-sec__main">About Me</span>
            <span className="heading-sec__sub">
            Discover more about me, my work, and the programming and technology skills I currently specialize in
            </span>
        </h2>
        <div className="about__content">
            <div className="about__content-main">
                <h3 className="about__content-title">Get to know me!</h3>
                <div className="about__content-details">
                    <p className="about__content-details-para">
                        I'm a <strong>Full Stack Web Developer</strong> specializing in building and managing websites and web applications to ensure impactful results. Explore some of my work in the <a href='#projects'><strong>Projects</strong></a> section.
                    </p>
                    <p className="about__content-details-para">
                        Skilled in Laravel, CodeIgniter, WordPress, React, HTML, CSS, and JavaScript. I specialize in creating high-quality websites and web applications. My focus is on delivering solutions that drive success.
                    </p>
                    <p className="about__content-details-para">
                        I am available to contribute, learn, and grow in new opportunities. If you have a role that aligns with my skills and experience, feel free to <a href='#contact'><strong>Reach Out</strong></a>
                    </p>
                </div>
                <a href="#contact" className="btn btn--med btn--theme dynamicBgClr">
                    Contact
                </a>
            </div>
            <div className="about__content-skills">
                <h3 className="about__content-title">My Skills</h3>
                <div className="skills">
                    {skills.map((skill, index) => (
                    <div className="skills__skill" key={index}>{skill}</div>
                    ))}
                </div>
            </div>
        </div>
    </div>
    </section>
  );
};

export default About;
