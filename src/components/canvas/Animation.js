import React from "react";
import Canvas from "./Canvas";
import { Container, Row, Col, Button, Jumbotron } from "react-bootstrap";

class Animation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { angle: 0 };
    this.updateAnimationState = this.updateAnimationState.bind(this);
  }

  componentDidMount() {
    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }

  updateAnimationState() {
    this.setState(prevState => ({ angle: prevState.angle + 1 }));
    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.rAF);
  }

  render() {
    return (
      <div>
        <Container fluid>
          <Canvas angle={this.state.angle} />
        </Container>
      </div>
    );
  }
}

export default Animation;
