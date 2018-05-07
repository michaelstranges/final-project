import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import '../styles/App.css';
import NavBar from './NavBar.jsx';
import UserProfilePage from './UserProfilePage.jsx'
import WalkProfilePage from './WalkProfilePage.jsx'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
          <Router>
            <div>
              <Route exact path="/" component={UserProfilePage} />
              <Route path="/walk" component={WalkProfilePage} />
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
