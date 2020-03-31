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
            <Image src={"https://images.pexels.com/photos/2692467/pexels-photo-2692467.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} fluid />
          </Col>
          <Col sm={12} md={6} style={{ maxWidth: "800px" }}>
            <Card className="individual-project-card">
              <Card.Body
                className="individual-project-card"
                style={{ padding: "1rem" }}
              >
                <Card.Title style={{ padding: 0 }} className="title">
                  VR Sickness Detection
                </Card.Title>
                <Card.Text>
                    {" "}
                    <Container>
                      <Row>
                        <b> Team: </b> Tima, Daniel, Alina
                      </Row>
                      <Row style={{ padding: "1rem 0 1rem 0" }}>
                        <b> Abstract: </b> 
                        VR sickness is caused when the optical flow of the VR set (what people see) is different from the actual motion perceived by the subject (what people feel). The project is aimed to build a model to detect when there would be a sickness, given the input of the 360 videos simulating the usage of VR. The methods used include flowNet, decision tree, and autoencoder networks. The output could be publications, and the potential applications include pilot training, gaming, and general VR uses.
                      </Row>
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
