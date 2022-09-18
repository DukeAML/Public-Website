import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const FeaturedProjectCard = (props) => {
  return (
    <Col sm={6} xs={12} md={4}>
      <Card>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Button variant="primary">Learn More</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default FeaturedProjectCard;
