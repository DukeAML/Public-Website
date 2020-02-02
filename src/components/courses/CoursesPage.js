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

import { Sigma, RandomizeNodePositions, RelativeSize } from "react-sigma";
import { Graph } from "react-d3-graph";
import WebCola from "react-cola";

import Footer from "../tools/Footer";
import Navigation from "../tools/Navigation";

import CoursesDetailsTab from "./CoursesDetailsTab";
import shortestPath from "./shortestPath";

//const data = require("./Data");
const data_v2 = require("./Data-v2");

const myConfig = {
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
    labelProperty: "course",
    fontColor: "#f0efe5",
    fontSize: "0.5rem",
    highlightFontSize: "0.5rem",
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
    gravity: -500,
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
      config: myConfig,
      prereqChecked: false,
      skillChecked: true
    };
  }

  componentDidMount = () => {
    let { adjacencies, links } = this.state.data;
    //console.log(adjacencies);
    console.log(shortestPath(10, 5, adjacencies, links));
  };

  // need to use arrow function to bind to this class
  onClickNode = node => {
    console.log(node);
    this.setState({
      selectedNode: this.state.data.nodes[node],
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
    this.setState({ [e.target.name]: !this.state[e.target.name] });
  };

  render() {
    const graph = (
      <Graph
        data={
          this.state.prereqChecked
            ? {
                nodes: data_v2.nodes,
                links: data_v2.prereqEdges,
                focusedNodeId: this.state.focusedNodeId
              }
            : {
                nodes: data_v2.nodes,
                links: data_v2.skillEdges,
                focusedNodeId: this.state.focusedNodeId
              }
        }
        config={this.state.config}
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
              <Form onChange={e => this.handleDataTypeChange(e)}>
                <Form.Check
                  type="checkbox"
                  name="prereqChecked"
                  id="prereq"
                  label="View prerequisite-based connections"
                  value={this.state.prereqChecked}
                />
                <Form.Check
                  type="checkbox"
                  name="skillChecked"
                  id="skill"
                  label="View skill-based connections"
                  value={this.state.skillChecked}
                />
              </Form>
            </Col>
          </Row>

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

/*
<Sigma
  graph={{
    nodes: this.state.data.nodes,
    edges: this.state.data.edges
  }}
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
>
  <RelativeSize initialSize={20} />
  <RandomizeNodePositions />
</Sigma>
  */
/*
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

  */
