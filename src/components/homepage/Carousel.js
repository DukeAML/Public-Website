import React, { useState } from "react";
import { Carousel, Row, Container, Col } from "react-bootstrap";
import { getNews } from "../../api/api";
import "./HomePage.scss";

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
          <Col xs={10} style={{ padding: "2rem 0" }}>

          </Col>
          <Row>
            
            <h3>{news.title}</h3>
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
