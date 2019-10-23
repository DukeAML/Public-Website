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

// DS = data science
// CRM = client management
// PS = implementation
//

// Compose array of person objects with necessary info
const peopleInfo = [
  {
    name: "Luke	Truitt",
    school: "Undergraduate",
    study: "ECE, CS",
    team: "CRM",
    email: "luke.truitt@duke.edu",
    linkedin: "https://www.linkedin.com/in/luke-truitt/"
  },
  {
    name: "Varun Nair",
    school: "Undergraduate",
    study: "CS, Math",
    team: "DS",
    email: "varun.nair.1@duke.edu",
    linkedin: "https://www.linkedin.com/in/varunnair18/",
    img: ""
  },
  {
    name: "Mary	Gooneratne",
    school: "Undergraduate",
    study: "ECE, CS",
    team: "CRM",
    email: "mary.gooneratne@duke.edu",
    linkedin: "",
    img: "Gooteratne.jpg"
  },
  {
    name: "Daniel	Tao",
    school: "Undergraduate",
    study: "CS, Stats",
    team: "DS",
    email: "chaofan.tao@duke.edu",
    linkedin: "",
    img: ""
  },
  {
    name: "Anna	Yanchencko",
    school: "Post-Graduate",
    study: "Statistics",
    team: "DS",
    email: "anna.yanchenko@duke.edu",
    linkedin: "",
    img: "Yanchencko.jpg"
  },
  {
    name: "Ching Lung	Hsu",
    school: "Post-Graduate",
    study: "Statistics",
    team: "DS",
    email: "chinglung.hsu@duke.edu",
    linkedin: "",
    img: ""
  },
  {
    name: "David	Rein",
    school: "Undergraduate",
    study: "",
    team: "",
    email: "",
    linkedin: "",
    img: ""
  },
  {
    name: "Jia Rong	Chua",
    school: "Masters",
    study: "",
    team: "",
    email: "",
    linkedin: "",
    img: ""
  },
  {
    name: "Lindsay	Wu",
    school: "Masters",
    study: "",
    team: "",
    email: "",
    linkedin: "",
    img: "Wu.jpg"
  },
  {
    name: "Olivier Binette",
    school: "Post-Graduate",
    study: "",
    team: "",
    email: "",
    linkedin: "",
    img: "Binette.jpg"
  },
  {
    name: "Qingying	Luo",
    school: "Undergraduate",
    study: "",
    team: "",
    email: "",
    linkedin: "",
    img: "Luo.jpg"
  },
  {
    name: "Ryan	Middlemiss",
    school: "Undergraduate",
    study: "",
    team: "",
    email: "",
    linkedin: "",
    img: "Middlemiss.png"
  },
  {
    name: "Yishu	Gong",
    school: "Undergraduate",
    study: "",
    team: "",
    email: "",
    linkedin: "",
    img: "Gong.png"
  },
  {
    name: "Zhiyue	Zhang",
    school: "Undergraduate",
    study: "",
    team: "",
    email: "",
    linkedin: "",
    img: ""
  },
  {
    name: "Alina	Barnett",
    school: "Undergraduate",
    study: "",
    team: "",
    email: "",
    linkedin: "",
    img: ""
  },
  {
    name: "Hang	Yang",
    school: "Undergraduate",
    study: "",
    team: "",
    email: "",
    linkedin: "",
    img: "Yang.jpg"
  },
  {
    name: "Morris	Greenberg",
    school: "Undergraduate",
    study: "",
    team: "",
    email: "",
    linkedin: "",
    img: "Greenberg.jpg"
  },
  {
    name: "Phoebe	Klett",
    school: "Undergraduate",
    study: "",
    team: "",
    email: "",
    linkedin: "",
    img: ""
  },
  {
    name: "Rachel	Williamson",
    school: "Undergraduate",
    study: "",
    team: "",
    email: "",
    linkedin: "",
    img: "Williamson.jpg"
  },
  {
    name: "Tima	Alqabandi",
    school: "Undergraduate",
    study: "",
    team: "",
    email: "",
    linkedin: "",
    img: "Alqabandi.jpg"
  },
  {
    name: "Yasa	Baig",
    school: "Undergraduate",
    study: "",
    team: "",
    email: "",
    linkedin: "",
    img: "Baig.jpg"
  },
  {
    name: "Ben	Levy",
    school: "Undergraduate",
    study: "",
    team: "",
    email: "",
    linkedin: "",
    img: "Levy.jpg"
  },
  {
    name: "Shuyi	Fan",
    school: "",
    study: "",
    team: "",
    email: "",
    linkedin: "",
    img: "Fan.jpg"
  },
  {
    name: "Nicole	Moiseyev",
    school: "Undergraduate",
    study: "",
    team: "",
    email: "",
    linkedin: "",
    img: "Moiseyev.jpg"
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
            <div className="title"> Our Members </div>
          </Row>
          <center>{people}</center>
          <Footer />
        </Container>
      </div>
    );
  }
}

export default withWindowDimensions(PeoplePage);
