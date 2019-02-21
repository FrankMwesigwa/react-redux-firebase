import React, { Component } from 'react';
import { BrowserRouter, Route , Switch } from 'react-router-dom';

import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'
import NavBar from './components/navBar'
import PostDetail from './components/postDetail'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar/>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/posts/:post_id" component={PostDetail} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
