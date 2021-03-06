import React, { Component as ReactComponent} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  bigAvatar: {
    margin: 10,
    width: 200,
    height: 200,
    borderRadius: 0,
    border: '2px solid #F2F2F2'
  },
});

class Component extends ReactComponent {
  render() {
    const { classes, image } = this.props;
    return (
      <Grid container justify="center" alignItems="center">
        <Avatar alt="Jordan Bergero" src={image} className={classes.bigAvatar}/>
      </Grid>
    );
  }
}

export default withStyles(styles) (Component)