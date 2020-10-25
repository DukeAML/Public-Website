import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Redirect, Link } from "react-router-dom";
import Footer from "../tools/Footer";
import "./Initiatives.scss";
import Navigation from "../tools/Navigation";

class Initiatives extends React.Component {
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
        {/**PHOENIX SECTION */}
        <Container fluid className="boxShadowed">
          <Container>
            <Row className="vertical-align-outer">
              <Col
                md={6}
                sm={12}
                style={{
                  fontFamily: "Lora",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                PHOENIX!!!!!
              </Col>
              <Col
                md={6}
                sm={12}
                style={{
                  fontFamily: "Lora",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Link to="/thephoenixproject" style={{ textAlign: "center" }}>
                  <img
                    alt="Home"
                    src={require("../homepage/images/phoenix.png")}
                    width="100%"
                  />
                  <h3 style={{ paddingTop: "10%" }}>Check it out</h3>
                </Link>
              </Col>
            </Row>
          </Container>
        </Container>
        {/**INNOVATION STUDIO SECTION */}
        <Container fluid className="boxShadowed">
          <Container>
            <Row className="vertical-align-outer">
              <Col
                md={6}
                sm={12}
                style={{
                  fontFamily: "Lora",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Link to="/innovationstudio" style={{ textAlign: "center" }}>
                  <img
                    alt="Innovation Studio"
                    src={require("../homepage/images/innovationstudio.png")}
                    width="100%"
                  />
                  <h3 style={{ paddingTop: "10%" }}>Check it out</h3>
                </Link>
              </Col>
              <Col
                md={6}
                sm={12}
                style={{
                  fontFamily: "Lora",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Innovation Studio!!!!!
              </Col>
            </Row>
          </Container>
        </Container>
        {/**Tech for Equity SECTION */}
        <Container fluid className="boxShadowed">
          <Container>
            <Row className="vertical-align-outer">
              <Col
                md={6}
                sm={12}
                style={{
                  fontFamily: "Lora",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Tech for Equity!!!!!
              </Col>
              <Col
                md={6}
                sm={12}
                style={{
                  fontFamily: "Lora",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Link to="/techforequity" style={{ textAlign: "center" }}>
                  <img
                    alt="Tech for Equity"
                    src={require("../homepage/images/techforequity.png")}
                    width="100%"
                  />
                  <h3 style={{ paddingTop: "10%" }}>Check it out</h3>
                </Link>
              </Col>
            </Row>
          </Container>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Initiatives;
