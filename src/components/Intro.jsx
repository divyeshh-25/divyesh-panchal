import React from 'react';
import useReveal from './useReveal';

const Intro = () => {
    const ref = useReveal();

    return (
        <section className="intro sec-pad" ref={ref}>
            <div className="main-container intro__grid">
                <h2 className="intro__lede reveal">
                    More than code.<br />I build solutions.
                </h2>
                <div className="intro__body reveal">
                    <p>
                        I approach every project as a business problem first, a technical
                        problem second. Over the past 3+ years, that has meant translating
                        requirements from founders, agencies, and operators into applications
                        that are reliable, maintainable, and built to scale.
                    </p>
                    <p>
                        My work spans full stack web applications, AI-powered features, and
                        custom software built around how a business actually operates &mdash;
                        not a generic template of how it should.
                    </p>
                    <div className="intro__highlights">
                        <div className="intro__highlight">3+ years of development experience</div>
                        <div className="intro__highlight">Full stack application development</div>
                        <div className="intro__highlight">AI-powered solutions</div>
                        <div className="intro__highlight">Custom business software</div>
                        <div className="intro__highlight">Scalable architecture</div>
                        <div className="intro__highlight">Problem-solving mindset</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;
