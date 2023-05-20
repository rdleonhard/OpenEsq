import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">
      <Image src="/logo.png" alt="OpenEsquire Logo" height="30px" />
    </Navbar.Brand>
    <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>
          <Nav.Link as={Link} to="/our-services">Our Services</Nav.Link>
          <Nav.Link as={Link} to="/faq">FAQ</Nav.Link>
          <Nav.Link as={Link} to="/payment">Payment</Nav.Link>
          <Nav.Link as={Link} to="/contact-us">Contact Us</Nav.Link>
    </ Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
