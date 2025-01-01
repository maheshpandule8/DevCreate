import React from 'react';
import '../CSS/Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>📞 +91 76202 53295</p>
          <p>✉️ support@devcreate.co.in</p>
          <button className="contact-button">Get in Touch</button>
        </div>
        <div className="footer-map">
          <h3>Our Location</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d483864.49687230587!2d73.765907!3d18.655406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x123456789abcdef!2zMTjCsDM5JzE5LjUiTiA3M8KwNDUnNTcuMyJF!5e0!3m2!1sen!2sus!4v1735746022791!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2025 DevCreate. All Rights Reserved. create by Mahesh Pandule</p>
      </div>
    </footer>
  );
}

export default Footer;
