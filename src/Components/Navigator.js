import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Navigator() {
  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/" style={{color:"white"}}>User Manager</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
      </Navbar>
    </>
  );
}
