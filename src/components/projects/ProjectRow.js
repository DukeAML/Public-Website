import React from "react";

import { Row, Col, Container, Grid } from "react-bootstrap";
import withWindowDimensions from "../people/withWindowDimensions";

import ProjectCard from "./ProjectCard";

class ProjectRow extends React.Component {
  constructor() {
    super();
    this.selectedCard = React.createRef();
    this.selectedRow = React.createRef();
    this.state = {
      open: false,
      currIndex: null,
    };
  }

  componentWillMount() {
    document.addEventListener("mousedown", this.handleClickAway, false);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickAway, false);
  }

  handleClickAway = (e) => {
    if (
      this.selectedCard.contains(e.target) ||
      this.selectedRow.contains(e.target)
    ) {
      // click is inside this component or within a row; do not close it
      return;
    }

    // close the component if user clicks away
    this.setState({
      open: false,
      currIndex: null,
    });
  };

  handleSeeMore(project, key) {
    // [bug] this isnt always called when a project in a different row is selected
    console.log("ahhh", key);
    if (key == this.state.currIndex) {
      // close the see more panel
      this.setState({
        currIndex: null,
        open: false,
      });
    } else {
      this.setState({
        currIndex: key,
        open: true,
      });
    }
  }

  makeProjectRow(projects) {
    if (this.state.open) {
      let selectedIndex = this.state.currIndex % 3;

      // Decide positions of different cards when focused
      let topRightIndex = 1,
        bottomRightIndex = 2;
      if (selectedIndex === 1) {
        topRightIndex = 0;
        bottomRightIndex = 2;
      } else if (selectedIndex === 2) {
        topRightIndex = 0;
        bottomRightIndex = 1;
      }

      // Remove projects for bottom row
      if (projects.length <= 2) {
        bottomRightIndex = null;
      }
      if (projects.length == 1) {
        topRightIndex = null;
      }

      return (
        <Row ref={(node) => (this.selectedRow = node)}>
          <Col
            lg={8}
            md={12}
            style={{
              padding: "1rem",
              transition: "all .6s cubic-bezier(0.32, 0, 0.67, 0)",
            }}
            ref={(node) => (this.selectedCard = node)}
          >
            <ProjectCard
              key={selectedIndex}
              index={selectedIndex}
              uid={projects[selectedIndex].uid}
              link={projects[selectedIndex].uid}
              title={projects[selectedIndex]["Project Name"]}
              description={projects[selectedIndex]["Project Description"]}
              shortDescription={projects[selectedIndex]["Short Description"]}
              teams={projects[selectedIndex].Division}
              members={
                this.props.renderPeople ? projects[selectedIndex].members : []
              }
              img={
                projects[selectedIndex].logo
                  ? projects[selectedIndex].logo[0].url
                  : ""
              }
              isFeatured={1}
              callback={() =>
                this.handleSeeMore(projects[selectedIndex], selectedIndex)
              }
            />
          </Col>
          <Col
            lg={4}
            md={12}
            style={{
              padding: "1rem",
              transition: "all .6s cubic-bezier(0.32, 0, 0.67, 0)",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {topRightIndex != null && (
              <Row style={{ flexGrow: 1, marginBottom: "1rem" }}>
                <ProjectCard
                  key={topRightIndex}
                  index={topRightIndex}
                  uid={projects[topRightIndex].uid}
                  link={projects[topRightIndex].uid}
                  title={projects[topRightIndex]["Project Name"]}
                  description={projects[topRightIndex]["Project Description"]}
                  shortDescription={
                    projects[topRightIndex]["Short Description"]
                  }
                  teams={projects[topRightIndex].Division}
                  members={
                    this.props.renderPeople
                      ? projects[topRightIndex].members
                      : []
                  }
                  img={
                    projects[topRightIndex].logo
                      ? projects[topRightIndex].logo[0].url
                      : ""
                  }
                  callback={() =>
                    this.handleSeeMore(projects[topRightIndex], topRightIndex)
                  }
                />
              </Row>
            )}
            {bottomRightIndex != null && (
              <Row style={{ flexGrow: 1, width: "100%" }}>
                <ProjectCard
                  key={bottomRightIndex}
                  index={bottomRightIndex}
                  uid={projects[bottomRightIndex].uid}
                  link={projects[bottomRightIndex].uid}
                  title={projects[bottomRightIndex]["Project Name"]}
                  description={
                    projects[bottomRightIndex]["Project Description"]
                  }
                  shortDescription={
                    projects[bottomRightIndex]["Short Description"]
                  }
                  teams={projects[bottomRightIndex].Division}
                  members={
                    this.props.renderPeople
                      ? projects[bottomRightIndex].members
                      : []
                  }
                  img={
                    projects[bottomRightIndex].logo
                      ? projects[bottomRightIndex].logo[0].url
                      : ""
                  }
                  callback={() =>
                    this.handleSeeMore(
                      projects[bottomRightIndex],
                      bottomRightIndex
                    )
                  }
                />
              </Row>
            )}
          </Col>
        </Row>
      );
    } else {
      return projects.map((project, key) => (
        <Col
          lg={4}
          md={6}
          style={{
            padding: "1rem",
            transition: "all .6s cubic-bezier(0.32, 0, 0.67, 0)",
          }}
          ref={(node) => (this.selectedCard = node)}
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
            members={this.props.renderPeople ? project.members : []}
            img={project.logo ? project.logo[0].url : ""}
            isFeatured={key === this.state.selectedKey}
            callback={() => this.handleSeeMore(project, key)}
          />
        </Col>
      ));
    }
  }

  render() {
    let columns = this.makeProjectRow(this.props.projects);

    return (
      <div>
        <Row
          ref={(node) => (this.selectedRow = node)}
          style={{ margin: 0, width: "100%" }}
        >
          {columns}
        </Row>
      </div>
    );
  }
}

export default withWindowDimensions(ProjectRow);
