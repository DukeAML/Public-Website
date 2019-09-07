// Import base react dependencies
import React from "react"
import {BrowserRouter, Route} from "react-router-dom"

// Bootstrap
import {Container} from "react-bootstrap"
// Personal Dependencies
import HomePage from "./homepage/HomePage"
import Navigation from "./tools/Navigation"

class App extends React.Component {
  render () {
    return(
        <BrowserRouter>
            <Navigation />
            <Route exact path ="/" component = {HomePage} />
        </BrowserRouter>
    );
  }
}

export default App;
