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
          padding: 0,
          backgroundColor: this.props.backgroundColor || "#1e2c3a"
        }}
      >
        <Row
          className={this.props.center ? "justify-content-md-center" : ""}
          style={{ padding: "0 1rem" }}
        >
          <Navbar>
            <Navbar.Brand href="/">
              <img
                alt="Home"
                src={require("../homepage/images/DAML_Full_Cream_Transparent.svg")}
                width="50"
                height="50"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>

            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/people">Our Team</Nav.Link>
            <Nav.Link href="/courses">Courses</Nav.Link>
          </Navbar>
        </Row>
      </Container>
    );
  }
}

export default Navigation;
