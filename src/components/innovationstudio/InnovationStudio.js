import React from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import { Accordion, Icon } from 'semantic-ui-react';
import withWindowDimensions from '../people/withWindowDimensions';
import Footer from '../tools/Footer';
import Navigation from '../tools/Navigation';
import EmbeddedForm from './EmbeddedForm';
import {
  companyForm,
  studentForm
} from './faq';
const Logo = require('../homepage/images/innovationstudio.png');

class PhoenixProjectPage extends React.Component {
  state = { activeIndex: [1, 4], files: [] };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex.includes(index)
      ? activeIndex.filter((i) => i != index)
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
            minHeight: '95vh',
            padding: `0 ${padding}% 8rem ${padding}%`,
            fontfamily: 'Nora',
          }}>
          <Row style={{ marginTop: 20 }}>
            <Col lg={4} sm={12} style={{ width: '100%' }}>
              <div style={{ display: 'flex' }}>
                <img
                  src={Logo}
                  alt="Innovation Studio Logo"
                  style={{ height: '15rem', margin: 'auto', marginTop: '1rem' }}
                />
              </div>
            </Col>
            <Col lg={8} sm={12} align="left">
              <div className="title"> DAML Innovation Studio </div>
              <p>
                The Innovation Studio is a Duke Applied Machine Learning (DAML)
                initiative to provide Duke Student entrepreneurs who seek to
                develop novel businesses and innovations with the necessary
                platform and support system to enable success in their venture.
                We are partnered with Duke I&E and other on-campus
                organizations, such as DTech and Contrary Capital, to create a
                great community to help founders capitalize on their ideas.
                <br />
                <br />
                Ultimately, the goal is to take an innovative idea sourced from
                the Duke community and provide the engineering talent and
                business-side support to launch a pilot by the end of the
                program, setting you on the path to scale and secure funding.
              </p>
              <br />
            </Col>
          </Row>

          <div style={{ marginTop: '1rem' }}>
            <Accordion>
              <Accordion.Title
                active={activeIndex.includes(1)}
                index={1}
                onClick={this.handleClick}>
                <Icon name="dropdown" />
                <span className="Phoenix-header">
                  When is this?
                  <hr />
                </span>
              </Accordion.Title>
              <Accordion.Content active={activeIndex.includes(1)}>
                The Innovation Studio takes places throughout a semester-long
                cohort every Spring, with our first cohort in Spring 2021.
                Applications for the upcoming cohort will close November 18th.
                We’ll have an information session coming up on November 1st and
                a pitch deck workshop early-to-mid November (date TBD).
              </Accordion.Content>

              <Accordion.Title
                active={activeIndex.includes(2)}
                index={2}
                onClick={this.handleClick}>
                <Icon name="dropdown" />
                <span className="Phoenix-header">
                  I’m a start-up or student with an idea. What’s next?
                  <hr />
                </span>
              </Accordion.Title>
              <Accordion.Content active={activeIndex.includes(2)}>
                Fill out this{' '}
                <a target="_blank" href="http://bit.ly/DukeFounders">
                  form
                </a>{' '}
                and a member of our executive committee will reach out for
                interviews and next steps.
                <Row style={{ justifyContent: 'center' }}>
                  <Col xs={12} xl={10}>
                    <EmbeddedForm questions={companyForm} />
                  </Col>
                </Row>
              </Accordion.Content>

              <Accordion.Title
                active={activeIndex.includes(3)}
                index={3}
                onClick={this.handleClick}>
                <Icon name="dropdown" />
                <span className="Phoenix-header">
                  I’m an engineer and I want to get involved. What’s next?
                  <hr />
                </span>
              </Accordion.Title>

              <Accordion.Content active={activeIndex.includes(3)}>
                Please fill out this{' '}
                <a target="_blank" href="https://bit.ly/DukeEngineerPM">
                  form
                </a>{' '}
                to indicate your interest in Innovation Studio.
                <Row style={{ justifyContent: 'center' }}>
                  <Col xs={12} xl={10}>
                    <EmbeddedForm questions={studentForm} />
                  </Col>
                </Row>
              </Accordion.Content>

              <Accordion.Title
                active={activeIndex.includes(4)}
                index={4}
                onClick={this.handleClick}>
                <Icon name="dropdown" />
                <span className="Phoenix-header">
                  Where can I learn more?
                  <hr />
                </span>
              </Accordion.Title>

              <Accordion.Content active={activeIndex.includes(4)}>
                If you have questions beyond what is covered on this page,
                please email{' '}
                <a href="mailto:choonghwan.lee@duke.edu">
                  choonghwan.lee@duke.edu
                </a>
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
