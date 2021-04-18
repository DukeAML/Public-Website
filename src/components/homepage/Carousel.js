import React, { useState } from "react";
import { Carousel, Row, Container, Col, Spinner } from "react-bootstrap";
import { getNews } from "../../api/api";
import "./HomePage.scss";
import { Link } from "react-router-dom";

const DtcLogo = require("./dtc-logo-tag.png");

class CustomCarousel extends React.Component {
  state = { index: 0, news: [], loading: true };

  componentDidMount = async () => {
    const news = await getNews();

    this.setState({ news: news, loading: false });
  };

  handleSelect = (selectedIndex, e) => {
    this.setState({ index: selectedIndex });
  };

  render() {
    const slides = this.state.news.map((news, index) => (
      <Carousel.Item key={index}>
        <Container>
          <Row>
            <h3>
              <a target="_blank" href={news.webLink} className="carouselLink">
                {news.title}
              </a>
            </h3>
            <p>{news.description}</p>
          </Row>
        </Container>
      </Carousel.Item>
    ));

    return (
      <Container
        fluid
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "middle"
        }}
      >
        <center>
          {this.state.loading ? (
            <Spinner animation="grow" size="lg" style={{ margin: "2rem" }} />
          ) : (
            <Carousel>
              
              <Carousel.Item>
                <Carousel.Caption>
                  <img
                    alt="Home"
                    src={require("../homepage/images/phoenix.png")}
                    width="10%"
                  />
                  <center style={{ color: "#617489" }}>Looking for a full-time tech internship this summer?</center>
                  <br/>
                  <center style={{ color: "#617489" }}>
                    The Phoenix Project is running again summer 2021 and the applications are now
                    <a href="https://airtable.com/shrU5TWqjCCFRlu77"> LIVE!</a>
                    </center>
                    
                </Carousel.Caption>
              </Carousel.Item>
              
              <Carousel.Item>
                <Carousel.Caption>
                <img 
                    alt="Innovation Studio"
                    src={require("../homepage/images/innovationstudio.png")}
                    width="10%"
                  />
                  <center style={{ color: "#617489" }}>DAML's Innovation Studio is excited to introduce their
                  <a href="https://medium.com/aml-group/introducing-the-duke-innovation-studio-spring-21-cohort-7739551c3511"> Spring 2021 Cohort!</a>
                  </center>
                  <br/>
                  <center style={{ color: "#617489" }}>
                    Also check out a progress update and learn more about their upcoming Demo Day  
                    <a href="https://dukeinnovationstudio.medium.com/duke-innovation-studio-spring-21-cohort-progress-updates-7e4075aee0c1"> here!</a>
                    
                  </center>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <Carousel.Caption>
                <img
                  alt="Home"
                  src={require("../homepage/images/phoenix.png")}
                  width="10%"
                />
                  <center style={{ color: "#617489" }}>The Phoenix Project: Hundreds of Duke students have lost internships. Now they’re creating their own.</center>
                  <br/>
                  <center style={{ color: "#617489" }}>
                    Read more about The Phoenix Project 
                    <a href="https://www.newsobserver.com/news/business/article242197741.html"> here </a>
                    and 
                    <a href="https://pratt.duke.edu/about/news/phoenix-project-delivers-data-rich-summer-opportunities"> here!</a>
                  </center>  
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            
          )}
        </center>  
      </Container>
    );
  }
}

export default CustomCarousel;