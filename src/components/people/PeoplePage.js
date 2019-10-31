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

import Person from "./Person";
import PeopleRow from "./PeopleRow";

// DS = data science
// CRM = client management
// PS = implementation

const CRM = [
  {
    name: "Ben	Levy",
    school: "Fuqua School of Business",
    study: "MBA",
    team: "CRM",
    email: "ben.levy@duke.edu",
    linkedin: "https://www.linkedin.com/in/ben-levy1/",
    img: "Levy.jpg"
  },
  {
    name: "Mary	Gooneratne",
    school: "Undergraduate",
    study: "Electrical and Computer Engineering",
    team: "CRM",
    email: "mary.gooneratne@duke.edu",
    linkedin: "https://www.linkedin.com/in/marygooneratne/",
    img: "Gooteratne.jpg",
    github: "https://github.com/marygooneratne/"
  },
  {
    name: "Shuyi	Fan",
    school: "Fuqua School of Business",
    study: "QMS",
    team: "CRM",
    email: "shuyi.fan@duke.edu",
    linkedin: "https://www.linkedin.com/in/shuyi-fan-976393110/",
    img: "Fan.jpg"
  },
  {
    name: "Rachel	Williamson",
    school: "Fuqua School of Business",
    study: "QMS",
    team: "CRM",
    email: "rachel.williamson@duke.edu",
    linkedin: "https://www.linkedin.com/in/rachel-williamson-8ab8a9125/",
    img: "Williamson.jpg"
  },
  {
    name: "Bree Wang",
    school: "Fuqua School of Business",
    study: "QMS",
    team: "CRM",
    email: "bree.wang@duke.edu",
    linkedin: "https://www.linkedin.com/in/bree-jiaying-wang-25421b59/",
    img: "Wang.jpg"
  },
  {
    name: "Luke	Truitt",
    school: "Undergraduate",
    study: "Electrical and Computer Engineering, Economics",
    team: "CRM",
    email: "luke.truitt@duke.edu",
    linkedin: "https://www.linkedin.com/in/luke-truitt/",
    github: "https://github.com/luke-truitt/"
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
    img: "Nair.jpg",
    github: "https://github.com/varunnair18/"
  },
  {
    name: "Daniel	Tao",
    school: "Undergraduate",
    study: "Computer Science, Statistics",
    team: "DS",
    email: "chaofan.tao@duke.edu",
    linkedin: "https://www.linkedin.com/in/chaofan-daniel-tao/",
    github: "https://github.com/danieltao/",
    img: "Tao.jpg"
  },
  {
    name: "Anna	Yanchencko",
    school: "Ph.D.",
    study: "Statistics",
    team: "DS",
    email: "anna.yanchenko@duke.edu",
    linkedin: "https://www.linkedin.com/in/anna-yanchenko/",
    github: "https://github.com/aky4wn/",
    img: "Yanchencko.jpg"
  },
  {
    name: "Jia Rong	Chua",
    school: "Masters",
    study: "Economics",
    team: "DS",
    email: "jiarong.chua@duke.edu",
    linkedin: "https://www.linkedin.com/in/jiarongchua/",
    img: "Chua.jpg"
  },
  {
    name: "Olivier Binette",
    school: "Ph.D.",
    study: "Statistics",
    team: "DS",
    email: "olivier.binette@duke.edu",
    linkedin: "https://www.linkedin.com/in/olivier-binette/",
    img: "Binette.jpg"
  },
  {
    name: "Ryan	Middlemiss",
    school: "Undergraduate",
    study: "Electrical and Computer Engineering, Economics",
    team: "DS",
    email: "ryan.middlemiss@duke.edu",
    linkedin: "https://www.linkedin.com/in/ryan-middlemiss-732541192/",
    img: "Middlemiss.png",
    github: "https://github.com/ryanmiddlemiss/"
  },
  {
    name: "Alina Barnett",
    school: "Ph.D.",
    study: "Computer Science",
    team: "DS",
    email: "alina.barnett@duke.edu",
    linkedin: "https://www.linkedin.com/in/alina-jade-barnett-ab703582/",
    img: "Barnett.jpg"
  },
  {
    name: "Hang	Yang",
    school: "Ph.D.",
    study: "Mathematics",
    team: "DS",
    email: "hang.yang@duke.edu",
    linkedin: "https://www.linkedin.com/in/hang-yang/",
    img: "Yang.jpg"
  },
  {
    name: "Morris	Greenberg",
    school: "Masters",
    study: "Statistics",
    team: "DS",
    email: "morris.greenberg@duke.edu",
    linkedin: "https://www.linkedin.com/in/morris-greenberg-1b9abb63/",
    img: "Greenberg.jpg"
  },
  {
    name: "Phoebe	Klett",
    school: "Undergraduate",
    study: "Mathematics",
    team: "DS",
    email: "phoebe.klett@duke.edu",
    linkedin: "https://www.linkedin.com/in/phoebe-klett-644009134/",
    img: "Klett.jpg"
  },
  {
    name: "Tima	Alqabandi",
    school: "Ph.D.",
    study: "Sociology",
    team: "DS",
    email: "fa83@duke.edu",
    linkedin: "https://www.linkedin.com/in/rachel-williamson-8ab8a9125/",
    img: "Alqabandi.jpg"
  }
];

const PS = [
  {
    name: "Yasa	Baig",
    school: "Undergraduate",
    study: "Physics, Computer Science",
    team: "Implementation",
    email: "yasa.baig@duke.edu",
    linkedin: "https://www.linkedin.com/in/yasab/",
    img: "Baig.jpg",
    github: "https://github.com/yasab27/"
  },

  {
    name: "Nicole	Moiseyev",
    school: "Undergraduate",
    study: "Neuroscience, Computer Science",
    team: "Implementation",
    email: "nicole.moiseyev@duke.edu",
    linkedin: "https://www.linkedin.com/in/nicole-m-184123b4/",
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
      padding = 5;
    }

    // center titles on mobile

    let DStitle, PStitle, CRMtitle;

    if (window <= 576) {
      DStitle = <center> Data Science Team </center>;
      PStitle = <center> Implementation Team </center>;
      CRMtitle = <center> Client Management Team </center>;
    } else {
      DStitle = "Data Science Team";
      PStitle = "Implementation Team";
      CRMtitle = "Client Management Team";
    }

    return (
      <div>
        <Navigation />
        <Container fluid style={{ padding: 0 }}>
          <div className="title" style={{ padding: "0 0 1rem 0" }}>
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
      </div>
    );
  }
}

export default withWindowDimensions(PeoplePage);
