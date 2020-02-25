import React from "react";
import { Container } from "react-bootstrap";

class Footer extends React.Component {
  render() {
    return (
      <Container fluid className="footer" style={{display: "inline-block",
      verticalAlign: "middle"}}>
        <a style ={{marginLeft: "40%", marginTop: "10%"}}>
          Questions, comments? Contact us:
          </a>
          <br />
          <a className="contact" href="mailto: info@dukeaml.com" style={{marginLeft: "40%"}}>
            info@dukeaml.com
          </a>
          <br />
        
  
      <button className="homepageButton" style={{display: "inline-block",
      verticalAlign: "middle", marginLeft: "40%", width: "20%"}}
      
      onClick={this.handleSignUpClick}
      >
        Join Our Newsletter!
      </button>
         
       
        
      </Container>
    );
  }
}

export default Footer;

/*import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

class Footer extends React.Component{
  render(){
  return (
    <MDBFooter color="#1e2c3a" className="footer">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}}

export default Footer;*/
