import React from "react";
import {Card, Container, Col, Button} from "react-bootstrap";

const FeaturedProjectCard = (props) => {
    return(
        <Col>
            <Card>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default FeaturedProjectCard;