import React, { Component as ReactComponent} from 'react'
import Header from '../../components/Header'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {}
})

class Component extends ReactComponent {
  render() {
    return (
      <Header title="Misc" />
    )
  }
}

export default withStyles(styles) (Component)