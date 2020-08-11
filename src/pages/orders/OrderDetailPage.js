import React, {useState} from "react";
import Layout from "../../components/layout/Layout";
import {
    CardContent,
    Container,
    Grid,
    Card,
    CardHeader,
    Avatar,
    Button,
    makeStyles,
    Divider,
    Paper
} from "@material-ui/core";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import ProductOrder from "../../components/shared/ProductOrder";
import {Add} from "@material-ui/icons";
import Issue from "../../components/shared/Issue";
import CreateIssue from "../../components/shared/CreateIssue";


function OrderDetailPage({order}) {

    const {orderId} = useParams();

    const useStyles = makeStyles({
        divider: {
            marginTop: 16,
            marginBottom: 16
        },
        searchButton: {
            paddingTop: 6,
            paddingBottom: 6,
            backgroundColor: "darkblue",
            fontFamily: "Poppins",
            fontWeight: "bold",
            color: "white"
        },
        container: {
            minHeight: "100vh",
            backgroundColor: "#fefefe",
            paddingTop: 30,
            paddingBottom: 30
        },
        noIssues: {
            minHeight: "30vh"
        }, createButton: {
            paddingTop: 6,
            paddingBottom: 6,
            backgroundColor: "darkblue",
            fontFamily: "Poppins",
            fontWeight: "bold",
            color: "white"
        },
        gridContainer: {
            marginTop: 32,
            marginBottom: 32
        }
    });

    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const handleAddClick = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    console.log(orderId);

    const {products, createdAt, issues, status, totalPrice, orderID} = order;

    return (
        <Layout>
            <div className={classes.container}>
                <Container>
                    <Grid className={classes.gridContainer} container={true} spacing={2}>
                        <Grid item={true} xs={12} >
                            <p className="sub-header uppercase text">Order Detail</p>
                        </Grid>
                        <Grid item={true} xs={12} md={3}>
                            <Paper variant="outlined">
                                <p className="text-align-center font-weight-bold font-size-small uppercase text">Order ID</p>
                                <p className="text-align-center font-size-small text">{orderID}</p>
                            </Paper>
                        </Grid>
                        <Grid item={true} xs={12} md={3}>
                            <Paper variant="outlined">
                                <p className="text-align-center font-weight-bold font-size-small uppercase text">Total Price</p>
                                <p className="text-align-center font-size-small text">{totalPrice} GHS</p>
                            </Paper>
                        </Grid>
                        <Grid item={true} xs={12} md={3}>
                            <Paper variant="outlined">
                                <p className="text-align-center font-weight-bold font-size-small uppercase text">Status</p>
                                <p className="text-align-center font-size-small text">{status}</p>
                            </Paper>
                        </Grid>
                        <Grid item={true} xs={12} md={3}>
                            <Paper variant="outlined">
                                <p className="text-align-center font-weight-bold font-size-small uppercase text">Order Date</p>
                                <p className="text-align-center font-size-small text">{new Date(createdAt).toDateString()}</p>
                            </Paper>
                        </Grid>
                    </Grid>

                    <Grid container={true} spacing={2}>
                        <Grid item={true} xs={12} >
                            <p className="sub-header uppercase text">Order Products</p>
                        </Grid>
                        {
                            products.map((product, index) => {
                                return (
                                    <Grid item={true} key={index} xs={12} md={6} lg={4}>
                                        <div className="shadow">
                                            <ProductOrder product={product}/>
                                        </div>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>


                    <Grid className={classes.gridContainer} container={true} spacing={3} alignItems="center">
                        <Grid item={true} xs={8}>
                            <p className="uppercase margin-vertical-large sub-header">Issues</p>
                        </Grid>

                        <Grid item={true} xs={4}>
                            <Button
                                fullWidth={true}
                                onClick={handleAddClick}
                                className={classes.createButton}
                                size="small"
                                variant="outlined"
                                endIcon={<Add/>}>
                                Add
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid className={classes.gridContainer} container={true} spacing={2}>
                        {
                            (!issues.length) ? (
                                <Grid container={true}>
                                    <Grid item={true} xs={12} className={classes.noIssues}>
                                        <p className="text-align-center uppercase font-size-small font-weight-bold">
                                            No issues with this order
                                        </p>
                                    </Grid>
                                </Grid>
                            ) : (
                                issues.map((issue, index) => {
                                    return (
                                        <Grid item={true} xs={12} md={6} lg={4} key={index}>
                                            <div className="shadow">
                                                <Issue issue={issue}/>
                                            </div>
                                        </Grid>
                                    )
                                })
                            )
                        }
                    </Grid>

                    <CreateIssue open={open} handleClose={handleClose}/>
                </Container>
            </div>
        </Layout>
    )
}


const mapStateToProps = state => {
    return {
        order: state.orders.order,
        loading: state.orders.loading
    }
}

export default connect(mapStateToProps)(OrderDetailPage);
