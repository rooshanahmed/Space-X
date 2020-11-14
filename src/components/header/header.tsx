import React from 'react'
import { AppBar, Toolbar, makeStyles, createStyles, Theme } from '@material-ui/core'
import spacex from '../assets/spacex.png'

const useStyles = makeStyles((theme: Theme) => createStyles({}));

const Header = () => {
    // const classes = useStyles();
    
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <img src={spacex} alt="spacex" height="100px" width="300px" />
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
