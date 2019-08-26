import React, { Component as ReactComponent} from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'


const styles = theme => ({
  root: {}
})

class Component extends ReactComponent {
  render() {
    const { classes, title } = this.props
    return (
      <Grid container justify="center" className={classes.root}>
        <Grid item>
          <h2>{title}</h2>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles) (Component)