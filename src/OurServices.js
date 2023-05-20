// OurServices.js
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const OurServices = () => (
  <div className="our-services">
    <Container>
        <Row>
        <Col xs={12} md={6}>
          <Image src="asset3.png" alt="Asset" fluid />
          </Col>
          <Col md={6}>
           <h2>Our Services</h2>
           <p>Embarking on your journey through the web3 ecosystem? Navigate with ease and confidence, backed by our top-tier legal services specifically tailored for web3 clients. Whether you're an individual or a business, our comprehensive service suite ensures you're covered on all fronts in this dynamic and complex landscape.</p>
           <p>Our team is well-versed in the nuances of blockchain technology, cryptocurrency, smart contracts, and other emerging technologies. We offer more than just legal services - we offer peace of mind. From drafting and reviewing contracts to guiding you through the labyrinth of laws and regulations, we are your steadfast partners.</p>
           <p>Need to represent your interests in disputes or legal proceedings? We're there. Want to understand the potential legal implications of your web3-related activities and devise strategies to mitigate risks? Our consultation services have got you covered.</p>
           <p>But we don't stop at web3 law. We understand that the digital world comes with its own unique set of challenges. That's why we offer expertise in data privacy, intellectual property, and consumer protection - legal issues that are paramount to online businesses.</p>
           <p>At our core, we strive for personalized, knowledgeable, and professional service. We're not just your legal advisors, we're your allies in the rapidly evolving web3 space, empowering you to thrive with our expert legal support.</p>
          </ Col>
          </Row>
          </Container>
<footer className="text-center mt-4">
        <p>&copy; {new Date().getFullYear()} OpenEsquire. All rights reserved.</p>
        <a href="#privacy">Privacy Policy</a> | <a href="#terms">Terms of Service</a>
      </footer>
  </div>
);

export default OurServices;
