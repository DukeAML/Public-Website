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

import CoursesGraph from "./CoursesGraph";
import CoursesDetailsTab from "./CoursesDetailsTab";

const data = require("./Data");

class CoursesPage extends React.Component {
  constructor() {
    super();
    this.state = {
      tabDisplayed: false,
      selectedNode: null
    };
    console.log(data);
  }

  // need to use arrow function to bind to this class
  onClickNode = e => {
    let { node } = e.data;
    console.log(node);
    this.setState({ selectedNode: node, tabDisplayed: true });
  };

  render() {
    return (
      <div>
        <Navigation />
        <Container fluid style={{ padding: "0" }}>
          <Row>
            <Col sm={6}>
              <CoursesGraph onClickNode={this.onClickNode} data={data} />
            </Col>
            <Col sm={6}>
              <CoursesDetailsTab
                in={this.state.tabDisplayed}
                selectedNode={this.state.selectedNode}
              />
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default CoursesPage;
