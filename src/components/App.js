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

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/projects" component={ProjectsPage} />
        <Route exact path="/project/:id" component={ProjectDisplayPage} />
        <Route exact path="/people" component={PeoplePage} />
      </BrowserRouter>
    );
  }
}

export default App;
