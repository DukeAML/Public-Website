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
  Card
} from "react-bootstrap";

import Navigation from "../tools/Navigation";
import Footer from "../tools/Footer";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Lorem",
    description: "Interesting project",
    img: "./img",
    link: "/project1"
  },
  {
    title: "Lorem",
    description: "Interesting project",
    img: "./img",
    link: "/project1"
  },
  {
    title: "Lorem",
    description: "Interesting project",
    img: "./img",
    link: "/project1"
  }
];

class ProjectsPage extends React.Component {
  state = {};

  componentDidMount() {}

  render() {
    const projectCards = projects.map((project, key) => (
      <Col md={12} lg={4} style={{ padding: "1rem" }}>
        <ProjectCard
          key={key}
          title={project.title}
          description={project.description}
          img={project.img}
          link={project.link}
        />
      </Col>
    ));

    return (
      <div>
        <Navigation />
        <Container fluid style={{ padding: "0" }}>
          <Container style={{ minHeight: "100%" }}>
            <Row
              style={{
                display: "flex",
                justifyContent: "center"
              }}
            >
              <div className="title"> Current Projects </div>
            </Row>
            <Row
              style={{
                display: "flex",
                justifyContent: "center"
              }}
            >
              {projectCards}
            </Row>
          </Container>
          <Footer />
        </Container>
      </div>
    );
  }
}

export default ProjectsPage;
