import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AppBar from './components/AppBar'
import Home from './scenes/Home'
import About from './scenes/About'
import Contact from './scenes/Contact'
import Blog from './scenes/Blog'
import Misc from './scenes/Misc'


class App extends Component {
  constructor() {
    super()
    this.state = {
      // We can use this to define what options are rendered to the nav bar
      navBar: [
        {
          to: '/',
          name: 'Home'
        },
        {
          to: '/about',
          name: 'About',
        },
        {
          to: '/contact',
          name: 'Contact'
        },
        {
          to: '/blog',
          name: 'Blog'
        },
        {
          to: '/misc',
          name: 'Misc'
        }
      ]
    }
  }

  render() {
    return (
      <Router>
        <div>
          <AppBar buttons={this.state.navBar}/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/blog' component={Blog} />
            <Route path='/misc' component={Misc} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
