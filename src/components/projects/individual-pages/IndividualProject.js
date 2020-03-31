import React from "react";
import { Card, Container, Row, Col, Button, Image } from "react-bootstrap";
import { Redirect } from "react-router-dom";

import Navigation from "../../tools/Navigation";

/* props:


- image url (image)
- title (title)
- abstract (abstract)

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
            <Image src={props.image} fluid style={{ width: "100%" }} />
          </Col>
          <Col sm={12} md={6} style={{ maxWidth: "800px" }}>
            <Card className="individual-project-card">
              <Card.Body
                className="individual-project-card"
                style={{ padding: "1rem" }}
              >
                <Card.Title style={{ padding: 0 }} className="title">
                  {props.title}
                </Card.Title>
                <br />
                <Card.Text>
                  <Container>
                    <Row>
                      <b> Team: </b>
                    </Row>
                    <Row>{props.team.join(", ")}</Row>
                    <br />
                    <Row>
                      <b> Abstract: </b>
                    </Row>
                    <Row>{props.abstract}</Row>
                  </Container>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default IndividualProject;
