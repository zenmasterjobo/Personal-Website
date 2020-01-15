import React, { Component as ReactComponent } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'


const styles = theme => ({
  root: {
    backgroundColor:"",
    color: '#fff'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  grow: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'flex'
    }
  },
  noLinkWhite: {
    textDecoration: 'none',
    color: '#fff'
  },
  noLinkBlack: {
    textDecoration: 'none',
    color: '#000'
  }
})

const AdapterLink = React.forwardRef((props, ref) => <Link innerRef={ref} {...props} />)

class Component extends ReactComponent {

  constructor(props) {
    super(props)
    this.state = {
      left: false
    }
  }

  toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    this.setState({ ...this.state, [side]: open });
  };

  sideList = (side) => (
    <div
      className={this.props.classes.list}
      role="presentation"
      onClick={this.toggleDrawer(side, false)}
      onKeyDown={this.toggleDrawer(side, false)}
    >
      <List>
        {this.props.textButtons.map((text, index) => {
          if (text.to) {
          return <ListItem button key={text.name} component={AdapterLink} to={text.to}>
            <ListItemIcon>{text.icon}</ListItemIcon>
            <ListItemText primary={text.name} />
          </ListItem>
        } else {
          return <a className={this.props.classes.noLinkBlack} href={text.href}>
          <ListItem button key={text.name}>
            <ListItemIcon>{text.icon}</ListItemIcon>
            <ListItemText primary={text.name} />
          </ListItem>
          </a>
        }
        })}
      </List>
    </div>
  )

  menuList = (textButtons, classes) => (
    textButtons.map((text) => {
      if (text.to) {
        return <Button className={classes.menuButton} color="inherit" component={AdapterLink} to={text.to}>{text.name}</Button>
      } else {
        return <a className={classes.noLinkWhite} href={text.href}><Button className={classes.menuButton} color="inherit">{text.name}</Button></a>
      }
    })
  )
  render() {
    const { classes, textButtons } = this.props
    return (
      <div className={classes.grow}>
        <AppBar position="static" className={classes.root}>
          <Toolbar className={classes.sectionMobile}>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={this.toggleDrawer('left', true)}>
              <MenuIcon/>
            </IconButton>
            <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
              {this.sideList('left')}
            </Drawer>
          </Toolbar>
          <Toolbar className={classes.sectionDesktop}>
            {!!textButtons && this.menuList(textButtons, classes)}
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles)(Component)