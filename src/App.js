import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home';
import Header from './components/Header';
import FavoriteMovies from './components/FavoriteMovies';
import About from './components/About'
export class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <div>
            <Switch>
              <Route exact path="/">{<Home />}</Route>
              <Route exact path="/favorite">
                <FavoriteMovies />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
            </Switch>
          </div>
        </Router>
      </>
    );
  }
}

export default App
