import React, {useState} from "react";
import Layout from "../../components/layout/Layout";
import {CardContent, Container, Grid, Card, CardHeader, Avatar, Button, makeStyles} from "@material-ui/core";
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
            backgroundColor: "#eeeeee",
            paddingTop: 30,
            paddingBottom: 30
        },
        noIssues: {
            minHeight: "30vh"
        },createButton: {
            paddingTop: 6,
            paddingBottom: 6,
            backgroundColor: "darkblue",
            fontFamily: "Poppins",
            fontWeight: "bold",
            color: "white"
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

    const {owner, products, createdAt, issues, status, totalPrice, orderID} = order;

    return (
        <Layout>
            <div className={classes.container}>
                <Container>
                    <Grid container={true} justify="center">
                        <Grid item={true} xs={12} md={7}>
                            <Card elevation={1} raised={true} square={true} variant="elevation">
                                <CardHeader
                                    title={owner.name}
                                    avatar={<Avatar src={owner.avatar}/>}
                                    subheader={new Date(createdAt).toDateString()}
                                />
                                <CardContent>
                                    <p className="font-weight-bold font-size-small uppercase text">Order ID</p>
                                    <p className="font-size-medium text">{orderID}</p>

                                    <p className="font-weight-bold font-size-small uppercase text">Total Price</p>
                                    <p className="font-size-medium text">{totalPrice} GHS</p>

                                    <p className="font-weight-bold font-size-small uppercase text">Status</p>
                                    <p className="font-size-medium text">{status}</p>

                                    <p className="font-weight-bold font-size-small uppercase text">Products</p>

                                    <Grid container={true} spacing={2}>
                                        {
                                            products.map((product, index) => {
                                                return (
                                                    <Grid item={true} key={index} xs={12} md={6}>
                                                        <div className="shadow">
                                                            <ProductOrder product={product}/>
                                                        </div>
                                                    </Grid>
                                                )
                                            })
                                        }
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item={true} xs={12} md={7}>
                            <Grid container={true} spacing={3} alignItems="center">
                                <Grid item={true} xs={8}>
                                    <p className="uppercase margin-vertical-large sub-header">Issues</p>
                                </Grid>

                                <Grid item={true} xs={3}>
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

                            <Grid container={true} spacing={2}>
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
                                                <Grid item={true} xs={12} md={6} xl={4} key={index}>
                                                    <div className="shadow">
                                                        <Issue issue={issue}/>
                                                    </div>
                                                </Grid>
                                            )
                                        })
                                    )
                                }
                            </Grid>
                        </Grid>
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

export default connect(mapStateToProps) (OrderDetailPage);
