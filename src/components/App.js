// Import base react dependencies
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

// Bootstrap
import { Container, Image } from "react-bootstrap";
// Personal Dependencies
import HomePage from "./homepage/HomePage";
import ProjectsPage from "./projects/ProjectsPage";
import Navigation from "./tools/Navigation";
import ProjectDisplayPage from "./projectdisplay/ProjectDisplayPage";
import PeoplePage from "./people/PeoplePage";
import IndividualProject from "./projects/individual-pages/IndividualProject";
import IndividualProject2 from "./projects/individual-pages/IndividualProject2";
import IndividualProject3 from "./projects/individual-pages/IndividualProject3";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/projects" component={ProjectsPage} />
        <Route exact path="/people" component={PeoplePage} />
        <Route exact path="/project1" component={IndividualProject} />
        <Route exact path="/project2" component={IndividualProject2} />
        <Route exact path="/project3" component={IndividualProject3} />
      </BrowserRouter>
    );
  }
}

export default App;

// <Route exact path="/project/:id" component={ProjectDisplayPage} />
