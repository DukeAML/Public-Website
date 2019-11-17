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
    title: "fMRI Disease Project",
    description: "Using modern image processing technology to better predict neurological illness.",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/03/T1-weighted-MRI.png",
    link: "/project1"
  },
  {
    title: "VR Sickness Project",
    description: "Predicting virtual reality sickness through the use of artificial intelligence.",
    img: "https://images.pexels.com/photos/2692467/pexels-photo-2692467.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    link: "/project2"
  },
  {
    title: "Digital Fidget Project",
    description: "Helping detect patterns of fidgeting for children with ADHD using a smart watch.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Primary_Laos2.jpg/1280px-Primary_Laos2.jpg",
    link: "/project3"
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
          <Footer style={{ margin: "2rem 0 0 0" }}/>
        </Container>
      </div>
    );
  }
}

export default ProjectsPage;
