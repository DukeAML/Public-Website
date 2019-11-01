import React from "react";
// Import graph dependencies

import { Col, Container, Row } from "react-bootstrap";
import AnimateHeight from "react-animate-height";

class CoursesDetailsTab extends React.Component {
  render() {
    let { selectedNode } = this.props;
    let detailsContent =
      selectedNode == null ? (
        ""
      ) : (
        <div>
          <b> {selectedNode.label}</b>
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
        </div>
      );

    return (
      <AnimateHeight duration={300} height={this.props.in ? "auto" : 0}>
        <div className="courses-details-tab">{detailsContent}</div>
      </AnimateHeight>
    );
  }
}

export default CoursesDetailsTab;
