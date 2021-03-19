import React from 'react'
import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
        backgroundColor: '#343a40',
        color: 'white',
    },
}));
export default function Footer(){
    const classes = useStyles();
    return(
        <div className={classes.grow}>
            <div>Footer</div>

            <div>Footer</div>

            <div>Footer</div>

            <div>Footer</div>

        </div>
        
    )

}