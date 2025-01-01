import React from 'react';
import '../CSS/EngineeringSolutions.css'; // Import theC CSS file for custom styles
import 'bootstrap/dist/css/bootstrap.min.css';
import engineeringImage from '../assets/images/Untitled-design.jpg';
import aboutUsImage from '../assets/images/Home_Page_AboutUs-min.jpg';

function EngineeringSolutions() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1 className="display-4 animate__animated animate__fadeInLeft">
            Empowering Engineers with Smart Software Solutions.
          </h1>
          <p className="lead">
            If you are an Engineer or an Engineering firm, looking to achieve 25% faster workflows, 30% cost savings, and 30% error reduction, DevCreate can help you. If any of this resonates with your vision of success, then our 25-30-30 Engineering Success Blueprint is for you.
          </p>
          <ul>
            <li>One-on-One Review Session with an Expert Engineer to identify bottlenecks</li>
            <li>Customized Workflow Tools</li>
            <li>Priority Support by Expert Engineers during and after onboarding</li>
          </ul>
          <p>
            Don’t Wait – Start your Engineering Transformation today with our 25-30-30 Engineering Success Blueprint. DevCreate can be your trusted partner. Schedule your free, no-obligation demo and discover how our tailored solutions can help you. <a href="#contact">Contact Us</a>
          </p>
        </div>
        <div className="col-md-6">
          <img 
            src={engineeringImage} 
            alt="Engineering Solutions" 
            className="img-fluid animate__animated animate__fadeInRight" 
          />
        </div>
      </div>

      <div className="row align-items-center my-5">
        <div className="col-md-6">
          <img 
            src={aboutUsImage} 
            alt="About Us" 
            className="img-fluid animate__animated animate__fadeInLeft" 
          />
        </div>
        <div className="col-md-6">
          <h2 className="animate__animated animate__fadeInRight">We are the next gen Business experience</h2>
          <p>
            DevCreate is a Software Development and Structural Engineering Consultancy firm. We started our operations in 2012 and are based out of Pune, India. At DevCreate Solutions LLP, we understand your struggles because we’ve been there. We’ve seen firsthand how inefficiencies, fragmented tools, and manual processes can weigh down even the most skilled teams. That’s why we’ve dedicated ourselves to one mission: to empower structural engineers and design professionals like you with tools and solutions that work seamlessly, save time, and eliminate errors. We’re not just another vendor—we’re your partner in transforming your workflows and achieving excellence.
          </p>
        </div>
      </div>
    </div>
  );
}

export default EngineeringSolutions; 