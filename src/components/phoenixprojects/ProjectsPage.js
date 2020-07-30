import React from "react";
import {
  Container,
  Row,
  Col,
  Spinner,
  Jumbotron,
  Table,
  td,
  thead,
  tr,
  Button,
  Card,
} from "react-bootstrap";

import Navigation from "../tools/Navigation";
import Footer from "../tools/Footer";
import ProjectCard from "../projects/ProjectCard";
import withWindowDimensions from "../people/withWindowDimensions";

const projects = require("./projectsData");
console.log(projects, "asds");

class ProjectsPage extends React.Component {
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
        {/*<ProjectCard
          key={key}
          title={project.title}
          description={project.shortDescription}
          img={project.image}
          link={project.link}
        />*/}
        <ProjectCard
          key={key}
          uid={project.uid}
          link={`/phoenix/${project.uid}`}
          title={project.title}
          description={project.description}
          img={project.imageLink}
        />
      </Col>
    ));

    return (
      <div>
        <Navigation />
        <Container fluid style={{ padding: 0 }}>
          <Container style={{ minHeight: "85vh", padding: `0 ${padding}%` }}>
            <center>
              <div className="title"> Phoenix Projects </div>
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

export default withWindowDimensions(ProjectsPage);
