import React from "react";

import { Collapse, Col, Row, Container, Grid, Fade } from "react-bootstrap";
import AnimateHeight from "react-animate-height";

import withWindowDimensions from "./withWindowDimensions";

import Person from "./Person";

class PeopleRow extends React.Component {
  constructor() {
    super();
    this.state = { in: false, current: null, lastClicked: null };
  }

  handleShowDetails(details, key) {
    if (key == this.state.lastClicked) {
      // close the details panel
      this.setState({
        current: null,
        in: false,
        lastClicked: null
      });
    } else if (this.state.lastClicked != null) {
      // replace info in details panel with new info
      this.setState({
        current: details,
        lastClicked: key
      });
    } else {
      this.setState({
        current: details,
        in: true,
        lastClicked: key
      });
    }

    console.log(this.state);
  }

  makePeopleRow(people) {
    return people.map((person, key) => (
      <Person
        key={key}
        name={person.name}
        team={person.team}
        linkedin={person.linkedin}
        github={person.github}
        img={person.img}
        onClick={() => this.handleShowDetails(person.details, key)}
      />
    ));
  }

  render() {
    let columns = this.makePeopleRow(this.props.people);
    let window = this.props.windowWidth;
    let padding;

    // dynamically determine left and right padding around people grid
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
      padding = 0;
    }

    return (
      <div>
        <Row style={{ padding: `0 ${padding}%` }}>{columns}</Row>
        <Row>
          <Col xs={12}>
            <AnimateHeight duration={300} height={this.state.in ? "auto" : 0}>
              <div className="person-details box-shadowed">
                <div className="person-details-text">{this.state.current}</div>
              </div>
            </AnimateHeight>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withWindowDimensions(PeopleRow);
