import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const AboutUs = () => (
  <div className="about-us">
    <h2>About Us</h2>
    <p>Open Esquire is a Pennsylvania-registered d/b/a for the Law Office of Robert Leonhard. Attorney Leonhard specializes in advising Ethereum-based projects. He's been working with blockchain technology and smart contracts for over 6 years, and has helped numerous clients navigate the complex legal landscape surrounding these innovative technologies.
Attorney Leonhard is passionate about the potential of Ethereum and blockchain technology to revolutionize industries and change the way we do business. He's dedicated to helping clients succeed and thrive in this exciting space, and ensuring that their projects are built on a strong legal foundation.
In addition to his work with Ethereum-based projects, Attorney Leonhard has been a PA-licensed attorney since 2009 with a focus on corporate and securities. He has a Juris Doctor from the University of Pittsburgh School of Law and earned his LLM in Energy and Sustainable Development with an emphasis on Ethereum-based applications. He was awarded the Reed Smith Adversity Award for his service and humanitarian work in Iraq. </p>
<Image src="asset2.png" alt="Asset" fluid />
<footer className="text-center mt-4">
        <p>&copy; {new Date().getFullYear()} OpenEsquire. All rights reserved.</p>
        <a href="#privacy">Privacy Policy</a> | <a href="#terms">Terms of Service</a>
      </footer>
  </div>
  
);

export default AboutUs;
