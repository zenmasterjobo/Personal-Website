import React, { Component as ReactComponent} from 'react'
import Grid from '@material-ui/core/Grid'
import Header from '../../components/Header'
import Avatar from './components/Avatar'
import { withStyles } from '@material-ui/core/styles'

//#182628
//#65CCB8
//#57BA98
//#3B945E
//#F2F2F2

const styles = theme => ({
  root: {},
  welcomeHeader: {
    position: 'static',
    marginTop: -400,
    fontSize: 100
  },
  aboutHeader: {
    fontSize: 50,
  },
  aboutText: {
    fontSize: 20,
    color: '#F2F2F2',
    padding: '0px 0px 0px 20px',
  },
  darkBlueText: {
    color: '#182628',
    textShadow: '-1px -1px 0 #F2F2F2, 1px -1px 0 #F2F2F2, -1px 1px 0 #F2F2F2, 1px 1px 0 #F2F2F2'
  },
  mintText: {
    color: '#F2F2F2',
    marginLeft: 100,
    textShadow: '-1px -1px 0 #182628, 1px -1px 0 #182628, -1px 1px 0 #182628, 1px 1px 0 #182628',
  },
  paleBlueBackground: {
    backgroundColor: '#00203FFF',
  },
  darkBlueBackground: {
    backgroundColor: '#57BA98',
  },
  aboutContainer: {
    backgroundColor: '#3B945E',
  },
  aboutItem: {
    height: 100,
  }
})

class Component extends ReactComponent {

  render() {
    const { classes } = this.props
    const title = <h1 className={classes.welcomeHeader}><span className={classes.darkBlueText}>Hey,<br/></span><span className={classes.mintText}>I'm Jordan.</span></h1>
    return (
      <div>
      <Header title={title} image='https://bergero-dev-photo-repo.s3-us-west-2.amazonaws.com/header_images/jobo-shoes.jpg' />
      <Grid container justify="flex-end" className={classes.darkBlueBackground}>
        <Grid item xs={4}>
          <Avatar image='https://bergero-dev-photo-repo.s3-us-west-2.amazonaws.com/header_images/IMG_20190623_171259.jpg' />
        </Grid>
        <Grid item xs={8}>
          <Grid container justify="flex-start" className={classes.aboutContainer}>
            <Grid item xs={12} className={classes.aboutItem}>
              <h2 className={classes.aboutHeader}><span className={classes.mintText}>About</span></h2>
            </Grid>
            <Grid container justify="flex-start">
              <Grid item xs={9}>
                <p className={classes.aboutText}>I am a software engineer, interested in full-stack development. This page is hosted on AWS EC2, and I am currently pulling the images from an S3 bucket. The front-end code is written in React, and I am working on building an API written in go. My hopes for this website, are that you will be able to get a sense of who I am as a person, my abilities as a developer, blog updates of what I am currently working on, and insights into some of my hobbies and interests.</p>
              </Grid>
              <Grid item xs={9}>
                <p className={classes.aboutText}>This current state of the site is definitely WIP. You will notice the app bar takes you to incomplete pages. The first page I am looking to build will be the 'Gallery'. I am looking to host my photos in S3, build an API that can pull photos from S3, and return a paginated list to my front-end which will load photos in a grid like structure, loading more photos as the user scrolls. You can find the code for the page <a href="https://github.com/zenmasterjobo/Personal-Website/tree/master/webapp">here</a></p>
              </Grid>
              <Grid item className={classes.aboutText} xs={9}>
                <p>Thanks for stopping by, feel free to contact me on LinkedIn (link in app bar) or by <a href="mailto: jordan@bergero.dev">email</a> </p>
              </Grid>
              <Grid item className={classes.aboutText} xs={9}>
                <p> - Jordan</p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </div>
    )
  }
}

export default withStyles(styles) (Component)