import React from "react";
import { Card, Container, Row, Col, Button, Image } from "react-bootstrap";
import { Redirect } from "react-router-dom";

import Navigation from "../../tools/Navigation";

import placeholder from "../images/placeholder.jpg";

/* props:


- image url (image)
- title (name)
-

*/

const IndividualProject = props => {
  return (
    <div>
      <Navigation />
      <Container
        fluid
        style={{ padding: "2rem", display: "flex", justifyContent: "center" }}
      >
        <Row>
          <Col sm={12} md={6}>
            <Image src={placeholder} fluid />
          </Col>
          <Col sm={12} md={6} style={{ maxWidth: "800px" }}>
            <Card className="individual-project-card">
              <Card.Body
                className="individual-project-card"
                style={{ padding: "1rem" }}
              >
                <Card.Title style={{ padding: 0 }} className="title">
                  Title
                </Card.Title>
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
        <Row style={{ padding: "1rem 0 1rem 0" }}>
          <Col xs={12}>
            <h3>{props.abstract}</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default IndividualProject;
