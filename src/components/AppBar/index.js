import React, { Component as ReactComponent } from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  menuButton: {
    marginRight: theme.spacing(4),
  },
})

const AdapterLink = React.forwardRef((props, ref) => <Link innerRef={ref} {...props} />)

class Component extends ReactComponent {
  render() {
    const { classes, buttons } = this.props
    console.log("the buttons: ", buttons)
    return (
      <AppBar position="static">
        <Toolbar>
          {buttons.map(button => <Button className={classes.menuButton} color="inherit" component={AdapterLink} to={button.to}>{button.name}</Button>)}
        </Toolbar>
      </AppBar>
    )
  }
}

export default withStyles(styles)(Component)