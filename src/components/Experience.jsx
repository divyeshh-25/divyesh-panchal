import React, { useEffect, useState } from 'react';
import experienceData from './data/experience.json';
import useReveal from './useReveal';

const Experience = () => {
    const [experience, setExperience] = useState([]);
    const ref = useReveal();

    useEffect(() => {
        setExperience(experienceData.experience);
    }, []);

    return (
        <section id="experience" className="experience sec-pad" ref={ref}>
            <div className="main-container">
                <div className="section-head reveal">
                    <span className="eyebrow">Experience</span>
                    <h2 className="section-head__title">Professional Experience</h2>
                </div>
                <div className="experience__timeline reveal">
                    {experience.map((job, index) => (
                        <div className="experience__item" key={index}>
                            <div className="experience__item-marker" aria-hidden="true"></div>
                            <div className="experience__item-head">
                                <div>
                                    <h3 className="experience__role">{job.role}</h3>
                                    <p className="experience__company">{job.company}</p>
                                </div>
                                <div className="experience__period">
                                    {job.status && (
                                        <span className="experience__status">
                                            <span className="experience__status-dot"></span>
                                            {job.status}
                                        </span>
                                    )}
                                    {job.period}
                                </div>
                            </div>
                            <ul className="experience__points">
                                {job.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
