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
          paddingTop: "1rem",
          backgroundColor: "#1e2c3a"
        }}
      >
        <Col sm={12} md={10} lg={8}>
          {/**Navigation Area */}
          <Row
            style={{
              fontSize: "1.5rem",
              padding: 0,
              verticalAlign: "middle",
              justifyContent: "center"
            }}
          >
            {/**Navigation Area */}
            <Col xs={2}>
              <Link to="/">
                <div className="daml-icon" />
              </Link>
            </Col>
            <Col xs={2} to="/projects" className="nav-link-col">
              <Link to="/projects" className="nav-link">
                Projects
              </Link>
            </Col>
            <Col xs={2} className="nav-link-col">
              <Link to="/people" className="nav-link">
                People
              </Link>
            </Col>
            <Col xs={2} className="nav-link-col">
              <Link to="/courses" className="nav-link">
                Courses
              </Link>
            </Col>
          </Row>
        </Col>
      </Container>
    );
  }
}

export default Navigation;
