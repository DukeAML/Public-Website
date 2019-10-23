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
            <Image src={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Primary_Laos2.jpg/1280px-Primary_Laos2.jpg"} fluid />
          </Col>
          <Col sm={12} md={6} style={{ maxWidth: "800px" }}>
            <Card className="individual-project-card">
              <Card.Body
                className="individual-project-card"
                style={{ padding: "1rem" }}
              >
                <Card.Title style={{ padding: 0 }} className="title">
                  Digital Fidget
                </Card.Title>
                <Card.Text>
                    {" "}
                    <Container>
                      <Row>
                        <b> Team: </b> Mary Gooneratne, Jia Rong Chua, Phoebe Klett, Jaiveer Katariya, Himanshu Jain
                      </Row>
                      <Row style={{ padding: "1rem 0 1rem 0" }}>
                        <b> Abstract: </b> 
                        There is a trend of large increase in Attention Deficit Hyperactivity Disorder (ADHD). Research has shown positive impact of fidget toys on students with ADHD. By replacing fidget toys with a similar app on a wearable device, user data from device sensors (e.g. heart rate, motion, location) can be collected to identify patterns of fidgeting. The project seeks to utilize ANOVA analysis to see user behavior differences and machine learning models to classify human activities in an effort to generate user behavior time series for children with ADHD.
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
