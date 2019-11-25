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
  aboutTitle: {
    [theme.breakpoints.down('md')]: {
      fontSize: 20,
    },
    textAlign: 'center',
    fontSize: 50,
  },
  aboutText: {
    fontSize: 20,
  },
  aboutTextColor: {
    color: '#F2F2F2',
  },
  textPadding: {
    paddingLeft: 15,
  },
  darkBlueText: {
    color: '#282C31',
    textShadow: '-1px -1px 0 #F2F2F2, 1px -1px 0 #F2F2F2, -1px 1px 0 #F2F2F2, 1px 1px 0 #F2F2F2'
  },
  mintText: {
    color: '#F2F2F2',
    marginLeft: 100,
    textShadow: '-1px -1px 0 #282C31, 1px -1px 0 #282C31, -1px 1px 0 #282C31, 1px 1px 0 #282C31',
  },
  pureMintText: {
    color: '#F2F2F2',
    textShadow: '-1px -1px 0 #282C31, 1px -1px 0 #282C31, -1px 1px 0 #282C31, 1px 1px 0 #282C31',
  },
  darkGreyBackgroundColor: {
    backgroundColor: '#282C31',
  },
  aboutContainer: {
    backgroundColor: '#282C31',
  },
})

class Component extends ReactComponent {

  render() {
    const { classes } = this.props
    const title = <h1 className={classes.welcomeHeader}><span className={classes.darkBlueText}>Hey,<br/></span><span className={classes.mintText}>I'm Jordan.</span></h1>

    const fullImageURL    = 'https://bergero-dev-photo-repo.s3-us-west-2.amazonaws.com/header_images/spike_ship_full.png'
    const halfImageURL    = 'https://bergero-dev-photo-repo.s3-us-west-2.amazonaws.com/header_images/spike_ship_half.png'
    const quarterImageURL = 'https://bergero-dev-photo-repo.s3-us-west-2.amazonaws.com/header_images/spike_ship_quarter.png'
    return (
      <div>
      <Header title={title} fullImage={fullImageURL} halfImage={halfImageURL} quarterImage={quarterImageURL} />
      <Grid container className={classes.darkGreyBackgroundColor}>
        <Grid item xs={5} lg={4}>
          <Avatar image='https://bergero-dev-photo-repo.s3-us-west-2.amazonaws.com/header_images/IMG_20190623_171259.jpg' />
        </Grid>
        <Grid item xs={7} lg={8}>
          <Grid container className={classes.aboutContainer}>
            <Grid item xs={12} className={classes.textPadding}>
              <h2 className={classes.aboutTitle}><span className={classes.pureMintText}>About Me</span></h2>
            </Grid>
            <Grid item xs={12} className={classes.textPadding}>
              <p className={`${classes.aboutText} ${classes.aboutTextColor}`}>I am a software engineer, interested in full-stack development. This page is hosted on AWS EC2, and I am currently pulling the images from an S3 bucket. The front-end code is written in React, and I am working on building an API written in go. My hopes for this website, are that you will be able to get a sense of who I am as a person, my abilities as a developer, blog updates of what I am currently working on, and insights into some of my hobbies and interests.</p>
            </Grid>
            <Grid item xs={12} className={classes.textPadding}>
              <p className={`${classes.aboutText} ${classes.aboutTextColor}`}>This current state of the site is definitely WIP. You will notice the app bar takes you to incomplete pages. The first page I am looking to build will be the 'Gallery'. I am looking to host my photos in S3, build an API that can pull photos from S3, and return a paginated list to my front-end which will load photos in a grid like structure, loading more photos as the user scrolls. You can find the code for the page <a className={classes.aboutText, classes.aboutTextColor} href="https://github.com/zenmasterjobo/Personal-Website/tree/master/webapp">here</a></p>
            </Grid>
            <Grid item className={classes.textPadding} xs={12}>
              <p className={`${classes.aboutText} ${classes.aboutTextColor}`} >Thanks for stopping by, feel free to contact me on LinkedIn (link in app bar) or by <a className={classes.aboutTextColor} href="mailto: jordan@bergero.dev">email</a> </p>
            </Grid>
            <Grid item className={classes.textPadding} xs={12}>
              <p className={`${classes.aboutText} ${classes.aboutTextColor}`}> - Jordan</p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
    )
  }
}

export default withStyles(styles) (Component)