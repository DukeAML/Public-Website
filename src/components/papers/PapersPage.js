import React from 'react';
import {
  Col, Container,
  Row, Spinner
} from 'react-bootstrap';

import withWindowDimensions from '../people/withWindowDimensions';
import Footer from '../tools/Footer';
import Navigation from '../tools/Navigation';
import PaperCard from './PaperCard';

import { getPapers } from '../../api/api';

class PapersPage extends React.Component {
  state = { papers: [], loading: true };

  componentDidMount = async () => {
    const papers = await getPapers();
    this.setState({ papers: papers, loading: false });
  };

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

    const papers = this.state.papers.map((paper, key) => (
      <Col lg={8} md={10} style={{ padding: '1rem' }}>
        <PaperCard
          key={key}
          link={paper.url}
          title={paper.title}
          publicationDate={paper.publicationDate}
          authorFirstName={paper.authorFirstName}
          authorLastName={paper.authorLastName}
          abstract={paper.abstract}
        />
      </Col>
    ));

    return (
      <div>
        <Navigation />
        <Container fluid style={{ padding: 0 }}>
          <Container style={{ minHeight: '80vh', padding: `0 ${padding}%` }}>
            <center>
              <div className="title"> ML Papers </div>
            </center>
            <Row
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}>
              {this.state.loading ? (
                <div style={{ height: '10rem', padding: '3rem' }}>
                  <Spinner animation="grow" size="md" />
                </div>
              ) : (
                papers
              )}
            </Row>
          </Container>
          <Footer style={{ margin: '2rem 0 0 0' }} />
        </Container>
      </div>
    );
  }
}

export default withWindowDimensions(PapersPage);
