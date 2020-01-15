import React, { Component as ReactComponent} from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    backgroundColor: '#081829',
    height: 500,
    marginTop: -64,
  },
  imageSize: {
    height: 500,
    maxWidth: '100%',
  }
})

class Component extends ReactComponent {
  render() {
    const { classes, title, fullImage, halfImage } = this.props

    return (
      <Grid container justify="center" className={classes.root}>
        <Grid item>
          {title}
          <picture>
            <source className={classes.imageSize} srcset={halfImage} media="(max-width: 1200px)"/>
            <img className={classes.imageSize} src={fullImage} alt="header"/>
          </picture>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles) (Component)