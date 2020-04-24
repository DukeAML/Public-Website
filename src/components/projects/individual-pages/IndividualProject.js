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
  console.log(props);
  return (
    <div>
      <Navigation />
      <Container
        fluid
        style={{ padding: "2rem", display: "flex", justifyContent: "center" }}
      >
        <Row>
          <Col sm={12} md={6}>
            <center>
              <Image src={props.image} fluid style={{ width: "80%" }} />
            </center>
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
                    {props.team.length != 0 ? (
                      <div>
                        <Row style={{ lineHeight: "2.5rem" }}>
                          <b> Team: </b>
                        </Row>

                        <Row>{props.team.join(", ")}</Row>
                        <br />
                      </div>
                    ) : (
                      ""
                    )}
                    <Row style={{ lineHeight: "2.5rem" }}>
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
