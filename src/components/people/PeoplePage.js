import React from "react";
import {
  Container,
  Jumbotron,
  Button,
  Row,
  Col,
  Image,
  Card,
  Carousel
} from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";

import Footer from "../tools/Footer";

class PeoplePage extends React.Component {
  state = { redirect: false };

  handleSignUpClick = () => {};

  handleProjectsClick = () => {
    this.setState({ redirect: true });
  };

  componentDidMount() {
    this.setState({ redirect: false });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/projects" />;
    }

    return (
      <div>
        <Container
          fluid
          style={{ height: "100%", paddingBottom: "60px" }}
        ></Container>
        <Container fluid style={{ padding: "25px" }}>
          <Row
            style={{
              display: "flex",
              justifyContent: "center",
              fontFamily: "Raleway"
            }}
          >
            <h1> People </h1>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default PeoplePage;
