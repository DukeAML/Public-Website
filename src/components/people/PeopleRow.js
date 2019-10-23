import React from "react";

import { Collapse, Col, Row, Container, Grid, Fade } from "react-bootstrap";
import AnimateHeight from "react-animate-height";

import withWindowDimensions from "./withWindowDimensions";

import Person from "./Person";

class PeopleRow extends React.Component {
  constructor() {
    super();
    this.state = {
      in: false,
      current: null,
      lastClicked: null,
      currIndex: null
    };
  }

  handleShowDetails(person, key) {
    if (key == this.state.lastClicked) {
      // close the details panel
      this.setState({
        current: null,
        currIndex: null,
        in: false,
        lastClicked: null
      });
    } else if (this.state.lastClicked != null) {
      // replace info in details panel with new info
      this.setState({
        current: person,
        currIndex: key,
        lastClicked: key
      });
    } else {
      this.setState({
        current: person,
        in: true,
        currIndex: key,
        lastClicked: key
      });
    }

    console.log(this.state);
  }

  makePeopleRow(people) {
    return people.map((person, key, index) => (
      <Person
        key={key}
        name={person.name}
        team={person.team}
        linkedin={person.linkedin}
        github={person.github}
        img={person.img}
        onClick={() => this.handleShowDetails(person, key)}
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

    let { current } = this.state;
    let school, studying, name;

    if (current != null) {
      school =
        current.school != null ? (
          <div>
            <b>School</b>: {current.school}{" "}
          </div>
        ) : (
          ""
        );
      studying =
        current.study != null ? (
          <div>
            <b>Studying</b>: {current.study}{" "}
          </div>
        ) : (
          ""
        );
      name = current.name;
    } else {
      school = "";
      studying = "";
      name = "";
    }

    let marginLeft = this.props.colWidth * this.state.currIndex;

    console.log(
      "col width" + this.props.colWidth + "index " + this.state.currIndex
    );

    return (
      <div>
        <Row style={{ padding: `0 ${padding}%`, margin: 0}}>{columns}</Row>
        <Row>
          <Col xs={12}>
            <AnimateHeight duration={300} height={this.state.in ? "auto" : 0}>
              <div className="person-details box-shadowed">
                <div
                  className="person-details-text"
                  style={{
                    textAlign: "left",
                    padding: `0 ${padding}%`
                  }}
                >
                  <div className="title">{name}</div>
                  {school}
                  {studying}
                </div>
              </div>
            </AnimateHeight>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withWindowDimensions(PeopleRow);
