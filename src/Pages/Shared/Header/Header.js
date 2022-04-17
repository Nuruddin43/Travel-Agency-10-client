import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../images/travel.png";

const Header = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img style={{ height: "30px", width: "24px" }} src={logo} alt="" />
            FlyWay
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Services</Nav.Link>
            <Nav.Link href="#pricing">Packages</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
