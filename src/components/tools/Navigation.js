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
          padding: "1rem",
          marginBottom: "10px",
          backgroundColor: "#1e2c3a"
        }}
      >
        <Row style={{ fontSize: "20px" }}>
          {" "}
          <Col
            xs={6}
            style={{
              alignItems: "center",
              display: "flex",
              padding: "0.2rem 0 0 1rem"
            }}
          >
            <Link to="/">
              <div className="daml-icon" />
            </Link>
          </Col>
          <Col
            className="justify-content-end"
            xs={6}
            style={{
              alignItems: "center",
              display: "flex"
            }}
          >
            <Row>
              <Col xs={6}>
                <div style={{ padding: "0 1rem 0 0", float: "right" }}>
                  <Link to="/projects" className="homepage-link">
                    Projects
                  </Link>
                </div>
              </Col>
              <Col xs={6}>
                <div style={{ padding: "0 0 0 0" }}>
                  <Link to="/people" className="homepage-link">
                    People
                  </Link>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Navigation;
