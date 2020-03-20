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
import CoursesPage from "./courses/CoursesPage";
import PapersPage from "./papers/PapersPage";
import GPUPage from "./GPU/GPUPage";

const projects = require("./projects/projectsData");

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/projects" component={ProjectsPage} />
        <Route exact path="/people" component={PeoplePage} />
        <Route exact path="/courses" component={CoursesPage} />
        <Route exact path="/papers" component={PapersPage} />
        <Route exact path="/GPU" component={GPUPage} />

        {projects.map((project, index) => (
          <Route
            key={index}
            exact
            path={`/${project.link}`}
            component={() => (
              <IndividualProject
                title={project.title}
                image={project.image}
                abstract={project.abstract}
                team={project.team}
              />
            )}
          />
        ))}
      </BrowserRouter>
    );
  }
}

export default App;

// <Route exact path="/project/:id" component={ProjectDisplayPage} />
