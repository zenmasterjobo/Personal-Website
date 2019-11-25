import React, { Component as ReactComponent } from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  root: {
    backgroundColor:"",
    color: '#fff'
  },
  menuButton: {
    marginRight: theme.spacing(4),
  },
  grow: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },

})

const AdapterLink = React.forwardRef((props, ref) => <Link innerRef={ref} {...props} />)

class Component extends ReactComponent {
  render() {
    const { classes, textButtons, iconButtons } = this.props
    return (
      <div className={classes.grow}>
        <AppBar position="static" className={classes.root}>
          <Toolbar>
            {!!textButtons && textButtons.map(button => <Button className={classes.menuButton} color="inherit" component={AdapterLink} to={button.to}>{button.name}</Button>)}
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              {!!iconButtons && iconButtons.map(button => <a href={button.to}><IconButton color="inherit"><img src={button.src} alt={button.alt} width="32" height="32"/></IconButton></a>)}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles)(Component)