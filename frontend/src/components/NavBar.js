import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/NavBar";
import Nav from "react-bootstrap/Nav";
import calendar from "../calendar.png";
import NavDropdown from "react-bootstrap/NavDropdown";
import LoginModal from "./LoginModal";
import {Link} from "react-router-dom";

const NavBar = (props) => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleHideLoginModal = () => {
    setShowLoginModal(false);
  };

  const handleShowLoginModal = () => {
    setShowLoginModal(true);
  };

  return (
    <>
      
      <Navbar sticky="top" style={{ backgroundColor: "#35d6d0" }} expand="lg">
        
       <Link to={"/"} className="navbar-brand">
        <img
          style={{ height: "3rem", marginRight: "0.8rem" }}
          src={calendar}
        ></img>
        <Navbar.Text>
          <strong>Calendar</strong>
        </Navbar.Text>
</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">

            {!props.user ? 
              <Button variant="primary" onClick={handleShowLoginModal}>
                Iniciar sesión
              </Button>
            : 
            <>
            <Link to="/miseventos" className="nav-link">
             Mis eventos
            </Link>

              <NavDropdown alignRight title={props.user.nombre}>
                <NavDropdown.Item onClick={props.handleLogout}>Cerrar sesión</NavDropdown.Item>
              </NavDropdown>

              </>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <LoginModal
        show={showLoginModal}
        handleHide={handleHideLoginModal}
        handleLoginSuccess={props.handleLoginSuccess}
      />
    </>
  );
};

export default NavBar;
