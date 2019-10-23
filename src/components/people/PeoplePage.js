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

const CRM = [
  {
    name: "Luke	Truitt",
    school: "Undergraduate",
    study: "ECE, CS",
    team: "CRM",
    email: "luke.truitt@duke.edu",
    linkedin: "https://www.linkedin.com/in/luke-truitt/",
    github: "https://github.com/luke-truitt/"
  },
  {
    name: "Mary	Gooneratne",
    school: "Undergraduate",
    study: "ECE, CS",
    team: "CRM",
    email: "mary.gooneratne@duke.edu",
    linkedin: "https://www.linkedin.com/in/marygooneratne/",
    img: "Gooteratne.jpg",
    github: "https://github.com/marygooneratne/"
  },
  {
    name: "Ben	Levy",
    school: "",
    study: "",
    team: "CRM",
    email: "",
    linkedin: "https://www.linkedin.com/in/ben-levy1/",
    img: "Levy.jpg"
  },
  {
    name: "Shuyi	Fan",
    school: "",
    study: "",
    team: "",
    email: "CRM",
    linkedin: "https://www.linkedin.com/in/shuyi-fan-976393110/",
    img: "Fan.jpg"
  }
];

// Compose array of person objects with necessary info
const DS = [
  {
    name: "Varun Nair",
    school: "Undergraduate",
    study: "CS, Math",
    team: "DS",
    email: "varun.nair.1@duke.edu",
    linkedin: "https://www.linkedin.com/in/varunnair18/",
    img: "",
    github: "https://github.com/varunnair18/"
  },

  {
    name: "Daniel	Tao",
    school: "Undergraduate",
    study: "CS, Stats",
    team: "DS",
    email: "chaofan.tao@duke.edu",
    linkedin: "",
    github: "https://github.com/danieltao/",
    img: ""
  },
  {
    name: "Anna	Yanchencko",
    school: "Post-Graduate",
    study: "Statistics",
    team: "DS",
    email: "anna.yanchenko@duke.edu",
    linkedin: "https://www.linkedin.com/in/anna-yanchenko/",
    github: "https://github.com/aky4wn/",
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
    study: "CS, Math",
    team: "",
    email: "",
    linkedin: "https://www.linkedin.com/in/idavidrein/",
    img: ""
  },
  {
    name: "Jia Rong	Chua",
    school: "Masters",
    study: "Economics",
    team: "",
    email: "",
    linkedin: "https://www.linkedin.com/in/jiarongchua/",
    img: ""
  },
  {
    name: "Lindsay	Wu",
    school: "Masters",
    study: "Statistics",
    team: "",
    email: "",
    linkedin: "https://www.linkedin.com/in/bingruo-lindsay-wu-b98854150/",
    img: "Wu.jpg"
  },
  {
    name: "Olivier Binette",
    school: "Post-Graduate",
    study: "Statistics",
    team: "",
    email: "",
    linkedin: "",
    img: "Binette.jpg"
  },
  {
    name: "Qingying	Luo",
    school: "Undergraduate",
    study: "Statistics",
    team: "",
    email: "",
    linkedin: "",
    img: "Luo.jpg"
  },
  {
    name: "Ryan	Middlemiss",
    school: "Undergraduate",
    study: "ECE, Economics",
    team: "",
    email: "",
    linkedin: "",
    img: "Middlemiss.png",
    github: "https://github.com/ryanmiddlemiss/"
  },
  {
    name: "Yishu	Gong",
    school: "Post-Graduate",
    study: "",
    team: "DS",
    email: "",
    linkedin: "",
    img: "Gong.png",
    github: "https://github.com/yishu0524/"
  },
  {
    name: "Zhiyue	Zhang",
    school: "Post-Graduate",
    study: "",
    team: "DS",
    email: "",
    linkedin: "",
    img: ""
  },
  {
    name: "Alina	Barnett",
    school: "Post-Graduate",
    study: "Computer Science",
    team: "DS",
    email: "",
    linkedin: "https://www.linkedin.com/in/hang-yang/",
    img: ""
  },
  {
    name: "Hang	Yang",
    school: "",
    study: "",
    team: "DS",
    email: "",
    linkedin: "https://www.linkedin.com/in/hang-yang/",
    img: "Yang.jpg"
  },
  {
    name: "Morris	Greenberg",
    school: "",
    study: "",
    team: "DS",
    email: "",
    linkedin: "https://www.linkedin.com/in/morris-greenberg-1b9abb63/",
    img: "Greenberg.jpg"
  },
  {
    name: "Phoebe	Klett",
    school: "",
    study: "",
    team: "DS",
    email: "",
    linkedin: "https://www.linkedin.com/in/phoebe-klett-644009134/",
    img: ""
  },
  {
    name: "Rachel	Williamson",
    school: "",
    study: "",
    team: "",
    email: "",
    linkedin: "",
    img: "Williamson.jpg"
  },
  {
    name: "Tima	Alqabandi",
    school: "",
    study: "",
    team: "",
    email: "",
    linkedin: "https://www.linkedin.com/in/rachel-williamson-8ab8a9125/",
    img: "Alqabandi.jpg"
  }
];

const PS = [
  {
    name: "Yasa	Baig",
    school: "Undergraduate",
    study: "Physics, CS",
    team: "Implementation",
    email: "",
    linkedin: "https://www.linkedin.com/in/yasab/",
    img: "Baig.jpg",
    github: "https://github.com/yasab27/"
  },

  {
    name: "Nicole	Moiseyev",
    school: "Undergraduate",
    study: "Neuroscience, CS",
    team: "Implementation",
    email: "",
    linkedin: "",
    img: "Moiseyev.jpg",
    github: "https://github.com/nicolemoiseyev/"
  }
];

const peopleInfo = [CRM, DS, PS];

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
      padding = 0;
    }

    return (
      <div>
        <Navigation />
        <Container fluid style={{ padding: 0 }}>
          <div className="title" style={{ padding: "0 0 1rem 0" }}>
            <center>Our Members</center>
          </div>
          <div className="team" style={{ padding: `0 ${padding}%` }}>
            Client Management Team
            <hr />
          </div>
          <center>{CRMgrid}</center>

          <div className="team" style={{ padding: `0 ${padding}%` }}>
            Implementation Team
            <hr />
          </div>
          <center>{PSgrid}</center>

          <div className="team" style={{ padding: `0 ${padding}%` }}>
            Data Science Team
            <hr />
          </div>
          <center>{DSgrid}</center>

          <Footer />
        </Container>
      </div>
    );
  }
}

export default withWindowDimensions(PeoplePage);
