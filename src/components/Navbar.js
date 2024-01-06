import React from "react";

import { Navbar, Nav, Container } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import Image from "../assets/img/logo.jpeg";

const MenuNavbar = () => {
  return (
    <>
      <Navbar data-bs-theme="dark" expand="lg" className="navBg">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="logo"
              src={Image}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Titanium
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Inicio
              </Nav.Link>
              <Nav.Link as={Link} to="/documento-grafico">
                Documento Grafico
              </Nav.Link>
              <Nav.Link as={Link} to="/consulta-dte">
                Consulta Dte
              </Nav.Link>
              <Nav.Link as={Link} to="/archivo-dte">
                Archivo Dte
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section>
        <Outlet></Outlet>
      </section>
    </>
  );
};

export default MenuNavbar;
