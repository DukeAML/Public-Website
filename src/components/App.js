// Import base react dependencies
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Bootstrap
// Personal Dependencies
import { getProjects } from '../api/api.js';
import CoursesPage from './courses/CoursesPage';
import HomePage from './homepage/HomePage';
import Initiatives from './initiatives/Initiatives';
import InnovationStudio from './innovationstudio/InnovationStudio';
import Join from './join/Join';
import PeoplePage from './people/PeoplePage';
import PhoenixProjectsPage from './phoenixprojects/ProjectsPage';
import IndividualProject from './projects/individual-pages/IndividualProject';
import ProjectsPage from './projects/ProjectsPage';
import Scholars from './scholars/components/App';
import TechForEquity from './techforequity/TechForEquity';

const projects = require('./phoenixprojects/projectsData');

class App extends React.Component {
  constructor() {
    super();
    this.state = { projects: [] };
  }

  componentDidMount = async () => {
    const projects = await getProjects();
    this.setState({ projects: projects });
  };

  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/projects" component={ProjectsPage} />
        <Route exact path="/people" component={PeoplePage} />
        <Route exact path="/courses" component={CoursesPage} />
        <Route exact path="/scholars" component={Scholars} />
        <Route
          exact
          path="/thephoenixproject"
          component={PhoenixProjectsPage}
        />
        <Route exact path="/innovationstudio" component={InnovationStudio} />
        <Route exact path="/techforequity" component={TechForEquity} />
        <Route exact path="/initiatives" component={Initiatives} />
        <Route exact path="/join" component={Join} />

        {/* <Route exact path="/thephoenixproject" component={PhoenixProjectPage} /> */}
        {/*
        <Route exact path="/papers" component={PapersPage} />
        */}
        {/* <Route exact path="/GPU" component={GPUPage} /> */}
        {this.state.projects.map((project, index) => (
          <Route
            key={index}
            exact
            path={`/${project.uid}`}
            component={() => (
              <IndividualProject
                title={project.title}
                image={project.imageLink}
                abstract={project.abstract}
                team={project.team || []}
              />
            )}
          />
        ))}
        {projects.map((project, index) => (
          <Route
            key={index}
            exact
            path={`/phoenix/${project.uid}`}
            component={() => (
              <IndividualProject
                title={project.title}
                image={project.imageLink}
                abstract={
                  project.abstract === ''
                    ? project.description
                    : project.abstract
                }
                team={project.team || []}
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
