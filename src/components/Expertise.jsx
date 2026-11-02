import React, { useEffect, useState } from 'react';
import servicesData from './data/services.json';
import useReveal from './useReveal';

const Expertise = () => {
    const [services, setServices] = useState([]);
    const ref = useReveal();

    useEffect(() => {
        setServices(servicesData.services);
    }, []);

    return (
        <section id="expertise" className="expertise sec-pad" ref={ref}>
            <div className="main-container">
                <div className="section-head reveal">
                    <span className="eyebrow">Expertise</span>
                    <h2 className="section-head__title">What I Can Build For You</h2>
                </div>
                <div className="service-list reveal">
                    {services.map((service) => (
                        <div className="service-row" key={service.number}>
                            <span className="service-row__number">{service.number}</span>
                            <h3 className="service-row__title">{service.title}</h3>
                            <p className="service-row__desc">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Expertise;
