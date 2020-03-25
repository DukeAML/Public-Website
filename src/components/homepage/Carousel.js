import React, { useState } from "react";
import { Carousel, Row, Container } from "react-bootstrap";
import { getNews } from "../../api/api";

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
        <Container fluid style={{ width: "0%" }}>
          <Row style={{ padding: "2rem" }}>
            <img src={DtcLogo} />
          </Row>
          <Row>
            <h3>{news.title}</h3>
            <p>{news.description}</p>
          </Row>
        </Container>
      </Carousel.Item>
    ));

    return (
      <Carousel activeIndex={this.state.index} onSelect={this.handleSelect}>
        {slides}
      </Carousel>
    );
  }
}

export default CustomCarousel;
