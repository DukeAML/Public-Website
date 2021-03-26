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
        <Container
          style={{ borderTop: "2px black" }}
          fluid
          className="boxShadowed"
        >
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
                  padding: "5%",
                }}
              >
                The Phoenix Project was launched in the Summer of 2020 to meet
                the growing facet of students who lost opportunities due to
                COVID-19 as the US Economy lost 22.4 Million and hundreds of
                Duke students lost jobs and internships along with them. We
                brought together 200 Duke students and 73 paying companies,
                organizations, and sponsors to deliver an opportunity for both
                businesses and students to progress in a world that felt stuck.
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
                    width="70%"
                  />
                  <h3 style={{ paddingTop: "25%" }}>
                    Check Out the Phoenix Project Here{" "}
                  </h3>
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
                  <img style={{ paddingLeft: "10%"}}
                    alt="Innovation Studio" 
                    src={require("../homepage/images/innovationstudio.png")}
                    width="70%"
                  />
                  <h3 style={{ paddingTop: "15%", paddingLeft: "5%" }}>
                    Read More About Innovation Studio
                  </h3>
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
                  padding: "5%",
                }}
              >
                DAML's Innovation Studio is an effort to help Duke Student
                founded businesses go from 0 to 1 by providing engineering
                support, product and business development support, and
                opportunities for funding. If you are interested in bringing
                your business into the Studio or you're an engineer/product
                manager who is interested in getting involved, click on the
                logo.
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
                  padding: "5%",
                }}
              >
                Tech for Equity is an initiative started by a group of DAMLers
                that is focused on providing Engineering support to non-profits.
                If you are a non-profit interested in partnering with us, click
                to the right. We also would love to have more applicants and it
                is not limited to Duke students, so apply to the right!
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
                  <img style={{ paddingRight: "5%" }}
                    alt="Tech for Equity"
                    src={require("../homepage/images/techforequity.png")}
                    width="70%"
                  />
                  <h3 style={{ paddingTop: "23%" }}>
                    Check out Tech for Equity Here
                  </h3>
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
