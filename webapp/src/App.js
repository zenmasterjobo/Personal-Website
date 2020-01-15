import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AppBar from './components/AppBar'
import Home from './scenes/Home'
import Contact from './scenes/Contact'
import Blog from './scenes/Blog'
import Gallery from './scenes/Gallery'
import Github from '@material-ui/icons/GitHub'
import LinkedIn from '@material-ui/icons/LinkedIn'
import HomeIcon from '@material-ui/icons/Home'
import LibraryBooks from '@material-ui/icons/LibraryBooks'
import PhotoSizeSelectActualIcon from '@material-ui/icons/PhotoSizeSelectActual'
import Contacts from '@material-ui/icons/Contacts'


class App extends Component {
  constructor() {
    super()
    this.state = {
      // We can use this to define what options are rendered to the nav bar / hamburger menue
      textButtons: [
        {
          to: '/',
          name: 'Home',
          icon: <HomeIcon/>
        },
        {
          to: '/blog',
          name: 'Blog',
          icon: <LibraryBooks/>
        },
        {
          to: '/contact',
          name: 'Contact',
          icon: <Contacts/>
        },
        {
          to: '/gallery',
          name: 'Gallery',
          icon: <PhotoSizeSelectActualIcon/>
        },
        {
          href: 'https://www.github.com/zenmasterjobo',
          name: 'Github',
          icon: <Github/>
        },
        {
          href: 'https://www.linkedin.com/in/jordan-bergero',
          name: 'LinkedIn',
          icon: <LinkedIn/>
        }
      ],
    }
  }

  render() {
    return (
      <Router>
        <div>
          <AppBar textButtons={this.state.textButtons} iconButtons={this.state.iconButtons}/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/blog' component={Blog} />
            <Route path='/contact' component={Contact} />
            <Route path='/gallery' component={Gallery} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
