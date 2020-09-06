import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      color: '#ffffff'
    },
  }));

const AppNav = () => {
    const classes = useStyles();
    return (
        <nav className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title} >
                        <NavLink to="/">Home</NavLink>
                    </Typography>
                    <Typography variant="h6" className={classes.title} >
                        <NavLink to="/about">About</NavLink>
                    </Typography>
                    <Typography variant="h6" className={classes.title} >
                        <NavLink to="/contact">Contact</NavLink>
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            
        </nav>

    )
}
export default withRouter(AppNav);