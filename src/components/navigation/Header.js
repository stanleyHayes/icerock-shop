import React from "react";
import {AppBar, Hidden} from "@material-ui/core";
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";
import {makeStyles} from "@material-ui/core/styles";

function Header({handleDrawerToggle}) {

    const useStyles = makeStyles(theme => {
        return {
            appbar: {
                backgroundColor: "white"
            }
        }
    })

    const classes = useStyles();

    return (
        <AppBar className={classes.appbar} variant="elevation" elevation={1} position="fixed" >
            <Hidden mdDown={true}>
                <DesktopHeader/>
            </Hidden>
            <Hidden lgUp={true}>
                <MobileHeader
                    handleDrawerToggle={handleDrawerToggle}/>
            </Hidden>
        </AppBar>
    )
}

export default Header;
