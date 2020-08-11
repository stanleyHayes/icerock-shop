import React from "react";
import {Toolbar, Grid} from "@material-ui/core";
import {FavoriteBorderOutlined, Menu, ShoppingCart, VerifiedUser} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";
import {Link, useHistory} from "react-router-dom";

function MobileHeader({handleDrawerToggle}) {

    const handleClick = () => {
        handleDrawerToggle(true)
    }

    const useStyles = makeStyles(theme => {
        return {
            toolbar: {
                padding: 4
            },  logo: {
                height: 50
            },
            logoContainer: {
                textAlign: "center"
            },
            owner: {
                fontWeight: 900
            },
            icon: {
                color: "#333333",
                cursor: "pointer"
            }
        }
    });

    const classes = useStyles();

    const history = useHistory();

    const handleAccountClicked = () => {
        history.push('/account')
    }

    const handleFavoritesClicked = () => {
        history.push('/favorites')
    }


    const handleCartClicked = () => {
        history.push('/cart')
    }



    return (
        <Toolbar variant="regular" className={classes.toolbar}>

            <Grid
                container={true}
                alignItems="center"
                justify="space-around">
                <Grid
                    spacing={2}
                    xs={1}
                    container={true}
                    justify="flex-start"
                    item={true}>
                    <Grid item={true} xs={1}>
                        <Menu className={classes.icon} onClick={handleClick}/>
                    </Grid>
                </Grid>
                <Grid item={true} xs={7}>
                    <p className="uppercase text text-align-center font-size-small font-weight-bold">Ice Rock</p>
                </Grid>

                <Grid item={true} xs={1}>
                    <ShoppingCart className={classes.icon} onClick={handleCartClicked}  />
                </Grid>

                <Grid item={true} xs={1}>
                    <FavoriteBorderOutlined className={classes.icon}  onClick={handleFavoritesClicked}    />
                </Grid>
                <Grid item={true} xs={1}>
                    <VerifiedUser className={classes.icon}  onClick={handleAccountClicked}  />
                </Grid>
            </Grid>
        </Toolbar>
    )
}

export default MobileHeader;
