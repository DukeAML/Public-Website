import React from "react";

import Navigation from "../tools/Navigation";
import Footer from "../tools/Footer";
import { Dropdown, Accordion, Icon } from "semantic-ui-react";
import { Col, Row, Container } from "react-bootstrap";
import withWindowDimensions from "../people/withWindowDimensions";
import {
  companyForm,
  studentForm,
  mentorForm,
  projectAssistantForm
} from "./faq";
import EmbeddedForm from "./EmbeddedForm";

const PhoenixLogo = require("./phoenix.png");

class PhoenixProjectPage extends React.Component {
  state = { activeIndex: [1] };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex.includes(index)
      ? activeIndex.filter(i => i != index)
      : [...activeIndex, index];

    console.log(newIndex);

    this.setState({ activeIndex: [...newIndex] });
  };

  render() {
    let window = this.props.windowWidth;
    let padding;
    const { activeIndex } = this.state;

    // dynamically determine left and right padding around projects grid
    if (window >= 992) {
      // lg or xl
      padding = 20;
    } else if (window >= 768) {
      // m
      padding = 10;
    } else if (window >= 576) {
      // s
      padding = 5;
    } else {
      // xs
      padding = 5;
    }

    return (
      <div>
        <Navigation />
        <Container
          fluid
          style={{
            minHeight: "95vh",
            padding: `0 ${padding}% 8rem ${padding}%`,
            fontfamily: "Nora"
          }}
        >
          <center>
            <div className="title"> The Phoenix Project </div>
            <img
              src={PhoenixLogo}
              alt="The Phoenix Project"
              style={{ height: "15rem", margin: "2rem" }}
            />{" "}
          </center>

          <div style={{ marginTop: "1rem" }}>
            <Accordion>
              <Accordion.Title
                active={activeIndex.includes(1)}
                index={1}
                onClick={this.handleClick}
              >
                <Icon name="dropdown" />
                <span className="Phoenix-header">
                  What is this?
                  <hr />
                </span>
              </Accordion.Title>
              <Accordion.Content active={activeIndex.includes(1)}>
                <p>
                  The Duke University Phoenix Project brings together 150 Duke
                  students who have recently lost internships to work on
                  end-to-end technical solutions for companies during Summer
                  2020 (May 26-August 7).
                  <br />
                  <br />
                  This program supports students seeking a meaningful summer
                  experience despite the sudden cancellation of many programs
                  and internships. For companies, this program offers teams of
                  qualified Duke University students to work on valuable
                  projects related to data science or software engineering.
                </p>
              </Accordion.Content>
              <Accordion.Title
                active={activeIndex.includes(2)}
                index={2}
                onClick={this.handleClick}
              >
                <Icon name="dropdown" />
                <span className="Phoenix-header">
                  I’m a company. What’s next?
                  <hr />
                </span>
              </Accordion.Title>

              <Accordion.Content active={activeIndex.includes(2)}>
                Fill out this{" "}
                <a
                  target="_blank"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc0UBrKB02aci7Xq6jyPbZ6tgaxiMHC2XPrb7tYhBWCq8S-9w/viewform"
                >
                  non-binding form
                </a>{" "}
                and a member of our executive committee will reach out to answer
                your questions and discuss potential projects.
                <Row style={{ justifyContent: "center" }}>
                  <Col xs={12} xl={10}>
                    <EmbeddedForm questions={companyForm} />
                  </Col>
                </Row>
              </Accordion.Content>

              <Accordion.Title
                active={activeIndex.includes(3)}
                index={3}
                onClick={this.handleClick}
              >
                <Icon name="dropdown" />
                <span className="Phoenix-header">
                  I’m a student. What’s next?
                  <hr />
                </span>
              </Accordion.Title>

              <Accordion.Content active={activeIndex.includes(3)}>
                If you are a Duke University student, fill out this{" "}
                <a target="_blank" href="https://forms.gle/AL4e6cHgFraXADer8">
                  non-binding form
                </a>{" "}
                to apply to the program.
                <Row style={{ justifyContent: "center" }}>
                  <Col xs={12} xl={10}>
                    <EmbeddedForm questions={studentForm} />
                  </Col>
                </Row>
              </Accordion.Content>

              <Accordion.Title
                active={activeIndex.includes(4)}
                index={4}
                onClick={this.handleClick}
              >
                <Icon name="dropdown" />
                <span className="Phoenix-header">
                  I’m interested in being a mentor. What’s next?
                  <hr />
                </span>
              </Accordion.Title>

              <Accordion.Content active={activeIndex.includes(4)}>
                Fill out this{" "}
                <a target="_blank" href="https://forms.gle/fQitYLpusFqQhMjcA">
                  non-binding form
                </a>{" "}
                by May 1 and a member of our executive committee will reach out
                to you!
                <Row style={{ justifyContent: "center" }}>
                  <Col xs={12} xl={10}>
                    <EmbeddedForm questions={mentorForm} />
                  </Col>
                </Row>
              </Accordion.Content>

              <Accordion.Title
                active={activeIndex.includes(5)}
                index={5}
                onClick={this.handleClick}
              >
                <Icon name="dropdown" />
                <span className="Phoenix-header">
                  I’m interested in being a project assistant. What’s next?
                  <hr />
                </span>
              </Accordion.Title>

              <Accordion.Content active={activeIndex.includes(5)}>
                Fill out this{" "}
                <a target="_blank" href="https://forms.gle/URS8TWN79arPvN179">
                  non-binding form
                </a>{" "}
                by May 1 and a member of our executive committee will reach out
                to you!
                <Row style={{ justifyContent: "center" }}>
                  <Col xs={12} xl={10}>
                    <EmbeddedForm questions={projectAssistantForm} />
                  </Col>
                </Row>
              </Accordion.Content>

              <Accordion.Title
                active={activeIndex.includes(6)}
                index={6}
                onClick={this.handleClick}
              >
                <Icon name="dropdown" />
                <span className="Phoenix-header">
                  Where can I learn more?
                  <hr />
                </span>
              </Accordion.Title>

              <Accordion.Content active={activeIndex.includes(6)}>
                If you have questions beyond what is covered on this page,
                please email <a href="mailto: mmg53@duke.edu">mmg53@duke.edu</a>
              </Accordion.Content>
            </Accordion>
          </div>
        </Container>

        <Footer />
      </div>
    );
  }
}

export default withWindowDimensions(PhoenixProjectPage);
