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
            <Carousel
              activeIndex={this.state.index}
              onSelect={this.handleSelect}
              style={{ alignItems: "top" }}
            >
              <div>
                <p>Hundreds of Duke students have lost internships. Now they’re creating their own.</p>
                <a href="https://www.newsobserver.com/news/business/article242197741.html">Read more about the Phoenix Project here!</a>
                <br/>
                <a href="https://pratt.duke.edu/about/news/phoenix-project-delivers-data-rich-summer-opportunities">and here</a>
              </div>
            </Carousel>
          )}
          
        </center>  
      </Container>
    );
  }
}

export default CustomCarousel;


