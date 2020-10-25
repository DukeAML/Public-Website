import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import Footer from "../tools/Footer";
import Navigation from "../tools/Navigation";
import "./InnovationStudio.scss";

class InnovationStudio extends React.Component {
  state = { redirect: false };

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
        <Navigation />
        {/**ABOUT SECTION */}
        <Container fluid className="boxShadowed">
          <Container>
            <Row style={{ display: "flex", justifyContent: "center" }}>
              <Image
                style={{ alignSelf: "center" }}
                fluid
                className="main-graphic parallax"
                src={require("../homepage/images/innovationstudio.png")}
              />
            </Row>
            <Row
              style={{
                paddingTop: "10%",
                fontFamily: "Lora, serif",
                justifyContent: "center",
              }}
            >
              <h1>Under construction. Check back soon.</h1>
            </Row>
          </Container>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default InnovationStudio;
