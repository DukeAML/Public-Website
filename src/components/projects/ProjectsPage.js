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
import ProjectCard from "./ProjectCard";
import withWindowDimensions from "../people/withWindowDimensions";
import { getProjects } from "../../api/api.js";

class ProjectsPage extends React.Component {
  constructor() {
    super();
    this.state = { projects: [], loading: true, selectedKey: -1 };
  }

  componentDidMount = async () => {
    const projects = await getProjects();
    console.log(projects);
    this.setState({ projects: projects, loading: false });
  };

  selectedCallback = (key) => {
    this.setState({ selectedKey: key === this.state.selectedKey ? -1 : key });
  };

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

    const projectCards = this.state.projects
      ? this.state.projects.map((project, key) => (
          <Col
            lg={4 + (key === this.state.selectedKey ? 4 : 0)}
            md={6 + (key === this.state.selectedKey ? 6 : 0)}
            style={{
              padding: "1rem",
              transition: "all .6s cubic-bezier(0.32, 0, 0.67, 0)",
            }}
          >
            <ProjectCard
              key={key}
              index={key}
              uid={project.uid}
              link={project.uid}
              title={project["Project Name"]}
              description={project["Project Description"]}
              shortDescription={project["Short Description"]}
              teams={project.Division}
              img={project.logo ? project.logo[0].url : ""}
              isFeatured={key === this.state.selectedKey}
              callback={this.selectedCallback}
            />
          </Col>
        ))
      : "";

    return (
      <div>
        <Navigation />
        <Container fluid style={{ padding: 0 }}>
          <Container style={{ minHeight: "85vh", padding: `0 ${padding}%` }}>
            <center>
              <div className="title"> DAML Projects </div>
            </center>
            <Row
              style={{
                display: "flex",
                justifyContent: "start",
              }}
            >
              {this.state.loading ? (
                <div
                  style={{ height: "10rem", padding: "10rem", margin: "auto" }}
                >
                  <Spinner animation="grow" size="md" />
                </div>
              ) : (
                projectCards
              )}
            </Row>
          </Container>
          <Footer style={{ margin: "2rem 0 0 0" }} />
        </Container>
      </div>
    );
  }
}

export default withWindowDimensions(ProjectsPage);
