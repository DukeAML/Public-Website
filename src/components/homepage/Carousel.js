import React, { useState } from "react";
import { Carousel, Row, Container, Col } from "react-bootstrap";
import { getNews } from "../../api/api";
import "./HomePage.scss";
import { Link } from "react-router-dom";

const DtcLogo = require("./dtc-logo-tag.png");

class CustomCarousel extends React.Component {
  state = { index: 0, news: [] };

  componentDidMount = async () => {
    const news = await getNews();
    this.setState({ news: news });
    console.log(this.state);
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
              <a
                target="_blank"
                href="https://www.dukechronicle.com/"
                className="carouselLink"
              >
                {news.title}
              </a>
            </h3>
            <p>{news.description}</p>
          </Row>
        </Container>
      </Carousel.Item>
    ));

    return (
      <Container fluid style={{ width: "100%", justifyContent: "center" }}>
        <center>
          <Carousel activeIndex={this.state.index} onSelect={this.handleSelect}>
            {slides}
          </Carousel>
        </center>
      </Container>
    );
  }
}

export default CustomCarousel;
