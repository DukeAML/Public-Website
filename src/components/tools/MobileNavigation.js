import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import withWindowDimensions from '../people/withWindowDimensions';

class MobileNavigation extends React.Component {
  constructor() {
    super();
  }

  render() {
    // Use bootstraps's build-in navbar mobile sup

    const verticalAlign = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    };

    return (
      <center>
        <Navbar
          expand="lg"
          variant="light"
          bg={this.props.backgroundColor || '#f2f4f5'}
          style={{ padding: '.2rem 1rem' }}>
          <Navbar.Brand as={Link} to="/">
            <Link to="/" style={verticalAlign}>
              <img
                alt="Home"
                src={require('../homepage/images/DAML_Full_Grey_Transparent.svg')}
                width="50"
                height="50"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav>
              {/* <Nav.Link as={Link} to="/initiatives">
                Initiatives
              </Nav.Link> */}
              <Nav.Link as={Link} to="/join">
                Join the Team
              </Nav.Link>
              <Nav.Link as={Link} to="/projects">
                Projects
              </Nav.Link>
              <Nav.Link as={Link} to="/people">
                People
              </Nav.Link>
              <Nav.Link as={Link} to="/courses">
                Courses
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </center>
    );
  }
}

export default withWindowDimensions(MobileNavigation);
