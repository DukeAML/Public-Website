import React from "react";
import {
  Container,
  Jumbotron,
  Button,
  Row,
  Col,
  Image,
  Card,
  Carousel,
  Accordion,
  Collapse
} from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";

import Footer from "../tools/Footer";

import Details from "./Details";
import Person from "./Person";

// Import individual thumbnails
import yasabaig from "./headshots/yasa-baig.jpeg";

// Compose array of person objects with necessary info
const peopleInfo = [
  {
    name: "Yasa Baig",
    team: "Implementation",
    src: yasabaig,
    details: "Yasa likes to drink pineapple juice. Interesting"
  },
  {
    name: "Yasa Baig",
    team: "Implementation",
    src: yasabaig,
    details: "Yasa likes to drink lemon juice. Zesty"
  },
  {
    name: "Yasa Baig",
    team: "Implementation",
    src: yasabaig,
    details: "Yasa likes to drink bug juice. Grody"
  },
  {
    name: "Yasa Baig",
    team: "Implementation",
    src: yasabaig,
    details: "Yasa likes to drink apple juice. Wow"
  }
];

class PeoplePage extends React.Component {
  state = { redirect: false, details: "", collapse: false, lastClicked: null };

  componentDidMount() {
    this.setState({ redirect: false, window: window.innerWidth });
  }

  handleShowDetails(details, key) {
    if (key == this.state.lastClicked) {
      this.setState({
        details: "",
        collapse: !this.state.collapse,
        lastClicked: null
      });
    } else {
      this.setState({
        details: details,
        collapse: !this.state.collapse,
        lastClicked: key
      });
    }
  }

  render() {
    let people = peopleInfo.map((person, key) => (
      <Person
        id={key}
        name={person.name}
        team={person.team}
        src={person.src}
        onClick={() => this.handleShowDetails(person.details, key)}
      />
    ));

    return (
      <div>
        <Row
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <div className="title"> People </div>
        </Row>
        <center>
          <Row>{people}</Row>

          <Collapse in={this.state.collapse}>
            <div>
              <Details details={this.state.details} />
            </div>
          </Collapse>
        </center>
        <Footer />
      </div>
    );
  }
}

export default PeoplePage;
