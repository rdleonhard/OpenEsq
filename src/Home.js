// Home.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import CryptoPriceTicker from './CryptoPriceTicker';
import './index.css';

const Home = () => (
  <div >
    <Container>
        <Row>
          <Col md={4}>
            <header className="App-header">
              <h3>OpenΞsquire</h3>
              <h1>Smart contracts, Smart advice</h1>
              <p>OpenEsquire is a law firm that specializes in advising Ethereum-based projects on matters of corporate and securities law.</p>
            </header>
          </Col>
          <Col xs={12} md={4}>
          <Image src="asset.png" alt="Asset" fluid />
          </Col>
          <Col md={4}>
            <CryptoPriceTicker />
          </Col>
        </Row>
      </Container>
      <footer className="text-center mt-4">
        <p>&copy; {new Date().getFullYear()} OpenEsquire. All rights reserved.</p>
        <a href="#privacy">Privacy Policy</a> | <a href="#terms">Terms of Service</a>
      </footer>
  </div>
);

export default Home;
