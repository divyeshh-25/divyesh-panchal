import React, { useEffect, useState } from 'react';
import skillsData from './data/skill.json';
import useReveal from './useReveal';

const About = () => {
    const [categories, setCategories] = useState([]);
    const ref = useReveal();

    useEffect(() => {
        setCategories(skillsData.categories);
    }, []);

    const allSkills = categories.flatMap((c) => c.skills);

    return (
        <section id="about" className="about sec-pad" ref={ref}>
            <div className="main-container">
                <div className="section-head reveal">
                    <span className="eyebrow">About</span>
                    <h2 className="section-head__title">The Developer Behind the Work</h2>
                </div>
                <div className="about__grid">
                    <div className="about__portrait reveal">
                        <svg viewBox="0 0 400 480" className="about__portrait-svg" role="img" aria-label="Illustration of a developer sitting at a desk, working in front of a large monitor">
                            <g className="about__illo-float">
                                {/* chair back, behind person */}
                                <rect x="120" y="300" width="160" height="150" rx="26" fill="var(--color-bg-alt)" stroke="var(--color-border)" strokeWidth="2" />

                                {/* monitor */}
                                <rect x="80" y="54" width="240" height="190" rx="10" fill="var(--color-ink)" />
                                <rect x="94" y="68" width="212" height="150" rx="3" fill="var(--color-accent-soft)" />
                                <rect x="186" y="244" width="28" height="26" fill="var(--color-ink)" />
                                <rect x="150" y="270" width="100" height="10" rx="3" fill="var(--color-ink)" />

                                {/* screen: code lines */}
                                <rect x="108" y="84" width="78" height="7" rx="2" fill="var(--color-accent)" />
                                <rect x="108" y="98" width="52" height="7" rx="2" fill="var(--color-ink)" opacity="0.3" />
                                <rect x="108" y="112" width="64" height="7" rx="2" fill="var(--color-ink)" opacity="0.3" />
                                <rect x="108" y="126" width="38" height="7" rx="2" fill="var(--color-accent)" />
                                <rect className="about__illo-cursor" x="150" y="126" width="6" height="7" fill="var(--color-ink)" />

                                {/* screen: growth chart */}
                                <polyline
                                    className="about__illo-chart"
                                    points="108,206 132,174 156,190 182,142 210,162 240,120 268,138 292,100"
                                    fill="none"
                                    stroke="var(--color-accent)"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <circle cx="292" cy="100" r="5" fill="var(--color-accent)" />

                                {/* desk */}
                                <rect x="34" y="286" width="332" height="12" rx="2" fill="var(--color-ink)" />
                                <rect x="50" y="298" width="8" height="48" fill="var(--color-ink)" />
                                <rect x="342" y="298" width="8" height="48" fill="var(--color-ink)" />

                                {/* mug with steam */}
                                <g>
                                    <path className="about__illo-steam" d="M300 250 q-6 -10 0 -18" fill="none" stroke="var(--color-muted)" strokeWidth="2" strokeLinecap="round" />
                                    <path className="about__illo-steam about__illo-steam--2" d="M312 250 q-6 -10 0 -18" fill="none" stroke="var(--color-muted)" strokeWidth="2" strokeLinecap="round" />
                                    <rect x="292" y="252" width="28" height="24" rx="4" fill="var(--color-accent)" />
                                    <path d="M320 258 q10 0 10 8 t-10 8" fill="none" stroke="var(--color-accent)" strokeWidth="2.5" />
                                </g>

                                {/* laptop on desk */}
                                <path d="M150 262 L250 262 L262 286 L138 286 Z" fill="var(--color-dark)" />
                                <rect x="162" y="228" width="76" height="36" rx="3" fill="var(--color-ink)" />
                                <rect x="169" y="234" width="62" height="24" fill="var(--color-accent-soft)" />

                                {/* person */}
                                <path d="M136 352 C136 300 164 278 200 278 C236 278 264 300 264 352 L264 380 L136 380 Z" fill="var(--color-ink)" />
                                <path className="about__illo-arm about__illo-arm--l" d="M160 318 C166 332 180 340 194 340" fill="none" stroke="var(--color-ink)" strokeWidth="11" strokeLinecap="round" />
                                <path className="about__illo-arm about__illo-arm--r" d="M240 318 C234 332 220 340 206 340" fill="none" stroke="var(--color-ink)" strokeWidth="11" strokeLinecap="round" />
                                <circle cx="200" cy="254" r="32" fill="var(--color-accent-soft)" stroke="var(--color-ink)" strokeWidth="2.5" />
                                <path d="M168 248 Q168 212 200 212 Q232 212 232 248 Q212 230 200 230 Q188 230 168 248 Z" fill="var(--color-ink)" />
                            </g>
                        </svg>
                    </div>
                    <div className="about__body reveal">
                        <p>
                            I&rsquo;m <strong>Divyesh Panchal</strong>, a Full Stack Developer and
                            AI Engineer based in Ahmedabad, India. I started out building websites
                            on Laravel and WordPress, and over the last 3+ years that work has
                            grown into full product builds &mdash; backend systems, custom admin
                            panels, and more recently, AI-powered features built on top of LLM
                            integrations.
                        </p>
                        <p>
                            What hasn&rsquo;t changed is how I approach a project: understand what
                            the business actually needs before writing a line of code. I&rsquo;ve
                            built platforms with live payments and virtual consultations, backend
                            systems for managing bookings and fleets, and custom WordPress builds
                            for agencies &mdash; each one shaped by the specific problem it had to
                            solve, not a one-size-fits-all template.
                        </p>
                        <p>
                            I&rsquo;m especially interested in where AI can be used practically
                            &mdash; not as a buzzword, but as a way to automate real workflows and
                            make applications genuinely smarter. I care about writing code that the
                            next developer can actually maintain, and about delivering software that
                            keeps working long after the first deploy.
                        </p>
                        <div className="about__skills">
                            <div className="about__skills-title">Technologies I work with</div>
                            <div className="skills">
                                {allSkills.map((skill, index) => (
                                    <div className="skills__skill" key={index}>{skill}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
