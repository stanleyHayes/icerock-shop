import React from "react";
import {
    Divider,
    Grid,
    Container,
    Avatar
} from "@material-ui/core";
import {Close} from "@material-ui/icons";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import "../../App.css";

function DrawerContent({handleDrawerClose}) {


    const useStyles = makeStyles(theme => {
        return {
            button: {
                textAlign: "center"
            },
            link: {
                color: "#777777",
                textDecoration: "none",
                fontFamily: 'Poppins'
            },
            avatar: {
                width: 150,
                height: 150,
            },
            avatarContainer: {
                display: "flex",
                justifyContent: "center",
                marginBottom: 32
            },
            gridContainer: {
                paddingTop: 32,
                paddingBottom: 32
            },
            root: {
                backgroundColor: "white",
                minHeight: "100vh",
                width: '90vw'
            },
            expandPanel: {
                backgroundColor: "white"
            },
            content: {
                paddingLeft: 32,
                paddingRight: 32
            },
            grid: {
                marginTop: 16
            },
            icon: {
                fontSize: 24
            }
        }
    });

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container>
                <Grid className={classes.grid} container={true} justify="flex-end" alignItems="center">
                    <Grid item={true} xs={1}>
                        <Close className={classes.icon} onClick={() => handleDrawerClose()}/>
                    </Grid>
                </Grid>
                <Grid
                    container={true}
                    justify="center"
                    alignItems="flex-start">
                            <Grid item={true}>
                                    <Avatar className={classes.avatar} src={`${process.env.PUBLIC_URL}/logo512.png`}/>
                                <p className="text-align-center text font-size-medium uppercase font-weight-bold">Ice Rock</p>
                            </Grid>

                </Grid>

                <Grid className={classes.gridContainer} container={true} justify="flex-start">
                    <Grid item={true} xs={12}>
                        <div className={classes.content}>
                            <p>
                                <Link to="/"
                                      className={`${classes.button}  ${classes.link} center-align margin-vertical-small uppercase font-weight-bold`}>
                                    Dashboard
                                </Link>
                            </p>


                            <Divider variant="fullWidth"/>

                            <p>
                                <Link to="/whats-new"
                                      className={`${classes.button}  ${classes.link} center-align margin-vertical-small uppercase font-weight-bold`}>
                                    What's new
                                </Link>
                            </p>

                            <Divider variant="fullWidth"/>

                            <p>
                                <Link to="/products"
                                      className={`${classes.button}  ${classes.link} center-align margin-vertical-small uppercase font-weight-bold`}>
                                    Products
                                </Link>
                            </p>

                            <Divider variant="fullWidth"/>

                            <p>
                                <Link to="/cart"
                                      className={`${classes.button}  ${classes.link} center-align margin-vertical-small uppercase font-weight-bold`}>
                                    Cart
                                </Link>
                            </p>


                            <Divider variant="fullWidth"/>

                            <p>
                                <Link to="/orders"
                                      className={`${classes.button}  ${classes.link} center-align margin-vertical-small uppercase font-weight-bold`}>
                                    Orders
                                </Link>
                            </p>

                            <Divider variant="fullWidth"/>

                            <p>
                                <Link to="/reviews"
                                      className={`${classes.button}  ${classes.link} center-align margin-vertical-small uppercase font-weight-bold`}>
                                    Reviews
                                </Link>
                            </p>

                            <Divider variant="fullWidth"/>

                            <p>
                                <Link to="/profile"
                                      className={`${classes.button}  ${classes.link} center-align margin-vertical-small uppercase font-weight-bold`}>
                                    Profile
                                </Link>
                            </p>
                            <Divider variant="fullWidth"/>

                            <p>
                                <Link to="/account"
                                      className={`${classes.button}  ${classes.link} center-align margin-vertical-small uppercase font-weight-bold`}>
                                    Account
                                </Link>
                            </p>

                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
export default DrawerContent;
