import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
        margin: theme.spacing(1)
    },
  }));
function HomePage(){
    const classes = useStyles();

    return(
        <div className={classes.root}>
        <Grid style={{backgroundColor:'rgb(242, 243, 244)', maxHeight:'auto'}} container spacing={3}>
            <Grid item xs={2}>
              <Paper className={classes.paper}>          <Link to="/detail">
San pham 1          </Link>
</Paper>
            </Grid>          
          <Grid item xs={2}>
            <Paper className={classes.paper}>San pham 2</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>San pham 3</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>San pham 4</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>San pham 5</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>San pham 6</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>San pham 1</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>San pham 2</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>San pham 3</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>San pham 4</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>San pham 5</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>San pham 6</Paper>
          </Grid>
        </Grid>
      </div>
    )
}

export default HomePage