import React from "react";
import { Card, Container, Row, Col, Button, Image } from "react-bootstrap";
import { Redirect } from "react-router-dom";

import Navigation from "../../tools/Navigation";

import placeholder from "../images/placeholder.jpg";

const IndividualProject = props => {
  return (
    <div>
      <Navigation />
      <Container fluid style={{ padding: "2rem" }}>
        <Row>
          <Col sm={12} md={6}>
            <Image src={placeholder} />
          </Col>
          <Col sm={12} md={6}>
            <Card>
              <Card.Body>
                <Card.Title className="title">Title</Card.Title>
                <Card.Text>{props.description}</Card.Text>
                <Card.Text>
                  <p>
                    {" "}
                    <b> Team: </b>Sally Sal, Jr. Mr. Potato head, Ashton
                    Kutcher, Elmo
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <h3>Abstract</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default IndividualProject;
