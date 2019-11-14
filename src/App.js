import React, { Component } from 'react';
import Error from './404Error';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={Error} />
          </Switch>
        
        </div>
      </Router>
    )
  }
}


export default App;
