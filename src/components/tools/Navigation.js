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
          backgroundColor: this.props.backgroundColor || "#f2f4f5",
          maxWidth: "100vw"
        }}
      >
        <div style={{ padding: "0" }}>
          <Navbar>
            <Col xs="2" lg="1">
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
            <Col xs="2" lg="1">
              <Link to="/projects" className="nav-link-col">
                Projects
              </Link>{" "}
            </Col>

            <Col xs="2" lg="1">
              {" "}
              <Link to="/people" className="nav-link-col">
                People
              </Link>
            </Col>

            <Col xs="2" lg="1">
              <Link to="/courses" className="nav-link-col">
                Courses
              </Link>
            </Col>

            <Col xs="2" lg="1">
              <Link to="/papers" className="nav-link-col">
                Papers
              </Link>
            </Col>

            <Col xs="2" lg="1">
              <Link to="/GPU" className="nav-link-col">
                GPUs
              </Link>
            </Col>
          </Navbar>
        </div>
      </Container>
    );
  }
}

export default Navigation;
