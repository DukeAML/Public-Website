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
import Navigation from "../tools/Navigation";
import withWindowDimensions from "./withWindowDimensions";

import Details from "./Details";
import Person from "./Person";
import PeopleRow from "./PeopleRow";

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
  },
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
  },
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
  state = { redirect: false, details: {}, collapse: false };

  componentDidMount() {
    this.setState({ redirect: false });
  }

  makePeopleGrid(people, window) {
    // determine number of people per row based on bootstrap screen breakpoints
    let cols;
    if (window >= 992) {
      // lg or xl; 4 people per row
      cols = 4;
    } else if (window >= 768) {
      // m; 4 people per row
      cols = 3;
    } else if (window >= 576) {
      // xs; 2 people per row
      cols = 2;
    } else {
      //xs; 1 person per row
      cols = 1;
    }

    console.log("Cols: ", cols);
    console.log(people.length);

    const numRows = Math.ceil(people.length / cols);
    console.log("rows: ", numRows);

    let rowArrays = [];
    // make each row, add details section below

    for (let i = 0; i < numRows * cols; i += cols) {
      rowArrays[i] = people.slice(i, i + cols);
    }

    let result = rowArrays.map((row, index) => (
      <PeopleRow people={row} key={index} />
    ));

    return result;
  }

  render() {
    let people = this.makePeopleGrid(peopleInfo, this.props.windowWidth);

    return (
      <div>
        <Navigation />
        <Container fluid style={{ padding: 0 }}>
          <Row
            style={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            <div className="title"> People </div>
          </Row>
          <center>{people}</center>
          <Footer />
        </Container>
      </div>
    );
  }
}

export default withWindowDimensions(PeoplePage);
