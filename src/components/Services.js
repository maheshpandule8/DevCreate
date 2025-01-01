import React from 'react';
import '../CSS/Services.css';
import itServiceIcon from '../assets/images/it-service.png';
import designServiceIcon from "../assets/images/it-service.png";
import skyCivIcon from '../assets/images/it-service.png';
import trainingIcon from '../assets/images/it-service.png';

function Services() {
  const services = [
    {
      title: 'IT Services',
      description: 'We have expertise in both Web Application & Standalone Application Development.',
      link: '#',
      icon: itServiceIcon,
    },
    {
      title: 'Engineering Design Services',
      description: 'We can help in various areas like Feasibility Study, Bid Stage Assistance & Estimation.',
      link: '#',
      icon: designServiceIcon,
    },
    {
      title: 'SkyCiv',
      description: 'We are proud to be present ourselves as Authorized reseller for SkyCiv in India.',
      link: '#',
      icon: skyCivIcon,
      special: true,
    },
    {
      title: 'Corporate Training',
      description: 'We provide Technical Corporate training solutions to the companies for newcomers as well as experienced professionals.',
      link: '#',
      icon: trainingIcon,
    },
  ];

  return (
    <div className="services-container">
      <h2 className="services-title">The Services that make us Unique</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className={`service-card ${service.special ? 'special' : ''}`}>
            <img src={service.icon} alt={`${service.title} Icon`} className="service-icon" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href={service.link}>See Details →</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services; 