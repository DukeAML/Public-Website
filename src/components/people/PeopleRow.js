import React from "react";

import { Collapse, Col, Row, Container, Grid, Fade } from "react-bootstrap";
import AnimateHeight from "react-animate-height";

import withWindowDimensions from "./withWindowDimensions";

import Person from "./Person";

class PeopleRow extends React.Component {
  constructor() {
    super();
    this.detailsBox = React.createRef();
    this.peopleDisplay = React.createRef();
    this.state = {
      in: false,
      current: null,
      lastClicked: null,
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
      this.detailsBox.contains(e.target) ||
      this.peopleDisplay.contains(e.target)
    ) {
      // click is inside this component or within a people row; do not close it
      return;
    }
    // close the component if user clicks away
    this.setState({
      current: null,
      currIndex: null,
      in: false,
      lastClicked: null,
    });
  };

  handleShowDetails(person, key) {
    if (key == this.state.lastClicked) {
      // close the details panel
      this.setState({
        current: null,
        currIndex: null,
        in: false,
        lastClicked: null,
      });
    } else if (this.state.lastClicked != null) {
      // replace info in details panel with new info
      this.setState({
        current: person,
        currIndex: key,
        lastClicked: key,
      });
    } else {
      this.setState({
        current: person,
        in: true,
        currIndex: key,
        lastClicked: key,
      });
    }
    // console.log(this.state); // Print current person
  }

  makePeopleRow(people) {
    return people.map((person, key, index) => (
      <Person
        key={key}
        name={person.Name}
        team={person.Role}
        linkedin={person.LinkedIn}
        github={person.Github}
        img={person.Photo}
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
      padding = 5;
    }

    // Generate details section
    let { current } = this.state;

    let name, team, joined, studying, interests, bio, role;

    if (current) {
      name = current.Name;
      team = current.Role ? (
        <div>
          <b>Team</b>: {current.Role}{" "}
        </div>
      ) : (
        ""
      );
      joined = current.Joined ? (
        <div>
          <b>Joined</b>: {current.Joined}{" "}
        </div>
      ) : (
        ""
      );
      studying = current.Degree ? (
        <div>
          <b>Studying</b>: {current.Degree.join(", ")}{" "}
        </div>
      ) : (
        ""
      );
      interests = current["Tech Interests"] ? (
        <div>
          <b>Interested in</b>: {current["Tech Interests"].join(", ")}{" "}
        </div>
      ) : (
        ""
      );
      // For Tech for Equity page
      role = current.Role ? (
        <div>
          <b>Role</b>: {current.Role}{" "}
        </div>
      ) : (
        ""
      );
      bio = current.Bio ? current.Bio : ""; // Bio Section
    } else {
      name = "";
      team = "";
      joined = "";
      studying = "";
      interests = "";
      role = "";
      bio = "";
    }

    let marginLeft = this.props.colWidth * this.state.currIndex;

    // console.log("col width" + this.props.colWidth + "index " + this.state.currIndex);

    return (
      <div>
        <Row
          ref={(node) => (this.peopleDisplay = node)}
          style={{ margin: `0 ${padding}%` }}
        >
          {columns}
        </Row>
        <Row ref={(node) => (this.detailsBox = node)}>
          <Col xs={12}>
            <AnimateHeight duration={300} height={this.state.in ? "auto" : 0}>
              <div className="person-details box-shadowed">
                <div
                  className="person-details-text"
                  style={{
                    textAlign: "left",
                    padding: `0 ${padding}%`,
                  }}
                >
                  <div className="details-title">{name}</div>
                  {team}
                  {joined}
                  {studying}
                  {interests}
                  {role}
                  <br />
                  {bio}
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
