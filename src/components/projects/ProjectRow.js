import React from "react";

import { Row, Col, Container, Grid } from "react-bootstrap";
import AnimateHeight from "react-animate-height";
import withWindowDimensions from "../people/withWindowDimensions";

import ProjectCard from "./ProjectCard";

class ProjectRow extends React.Component {
  constructor() {
    super();
    this.selectedCard = React.createRef();
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
    if (this.selectedCard.contains(e.target)) {
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
    // Set state.selected card to ref to selected card
    return projects.map((project, key) => (
      <Col
        lg={
          4 +
          (key === this.state.selectedKey ||
          (key + 1 === this.state.selectedKey && key + (1 % 3)) === 2
            ? 4
            : 0)
          // This logic sucks but basically it handles overflow cases
        }
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
          members={renderPeople ? project.members : []}
          img={project.logo ? project.logo[0].url : ""}
          isFeatured={key === this.state.selectedKey}
          callback={this.selectedCallback}
        />
      </Col>
    ));
  }

  render() {
    let columns = this.makeProjectRow(this.props.projects);

    let window = this.props.windowWidth;
    let padding;

    // dynamically determine left and right padding around grid
    if (window >= 992) {
      // lg or xl
      padding = 20;
    } else if (window >= 768) {
      // m
      padding = 5;
    } else if (window >= 576) {
      // s
      padding = 10;
    } else {
      // xs
      padding = 5;
    }

    return (
      <div>
        <Row style={{ margin: `0 ${padding}%` }}>{columns}</Row>
      </div>
    );
  }
}

export default withWindowDimensions(ProjectRow);
