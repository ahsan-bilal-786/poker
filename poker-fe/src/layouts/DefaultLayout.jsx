import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { getBaseUrl } from "config";

const DefaultLayout = (PokerComponent) => {
  return (props) => (
    <>
      <Navbar bg='dark' expand='lg'>
        <Navbar.Brand href={getBaseUrl("/")} className='text-light'>
          Planning Poker
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
      </Navbar>
      <Container className='h-100'>
        <PokerComponent {...props} />
      </Container>
    </>
  );
};

export default DefaultLayout;
