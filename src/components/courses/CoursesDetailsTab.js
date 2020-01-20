import React from "react";
// Import graph dependencies

import { Col, Container, Row, Card, Accordion, Button } from "react-bootstrap";
import AnimateHeight from "react-animate-height";

const AccordionHeader = props => {
  return (
    <div
      className="accordion-header"
      style={{ color: "white !important" }}
      {...props}
    >
      {props.children}
    </div>
  );
};

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

      // Display required prereqs for this course
      let prereqs = selectedNode.prereqsFrom.map((node, key) => (
        <div key={key}>{node.course}</div>
      ));

      // Display courses for which this course is a required prereq
      let next = selectedNode.prereqsTo.map((node, key) => (
        <div key={key}>{node.course}</div>
      ));

      const properties = [
        selectedNode.professor,
        selectedNode.description,
        selectedNode.semesters,
        prereqs,
        next
      ];

      const headers = [
        "Professor",
        "Description",
        "Semesters offered",
        "Prerequisites",
        "Required for"
      ];

      return (
        <AnimateHeight
          duration={300}
          height={this.props.in ? "auto" : 0}
          style={{ width: "300" }}
        >
          <div className="courses-details-tab">
            <div>
              <div
                className="title"
                style={{ fontSize: "1.5rem", margin: "0.5rem 0.5rem 0 0.5rem" }}
              >
                {selectedNode.course}
              </div>
              <div style={{ fontSize: "1rem", padding: "0.5rem" }}>
                {selectedNode.name}
              </div>

              <Accordion style={{ width: "100%" }}>
                {properties.map((property, index) => {
                  if (property == "" || property === null) {
                    return "";
                  } else {
                    return (
                      <div key={index}>
                        {" "}
                        <Accordion.Toggle
                          as={AccordionHeader}
                          variant="link"
                          eventKey={index}
                        >
                          {headers[index]}
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={index}>
                          <div className="accordion-body">{property}</div>
                        </Accordion.Collapse>
                      </div>
                    );
                  }
                })}
              </Accordion>
            </div>
          </div>
        </AnimateHeight>
      );
    }
  }
}

export default CoursesDetailsTab;
