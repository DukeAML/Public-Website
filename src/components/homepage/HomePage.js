import React from "react";
import {Container, Jumbotron, Button, Row, Col, Image, Card, Carousel} from "react-bootstrap"
import {Link, Redirect} from "react-router-dom"

import Canvas from "../canvas/Canvas"
import Animation from "../canvas/Animation"
import Footer from "../tools/Footer"

import ThemeCard from "./ThemeCard"

class HomePage extends React.Component{

    state = {redirect:false}

    handleSignUpClick = () =>  {

    }

    handleProjectsClick = () => {
        this.setState({redirect:true})
    }

    componentDidMount(){
        this.setState({redirect:false})
    }

    render(){
        if(this.state.redirect){
            return <Redirect push to="/projects" />
        }

        return(
            <div>
                <Container style = {{height: "100%", paddingBottom:"60px"}}>
                    <Row style={{display: 'flex', 
                                justifyContent: 'center', 
                                color:"white", 
                                position:"relative",
                                paddingBottom: "100px",
                                paddingTop: "80px"}}>
                        <Image sm = {0} xs = {0} src = {require("./DAML_LargeLogo.png")} style = {{maxWidth:"80%", maxHeight:"250px"}} fluid/>
                    </Row>
                    <Row>
                        <Col style = {{display:"flex", justifyContent: "center"}}>
                            <Button style = {{width:"50%"}} >
                                Sign Up
                            </Button>
                        </Col>
                        <Col style = {{display:"flex", justifyContent: "center"}}>
                            <Button style = {{width:"50%"}} onClick = {this.handleProjectsClick}>
                                View Projects
                            </Button>
                        </Col>
                    </Row>
                </Container>
                <Container fluid style = {{backgroundColor:"#4E5D6C", padding: "25px"}}>
                    <Row>
                        <Col sm = {12} xs = {12} md = {6}>
                            <Row>
                                <Col sm = {6} xs = {12}>
                                    <ThemeCard />
                                </Col>
                                <Col sm = {6} xs = {12}>  
                                    <ThemeCard />
                                </Col>
                            </Row>
                            <Row>
                                <Col sm = {6} xs = {12}>
                                    <ThemeCard />
                                </Col>
                                <Col sm = {6} xs = {12}>  
                                    <ThemeCard />
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={0} xs = {12} md = {6} style = {{display:"flex", justifyContent: "center"}}>
                            <Animation />                                
                        </Col>
                    </Row>
                </Container>
                <Container fluid style={{padding:"25px"}} >
                    <Row style={{display: 'flex',justifyContent: 'center', fontFamily: "Raleway"}}>
                        <h1> People </h1>
                    </Row>
                    <Row style = {{padding: "25px", display:"flex"}}>
                        <Col sm = {6} xs = {12} md = {3}>
                            <Card style={{ backgroundColor: "#2B3E50", border: "0px" }}>
                                <Card.Img variant="top" src=  {require("./placeholder.svg")} />
                                <Card.Body>
                                    <Card.Title style= {{textAlign:"center"}}>Card Title</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm = {6} xs = {12} md = {3}>
                            <Card style={{ backgroundColor: "#2B3E50", border: "0px" }}>
                                <Card.Img variant="top" src= {require("./placeholder.svg")} />
                                <Card.Body>
                                    <Card.Title style= {{textAlign:"center"}}>Card Title</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm = {6} xs = {12} md = {3}>
                            <Card style={{ backgroundColor: "#2B3E50", border: "0px" }}>
                                <Card.Img variant="top" src=  {require("./placeholder.svg")} />
                                <Card.Body>
                                    <Card.Title style= {{textAlign:"center"}}>Card Title</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm = {6} xs = {12} md = {3}>
                            <Card style={{ backgroundColor: "#2B3E50", border: "0px" }}>
                                <Card.Img variant="top" src=  {require("./placeholder.svg")} />
                                <Card.Body>
                                    <Card.Title style= {{textAlign:"center"}}>Card Title</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        )
    }
}

export default HomePage