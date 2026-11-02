import React, { useEffect, useState } from 'react';
import skillsData from './data/skill.json';
import useReveal from './useReveal';

const TechStack = () => {
    const [categories, setCategories] = useState([]);
    const ref = useReveal();

    useEffect(() => {
        setCategories(skillsData.categories);
    }, []);

    return (
        <section className="tech sec-pad" ref={ref}>
            <div className="main-container">
                <div className="section-head reveal">
                    <span className="eyebrow">Stack</span>
                    <h2 className="section-head__title">Tools &amp; Technologies</h2>
                </div>
                <div className="tech__grid reveal">
                    {categories.map((category) => (
                        <div className="tech__col" key={category.name}>
                            <h3 className="tech__col-title">{category.name}</h3>
                            <div className="tech__col-list">
                                {category.skills.map((skill) => (
                                    <span className="tech__col-item" key={skill}>{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
