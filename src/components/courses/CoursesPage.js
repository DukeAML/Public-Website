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
  directed: true,
  focusAnimationDuration: 0.75,
  focusZoom: 2,
  height: 800,
  width: 1200,
  highlightDegree: 1,
  highlightOpacity: 1,
  maxZoom: 4,
  minZoom: 0.001,
  panAndZoom: true,
  staticGraphWithDragAndDrop: false,
  nodeHighlightBehavior: true,
  highlightOpacity: 0.1,
  collapsible: true,
  node: {
    color: "#f0efe5",
    size: 200,
    labelProperty: "course",
    fontColor: "#f0efe5",
    fontSize: "0.5rem",
    highlightFontSize: "0.5rem",
    selectedColor: "#ffffff",
    clickFontColor: "#000000"
  },
  link: {
    renderLabel: "true",
    strokeWidth: 1,
    fontSize: "1rem",
    color: "#617489"
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
      selectedNode: null,
      data: {
        links: data.edges,
        nodes: data.nodes
      },
      focusedNodeId: null,
      config: myConfig
    };
  }

  // need to use arrow function to bind to this class
  onClickNode = node => {
    console.log(node);
    this.setState({
      selectedNode: data.nodes[node],
      tabDisplayed: true,
      focusedNodeId: node
    });
  };

  onClickLink = link => {
    console.log(link);
  };

  onMouseOverNode = e => {
    console.log(e);
  };

  onClickGraph = e => {
    this.setState({
      selectedNode: null
    });
    this.setState({
      focusedNodeId: null,
      tabDisplayed: false
    });
  };

  render() {
    return (
      <div>
        <Navigation />
        <Container fluid style={{ padding: 0 }}>
          <CoursesDetailsTab
            in={this.state.tabDisplayed}
            selectedNode={this.state.selectedNode}
          />
          <center>
            <div className="container__graph-area">
              <Graph
                data={{
                  ...this.state.data,
                  focusedNodeId: this.state.focusedNodeId
                }}
                config={this.state.config}
                id="graph-id"
                onClickNode={e => this.onClickNode(e)}
                onClickGraph={e => this.onClickGraph(e)}
                onClickLink={e => this.onClickLink(e)}
                onMouseOverNode={e => this.onMouseOverNode(e)}
              />
            </div>
          </center>
          <Footer />
        </Container>
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
