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
          padding: "0.6rem",
          marginBottom: "10px",
          backgroundColor: "#1e2c3a"
        }}
      >
        <Row style={{ fontSize: "20px" }}>
          {" "}
          <Col
            xs={12}
            style={{
              alignItems: "center",
              display: "flex",
              padding: "0.1rem 0 0 1rem"
            }}
          >
            <Link to="/" style={{ padding: "0.4rem 0 0 1rem" }}>
              <div className="daml-icon" />
            </Link>

            <div style={{ padding: "0 3rem 0 4rem", float: "left" }}>
              <Link to="/projects" className="homepage-link">
                Projects
              </Link>
            </div>
            <div style={{ padding: "0 0 0 0" }}>
              <Link to="/people" className="homepage-link">
                People
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Navigation;
