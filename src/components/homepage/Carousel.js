import React, { useState } from 'react';
import { Carousel, Row, Container, Col, Spinner, Card } from 'react-bootstrap';
import { getNews } from '../../api/api';
import './HomePage.scss';
import { Link } from 'react-router-dom';

const DtcLogo = require('./dtc-logo-tag.png');

class CustomCarousel extends React.Component {
  state = { index: 0, news: [], loading: true };

  componentDidMount = async () => {
    // Currently our news endpoint doesn't serve anything meaningful
    // In the future we want to move this content to the CDN but rn
    // It is just stored statically here
    //const news = await getNews();

    const news = [
      {
        title: 'Looking for a full-time tech internship this summer?',
        img: {
          alt: 'Phoenix Project Logo',
          src: require('../homepage/images/phoenix.png'),
        },
        body: 'The Phoenix Project is running again summer 2023 and the applications are now!',
        links: [
          {
            text: 'Apply here',
            value: 'https://airtable.com/shrU5TWqjCCFRlu77',
          },
        ],
      },
      {
        title:
          "DAML's Innovation Studio is excited to introduce their Spring 2021 Cohort!",
        img: {
          alt: 'Innovation Studio',
          src: require('../homepage/images/innovationstudio.png'),
        },
        body: 'Also check out a progress update and learn more about their upcoming Demo Day!!',
        links: [
          {
            text: 'Spring cohort',
            value:
              'https://medium.com/aml-group/introducing-the-duke-innovation-studio-spring-21-cohort-7739551c3511',
          },
          {
            text: 'demo day!',
            value:
              'https://dukeinnovationstudio.medium.com/duke-innovation-studio-spring-21-cohort-progress-updates-7e4075aee0c',
          },
        ],
      },
      {
        title:
          'The Phoenix Project: Hundreds of Duke students have lost internships. Now they’re creating their own.',
        img: {
          alt: 'Phoenix Project',
          src: require('../homepage/images/phoenix.png'),
        },
        body: 'Read more about the Phoenix Project!',
        links: [
          {
            text: 'Here',
            value:
              'https://www.newsobserver.com/news/business/article242197741.html',
          },
          {
            text: 'here!',
            value:
              'https://pratt.duke.edu/about/news/phoenix-project-delivers-data-rich-summer-opportunities',
          },
        ],
      },
    ];

    this.setState({ news: news, loading: false });
  };

  handleSelect = (selectedIndex, e) => {
    this.setState({ index: selectedIndex });
  };

  render() {
    let slideStyle = {
      backgroundColor: '#fff',
      border: '1px solid #a4a4a4',
      borderRadius: '6px',
      padding: '1.2rem',
      height: '100%',
      width: '70%',
      textAlign: 'left',
      lineHeight: 0.8,
    };

    const slides = this.state.news.map((news, index) => (
      <Carousel.Item style={{ height: '11rem' }}>
        <Container style={slideStyle}>
          <Row height="wrap-content">
            <Col className="d-none d-md-block align-middle" md={3} lg={2}>
              <img alt={news.img.alt} src={news.img.src} width="80%" />
            </Col>
            <Col md={9} xs={12} class="align-middle">
              <p style={{ color: '#617489' }}>
                <b>{news.title}</b>
              </p>
              <br />
              <p style={{ color: '#617489' }}>{news.body}</p>
              <br />
              <div>
                {news.links.map((link, idx) => (
                  <a>
                    {idx > 0 && <a> and </a>}
                    <a color="#7c9fd6" href={link.value}>
                      {link.text}
                    </a>
                  </a>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </Carousel.Item>
    ));

    return (
      <Container
        fluid
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'middle',
        }}>
        <center>
          {this.state.loading ? (
            <Spinner animation="grow" size="lg" style={{ margin: '2rem' }} />
          ) : (
            <Carousel>{slides}</Carousel>
          )}
        </center>
      </Container>
    );
  }
}

export default CustomCarousel;
