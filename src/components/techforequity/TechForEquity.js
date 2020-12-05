import React from "react";
import {
  Container,
  Row,
  Col,
  Accordion,
  Spinner,
  Jumbotron,
  Table,
  td,
  thead,
  tr,
  Button,
  Card,
} from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import Navigation from "../tools/Navigation";
import Footer from "../tools/Footer";
import ProjectCard from "./ProjectCard";
import withWindowDimensions from "../people/withWindowDimensions";
const Logo = require("../homepage/images/techforequity.png");

const projects = require("./t4eProjects.js");
console.log(projects, "asds");

class TechForEquity extends React.Component {
  render() {
    let window = this.props.windowWidth;
    let padding;

    // dynamically determine left and right padding around projects grid
    if (window >= 992) {
      // lg or xl
      padding = 5;
    } else if (window >= 768) {
      // m
      padding = 10;
    } else if (window >= 576) {
      // s
      padding = 10;
    } else {
      // xs
      padding = 10;
    }

    const projectCards = projects.map((project, key) => (
      <Col lg={4} md={6} style={{ padding: "1rem" }}>
        <ProjectCard
          key={key}
          title={project.title}
          description={project.description}
          fellows={project.fellows}
          position={project.position}
          img={project.image}
          link={project.link}
        />
        {/* <ProjectCard
          key={key}
          uid={project.uid}
          link={`/phoenix/${project.uid}`}
          title={project.title}
          description={project.description}
          img={project.imageLink}
        /> */}
      </Col>
    ));

    return (
      <div>
        <Navigation />
        <Container fluid style={{ padding: 0 }}>
          <Container style={{ minHeight: "85vh", padding: `0 ${padding}%` }}>
            <center>
              <Row style={{ marginTop: 20 }}>
                <Col lg={4} sm={12}>
                  <img
                    src={Logo}
                    alt="Tech For Equity"
                    style={{ height: "15rem", margin: "2rem" }}
                  />
                </Col>
                <Col lg={8} sm={12} align="left">
                  <div className="title"> Tech For Equity </div>
                  <p>
                    Interested in a summer internship, tech, social justice—or
                    all of the above? The Technology for Equity Fellowship, an
                    initiative by Duke Applied Machine Learning, is a summer
                    internship program that seeks to bridge the gap between
                    young, enthusiastic technologists and organizations doing
                    social good. The program will provide a remote tech summer
                    internship with competitive stipend at established
                    policy/social justice organizations and summer programming
                    with speaker series and chances to connect with tech and
                    policy leaders at ACLU, Vera Institute of Justice, etc.
                    <br />
                    <br />
                    As of 10/18, we’ve secured 15+ fellowship positions with
                    $75,000+ of funding for our inaugural year of 2021.

                    <br />

                    <Button className=“theme-button”> 
                    <a href="https://forms.gle/q3ZMAhVQg2VUe6GV6" target="_blank"> Apply Here.</a> 
                    </Button>
      
                    <br />

                    <Button className=“theme-button”> 
                    <a href="https://techforequityinitiative.substack.com/" target="_blank"> Subscribe to our Newsletter here!</a> 
                    </Button>
                    
                    <br />
                      
                    <Button className=“theme-button”> 
                    <a href="https://docs.google.com/document/d/1knBaok7z-VxGnhrPdWKBfIkvYL4QRepggdpMg9CXlsU/edit?usp=sharing" target="_blank"> Student FAQ</a> 
                    </Button>
                  </p>
                </Col>
              </Row>
              <div className="title"> Projects </div>
            </center>

            <Row
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              {projectCards}
            </Row>
          </Container>
          <Footer style={{ margin: "2rem 0 0 0" }} />
        </Container>
      </div>
    );
  }
}

export default withWindowDimensions(TechForEquity);
