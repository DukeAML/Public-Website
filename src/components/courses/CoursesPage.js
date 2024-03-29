import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { Graph } from 'react-d3-graph';

import withWindowDimensions from '../people/withWindowDimensions';
import Footer from '../tools/Footer';
import Navigation from '../tools/Navigation';

import './courses.scss';
import CoursesDetailsTab from './CoursesDetailsTab';
import shortestPath from './shortestPath';
//const data = require("./Data");
import data_v2 from './Data-v2';

const skillConfig = {
  nodeHighlightBehavior: true,
  automaticRearrangeAfterDropNode: false,
  directed: true,
  focusAnimationDuration: 0.75,
  focusZoom: 2,
  highlightDegree: 1,
  maxZoom: 4,
  minZoom: 0.0001,
  panAndZoom: true,
  highlightOpacity: 0.1,
  node: {
    color: '#1e2c3a',
    size: 300,
    labelProperty: 'label',
    fontColor: '#1e2c3a',
    fontSize: 14,
    highlightFontSize: 14,
  },
  link: {
    renderLabel: false,
    semanticStrokeWidth: false,
    strokeWidth: 2,
    color: '#BCC4CD',
  },
  d3: {
    alphaTarget: 1,
    gravity: -400,
    linkLength: 350,
    linkStrength: 0.5,
  },
};

const prereqConfig = {
  nodeHighlightBehavior: true,
  automaticRearrangeAfterDropNode: false,
  directed: true,
  focusAnimationDuration: 0.75,
  focusZoom: 2,
  highlightDegree: 1,
  maxZoom: 4,
  minZoom: 0.001,
  panAndZoom: true,
  highlightOpacity: 0.1,
  node: {
    color: '#1e2c3a',
    size: 200,
    labelProperty: 'label',
    fontColor: '#1e2c3a',
    fontSize: 14,
    highlightFontSize: 14,
  },
  link: {
    renderLabel: false,
    semanticStrokeWidth: false,
    strokeWidth: 2,
    iterations: 20,
    color: '#BCC4CD',
  },
  d3: {
    alphaTarget: 0.5,
    gravity: -800,
    linkLength: 200,
    linkStrength: 1,
  },
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
        adjacencies: data_v2.adjacencies,
      },
      focusedNodeId: null,
      prereqChecked: true,
    };
  }

  componentDidMount = () => {
    let { adjacencies, links } = this.state.data;
    //console.log(adjacencies);
    console.log(shortestPath(10, 5, adjacencies, links));
  };

  // need to use arrow function to bind to this class
  onClickNode = (node) => {
    if (node) console.log(node);
    this.setState({
      selectedNode: data_v2.nodesObject[node],
      tabDisplayed: true,
      focusedNodeId: node,
    });
  };

  onClickLink = (link) => {
    console.log(link);
  };

  onMouseOverNode = (e) => {
    console.log(e);
  };

  onClickGraph = (e) => {
    this.setState({
      selectedNode: null,
    });
    this.setState({
      focusedNodeId: null,
      tabDisplayed: false,
    });
  };

  handleDataTypeChange = (e) => {
    console.log(e);
    this.setState({
      prereqChecked: !this.state.prereqChecked,
      focusedNodeId: null,
    });
  };

  render() {
    const title = this.state.prereqChecked
      ? 'Viewing pre-req based connections'
      : 'Viewing skill-based connections';

    const subtitle = this.state.prereqChecked
      ? 'Hover over a course to highlight the courses it leads to. Click on any course for more information.'
      : 'Hover over a course node to highlight skills it contributes to. Hover over a skill to see highlight courses that use that skill. Click on any course or skill for more information.';

    const graphWidth = Math.min(1200, Math.trunc(this.props.windowWidth * 0.8));

    const graph = (
      <Graph
        data={
          this.state.prereqChecked
            ? {
                nodes: data_v2.prereqNodes,
                links: data_v2.prereqEdges,
                focusedNodeId: this.state.focusedNodeId,
              }
            : {
                nodes: data_v2.skillNodes,
                links: data_v2.skillEdges,
                focusedNodeId: this.state.focusedNodeId,
              }
        }
        config={{
          ...(this.state.prereqChecked ? prereqConfig : skillConfig),
          height: Math.max(
            Math.trunc(graphWidth * 0.75),
            this.props.windowHeight - 400,
          ),
          width: graphWidth,
        }}
        id="graph-id"
        onClickNode={(e) => this.onClickNode(e)}
        onClickGraph={(e) => this.onClickGraph(e)}
        onClickLink={(e) => this.onClickLink(e)}
        onMouseOverNode={(e) => this.onMouseOverNode(e)}
        style={{ maxWidth: '300px' }}
      />
    );

    return (
      <div>
        <Navigation style={{ padding: 0 }} />

        <Container fluid style={{ padding: 0 }} justify="center">
          <CoursesDetailsTab
            in={this.state.tabDisplayed}
            selectedNode={this.state.selectedNode}
            nodes={data_v2.nodes}
          />

          <div className="title">
            <center>{title}</center>
          </div>
          <div style={{ fontSize: '1rem' }}>
            <center>{subtitle}</center>
          </div>

          <Row>
            <Col xl={12}>
              <div
                style={{ fontSize: '1rem', padding: '1rem' }}
                onChange={(e) => this.handleDataTypeChange(e)}>
                <div class="selectView">
                  <input
                    type="radio"
                    name="prereqChecked"
                    id="prereq"
                    defaultChecked
                    checked={this.state.prereqChecked}
                  />
                  <label for="prereq">
                    View prerequisite-based connections
                  </label>

                  <input
                    type="radio"
                    name="skillChecked"
                    id="skill"
                    checked={!this.state.prereqChecked}
                  />
                  <label for="skill">View skill-based connections</label>
                </div>
              </div>
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

export default withWindowDimensions(CoursesPage);
