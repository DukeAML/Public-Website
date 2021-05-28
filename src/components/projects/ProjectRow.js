import React from "react";

import { Row, Col, Container, Grid } from "react-bootstrap";
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
    console.log(key);
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
      let ind = this.state.currIndex % 3;
      let others = [0, 1];
      if (ind === 1) {
        others[1]++;
      } else {
        others[0]++;
        others[1]++;
      }
      return (
        <Row>
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
              key={ind}
              index={ind}
              uid={projects[ind].uid}
              link={projects[ind].uid}
              title={projects[ind]["Project Name"]}
              description={projects[ind]["Project Description"]}
              shortDescription={projects[ind]["Short Description"]}
              teams={projects[ind].Division}
              members={this.props.renderPeople ? projects[ind].members : []}
              img={projects[ind].logo ? projects[ind].logo[0].url : ""}
              isFeatured={1}
              callback={() => this.handleSeeMore(projects[ind], ind)}
            />
          </Col>
          <Col
            lg={4}
            md={12}
            style={{
              padding: "1rem",
              transition: "all .6s cubic-bezier(0.32, 0, 0.67, 0)",
            }}
          >
            <Row>
              <ProjectCard
                key={others[0]}
                index={others[0]}
                uid={projects[others[0]].uid}
                link={projects[others[0]].uid}
                title={projects[others[0]]["Project Name"]}
                description={projects[others[0]]["Project Description"]}
                shortDescription={projects[others[0]]["Short Description"]}
                teams={projects[others[0]].Division}
                members={
                  this.props.renderPeople ? projects[others[0]].members : []
                }
                img={
                  projects[others[0]].logo
                    ? projects[others[0]].logo[0].url
                    : ""
                }
                callback={() =>
                  this.handleSeeMore(projects[others[0]], others[0])
                }
              />
            </Row>
            <Row>
              <ProjectCard
                key={others[1]}
                index={others[1]}
                uid={projects[others[1]].uid}
                link={projects[others[1]].uid}
                title={projects[others[1]]["Project Name"]}
                description={projects[others[1]]["Project Description"]}
                shortDescription={projects[others[1]]["Short Description"]}
                teams={projects[others[1]].Division}
                members={
                  this.props.renderPeople ? projects[others[1]].members : []
                }
                img={
                  projects[others[1]].logo
                    ? projects[others[1]].logo[0].url
                    : ""
                }
                callback={() =>
                  this.handleSeeMore(projects[others[1]], others[1])
                }
              />
            </Row>
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
        <Row style={{ margin: 0, width: "100%" }}>{columns}</Row>
      </div>
    );
  }
}

export default withWindowDimensions(ProjectRow);
