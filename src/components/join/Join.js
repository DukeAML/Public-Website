import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Redirect, Link } from "react-router-dom";
import Footer from "../tools/Footer";
import "./Join.scss";
import Navigation from "../tools/Navigation";
const Logo = require("../homepage/images/DAML_Picture_Grey_Transparent.svg");

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
                padding: "5%"
              }}
            >
            <h2>Join the Team!</h2>
            </Row>
            <Row
              className="vertical-align-outer"
              style={{
                fontFamily: "Lora",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
            <p style={{
              width: "50%",
              textAlign: "center"
            }}>
Hello all potential members! DAML is Duke’s premier project based tech organization that will give you real world experience in Data Science, Software Engineering, Hardware, or Product Management. To get involved, simply fill out this form to demonstrate your interest and see the directions below for the specific role of your choice. We are proud to be an entirely non-exclusive group and will put anyone on a project who completes the course for their specific track. 
           </p>
           
          </Row>
          <center>
          <img
              src={Logo}
              alt="The Phoenix Project"
              style={{ height: "15rem", margin: "2rem" }}
            />{" "}
          </center>
          
          </Container>
        </Container>
        <Container fluid className="boxShadowed">
          <Container>
            <Row
              className="vertical-align-outer"
              style={{
                fontFamily: "Lora",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "5%"
              }}
            >
              <h2>About the Process</h2>
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
              Your first step will be completing one of the introductory courses that we have. This is to ensure everyone has the baseline understanding. From there, you'll have a brief interview with our team, and then we'll get you onboarded to the team in which you'll be able to see all the available projects and then will be put on a team and get working.
            </Row>
          </Container>
        </Container>
        {/**INNOVATION STUDIO SECTION */}
        <Container fluid className="boxShadowed">
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
              <Col
                md={4}
                sm={4}
                style={{
                  fontFamily: "Lora",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "5%",
                }}
              >
              <b>Team</b>
            </Col>
            <Col
                md={4}
                sm={4}
                style={{
                  fontFamily: "Lora",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
            Team Description
            </Col>
            <Col
                md={4}
                sm={4}
                style={{
                  fontFamily: "Lora",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "5%",
                }}
              >
              DAML Contacts
            </Col>
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
              <Col
                md={4}
                sm={4}
                style={{
                  fontFamily: "Lora",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "5%",
                }}
              >
              <b>Data Science</b>
            </Col>
            <Col
                md={4}
                sm={4}
                style={{
                  fontFamily: "Lora",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
              The Data science team focuses on leveraging different data science techniques and machine learning concepts to solve real world problems. 
            </Col>
            <Col
                md={4}
                sm={4}
                style={{
                  fontFamily: "Lora",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "5%",
                  textAlign: "center"
                }}
              >
              <a href="mailto:phoebe.klett@duke.edu">Phoebe Klett</a> 
            </Col>
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
              <Col
                md={4}
                sm={4}
                style={{
                  fontFamily: "Lora",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "5%",
                }}
              >
              <b>Software engineering</b>
            </Col>
            <Col
                md={4}
                sm={4}
                style={{
                  fontFamily: "Lora",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
              The software engineering team works on a number of different software related projects for real clients ranging from mobile development to this very website. 
            </Col>
            <Col
                md={4}
                sm={4}
                style={{
                  fontFamily: "Lora",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "5%",
                  textAlign: "center"
                }}
              >
              <a href="mailto:yasa.baig@duke.edu"> Yasa Baig</a>&nbsp; & &nbsp;<a href="mailto:nathaniel.friedman@duke.edu"> Nathaniel Friedman</a> 
            </Col>
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
            <Col
                md={4}
                sm={4}
                style={{
                  fontFamily: "Lora",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "5%",
                }}
              >
              <b>Hardware Team</b>
            </Col>
            <Col
                md={4}
                sm={4}
                style={{
                  fontFamily: "Lora",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
              The Hardware Engineering team focuses on innovative solutions to different problems utilizing electrical and computer engineering. 
            </Col>
            <Col
                md={4}
                sm={4}
                style={{
                  fontFamily: "Lora",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "5%",
                  textAlign: "center"
                }}
              >
              <a href="wyatt.focht@duke.edu">Wyatt Focht</a>
            </Col>
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
              <Col
                md={4}
                sm={4}
                style={{
                  fontFamily: "Lora",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "5%",
                }}
              >
              <b>Product Management</b>
            </Col>
            <Col
                md={4}
                sm={4}
                style={{
                  fontFamily: "Lora",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
              Product Managers at DAML each scope and lead a project, starting from the beginning stages all the way to completion. Product managers are essential to keeping projects on track and scoping the vision of each product. 
              </Col>
              <Col
                md={4}
                sm={4}
                style={{
                  fontFamily: "Lora",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "5%",
                  textAlign: "center"
                }}
              >
              <a href="mailto:jamila.otieno@duke.edu">Jamila Otieno</a>&nbsp; & &nbsp;<a href="mailto:joshua.boss@duke.edu">Josh Boss</a>
              
              </Col>
            </Row>
          </Container>
        </Container>
        {/**Tech for Equity SECTION */}
        <Container fluid className="boxShadowed">
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
              Please email the contacts of the course you're interested in to get enrolled in the course and started.
            </Row>
          </Container>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Join;
