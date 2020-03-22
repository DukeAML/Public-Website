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
    // need to use inline styles for veertical alignment of columns so that defaults are overridden
    const verticalAlign = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    };
    return (
      <Container
        fluid
        style={{
          margin: 0,
          padding: 0,
          paddingTop: "0.5rem",
          backgroundColor: this.props.backgroundColor || "#f2f4f5",
          maxWidth: "100vw"
        }}
      >
        <Row style={{ padding: 0, margin: 0 }}>
          <Col xs="2" lg="1" style={verticalAlign}>
            <Link to="/">
              <img
                alt="Home"
                src={require("../homepage/images/DAML_Full_Grey_Transparent.svg")}
                width="50"
                height="50"
              />
            </Link>
          </Col>
          <Col xs="2" lg="1" style={verticalAlign}>
            <Link to="/projects" className="nav-link-col">
              Projects
            </Link>{" "}
          </Col>

          <Col xs="2" lg="1" style={verticalAlign}>
            {" "}
            <Link to="/people" className="nav-link-col">
              People
            </Link>
          </Col>

          <Col xs="2" lg="1" style={verticalAlign}>
            <Link to="/courses" className="nav-link-col">
              Courses
            </Link>
          </Col>

          <Col xs="2" lg="1" style={verticalAlign}>
            <Link to="/papers" className="nav-link-col">
              Papers
            </Link>
          </Col>

          <Col xs="2" lg="1" style={verticalAlign}>
            <Link to="/GPU" className="nav-link-col">
              GPUs
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Navigation;
