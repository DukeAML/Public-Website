import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
  Container,
  Row,
  Col,
  Image
} from "react-bootstrap";
import { Link } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <Container
        fluid
        style={{
          padding: "0",
          backgroundColor: this.props.backgroundColor || "#f2f4f5"
        }}
      >
        <div style={{ padding: "0" }}>
          <Navbar>
            <Col xs="2" md="1">
              <Navbar.Brand>
                <Link to="/">
                  <img
                    alt="Home"
                    src={require("../homepage/images/DAML_Full_Grey_Transparent.svg")}
                    width="50"
                    height="50"
                    className="d-inline-block align-top DAML-nav-icon"
                  />
                </Link>
              </Navbar.Brand>
            </Col>
            <Col xs="2" md="1">
              <Nav.Link>
                <Link to="/projects" className="nav-link">
                  Projects
                </Link>{" "}
              </Nav.Link>
            </Col>

            <Col xs="2" md="1">
              <Nav.Link>
                {" "}
                <Link to="/people" className="nav-link">
                  People
                </Link>
              </Nav.Link>
            </Col>

            <Col xs="2" md="1">
              <Nav.Link>
                <Link to="/courses" className="nav-link">
                  Courses
                </Link>
              </Nav.Link>
            </Col>

            <Col xs="2" md="1">
              <Nav.Link>
                <Link to="/papers" className="nav-link">
                  Papers
                </Link>
              </Nav.Link>
            </Col>

            <Col xs="2" md="1">
              <Nav.Link>
                <Link to="/GPU" className="nav-link">
                  GPU Usage
                </Link>
              </Nav.Link>
            </Col>
          </Navbar>
        </div>
      </Container>
    );
  }
}

export default Navigation;
