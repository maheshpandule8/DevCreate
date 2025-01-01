import React, { useEffect, useState } from 'react';
import '../CSS/Testimonials.css';
import l1 from '../assets/images/l1.jpg';
import l2 from '../assets/images/l2.png';
import l3 from '../assets/images/l3.png';
import l4 from '../assets/images/l4.png';
import l5 from '../assets/images/l5.png';
import l6 from '../assets/images/l6.png';

const testimonials = [
  {
    logo: l1,
    company: 'METAL FAB',
    text: 'Outstanding technical work provided by "DevCreate Solutions".',
    author: 'VINEETH M K',
    position: 'Engineering Lead',
  },
  {
    logo: l2,
    company: 'Company 2',
    text: 'Excellent service and support.',
    author: 'John Doe',
    position: 'Project Manager',
  },
  {
    logo: l3,
    company: 'Company 3',
    text: 'Highly recommend for any technical needs.',
    author: 'Jane Smith',
    position: 'CTO',
  },
  {
    logo: l4,
    company: 'Company 4',
    text: 'Professional and reliable.',
    author: 'Alice Johnson',
    position: 'CEO',
  },
  {
    logo: l5,
    company: 'Company 5',
    text: 'Great experience working with them.',
    author: 'Bob Brown',
    position: 'Lead Engineer',
  },
  {
    logo: l6,
    company: 'Company 6',
    text: 'Top-notch solutions and support.',
    author: 'Charlie Davis',
    position: 'Director',
  },
];

function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonials-container">
      <div className="testimonial-slide">
        <img src={testimonials[current].logo} alt="Company Logo" className="company-logo" />
        <h3>{testimonials[current].company}</h3>
        <p>{testimonials[current].text}</p>
        <p className="author">{testimonials[current].author}</p>
        <p className="position">{testimonials[current].position}</p>
      </div>
    </div>
  );
}

export default Testimonials; 