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
import { getMembers } from "../../api/api";
import { getMemberData } from "./PeopleData";

import Details from "./Details";
import Person from "./Person";
import PeopleRow from "./PeopleRow";
import { CRM, DS, PS } from "./PeopleData";

const peopleInfo = [CRM, DS, PS];

class PeoplePage extends React.Component {
  state = { redirect: false, details: {}, collapse: false, members: {} };

  componentDidMount = async () => {
    const members = await getMemberData();
    console.log(members);
    this.setState({ redirect: false });
  };

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
    let CRMgrid = this.makePeopleGrid(CRM, this.props.windowWidth);
    let DSgrid = this.makePeopleGrid(DS, this.props.windowWidth);
    let PSgrid = this.makePeopleGrid(PS, this.props.windowWidth);

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

    // center titles on mobile

    let DStitle, PStitle, CRMtitle;

    if (window <= 576) {
      DStitle = <center> Data Science Team </center>;
      PStitle = <center> Implementation Team </center>;
      CRMtitle = <center> Business Team </center>;
    } else {
      DStitle = "Data Science Team";
      PStitle = "Implementation Team";
      CRMtitle = "Business Team";
    }

    return (
      <Container fluid style={{ padding: 0 }}>
        <Navigation />

        <div className="title">
          <center>Our Members</center>
        </div>

        <div className="team" style={{ padding: `1rem ${padding}%` }}>
          {DStitle}
          <hr />
        </div>
        <center>{DSgrid}</center>
        <div className="team" style={{ padding: `1rem ${padding}%` }}>
          {PStitle}
          <hr />
        </div>
        <center>{PSgrid}</center>

        <div className="team" style={{ padding: `1rem ${padding}%` }}>
          {CRMtitle}
          <hr />
        </div>
        <center>{CRMgrid}</center>

        <Footer />
      </Container>
    );
  }
}

export default withWindowDimensions(PeoplePage);
