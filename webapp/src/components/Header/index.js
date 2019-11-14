import React, { Component as ReactComponent} from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    backgroundColor: '#182628',
    height: 500,
    marginTop: -64,
  },
  imageSize: {
    height: 500,
    width: '100%',
  }
})

class Component extends ReactComponent {
  render() {
    const { classes, title } = this.props
    return (
      <Grid container justify="center" className={classes.root}>
        <img src={this.props.image} alt="wooot" className={classes.imageSize}/>
        <Grid item>
          {title}
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles) (Component)