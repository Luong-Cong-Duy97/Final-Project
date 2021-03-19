import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import { FormControl, InputLabel, Grid } from '@material-ui/core';
import AcUnitSharpIcon from '@material-ui/icons/AcUnitSharp';
import ArrowForwardIosSharpIcon from '@material-ui/icons/ArrowForwardIosSharp';
import { mdiCellphone, mdiGenderFemale, mdiGenderMale, mdiLipstick, mdiShoeSneaker, mdiWatch  } from '@mdi/js';
import Icon from '@mdi/react';
const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,

    },
    menuButton: {
        marginRight: theme.spacing(1),
        marginLeft: theme.spacing(1),

    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        display: 'flex',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 1),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.8),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '50%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(0),
            width: '50%',
        },
        [theme.breakpoints.up('md')]: {
            marginLeft: theme.spacing(0),
            width: '70%',
        },
    },
    searchIcon: {
        height: 'auto',
        width: '10rem',
        borderRadius: theme.shape.borderRadius,

        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
        backgroundColor: 'white',

    },
    inputRoot: {
        color: 'black',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(1)}px)`,
        transition: theme.transitions.create('width'),
        width: '90%',
        [theme.breakpoints.up('md')]: {
            width: '100ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    buttonLogin: {
        marginLeft: theme.spacing(2),
        backgroundColor: 'white',
        color: 'black',
    },
    category:{
        '&:hover': {
            color:'red',
        },
    },
    iconHover:{
        '&:hover': {
            color:'red',
        },
    }
}));

export default function TopNavigation() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      }

      const handleClose = () => {
        setAnchorEl(null);
      } 
    const menuId = 'search-category';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleClose}
            style = {{marginTop: '40px'}}
            MenuListProps={{ onMouseLeave: handleClose }}

        >
            <MenuItem onClick={handleClose}>
                <Grid className={classes.category} container spacing={3}>
                    <Grid item md={2}>
                        <Icon  path = {mdiGenderFemale}
                            title="User Profile"
                            size={1}
                            color="black"
                            onMouseOver="this.style.color='red';"
                        />
                    </Grid>
                    <Grid item md={8}>
                        <Link to='/category'>Thoi trang nu</Link>
                    </Grid>
                    <Grid item md={2}>
                        <ArrowForwardIosSharpIcon/>
                    </Grid>      
                </Grid>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <Grid className={classes.category} container spacing={3}>
                    <Grid item md={2}>
                        <Icon  path = {mdiGenderMale}
                            title="User Profile"
                            size={1}
                            color="black"
                        />
                    </Grid>
                    <Grid item md={8}>
                        Thời trang nam
                    </Grid>
                    <Grid item md={2}>
                        <ArrowForwardIosSharpIcon/>
                    </Grid>      
                </Grid>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <Grid className={classes.category} container spacing={3}>
                    <Grid item md={2}>
                        <Icon path = {mdiLipstick}
                            title="User Profile"
                            size={1}
                            color="black"
                        />
                    </Grid>
                    <Grid item md={8}>
                        Sức khỏe - Làm đẹp
                    </Grid>
                    <Grid item md={2}>
                        <ArrowForwardIosSharpIcon/>
                    </Grid>      
                </Grid>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <Grid className={classes.category} container spacing={3}>
                    <Grid item md={2}>
                        <Icon  path = {mdiShoeSneaker}
                            title="User Profile"
                            size={1}
                            color="black"
                        />
                    </Grid>
                    <Grid item md={8}>
                        Giày dép - Túi sách
                    </Grid>
                    <Grid item md={2}>
                        <ArrowForwardIosSharpIcon/>
                    </Grid>      
                </Grid>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <Grid className={classes.category} container spacing={3}>
                    <Grid item md={2}>
                        <Icon  path = {mdiWatch}
                            title="User Profile"
                            size={1}
                            color="black"
                        />
                    </Grid>
                    <Grid item md={8}>
                        Đồng hồ - Trang sức
                    </Grid>
                    <Grid item md={2}>
                        <ArrowForwardIosSharpIcon/>
                    </Grid>      
                </Grid>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <Grid className={classes.category} container spacing={3}>
                    <Grid item md={2}>
                        <Icon  path = {mdiCellphone}
                            title="User Profile"
                            size={1}
                            color="black"
                        />
                    </Grid>
                    <Grid item md={8}>
                        Điện thoai - Laptop
                    </Grid>
                    <Grid item md={2}>
                        <ArrowForwardIosSharpIcon/>
                    </Grid>      
                </Grid>
            </MenuItem>
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar style={{ backgroundColor: "#ee2624" }}>
                    <Typography style={{ fontWeight: "1000" }} className={classes.title} variant="h6" noWrap>
                        Sendo
                    </Typography>
                    <IconButton
                        edge="end"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                        onMouseOver={handleClick}
                        disableRipple
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className={classes.search}>

                        <InputBase
                            placeholder="Tìm kiếm trên Sendo..."
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                        <div className={classes.searchIcon}>
                            <IconButton >
                                <SearchIcon />
                            </IconButton>
                        </div>
                    </div>



                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <ShoppingBasketIcon />
                            </Badge>
                        </IconButton>

                        <Button className={classes.buttonLogin} variant="contained" color="default">
                            Đăng nhập
                        </Button>
                    </div>
                    
                </Toolbar>
            </AppBar>
            {renderMenu}
        </div>
    );
}