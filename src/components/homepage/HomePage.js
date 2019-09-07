import React from "react";
import {Container, Jumbotron, Button, Row, Col} from "react-bootstrap"

import Canvas from "../canvas/Canvas"
import Animation from "../canvas/Animation"

class HomePage extends React.Component{

    render(){
        return(
            <Container style = {{"marginTop":"20px"}}>
                <Row style={{display: 'flex', justifyContent: 'center', color:"white"}}>
                    <h1>Duke Applied Machine Learning</h1>
                </Row>
                <Animation />
            </Container>
        )
    }
}

export default HomePage