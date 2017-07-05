import React, { Component } from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';
import {
  BrowserRouter as Router, Route
} from 'react-router-dom';

import PlayVideo from './components/play-video.component.js';
import Home from './components/home.component.js';
import About from './components/videos.component.js';

import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router history={history}>
    <div className="container">

         <nav className="navbar navbar-default">
           <div className="container-fluid">
             <div className="navbar-header">
               <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                 <span className="sr-only">Toggle navigation</span>
                 <span className="icon-bar"></span>
                 <span className="icon-bar"></span>
                 <span className="icon-bar"></span>
               </button>
               <a className="navbar-brand" >DMnews</a>
             </div>
             <div id="navbar" className="navbar-collapse collapse">
               <ul className="nav navbar-nav">
                 <li><NavLink exact activeClassName="activeNav" to="/" >Home</NavLink></li>
                 <li><NavLink activeClassName="activeNav" to="/videos">Videos</NavLink></li>
               </ul>
             </div>
           </div>
         </nav>
         <Route exact path="/" component={Home}/>
          <Route path="/play/:id" component={PlayVideo}/>
         <Route exact path="/videos" component={About}/>
         <Route path="/videos/:id" component={PlayVideo}/>
       </div>
    </Router>
    <div>
    {this.props.children}
    </div>

      </div>
    );
  }
}

export default App;
