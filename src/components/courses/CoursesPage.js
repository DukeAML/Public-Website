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

import { Sigma, RandomizeNodePositions, RelativeSize } from "react-sigma";
import { Graph } from "react-d3-graph";

import Footer from "../tools/Footer";
import Navigation from "../tools/Navigation";

import CoursesDetailsTab from "./CoursesDetailsTab";

const data = require("./Data");

const myConfig = {
  nodeHighlightBehavior: true,
  automaticRearrangeAfterDropNode: false,
  collapsible: false,
  directed: false,
  focusAnimationDuration: 0.75,
  focusZoom: 1,
  height: 400,
  highlightDegree: 1,
  highlightOpacity: 1,
  maxZoom: 8,
  minZoom: 0.1,
  panAndZoom: true,
  staticGraph: false,
  staticGraphWithDragAndDrop: false,
  width: 800,
  node: {
    color: "#f0efe5",
    size: 200,
    highlightStrokeColor: "blue",
    labelProperty: "course",
    fontColor: "#f0efe5"
  },
  link: {
    highlightColor: "lightblue",
    renderLabel: "true",
    semanticStrokeWidth: false,
    strokeWidth: 1.5
  },
  d3: {
    alphaTarget: 0.05,
    gravity: -1000,
    linkLength: 200,
    linkStrength: 1
  }
};

class CoursesPage extends React.Component {
  constructor() {
    super();
    this.state = {
      tabDisplayed: false,
      selectedNode: null
    };
  }

  // need to use arrow function to bind to this class
  onClickNode = node => {
    console.log(node);
    this.setState({ selectedNode: data.nodes[node], tabDisplayed: true });
  };

  onClickLink = link => {
    console.log(link);
  };

  onOverNode = e => {
    console.log(e);
  };

  render() {
    return (
      <div>
        <div>
          <Navigation />
          <Container fluid style={{ padding: "0" }}>
            <Row>
              <Col sm={12} md={6} style={{ borderStyle: "solid black" }}>
                <div className="container__graph-area">
                  <Graph
                    data={{ links: data.edges, nodes: data.nodes }}
                    config={myConfig}
                    id="graph-id"
                    onClickNode={e => this.onClickNode(e)}
                    onClickLink={e => this.onClickLink(e)}
                  />
                </div>
              </Col>
              <Col sm={12} md={6}>
                <CoursesDetailsTab
                  in={this.state.tabDisplayed}
                  selectedNode={this.state.selectedNode}
                />
              </Col>
            </Row>
          </Container>
          <Footer />
        </div>
      </div>
    );
  }
}

export default CoursesPage;

/*
<Sigma
  graph={data}
  settings={{
    drawEdges: true,
    drawLabels: true,
    drawNodes: true,
    defaultLabelColor: "#f0efe5",
    defaultEdgeColor: "#f0efe5",
    defaultNodeColor: "#f0efe5",
    labelThreshold: "2",
    batchEdgesDrawing: true,
    drawEdges: true,
    drawLabels: true,
    drawEdgeLabels: true,
    labelFontSize: "12"
  }}
  style={{ height: "80vh", width: "50vw" }}
  onClickNode={e => this.onClickNode(e)}
  onOverNode={e => this.onOverNode(e)}
>
  <RelativeSize initialSize={20} />
  <RandomizeNodePositions />
</Sigma>
  */
