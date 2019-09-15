import React from "react"

import {Container, Jumbotron, Button, Row, Col, Image, Card} from "react-bootstrap"

class ThemeCard extends React.Component {

    render(){
        return(
            <Card>
                <Card.Body style = {{backgroundColor:"#2B3E50"}}>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        )
    }
}

export default ThemeCard;

