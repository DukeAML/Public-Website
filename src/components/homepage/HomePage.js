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

  handleSignUpClick = () => {
    var link = "mailto:news@dukeaml.com"
             + "?cc=duke.applied.ml@gmail.com"
             + "&subject=" + escape("Add me to the Newsletter!")
             + "&body=" + escape("This is the email to add.")
    ;

    window.location.href = link;
  };

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
        <Container fluid style={{ height: "100vh", marginBottom: "10px" }}>
          <Row
            className="justify-content-md-center"
            style={{ fontSize: "1.5rem" }}
          >
            {/**Navigation Area */}
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
              <Link to="/">
                <div className="daml-icon" />
              </Link>
              <div style="text-align:center">
       <div class="slider" id="slider-range"></div>
      < div class="slider" id="slider-test"></div>
  
      <canvas id="canvasOne" width="900" height="520" ></canvas>
      </div>
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
              paddingTop: "30vh"
            }}
          >
            {/**Icon */}
            <Image
              fluid
              className="main-graphic"
              src={require("./images/DAML_Full_Cream_Transparent.svg")}
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
                  fontFamily: "Lora",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
               We are a group focused on building, implementing, and deploying end-to-end machine learning models to solve research and business problems. We establish collaborations with local companies and organizations to identify and solve challenges they face. Through collaboration with post-graduate, graduate, and undergraduate students studying data science, mathematics, computer science, business, electrical engineering and more, we provide an interdisciplinary approach to solving these problems.
              </Col>
              <Col md={6} sm={12}>
                <Animation />
              </Col>
            </Row>
          </Container>
        </Container>
        <Container fluid className="boxShadowed" style={{backgroundColor: "#2f3e4e"}}>
          <Container>
            <Row
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <h3 className="homepageTitle" style={{ marginBottom: "20px" }}>
                News
              </h3>
            </Row>
            <Row>
              <Col
                md={6}
                sm={12}
                style={{
                  fontFamily: "Lora",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
             We are a group focused on building, implementing, and deploying end-to-end machine learning models to solve research and business problems. We establish collaborations with local companies and organizations to identify and solve challenges they face. Through collaboration with post-graduate, graduate, and undergraduate students studying data science, mathematics, computer science, business, electrical engineering and more, we provide an interdisciplinary approach to solving these problems.
              </Col>
              <Col md={6} sm={12}>
                <img src = "dtc-logo-tag.png" 
                style={{
                  height: "600 px",
                  width: "600px",
              
                
                }}/>
              </Col>
            </Row>
          </Container>
        </Container>
         <Footer
        />
      </div>
    );
  }
}

export default HomePage;
