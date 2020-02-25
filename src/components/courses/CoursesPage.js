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
  Collapse,
  Form
} from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";

import { Graph } from "react-d3-graph";

import Footer from "../tools/Footer";
import Navigation from "../tools/Navigation";

import CoursesDetailsTab from "./CoursesDetailsTab";
import shortestPath from "./shortestPath";

//const data = require("./Data");
import data_v2 from "./Data-v2";

const skillConfig = {
  nodeHighlightBehavior: true,
  automaticRearrangeAfterDropNode: false,
  directed: true,
  focusAnimationDuration: 0.75,
  focusZoom: 2,
  height: 800,
  width: 1200,
  highlightDegree: 1,
  maxZoom: 4,
  minZoom: 0.0001,
  panAndZoom: true,
  nodeHighlightBehavior: true,
  highlightOpacity: 0.1,
  node: {
    color: "#f0efe5",
    size: 300,
    labelProperty: "label",
    fontColor: "#f0efe5",
    fontSize: 14,
    highlightFontSize: 14,
    selectedColor: "#ffffff",
    clickFontColor: "#000000"
  },
  link: {
    renderLabel: false,
    semanticStrokeWidth: false,
    strokeWidth: 2
  },
  d3: {
    alphaTarget: 1,
    gravity: -400,
    linkLength: 350,
    linkStrength: 0.5
  }
};

const prereqConfig = {
  nodeHighlightBehavior: true,
  automaticRearrangeAfterDropNode: false,
  directed: true,
  focusAnimationDuration: 0.75,
  focusZoom: 2,
  height: 800,
  width: 1200,
  highlightDegree: 1,
  maxZoom: 4,
  minZoom: 0.001,
  panAndZoom: true,
  nodeHighlightBehavior: true,
  highlightOpacity: 0.1,
  node: {
    color: "#f0efe5",
    size: 200,
    labelProperty: "label",
    fontColor: "#f0efe5",
    fontSize: 14,
    highlightFontSize: 14,
    selectedColor: "#ffffff",
    clickFontColor: "#000000"
  },
  link: {
    renderLabel: false,
    semanticStrokeWidth: false,
    strokeWidth: 2,
    iterations: 20
  },
  d3: {
    alphaTarget: 0.5,
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
        links: data_v2.edges,
        nodes: data_v2.nodes,
        // TODO: make adjacenices from data_v2
        adjacencies: data_v2.adjacencies
      },
      focusedNodeId: null,
      prereqChecked: true
    };
  }

  componentDidMount = () => {
    let { adjacencies, links } = this.state.data;
    //console.log(adjacencies);
    console.log(shortestPath(10, 5, adjacencies, links));
  };

  // need to use arrow function to bind to this class
  onClickNode = node => {
    if (node) console.log(node);
    this.setState({
      selectedNode: data_v2.nodesObject[node],
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

  handleDataTypeChange = e => {
    console.log(e);
    this.setState({
      prereqChecked: !this.state.prereqChecked,
      focusedNodeId: null
    });
  };

  render() {
    const title = this.state.prereqChecked
      ? "Viewing pre-req based connections"
      : "Viewing skill-based connections";

    const subtitle = this.state.prereqChecked
      ? "Hover over a course to highlight the courses it leads to. Click on any course for more information."
      : "Hover over a course node to highlight skills it contributes to. Hover over a skill to see highlight courses that use that skill. Click on any course or skill for more information.";
    const graph = (
      <Graph
        data={
          this.state.prereqChecked
            ? {
                nodes: data_v2.prereqNodes,
                links: data_v2.prereqEdges,
                focusedNodeId: this.state.focusedNodeId
              }
            : {
                nodes: data_v2.skillNodes,
                links: data_v2.skillEdges,
                focusedNodeId: this.state.focusedNodeId
              }
        }
        config={this.state.prereqChecked ? prereqConfig : skillConfig}
        id="graph-id"
        onClickNode={e => this.onClickNode(e)}
        onClickGraph={e => this.onClickGraph(e)}
        onClickLink={e => this.onClickLink(e)}
        onMouseOverNode={e => this.onMouseOverNode(e)}
      />
    );
    return (
      <div>
        <Navigation />
        <center></center>

        <Container fluid style={{ padding: 0 }} justify="center">
          <CoursesDetailsTab
            in={this.state.tabDisplayed}
            selectedNode={this.state.selectedNode}
            nodes={data_v2.nodes}
          />
          <Row>
            <Col xl={12}>
              <div
                style={{ fontSize: "1rem", padding: "1rem" }}
                onChange={e => this.handleDataTypeChange(e)}
              >
                <input
                  type="radio"
                  name="prereqChecked"
                  id="prereq"
                  label=""
                  defaultChecked
                  checked={this.state.prereqChecked}
                />
                View prerequisite-based connections
                <br />
                <input
                  type="radio"
                  name="skillChecked"
                  id="skill"
                  label=""
                  checked={!this.state.prereqChecked}
                />
                View skill-based connections
              </div>
            </Col>
          </Row>
          <div style={{ fontSize: "2rem" }}>
            <center>{title}</center>
          </div>
          <div style={{ fontSize: "1rem" }}>
            <center>{subtitle}</center>
          </div>

          <center>
            <div className="container__graph-area">{graph}</div>
          </center>
          <Footer />
        </Container>
      </div>
    );
  }
}

export default CoursesPage;
