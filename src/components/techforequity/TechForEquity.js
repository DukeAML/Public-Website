import React from 'react';
import { Container, Row, Col, Spinner, Button } from 'react-bootstrap';

import Navigation from '../tools/Navigation';
import Footer from '../tools/Footer';

import ProjectCard from './ProjectCard';
import withWindowDimensions from '../people/withWindowDimensions';
import PeopleRow from '../people/PeopleRow';

import { getTFEProjects, getTFEMembers, getTFEFellows } from '../../api/api.js';
const Logo = require('../homepage/images/techforequity.png');

class TechForEquity extends React.Component {
  state = {
    projects: [],
    loadingProjects: true,
    members: [],
    loadingMembers: true,
    fellows: [],
    loadingFellows: true,
  };

  componentDidMount = async () => {
    // Load and update projects
    const projects = await getTFEProjects();
    console.log(projects);
    this.setState({ projects: projects, loadingProjects: false });

    // Load, clean, and update member
    const members = await getTFEMembers();
    let pkey = {
      Headshot: 'Photo',
    };
    members.forEach((member) => {
      for (const [key, val] of Object.entries(member)) {
        member[pkey[key] || key] = val;
      }
    });
    this.setState({ members: members, loadingMembers: false });

    // Load, append, and update fellows
    const fellows = await getTFEFellows();

    // Projects as key value
    let projectTable = {};
    projects.forEach((project) => {
      projectTable[project.id] = project.Project_Title;
    });
    console.log(fellows);
    // Add project to user description
    fellows.forEach((fellow) => {
      for (const [key, val] of Object.entries(fellow)) {
        fellow[pkey[key] || key] = val;
      }
      fellow['Team'] = projectTable[fellow.Team[0]];
    });

    this.setState({ fellows: fellows, loadingFellows: false });
  };

  // From ../people/PeoplePage.js
  makePeopleGrid(people, window) {
    // determine number of people per row based on bootstrap screen breakpoints
    let cols;
    if (window >= 992) {
      // lg or xl; 4 people per row
      cols = 4;
    } else if (window >= 768) {
      // m; 4 people per row
      cols = 3;
    } else if (window >= 576) {
      // xs; 2 people per row
      cols = 2;
    } else {
      //xs; 1 person per row
      cols = 1;
    }

    const numRows = Math.ceil(people.length / cols);
    let rowArrays = [];

    // make each row, add details section below
    for (let i = 0; i < numRows * cols; i += cols) {
      rowArrays[i] = people.slice(i, i + cols);
    }

    let result = rowArrays.map((row, index) => (
      <PeopleRow people={row} key={index} />
    ));

    return this.state.loadingProjects ? (
      <div style={{ height: '10rem', padding: '3rem' }}>
        <Spinner animation="grow" size="md" />
      </div>
    ) : (
      result
    );
  }

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

    const memberGrid = this.makePeopleGrid(
      this.state.members,
      this.props.windowWidth,
    );

    const fellowGrid = this.makePeopleGrid(
      this.state.fellows,
      this.props.windowWidth,
    );

    const projectCards = this.state.projects.map((project, key) => (
      <Col lg={4} md={6} style={{ padding: '1rem' }}>
        <ProjectCard
          key={key}
          title={project.Organization}
          description={project.Project_Details}
          proj_title={project.Project_Title}
          fellows={project['Team Size']}
          position={project.Position}
          img={project.Picture}
          link={project.link}
          maxFellows={3} // Maximum number of fellows per project in this class
        />
        {/* <ProjectCard
          key={key}
          uid={project.uid}
          link={`/phoenix/${project.uid}`}
          title={project.title}
          description={project.description}
          img={project.imageLink}
        /> */}
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
                    src={Logo}
                    alt="Tech For Equity"
                    style={{ height: '15rem', margin: '2rem' }}
                  />
                </Col>
                <Col lg={8} sm={12} align="left">
                  <div className="title"> Tech For Equity </div>
                  <p>
                    The Tech for Equity Fellowship, an initiative by Duke
                    Applied Machine Learning, is a student-run summer internship
                    program that aims to bridge the gap between student
                    technologists and non-profit organizations. The program
                    provides Duke students with the opportunity to engage with
                    community-based organizations, develop tech-driven solutions
                    to pressing social issues, and connect with
                    tech-for-social-change leaders at the ACLU, Vera Institute
                    of Justice, and more.
                    <br />
                    <br />
                    2021 Fellowship Dates: May 24 - July 30, 2021
                    <br />
                    <br />
                    The Application for the 2021 Fellowship is now closed. Be
                    sure to out for new opportunities during the school year and
                    future summers!
                    <br />
                    <br />
                    <Button
                      className="theme-button"
                      style={{
                        marginBottom: '1rem',
                        backgroundColor: '#2e755d',
                      }}>
                      <a
                        href="https://techforequityinitiative.substack.com/"
                        target="_blank"
                        style={{ color: 'white' }}>
                        {' '}
                        Subscribe to our Newsletter!
                      </a>
                    </Button>
                  </p>
                  <br />
                </Col>
              </Row>
              <div className="title"> 2021 Projects </div>
              <br />
            </center>

            <Row
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}>
              {this.state.loadingProjects ? (
                <div
                  style={{ height: '10rem', padding: '10rem', margin: 'auto' }}>
                  <Spinner animation="grow" size="md" />
                </div>
              ) : (
                projectCards
              )}
            </Row>
          </Container>

          <br />
          <Container>
            <center className="title"> Team Members </center>
            <hr />
          </Container>

          <br />
          <center style={{ width: '100vw', padding: 0, margin: 0 }}>
            {memberGrid}
          </center>

          <br />
          <br />
          <Container>
            <center className="title"> Fellows </center>
            <hr />
          </Container>
          <br />
          <center style={{ width: '100vw', padding: 0, margin: 0 }}>
            {fellowGrid}
          </center>

          <br />
          <Container>
            <center className="title"> Sponsors </center>
            <br />
            <center> A huge thank you to all of our sponsors! </center>
            <br />
            <div
              class="row"
              style={{ display: 'flex', justifyContent: 'center' }}>
              <div class="column">
                <center>
                  <img
                    src="https://res.cloudinary.com/drrvlrtpl/image/upload/v1611431645/dara-logo_yf39z1.png"
                    width="175"
                    style={{ marginRight: '20px' }}></img>
                  <img
                    src="https://res.cloudinary.com/drrvlrtpl/image/upload/v1611437088/duke-law-logo_sia7tq.png"
                    width="375"></img>
                </center>
              </div>
            </div>
            <br />
            <div
              class="row"
              style={{ display: 'flex', justifyContent: 'center' }}>
              <div class="column">
                <img
                  src="https://res.cloudinary.com/drrvlrtpl/image/upload/v1611438310/duke_comp_sci_logoo_stetec.png"
                  width="230"
                  style={{ marginRight: '20px' }}></img>
              </div>
              <div class="column">
                <img
                  src="https://res.cloudinary.com/drrvlrtpl/image/upload/v1611438033/p_rgft4c.png"
                  width="175"
                  style={{ marginRight: '20px' }}></img>
              </div>
              <div class="column">
                <img
                  src="https://res.cloudinary.com/drrvlrtpl/image/upload/v1611437210/i_elogo-original_kelbsl.png"
                  width="300"></img>
              </div>
            </div>
          </Container>

          <Footer style={{ margin: '2rem 0 0 0' }} />
        </Container>
      </div>
    );
  }
}
export default withWindowDimensions(TechForEquity);
