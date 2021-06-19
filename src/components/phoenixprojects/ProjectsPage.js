import React from 'react';
import {
  Container,
  Row,
  Col,
  Accordion,
  Spinner,
  Jumbotron,
  Table,
  td,
  thead,
  tr,
  Button,
  Card,
} from 'react-bootstrap';

import Navigation from '../tools/Navigation';
import Footer from '../tools/Footer';
import ProjectCard from '../projects/ProjectCard';
import withWindowDimensions from '../people/withWindowDimensions';
const PhoenixLogo = require('./phoenix.png');

const projects = require('./projectsData');
console.log(projects, 'asds');

class ProjectsPage extends React.Component {
  render() {
    let window = this.props.windowWidth;
    let padding;

    // dynamically determine left and right padding around projects grid
    if (window >= 992) {
      // lg or xl
      padding = 5;
    } else if (window >= 768) {
      // m
      padding = 10;
    } else if (window >= 576) {
      // s
      padding = 10;
    } else {
      // xs
      padding = 10;
    }

    const projectCards = projects.map((project, key) => (
      <Col lg={4} md={6} style={{ padding: '1rem' }}>
        {/*<ProjectCard
          key={key}
          title={project.title}
          description={project.shortDescription}
          img={project.image}
          link={project.link}
        />*/}
        <ProjectCard
          key={key}
          uid={project.uid}
          link={`/phoenix/${project.uid}`}
          title={project.title}
          description={project.description}
          img={project.imageLink}
        />
      </Col>
    ));

    return (
      <div>
        <Navigation />
        <Container fluid style={{ padding: 0 }}>
          <Container style={{ minHeight: '85vh', padding: `0 ${padding}%` }}>
            <center>
              <Row style={{ marginTop: 20 }}>
                <Col lg={4} sm={12}>
                  <img
                    src={PhoenixLogo}
                    alt="The Phoenix Project"
                    style={{ height: '15rem', margin: '2rem' }}
                  />
                </Col>
                <Col lg={8} sm={12} align="left">
                  <div className="title"> The Phoenix Project </div>
                  <p>
                    <b>
                      The Phoenix Project will be running again in Summer 2021!
                    </b>
                    <br />
                    <br />
                    The Duke University Phoenix Project brought together 200
                    Duke students who had recently lost internships to work on
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
                </Col>
              </Row>
              <div className="title"> Projects </div>
            </center>

            <Row
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}>
              {projectCards}
            </Row>
          </Container>
          <Footer style={{ margin: '2rem 0 0 0' }} />
        </Container>
      </div>
    );
  }
}

export default withWindowDimensions(ProjectsPage);
