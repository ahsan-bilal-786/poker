import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const DefaultLayout = (PokerComponent) => {
  return (props) => (
    <>
      <Navbar bg="dark" expand="lg">
        <Link to="/" className="text-light">
          <h4 className="mt-1">Planning Poker</h4>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Navbar>
      <Container className="h-100">
        <PokerComponent {...props} />
      </Container>
    </>
  );
};

export default DefaultLayout;
