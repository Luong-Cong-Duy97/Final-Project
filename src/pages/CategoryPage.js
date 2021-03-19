import React from 'react'
import { Grid, Paper, Checkbox } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: 'grey',
        padding: '1.5rem',
    },
    paper: {
        height: 300,
        width: 170,
    },
    control: {
        padding: theme.spacing(2),
    },
    categoryFilter: {
        maxHeight: 600,
        width: 170,
        backgroundColor: 'white',
    },

    categoryTitle: {
        height: 100,
        width: 920,
        backgroundColor: 'white',
        paddingBottom: '2rem',
    }
}));
function CategoryPage() {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    return (
        <div>
            <Grid container className={classes.root}>
                <Grid item md={2} justify="center" className={classes.categoryFilter}>
                    <Paper className={classes.paperFilter}>
                        <div style={{ fontWeight: 600, fontSize: '15px', }}>BỘ LỘC SẢN PHẨM</div>
                        <div>
                        
                                <Checkbox
                                    color="danger"
                                    inputProps={{ 'aria-label': 'checkbox with default color' }}
                                />
                        
                            <label>Voucher Shop đến 50%</label>

                        </div>
                    </Paper>


                </Grid>
                <Grid item container md={10} justify="center" spacing={2}>
                    <Grid item className={classes.categoryTitle}>
                        <Paper />
                    </Grid>
                    <Grid item >
                        <Grid container justify="center" spacing={spacing}>
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((value) => (
                                <Grid key={value} item>
                                    <Paper className={classes.paper} />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </div>
    )
}

export default CategoryPage