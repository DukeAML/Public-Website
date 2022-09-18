import React from 'react';
import {
  Col, Container, Image, Row
} from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import Animation from '../canvas/Animation';
import Footer from '../tools/Footer';
import Navigation from '../tools/Navigation';
import AnimationWrapper from './AnimationWrapper.js';
import './HomePage.scss';
const DtcLogo = require('./dtc-logo-tag.png');

class HomePage extends React.Component {
  state = { redirect: false, showWIP: true };

  handleSignUpClick = () => {
    var link =
      'mailto:duke.applied.ml@gmail.com' +
      '?cc=duke.applied.ml@gmail.com' +
      '&subject=' +
      escape('Add me to the Newsletter!') +
      '&body=' +
      escape('This is the email to add.');
    window.location.href = link;
  };

  handleProjectsClick = () => {
    this.setState({ redirect: true });
  };

  handleWIPAlertClose = () => {
    this.setState({ showWIP: false });
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
        {/*{this.state.showWIP && (
          <Alert
            variant="warning"
            onClose={() => this.handleWIPAlertClose(false)}
            dismissible
            style={{
              textAlign: "center",
            }}
          >
            <Alert.Heading>
              Our website is currently under development!
            </Alert.Heading>
            <hr />
            <p>
              Different content on the site may not load. Come back later to
              check out the new design and content.
            </p>
          </Alert>
        )}
          */}
        {/**INTRODUCTION SECTION */}
        <Container fluid style={{ padding: 0 }}>
          <center>
            <Navigation center={true} />
          </center>

          <AnimationWrapper>
            <Col
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '60vh',
              }}>
              {/**Icon */}
              {/* PUT THE ANIMATION REF(IN CONSTRUCTOR) HERE*/}
              <Image
                fluid
                style={{ padding: 0 }}
                className="main-graphic parallax"
                src={require('./images/DAML_Full_Grey_Transparent.svg')}
              />
            </Col>
          </AnimationWrapper>
        </Container>
        {/**ABOUT SECTION */}
        <Container fluid className="boxShadowed">
          <Container>
            <Link to="/join">
              <Row
                className="vertical-align-outer"
                style={{
                  fontFamily: 'Lora',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: '#1e2c3a',
                }}>
                <p style={{ width: '50%' }}>
                  The <b>Duke Applied Machine Learning Group</b> is always
                  looking for smart and enthusiastic people, regardless of
                  experience. For most new applicants we will have a short
                  introductory course in Machine Learning, Software Engineering,
                  or Product Management. Following this, you will be placed in
                  your respective group and then placed on a project that fits
                  your interests and has people to balance your experience
                  level. DAML is a great way to get better at technical skills
                  as well as soft skills that will make you great at whatever
                  you do after. <b>Apply Here.</b>
                </p>
              </Row>
            </Link>
          </Container>
        </Container>
        {/**NEWS SECTION */}
        {/* <Container
          fluid
          className="boxShadowed"
          style={{
            backgroundColor: '#e6e7e870',
            color: '#1e2c3a',
          }}>
          <Container>
            <Row
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <h3 className="homepageTitle" style={{ marginBottom: '20px' }}>
                News
              </h3>
            </Row>
            <Row>
              <Col
                xs={12}
                style={{
                  fontFamily: 'Lora',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Carousel style={{ width: '100%' }} />
              </Col>
            </Row>
          </Container>
        </Container> */}

        {/**ABOUT SECTION */}
        <Container fluid className="boxShadowed">
          <Container>
            <Row
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <h3 className="homepageTitle" style={{ marginBottom: '20px' }}>
                About DAML
              </h3>
            </Row>
            <Row className="vertical-align-outer">
              <Col
                md={6}
                sm={12}
                style={{
                  fontFamily: 'Lora',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <p>
                  We are a group focused on <b>building, implementing, and deploying</b>{' '}
                  end-to-end machine learning models to solve research and
                  business problems. We establish collaborations with local
                  companies and organizations to identify and <b>solve challenges</b>{' '}
                  they face. Through collaboration with post-graduate, graduate,
                  and undergraduate students studying data science, mathematics,
                  computer science, business, electrical engineering and more,
                  we provide an <b>interdisciplinary approach</b> to solving
                  these problems.
                </p>
              </Col>
              <Col
                md={6}
                sm={12}
                style={{
                  fontFamily: 'Lora',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Animation />
              </Col>
            </Row>
          </Container>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default HomePage;
