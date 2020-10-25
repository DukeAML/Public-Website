import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Redirect, Link } from "react-router-dom";
import Footer from "../tools/Footer";
import "./Join.scss";
import Navigation from "../tools/Navigation";

class Join extends React.Component {
  state = { redirect: false };

  handleProjectsClick = () => {
    this.setState({ redirect: true });
  };

  componentDidMount() {
    this.setState({ redirect: false });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/projects" />;
    }

    return (
      <div>
        <Navigation />
        {/**PHOENIX SECTION */}
        <Container fluid className="boxShadowed" style={{ height: "50vh" }}>
          <Container>
            <Row
              className="vertical-align-outer"
              style={{
                fontFamily: "Lora",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Join Data Science!!!!!
            </Row>
            <Row
              className="vertical-align-outer"
              style={{
                fontFamily: "Lora",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{ alignSelf: "center" }}
                fluid
                className="main-graphic parallax"
                src={require("../homepage/images/DAML_Picture_Black_Transparent.svg")}
              />
            </Row>
          </Container>
        </Container>
        {/**INNOVATION STUDIO SECTION */}
        <Container fluid className="boxShadowed" style={{ height: "50vh" }}>
          <Container>
            <Row
              className="vertical-align-outer"
              style={{
                fontFamily: "Lora",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Join SWE!!!!!
            </Row>
            <Row
              className="vertical-align-outer"
              style={{
                fontFamily: "Lora",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{ alignSelf: "center" }}
                fluid
                className="main-graphic parallax"
                src={require("../homepage/images/DAML_Picture_Black_Transparent.svg")}
              />
            </Row>
          </Container>
        </Container>
        {/**Tech for Equity SECTION */}
        <Container fluid className="boxShadowed" style={{ height: "50vh" }}>
          <Container>
            <Row
              className="vertical-align-outer"
              style={{
                fontFamily: "Lora",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Join Hardware!!!!!
            </Row>
            <Row
              className="vertical-align-outer"
              style={{
                fontFamily: "Lora",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{ alignSelf: "center" }}
                fluid
                className="main-graphic parallax"
                src={require("../homepage/images/DAML_Picture_Black_Transparent.svg")}
              />
            </Row>
          </Container>
        </Container>
        <Container fluid className="boxShadowed" style={{ height: "50vh" }}>
          <Container>
            <Row
              className="vertical-align-outer"
              style={{
                fontFamily: "Lora",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Join PM!!!!!
            </Row>
            <Row
              className="vertical-align-outer"
              style={{
                fontFamily: "Lora",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{ alignSelf: "center" }}
                fluid
                className="main-graphic parallax"
                src={require("../homepage/images/DAML_Picture_Black_Transparent.svg")}
              />
            </Row>
          </Container>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Join;
