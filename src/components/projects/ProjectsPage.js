import React from "react";
import {Container, Row, Card, Table, tr, td, thead, tbody, Spinner, Button} from "react-bootstrap";
import {Redirect} from "react-router-dom";

import client from "../../api/api"
import axios from "axios"

import FeaturedProjectCard from "./FeaturedProjectCard"
import Footer from "../tools/Footer"

class ProjectsPage extends React.Component {

    state = {
        featuredProjects: [],
        projects: [],
        redirectURL: "",
        redirect: false
    }

    // Get all projects in the database
    getProjects = async () => {
        let response = await axios.get("https://dsapple.herokuapp.com/projects")
        console.log(response);
        this.setState({featuredProjects:response.data.slice(0,3), projects: response.data})        
    }

    // Upon component mounting, query the database for data.
    componentDidMount(){
        this.getProjects()
    }

    generateFeaturedProjects(){

    }


    render(){
        if(this.state.projects.length === 0){
            return ( 
            <Container style = {{display:"flex", justifyContent: "center", marginTop: "200px"}}>
                <Spinner animation = "grow" />
            </Container>
            )
        }

        if(this.state.redirect){
            return <Redirect push to= {`/project/${this.state.redirectURL}`}/>;
        }
        
        return(
            <div>
                <Container style = {{marginTop:"25px", "marginBottom":"50px"}}>
                    <h3> Featured </h3>
                    <Row>
                        {this.state.featuredProjects.map(card => <FeaturedProjectCard title = {card.title} description = {card.description}/>)}
                    </Row>
                    <h3 style = {{marginTop:"20px"}}> All Projects</h3>
                    <Table hover size="sm" >
                        <thead style = {{backgroundColor:"#DF691A"}}>
                            <tr>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Client</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.projects.map(project => {
                                return(
                                    <tr onClick = {() => {
                                        this.setState({redirectURL: project.uid})
                                        this.setState({redirect:true})
                                    }}>
                                        <td>{project.title}</td>
                                        <td>{project.description.substring(0,50)}</td>
                                        <td>{project.submitter}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </Container>
                <Footer />
            </div>
        )
    }
}

export default ProjectsPage;