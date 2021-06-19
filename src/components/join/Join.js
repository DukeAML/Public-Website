import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Redirect, Link } from 'react-router-dom';
import Footer from '../tools/Footer';
import './Join.scss';
import Navigation from '../tools/Navigation';
const Logo = require('../homepage/images/DAML_Picture_Grey_Transparent.svg');

class Join extends React.Component {
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
            <Row
              className="vertical-align-outer"
              style={{
                fontFamily: 'Lora',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '5%',
              }}>
              <h2>Join the Team!</h2>
            </Row>
            <Row
              className="vertical-align-outer"
              style={{
                fontFamily: 'Lora',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <p
                style={{
                  width: '50%',
                  textAlign: 'center',
                }}>
                Hello all potential members! DAML is Duke’s premier project
                based tech organization that will give you real world experience
                in Data Science, Software Engineering, Hardware, or Product
                Management. We are proud to be a fully inclusive group and are
                happy to match anyone who completes the recruitment process to a
                project team in their desired division. To get involved, fill
                our the application below and see the Coursework and Recruitment
                Process document for more details on the role of your choice.
              </p>
            </Row>
            <Row
              className="vertical-align-outer"
              style={{
                fontFamily: 'Lora',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <a href="https://airtable.com/shrR4Iieze85aKSPw" target="_blank">
                Apply here!
              </a>
            </Row>
            <Row
              className="vertical-align-outer"
              style={{
                fontFamily: 'Lora',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <a
                href="https://docs.google.com/document/d/13-YqVrUoSSp2D3UTrsAtcEYgufqRBrxBb6Ktf-PjODE/edit?usp=sharing"
                target="_blank">
                Coursework and Recruitment Process
              </a>
            </Row>
          </Container>
        </Container>
        <Container fluid className="boxShadowed">
          <Container>
            <Row
              className="vertical-align-outer"
              style={{
                fontFamily: 'Lora',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0%',
              }}>
              <h2>About the Divisions</h2>
            </Row>
            <Row
              className="vertical-align-outer"
              style={{
                fontFamily: 'Lora',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Col
                md={4}
                sm={4}
                style={{
                  fontFamily: 'Lora',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '5%',
                }}>
                <b>Division</b>
              </Col>
              <Col
                md={4}
                sm={4}
                style={{
                  fontFamily: 'Lora',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                Description
              </Col>
              <Col
                md={4}
                sm={4}
                style={{
                  fontFamily: 'Lora',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '5%',
                }}>
                Point of Contact
              </Col>
            </Row>
            <Row
              className="vertical-align-outer"
              style={{
                fontFamily: 'Lora',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '20vh',
              }}>
              <Col
                md={4}
                sm={4}
                style={{
                  fontFamily: 'Lora',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '5%',
                }}>
                <b>Data Science</b>
              </Col>
              <Col
                md={4}
                sm={4}
                style={{
                  fontFamily: 'Lora',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                The Data Science division focuses on leveraging different data
                science techniques and machine learning concepts to solve real
                world problems.
              </Col>
              <Col
                md={4}
                sm={4}
                style={{
                  fontFamily: 'Lora',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '5%',
                  textAlign: 'center',
                }}>
                <a href="mailto:nicholas.hobart@duke.edu">Niko Hobart</a>
              </Col>
            </Row>
            <Row
              className="vertical-align-outer"
              style={{
                fontFamily: 'Lora',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '20vh',
              }}>
              <Col
                md={4}
                sm={4}
                style={{
                  fontFamily: 'Lora',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '5%',
                }}>
                <b>Software engineering</b>
              </Col>
              <Col
                md={4}
                sm={4}
                style={{
                  fontFamily: 'Lora',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                The Software Engineering division works on a number of different
                software related projects for real clients ranging from mobile
                development to this very website.
              </Col>
              <Col
                md={4}
                sm={4}
                style={{
                  fontFamily: 'Lora',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '5%',
                  textAlign: 'center',
                }}>
                <a href="mailto:yasa.baig@duke.edu">Yasa Baig</a>&nbsp; & &nbsp;
                <a href="mailto:nathaniel.friedman@duke.edu">
                  {' '}
                  Nathaniel Friedman
                </a>
              </Col>
            </Row>
            <Row
              className="vertical-align-outer"
              style={{
                fontFamily: 'Lora',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '20vh',
              }}>
              <Col
                md={4}
                sm={4}
                style={{
                  fontFamily: 'Lora',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '5%',
                }}>
                <b>Hardware</b>
              </Col>
              <Col
                md={4}
                sm={4}
                style={{
                  fontFamily: 'Lora',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                The Hardware Engineering division focuses on innovative
                solutions to different problems utilizing electrical and
                computer engineering.
              </Col>
              <Col
                md={4}
                sm={4}
                style={{
                  fontFamily: 'Lora',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '5%',
                  textAlign: 'center',
                }}>
                <a href="wyatt.focht@duke.edu">Wyatt Focht</a>
              </Col>
            </Row>
            <Row
              className="vertical-align-outer"
              style={{
                fontFamily: 'Lora',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '20vh',
              }}>
              <Col
                md={4}
                sm={4}
                style={{
                  fontFamily: 'Lora',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '5%',
                }}>
                <b>Product Management</b>
              </Col>
              <Col
                md={4}
                sm={4}
                style={{
                  fontFamily: 'Lora',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                Product Managers at DAML each scope and lead a project, starting
                from the beginning stages all the way to completion. Product
                managers are essential to keeping projects on track and scoping
                the vision of each product.
              </Col>
              <Col
                md={4}
                sm={4}
                style={{
                  fontFamily: 'Lora',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '5%',
                  textAlign: 'center',
                }}>
                <a href="mailto:jamila.otieno@duke.edu">Jamila Otieno</a>&nbsp;
                & &nbsp;<a href="mailto:joshua.boss@duke.edu">Josh Boss</a>
              </Col>
            </Row>
          </Container>
        </Container>
        <Container fluid className="boxShadowed">
          <Container>
            <Row
              className="vertical-align-outer"
              style={{
                fontFamily: 'Lora',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '5%',
              }}>
              <h2>About the Process</h2>
            </Row>
            <Row
              className="vertical-align-outer"
              style={{
                fontFamily: 'Lora',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              Your first step will be completing one of the introductory courses
              that we have. This is to ensure everyone has the baseline
              understanding. From there, you'll have a brief interview with our
              team, and then we'll get you onboarded to the team in which you'll
              be able to see all the available projects and then will be put on
              a team and get working.
            </Row>
            <Row
              className="vertical-align-outer"
              style={{
                fontFamily: 'Lora',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '5%',
              }}>
              <h2>Course Schedule</h2>
            </Row>
            <Row
              className="vertical-align-outer"
              style={{
                fontFamily: 'Lora',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              All courses are asynchronous. The material is available for access
              year-round. However, if you are taking this course during Fall or
              Spring semester (as opposed to over winter or summer break), the
              instructors will have office hours at least once a week. You may
              complete the course on whatever timeline your schedule permits.
              Any deadlines listed on the website are simply guidelines for
              those who would like to take the course on approximately over the
              course of one (shortened) semester. Assignments/projects
              associated with the lecture material should be completed or at
              least attempted before moving on the next lecture.
            </Row>
            <Row
              className="vertical-align-outer"
              style={{
                fontFamily: 'Lora',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '5%',
              }}>
              <h2>Final Deliverables</h2>
            </Row>
            <Row
              className="vertical-align-outer"
              style={{
                fontFamily: 'Lora',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              When you finish the course you’re interested in, you will complete
              a project showcasing all that you’ve learned! We’d like the
              project to be something you enjoy, so we’re going to leave it
              pretty open-ended for right now. For PMs, this will be a Product
              Evaluation, for HWEs, this will be a cool, simple device, for SWEs
              this can be any interesting application, site, data base, etc. and
              for Data Scientists, this could be anything from demonstrating
              your understanding of a proof of an important mathematical theorem
              in ML, to doing exploratory analysis with a data set you think is
              cool. Pick a project that is similar in spirit to a DAML project
              you’d be excited to work on. You’ll present your project to the
              Exec team as a kind of interview for joining the project teams!
              When you are ready to present a deliverable to the exec team, sign
              up for an interview here.
            </Row>
            <Row
              className="vertical-align-outer"
              style={{
                fontFamily: 'Lora',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '5%',
              }}>
              <h2>Advice</h2>
            </Row>
            <Row
              className="vertical-align-outer"
              style={{
                fontFamily: 'Lora',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              We hope you take these courses seriously, but not too seriously.
              This should be something you want to do, not something that weighs
              on your mental health. If you have questions, ask! If you feel
              lost, then everyone else is probably lost too. We take pride in
              making these dense subjects fun and (as much as possible) easy to
              learn. So work hard, because it will pay off (trust us) but don’t
              doubt yourself if you get stuck or you need some extra help. This
              stuff is hard. In short - we’re excited and hope you are too. We’d
              like to keep it that way, while also teaching you all how to write
              badass algorithms to go out and save the world.
            </Row>
          </Container>
        </Container>
        {/**Tech for Equity SECTION */}
        <Container fluid className="boxShadowed">
          <Container>
            <Row
              className="vertical-align-outer"
              style={{
                fontFamily: 'Lora',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              Please email the contacts of the course you're interested in if
              you have any questions not covered below!
            </Row>
            <Row
              className="vertical-align-outer"
              style={{
                fontFamily: 'Lora',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '5%',
              }}>
              <h2>FAQ</h2>
            </Row>
            <Row
              className="vertical-align-outer"
              style={{
                fontFamily: 'Lora',
                display: 'flex',
                minHeight: '10vh',
              }}>
              <p>
                <b>Q:</b> Can I take more than one course?
                <br />
                <br />
                <b>A:</b> Yes! We encourage our members to contribute to their
                project teams in as many ways as possible.
              </p>
            </Row>
            <Row
              className="vertical-align-outer"
              style={{
                fontFamily: 'Lora',
                display: 'flex',
                minHeight: '10vh',
                paddingTop: '10%',
              }}>
              <p>
                <b>Q:</b> If I’m interested in PM and DS/SWE do I have to take
                both courses?
              </p>
              <br />
              <p>
                <b>A:</b> If you would like to be eligible for PM positions in
                addition to either DS or SWE positions, you need only complete
                the DS or SWE course (whichever one you were planning on) and
                then modify your final project to be demonstrative of both PM
                and (DS or SWE) skill sets.{' '}
              </p>
            </Row>
            <Row
              className="vertical-align-outer"
              style={{
                fontFamily: 'Lora',
                display: 'flex',
                minHeight: '10vh',
                paddingTop: '10%',
              }}>
              <p>
                <b>Q:</b> What if I already have in-depth DS/SWE/HWE/PM
                experience and feel that taking another course is overkill?
              </p>
              <br />
              <p>
                <b>A:</b> Those with significant technical experience may forgo
                the introductory track (coursework) and begin the recruitment
                process from the practical track (project-based "assessment").
                Once you have completed the practical track and interview, you
                may join a project team immediately! Details on the introductory
                and practical tracks for each division can be found at the link
                above.
              </p>
            </Row>
            <Row
              className="vertical-align-outer"
              style={{
                fontFamily: 'Lora',
                display: 'flex',
                minHeight: '10vh',
                paddingTop: '10%',
              }}>
              <p>
                <b>Q:</b> Can I work on a DAML project while I work through the
                introductory or practical track?
              </p>
              <br />
              <p>
                <b>A:</b> We ask that all students complete the practical track
                and interview for their division before joining a project team.
                Details on the introductory and practical tracks for each
                division can be found at the link above.
              </p>
            </Row>
            <Row
              className="vertical-align-outer"
              style={{
                fontFamily: 'Lora',
                display: 'flex',
                minHeight: '10vh',
                paddingTop: '10%',
              }}>
              <p>
                <b>Q:</b> When can I begin this process?
              </p>
              <br />
              <p>
                <b>A:</b> Anytime! While we may not be conducting interviews
                during certain time periods, the coursework is always available
                for viewing, and DAML teams work on projects year-round.{' '}
              </p>
            </Row>
          </Container>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Join;
