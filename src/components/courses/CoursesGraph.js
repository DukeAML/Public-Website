import React from "react";
// Import graph dependencies
import { Sigma, RandomizeNodePositions, RelativeSize } from "react-sigma";

import { Col, Container, Row } from "react-bootstrap";
import AnimateHeight from "react-animate-height";

class CoursesGraph extends React.Component {
  constructor() {
    super();
    this.state = { selectedNode: null };
  }

  render() {
    return (
      <Sigma
        graph={this.props.data}
        settings={{ drawEdges: true, clone: false }}
        style={{ height: "70vh", width: "50vw" }}
        onClickNode={e => this.props.onClickNode(e)}
      >
        <RelativeSize initialSize={20} />
        <RandomizeNodePositions />
      </Sigma>
    );
  }
}

export default CoursesGraph;
