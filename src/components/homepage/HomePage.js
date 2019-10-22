import React from "react";
import {
  Container,
  Jumbotron,
  Button,
  Row,
  Col,
  Image,
  Card,
  Carousel
} from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";

import Canvas from "../canvas/Canvas";
import Animation from "../canvas/Animation";
import Footer from "../tools/Footer";
import ThemeCard from "./ThemeCard";
import ImageAccordion from "../tools/ImageAccordion";

import IndustryBuckets from "./IndustryBuckets";

import "./HomePage.scss";

class HomePage extends React.Component {
  state = { redirect: false };

  handleSignUpClick = () => {};

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
        <Container style={{ height: "100%", paddingTop: "60px" }} />

        {/**INTRODUCTION SECTION */}
        <Container fluid style={{ marginBottom: "10px" }}>
          <Row
            className="justify-content-md-center"
            style={{ fontSize: "20px" }}
          >
            {/**Navigation Area */}
            <Col md={2} sm={4} xs={4} style={{ textAlign: "center" }}>
              <Link to="/">
                <div className="daml-icon" />
              </Link>
            </Col>
            <Col
              md={2}
              sm={4}
              xs={4}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
              to="/projects"
            >
              <Link to="/projects" className="homepage-link">
                Projects
              </Link>
            </Col>
            <Col
              md={2}
              sm={4}
              xs={4}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Link to="/people" className="homepage-link">
                People
              </Link>
            </Col>
          </Row>
          <Row
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "65px"
            }}
          >
            {/**Icon */}
            <Image
              fluid
              className="main-graphic"
              src={require("./images/DAML-logo.svg")}
            />
          </Row>
        </Container>

        {/**ABOUT SECTION */}
        <Container fluid className="boxShadowed">
          <Container>
            <Row
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <h3 className="homepageTitle" style={{ marginBottom: "20px" }}>
                About DAML
              </h3>
            </Row>
            <Row>
              <Col
                md={6}
                sm={12}
                style={{
                  fontFamily: "Roboto Mono",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum has been the industry 's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages.
              </Col>
              <Col md={6} sm={12}>
                <Animation />
              </Col>
            </Row>
          </Container>
        </Container>

        {/** APPLICATIONS SECTION */}
        <Container fluid>
          <Container>
            <h3
              className="homepageTitle"
              style={{ marginBottom: "20px", marginTop: "20px" }}
            >
              Bring ML To Your Field
            </h3>
            <IndustryBuckets />
          </Container>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default HomePage;
