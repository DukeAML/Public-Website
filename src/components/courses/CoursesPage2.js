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

import {
  Sigma,
  RandomizeNodePositions,
  RelativeSize,
  ForceAtlas2,
  NOverlap
} from "react-sigma";
import { Graph } from "react-d3-graph";

import Footer from "../tools/Footer";
import Navigation from "../tools/Navigation";

import CoursesDetailsTab from "./CoursesDetailsTab";
import shortestPath from "./shortestPath";

//const data = require("./Data");
const data_v2 = require("./Data-v2");

class CoursesPage extends React.Component {
  constructor() {
    super();
    this.state = {
      tabDisplayed: false,
      selectedNode: null,
      data: {
        edges: data_v2.edges,
        nodes: data_v2.nodes,
        // TODO: make adjacenices from data_v2
        adjacencies: data_v2.adjacencies
      },
      focusedNodeId: null,
      prereqChecked: true,
      skillChecked: false
    };
  }

  componentDidMount = () => {
    let { adjacencies, links } = this.state.data;
    //console.log(adjacencies);
    console.log(shortestPath(10, 5, adjacencies, links));
  };

  // need to use arrow function to bind to this class
  onClickNode = e => {
    console.log(e);
    let { node } = e.data;
    this.setState({
      selectedNode: this.state.data.nodes[node.id],
      tabDisplayed: true,
      focusedNodeId: node.id
    });
  };

  onClickEdge = e => {
    console.log(e);
    let { edge } = e.data;
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

          <Sigma
            graph={{
              nodes: this.state.data.nodes,
              edges: this.state.data.edges
            }}
            renderer="canvas"
            settings={{
              batchEdgesDrawing: true,
              defaultLabelColor: "#fff",
              defaultLabelSize: 15,
              drawLabel: true,
              defaultNodeColor: "#fff",
              drawEdgeLabels: false,
              drawEdges: true,
              hoverFontStyle: "text-size: 11",
              labelThreshold: 12
            }}
            onClickNode={this.onClickNode}
            onClickEdge={this.onClickEdge}
          >
            <NOverlap gridSize={10} maxIterations={100} />
            <RandomizeNodePositions>
              <ForceAtlas2
                iterationsPerRender={1}
                linLogMode
                timeout={10000}
                worker
              />
              <RelativeSize initialSize={30} />
            </RandomizeNodePositions>
          </Sigma>
          <Footer />
        </Container>
      </div>
    );
  }
}

export default CoursesPage;

/*


  */
