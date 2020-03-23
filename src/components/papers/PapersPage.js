import React from "react";
import {
  Container,
  Row,
  Col,
  Spinner,
  Jumbotron,
  Table,
  td,
  thead,
  tr,
  Button,
  Card
} from "react-bootstrap";

import PaperCard from "./PaperCard";
import Navigation from "../tools/Navigation";
import Footer from "../tools/Footer";
import withWindowDimensions from "../people/withWindowDimensions";

import { getPapers } from "../../api/api";

class PapersPage extends React.Component {
  state = { papers: [] };

  componentDidMount = async () => {
    const papers = await getPapers();
    this.setState({ papers: papers });
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
      <Col lg={8} md={10} style={{ padding: "1rem" }}>
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
          <Container style={{ minHeight: "80vh", padding: `0 ${padding}%` }}>
            <center>
              <div className="title"> ML Papers </div>
            </center>
            <Row
              style={{
                display: "flex",
                justifyContent: "center"
              }}
            >
              {papers}
            </Row>
          </Container>
          <Footer style={{ margin: "2rem 0 0 0" }} />
        </Container>
      </div>
    );
  }
}

export default withWindowDimensions(PapersPage);
