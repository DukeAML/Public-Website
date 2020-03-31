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
  Button
} from "react-bootstrap";

import axios from "axios";

class ProjectDisplayPage extends React.Component {
  state = {
    project: null,
    requests: null,
    teamMembers: null
  };

  getProjectData = async () => {
    let response = await axios.get(
      `https://dukeappml.herokuapp.com/project/${this.props.match.params.id}`
    );
    console.log(response);
    this.setState({
      project: response.data.project,
      requests: response.data.requests,
      teamMembers: response.data.teamMembers
    });
  };

  componentDidMount() {
    console.log(this.props.match.params.id);
    this.getProjectData();
  }

  render() {
    if (!this.state.project) {
      return (
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "200px"
          }}
        >
          <Spinner animation="grow" />
        </Container>
      );
    }

    return (
      <Container style={{ display: "flex", marginTop: "20px" }}>
        <Jumbotron style={{ width: "inherit" }}>
          <h2 style={{ marginTop: "10px", marginBottom: "20px" }}>
            <strong>{this.state.project.title}</strong>
          </h2>
          <p style={{ color: "#DF691A", marginBottom: "0px" }}>Description:</p>
          <p>{this.state.project.description}</p>
          <p style={{ color: "#DF691A", marginBottom: "0px" }}>Client:</p>
          <p>{this.state.project.submitter}</p>
          <p style={{ color: "#DF691A", marginBottom: "10px" }}>
            Team Members:
          </p>
          <Table hover size="sm">
            <thead style={{ backgroundColor: "#DF691A" }}>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Net ID</th>
              </tr>
            </thead>
            <tbody>
              {this.state.teamMembers.map(member => {
                return (
                  <tr>
                    <td>{member.firstName}</td>
                    <td>{member.lastName}</td>
                    <td>{member.netID}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <Row
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "45px"
            }}
          >
            <Button style={{ width: "25%" }} onClick={this.handleProjectsClick}>
              Apply
            </Button>
          </Row>
        </Jumbotron>
      </Container>
    );
  }
}

export default ProjectDisplayPage;
