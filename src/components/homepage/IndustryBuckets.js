import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ListGroup,
  ListGroupItem
} from "react-bootstrap";
import { Link } from "react-router-dom";

import AnimateHeight from "react-animate-height";

import Footer from "../tools/Footer";
import Navigation from "../tools/Navigation";

import placeholder from "./images/placeholder.svg";

import "./HomePage.scss";

const buckets = [
  {
    title: "Finance",
    details:
      "Wasted time depositing checks in banks;Inaccurate risk analysis of Bond Portfolios;Bad timing in investing",
    img: "finance.jpeg"
  },
  {
    title: "Food",
    details:
      "Long restaurant wait times;Inefficient delivery scheduling;Unpopular items on the menu;Inefficient inventory management;Long wait times to check;Non-optimal food layout;Inefficient delivery/pick-up scheduling",
    img: "food.jpeg"
  },
  {
    title: "Transportation",
    details: "Unknown parking availability",
    img: "transportation.jpeg"
  },
  {
    title: "Agriculture",
    details:
      "Inaccurate weather predictions; Inefficient use of water; Unknown pricing of crops/Volume of Market; Inefficient timelines for growing stuff",
    img: "agriculture.jpeg"
  },
  {
    title: "Sports",
    details:
      "Guessing play calls; Analysis of past averages and prediction of future success",
    img: "sports.jpeg"
  },
  {
    title: "Real Estate",
    details:
      "Limited/Inaccurate information about housing options; Slow matching with appropriate homes/owners",
    img: "realestate.jpeg"
  },
  {
    title: "Entertainment",
    details: "Poor recommendations;Inefficient ticket pricing",
    img: "entertainment.jpeg"
  },
  {
    title: "Shopping",
    details: "Poor recommendations; Inefficient ticket pricing",
    img: "shopping.jpeg"
  },
  {
    title: "Manufacturing",
    details:
      "Difficult to set up new plant efficiently; Bad at predicting throughput; Poor error analysis",
    img: "manufacturing.jpeg"
  },
  {
    title: "Administration",
    details:
      "Inefficient matching of employee records; Bad at choosing candidates for job; Repetitive tasks",
    img: "administration.jpeg"
  },
  {
    title: "Commodities",
    details: "Oil pricing lag; Poor supply-chain",
    img: "commodities.jpeg"
  },
  {
    title: "Education",
    details:
      "Disconnected students; Deindividualized learning; Evaluating performance",
    img: "education.jpeg"
  }
];

class IndustryBuckets extends React.Component {
  constructor() {
    super();

    this.state = {
      expanded: null
    };
  }

  handleFlipping = id => () => {
    const cardId = `flipped${id}`;
    this.setState({ [cardId]: !this.state[cardId] });
  };

  handleClickBucket = key => {
    let newKey = this.state.expanded == key ? null : key;
    this.setState({ expanded: newKey });
  };

  render() {
    const cards = buckets.map((bucket, key) => (
      <Col
        xs={12}
        sm={6}
        l={4}
        xl={3}
        key={key}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Card
          style={{ width: "100%", maxWidth: "30rem", margin: "0 0 2rem 0" }}
          onClick={() => this.handleClickBucket(key)}
          className="industry-card"
        >
          <Card.Img
            variant="top"
            src={require(`./industry-bucket-images/${bucket.img}`)}
          />
          <Card.Body>
            <Card.Title>
              <h4>{bucket.title}</h4>
              <AnimateHeight
                duration={300}
                height={this.state.expanded === key ? "auto" : 0}
              >
                <ListGroup className="list-group-flush">
                  {bucket.details.split(";").map((bullet, key) => (
                    <ListGroupItem key={key}>{bullet}</ListGroupItem>
                  ))}
                </ListGroup>
              </AnimateHeight>
            </Card.Title>
          </Card.Body>
        </Card>
      </Col>
    ));

    return (
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <Row>{cards}</Row>
        </div>
      </Container>
    );
  }
}

export default IndustryBuckets;
