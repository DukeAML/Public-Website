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
import {
  InteractiveForceGraph,
  ForceGraphNode,
  ForceGraphLink,
  ForceGraphArrowLink
} from "react-vis-force";

import Footer from "../tools/Footer";
import Navigation from "../tools/Navigation";

import CoursesDetailsTab from "./CoursesDetailsTab";
import shortestPath from "./shortestPath";

//const data = require("./Data");
const data_v2 = require("./Data-v2");

const myConfig = {
  nodeHighlightBehavior: true
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
      prereqChecked: true,
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
      selectedNode: node,
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
    console.log(this.state);

    let data = [];

    if (this.state.prereqChecked) data = data_v2.prereqEdges;
    if (this.state.skillChecked) data = [...data, ...data_v2.skillEdges];

    this.setState({
      data: {
        links: data,
        nodes: this.state.nodes,
        adjacencies: this.state.adjacencies
      }
    });
  };

  render() {
    return (
      <div>
        <Navigation />
        <center></center>

        <Container fluid style={{ padding: 0 }} justify="center">
          <CoursesDetailsTab
            in={this.state.tabDisplayed}
            selectedNode={this.state.selectedNode}
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
            <div className="container__graph-area">
              <InteractiveForceGraph
                labelAttr="label"
                id="graph-id"
                onSelectNode={(e, node) => this.onClickNode(node)}
                onClickGraph={e => this.onClickGraph(e)}
                onSelectLink={(e, link) => this.onClickLink(link)}
                onMouseOverNode={e => this.onMouseOverNode(e)}
              >
                >
                {this.state.data.nodes.map(node => (
                  <ForceGraphNode node={{ ...node }} />
                ))}
                {this.state.data.links.map(link => (
                  <ForceGraphArrowLink
                    key={`${link.source}=>${link.target}`}
                    link={{ ...link }}
                  />
                ))}
              </InteractiveForceGraph>
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
