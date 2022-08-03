import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Navigator() {
  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/" style={{color:"white"}}>User Manager</Navbar.Brand>
          <Link to="/create">
        <Button className="float-end my-2" type="submit" variant="primary">
          New User
        </Button>
      </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
      </Navbar>
    </>
  );
}
