import React from "react"
import {Navbar, Nav, Form, FormControl, Button, NavDropdown, Container} from "react-bootstrap"

class Navigation extends React.Component{

    render(){
        return(
            <Navbar bg="bg" expand="lg">
                <Container>
                    <Navbar.Brand href="#home" style = {{"color":"#B58900"}}><strong>Duke</strong> <em>Applied</em> <strong>ML</strong></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        
                        </Nav>
                        <Nav>
                            <Nav.Link href="#home" style = {{"color":"#B58900"}}>Home</Nav.Link>
                            <Nav.Link href="#link" style = {{"color":"#B58900"}}>Link</Nav.Link>
                            <Nav.Link href="#deets" style = {{"color":"#B58900"}} >Login</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes" style = {{"color":"#B58900"}}>
                                Sign Up
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default Navigation