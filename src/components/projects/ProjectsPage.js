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
import Loading from "../tools/Loading";
import ProjectCard from "./ProjectCard";
import withWindowDimensions from "../people/withWindowDimensions";
import { getProjects, getProjectsMembers } from "../../api/api.js";
import ProjectRow from "./ProjectRow";

class ProjectsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      loading: true,
      peopleLoading: true,
      selectedKey: -1,
    };
  }

  componentDidMount = async () => {
    // Load projects
    const projects = await getProjects();
    console.log(projects);
    this.setState({ projects: projects, loading: false });

    // Load people
    const people = await getProjectsMembers();

    // Convert from list to key value
    let peopleTable = {};
    people.map((person) => {
      peopleTable[person.id] = {
        name: person["Name"],
        img: person["Photo"],
      };
    });

    for (let project of this.state.projects) {
      project.members = [];
      // Add member info to project objects
      for (let teamMember of project["Current Engineers"]) {
        project.members.push(peopleTable[teamMember]);
      }
    }

    this.setState({ loadingPeople: false });
  };

  selectedCallback = (key) => {
    this.setState({ selectedKey: key === this.state.selectedKey ? -1 : key });
  };

  // Adapted from ../peoplepage/PeoplePage
  makeProjectGrid(projects, window) {
    // determine number of projects per row based on bootstrap screen breakpoints
    let cols,
      renderPeople = true;
    if (window >= 992) {
      // lg or xl; 4 projects per row
      cols = 3;
    } else if (window >= 768) {
      // m; 4 projects per row
      cols = 2;
    } else if (window >= 576) {
      // xs; 2 projects per row
      cols = 2;
      renderPeople = false;
    } else {
      //xs; 1 projects per row
      cols = 1;
      renderPeople = false;
    }

    console.log("Cols: ", cols);
    console.log(projects.length);

    const numRows = Math.ceil(projects.length / cols);
    console.log("rows: ", numRows);

    let rowArrays = [];
    // make each row, add details section below

    for (let i = 0; i < numRows * cols; i += cols) {
      rowArrays[i] = projects.slice(i, i + cols);
    }

    let result = rowArrays.map((row, index) => (
      <ProjectRow
        projects={row}
        key={index}
        renderPeople={renderPeople && this.state.peopleLoading}
      />
    ));

    return this.state.loading ? (
      <div style={{ height: "10rem", padding: "3rem" }}>
        <Spinner animation="grow" size="md" />
      </div>
    ) : (
      result
    );
  }

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

    const projectGrid = this.makeProjectGrid(this.state.projects, window);

    return (
      <div>
        <Navigation />
        <Container fluid style={{ padding: 0 }}>
          <Container style={{ minHeight: "85vh", padding: `0 ${padding}%` }}>
            <center>
              <div className="title"> DAML Projects </div>
              <br />
              <hr />
            </center>
            {this.state.loading ? (
              <center
                style={{ height: "40rem", padding: "10rem", margin: "auto" }}
              >
                <Spinner animation="grow" size="md" />
                <Spinner
                  animation="grow"
                  size="md"
                  style={{ margin: "0 2rem" }}
                />
                <Spinner animation="grow" size="md" />
              </center>
            ) : (
              projectGrid
            )}
          </Container>
          <Footer style={{ margin: "2rem 0 0 0" }} />
        </Container>
      </div>
    );
  }
}

export default withWindowDimensions(ProjectsPage);
