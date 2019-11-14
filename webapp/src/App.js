import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AppBar from './components/AppBar'
import Home from './scenes/Home'
import Contact from './scenes/Contact'
import Blog from './scenes/Blog'
import Gallery from './scenes/Gallery'
import Octocat from './icons/octocat32.png'
import LinkedIn from './icons/linkedin.png'


class App extends Component {
  constructor() {
    super()
    this.state = {
      // We can use this to define what options are rendered to the nav bar
      textButtons: [
        {
          to: '/',
          name: 'Home',
        },
        {
          to: '/contact',
          name: 'Contact',
        },
        {
          to: '/blog',
          name: 'Blog',
        },
        {
          to: '/gallery',
          name: 'Gallery',
        },
      ],
      iconButtons: [
        {
          to: 'https://www.github.com/zenmasterjobo',
          alt: 'Github',
          src: Octocat
        },
        {
          to: 'https://www.linkedin.com/in/jordan-bergero',
          alt: 'LinkedIn',
          src: LinkedIn
        }
      ]
    }
  }

  render() {
    return (
      <Router>
        <div>
          <AppBar textButtons={this.state.textButtons} iconButtons={this.state.iconButtons}/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/contact' component={Contact} />
            <Route path='/blog' component={Blog} />
            <Route path='/gallery' component={Gallery} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
