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

                    <Button className="theme-button" style={{ marginTop: "1rem", marginBottom: "1rem", backgroundColor: "#2e755d" }}> 
                    <a href="https://forms.gle/q3ZMAhVQg2VUe6GV6" target="_blank" style={{ color: "white" }}> Apply Here!</a> 
                    </Button>
      
                    <br />

                    <Button className="theme-button" style={{ marginBottom: "1rem", backgroundColor: "#2e755d" }}> 
                    <a href="https://techforequityinitiative.substack.com/" target="_blank" style={{ color: "white" }}> Subscribe to our Newsletter!</a> 
                    </Button>
                    
                    <br />
                      
                    <Button className="theme-button" style={{ marginBottom: "1rem", backgroundColor: "#2e755d" }}> 
                    <a href="https://docs.google.com/document/d/1knBaok7z-VxGnhrPdWKBfIkvYL4QRepggdpMg9CXlsU/edit?usp=sharing" target="_blank" style={{ color: "white" }}> Student FAQ</a> 
                    </Button>

                    <br />

                    <Button className="theme-button" style={{ marginBottom: "1rem", backgroundColor: "#2e755d" }}> 
                    <a href="https://docs.google.com/document/d/1oVhkHs8VLgYR5StEo8r9QPVfHXw3_-2MoyNj8DflFdY/edit?usp=sharing" target="_blank" style={{ color: "white" }}> Client FAQ</a> 
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

          <Container>
          <center className="title"> Sponsors </center>
          <br />
          <center > A huge thank you to all of our sponsors! </center>
          <br />
          <div class="row" style={{display: 'flex', justifyContent: 'center'}}>
            <div class = "column" >
            <center>
              <img src = "https://res.cloudinary.com/drrvlrtpl/image/upload/v1611431645/dara-logo_yf39z1.png" width = "175" style={{marginRight: '20px'}}></img>
              <img src = "https://res.cloudinary.com/drrvlrtpl/image/upload/v1611437088/duke-law-logo_sia7tq.png" width = "375"></img>
              </center>
              </div>
            </div>
            <br />
            <div class="row" style={{display: 'flex', justifyContent: 'center'}}>
            <div class = "column">
              <img src = "https://res.cloudinary.com/drrvlrtpl/image/upload/v1611438310/duke_comp_sci_logoo_stetec.png" width = "230" style={{marginRight: '20px'}}></img>
            </div>
            <div class = "column">
              <img src = "https://res.cloudinary.com/drrvlrtpl/image/upload/v1611438033/p_rgft4c.png" width = "175" style={{marginRight: '20px'}}></img>
            </div>
            <div class = "column">
              <img src = "https://res.cloudinary.com/drrvlrtpl/image/upload/v1611437210/i_elogo-original_kelbsl.png" width = "300"></img>
            </div>
            </div>
          </Container>
          
          <Footer style={{ margin: "2rem 0 0 0" }} />
          
        </Container>
      </div>
    );
  }
}
export default withWindowDimensions(TechForEquity);
