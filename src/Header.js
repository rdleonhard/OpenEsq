import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return (
      <Container fluid className="bg-dark text-white py-5">
        <Row className="justify-content-center">
          <Col className="text-center">
            <h1 className="display-3">Web3 Law Firm</h1>
            <p className="lead">Smart contracts, Smart advice</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Header;

