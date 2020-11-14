import React from 'react'
import { AppBar, Toolbar, makeStyles, createStyles, Theme } from '@material-ui/core'
import spacex from '../assets/spacex.png'

const useStyles = makeStyles((theme: Theme) => createStyles({
    app:{
        background: 'none',
    },
    root:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    appBarWrapper:{
        width: '80%',
        margin: '0 auto',
    },
}));

const Header = () => {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <AppBar className={classes.app} elevation={0}>
                <Toolbar className={classes.appBarWrapper}>
                    <img src={spacex} alt="spacex" height="100px" width="300px" />
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
