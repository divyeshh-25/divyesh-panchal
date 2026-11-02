import React, { useEffect, useState } from 'react';
import processData from './data/process.json';
import useReveal from './useReveal';

const Process = () => {
    const [steps, setSteps] = useState([]);
    const ref = useReveal();

    useEffect(() => {
        setSteps(processData.steps);
    }, []);

    return (
        <section className="process sec-pad" ref={ref}>
            <div className="main-container">
                <div className="section-head reveal">
                    <span className="eyebrow">Process</span>
                    <h2 className="section-head__title">From Idea to Execution</h2>
                </div>
                <div className="process__grid reveal">
                    {steps.map((step) => (
                        <div className="process__step" key={step.number}>
                            <div className="process__step-number">{step.number}</div>
                            <h3 className="process__step-title">{step.title}</h3>
                            <p className="process__step-desc">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
