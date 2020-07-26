import React, {useState} from "react";
import Header from "../navigation/Header";
import {
    Drawer,
    Grid,
    Hidden
} from "@material-ui/core";

import DrawerContent from "../navigation/DrawerContent";
import {makeStyles} from "@material-ui/styles";
import Footer from "../navigation/Footer";

function Layout({children}) {

    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = (open) => {
        setDrawerOpen(open);
    }

    const handleDrawerClose = () => {
        setDrawerOpen(false)
    }

    const useStyles = makeStyles(theme => {
        return {
            grid: {
                marginTop: 16,
                marginBottom: 16
            },
            root: {
                backgroundColor: "#eeeeee",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column"
            },
            content: {
                flexGrow: 1,
                paddingTop: 50
            }
        }
    })

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div>
                <Header handleDrawerToggle={handleDrawerToggle}/>
            </div>
            <div className={classes.content}>
                <Hidden lgUp={true}>
                    <Drawer
                        className={classes.grid}
                        variant="temporary"
                        onClose={handleDrawerClose}
                        anchor="left"
                        elevation={16}
                        open={drawerOpen}>
                        <DrawerContent handleDrawerClose={handleDrawerClose}/>
                    </Drawer>
                </Hidden>
                <Grid container={true}>
                    <Grid item={true} xs={12} lg={12}>
                        {children}
                    </Grid>
                </Grid>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Layout;
