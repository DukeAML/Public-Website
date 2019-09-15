import React from "react";
import {Container} from "react-bootstrap";

class Footer extends React.Component{

    render(){
        return(
            <Container fluid style ={{display: 'flex', justifyContent: 'center', backgroundColor: "black", padding:"20px"}}>
                (C) Yasa Baig
            </Container>
        )
    }
}

export default Footer;