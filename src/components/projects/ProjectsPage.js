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
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Lorem",
    description: "Interesting project",
    img: "./img",
    link: "/link"
  },
  {
    title: "Lorem",
    description: "Interesting project",
    img: "./img",
    link: "/link"
  },
  {
    title: "Lorem",
    description: "Interesting project",
    img: "./img",
    link: "/link"
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
        <Container>
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
      </div>
    );
  }
}

export default ProjectsPage;
