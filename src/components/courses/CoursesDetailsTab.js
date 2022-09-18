import React from 'react';
import AnimateHeight from 'react-animate-height';
import { Accordion } from 'react-bootstrap';

const AccordionHeader = (props) => {
  return (
    <div
      className="accordion-header"
      style={{ color: 'white !important' }}
      {...props}>
      {props.children}
    </div>
  );
};

class CoursesDetailsTab extends React.Component {
  render() {
    let { selectedNode } = this.props;
    let headers;
    let properties;

    if (selectedNode == null) {
      return (
        <AnimateHeight duration={300} height={this.props.in ? 'auto' : 0}>
          <div className="courses-details-tab"></div>
        </AnimateHeight>
      );
    } else if (selectedNode.type == 'skill') {
      console.log(selectedNode);

      // Display courses that contribute to this skill
      let contributers = selectedNode.from
        ? selectedNode.from.map((id, key) => (
            <div key={key}>{this.props.nodes[id].course}</div>
          ))
        : '';

      // Display courses that use this skill
      let consumers = selectedNode.to
        ? selectedNode.to.map((id, key) => (
            <div key={key}>{this.props.nodes[id].course}</div>
          ))
        : '';

      properties = [contributers, consumers];

      headers = [
        'Courses that use this skill',
        'Courses that build this skill',
      ];
    } else {
      console.log(selectedNode);

      // Display required prereqs for this course
      let prereqs = selectedNode.prereqsFrom
        ? selectedNode.prereqsFrom.map((id, key) => (
            <div key={key}>{this.props.nodes[id].course}</div>
          ))
        : '';

      // Display courses for which this course is a required prereq
      let next = selectedNode.prereqsTo
        ? selectedNode.prereqsTo.map((id, key) => (
            <div key={key}>{this.props.nodes[id].course}</div>
          ))
        : '';

      properties = [
        selectedNode.professor,
        selectedNode.description,
        selectedNode.semesters,
        prereqs,
        next,
      ];

      headers = [
        'Professor',
        'Description',
        'Semesters offered',
        'Prerequisites',
        'Required for',
      ];
    }

    return (
      <AnimateHeight duration={300} height={this.props.in ? 'auto' : 0}>
        <div className="courses-details-tab">
          <div>
            <div
              className="title"
              style={{
                fontSize: '1.5rem',
                margin: '0.5rem 0.5rem 0 0.5rem',
              }}>
              {selectedNode.label}
            </div>
            <div style={{ fontSize: '1rem', padding: '0.5rem' }}>
              {selectedNode.name}
            </div>

            <Accordion style={{ width: '100%' }}>
              {properties.map((property, index) => {
                if (property == '' || property === null) {
                  return '';
                } else {
                  return (
                    <div key={index}>
                      {' '}
                      <Accordion.Toggle
                        as={AccordionHeader}
                        variant="link"
                        eventKey={index}>
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

export default CoursesDetailsTab;
