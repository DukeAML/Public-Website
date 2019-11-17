import React from "react";
// Import graph dependencies

import { Col, Container, Row } from "react-bootstrap";
import AnimateHeight from "react-animate-height";

class CoursesDetailsTab extends React.Component {
  render() {
    let { selectedNode } = this.props;
    if (selectedNode == null) {
      return (
        <AnimateHeight duration={300} height={this.props.in ? "auto" : 0}>
          <div className="courses-details-tab"></div>
        </AnimateHeight>
      );
    } else {
      console.log(selectedNode);
      let prereqs = selectedNode.from.map((node, key) => (
        <div key={key}>{node.course}</div>
      ));

      let next = selectedNode.to.map((node, key) => (
        <div key={key}>{node.course}</div>
      ));

      return (
        <AnimateHeight duration={300} height={this.props.in ? "auto" : 0}>
          <div className="courses-details-tab">
            <div>
              <div
                className="title"
                style={{ fontSize: "1.5rem", margin: "0 0 5px 0" }}
              >
                {selectedNode.course}
              </div>
              <b> Course name: </b>
              {selectedNode.name} <br />
              <br />
              {selectedNode.professor === "" ? (
                ""
              ) : (
                <div>
                  <b> Professor(s): </b>
                  {selectedNode.professor} <br />
                  <br />
                </div>
              )}
              <b> Description: </b>
              {selectedNode.description} <br />
              <br />
              <b> Semester offered: </b> {selectedNode.semesters}
              <br />
              <br />
              <b> Prerequisites: </b> {prereqs}
              <br />
              <b> Leads to: </b> {next}
            </div>
          </div>
        </AnimateHeight>
      );
    }
  }
}

export default CoursesDetailsTab;
