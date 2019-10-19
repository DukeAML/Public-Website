import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
  Container
} from "react-bootstrap";
import { Link } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <Navbar
        style={{ backgroundColor: "#2B3E50", marginTop: "10px" }}
        expand="lg"
      >
        <Container>
          <Navbar.Brand style={{ color: "white" }}>
            <span>
              <Link to="/" style={{ color: "white" }}>
                Duke Applied ML
              </Link>
            </span>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{ backgroundColor: "white" }}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link>
                <Link to="/projects" style={{ color: "white" }}>
                  Projects
                </Link>
              </Nav.Link>
              <Nav.Link style={{ color: "white" }}>GPUs</Nav.Link>
              <Button variant="primary">Login</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Navigation;
