import React, {useState} from "react";
import Layout from "../../components/layout/Layout";
import {Container, Grid, makeStyles, Divider, MenuItem, Select, Card, CardContent, TextField, Button} from "@material-ui/core";
import {connect} from "react-redux";
import Order from "../../components/shared/Order";
import {Pagination} from "@material-ui/lab";
import {Search} from "@material-ui/icons";

function OrdersPage({orders}) {

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
        }
    });

    const classes = useStyles();

    const [sort, setSort] = useState("desc");
    const [product, setProduct] = useState("all");
    const [status, setStatus] = useState("all");
    const [page, setPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");

    // let query = `?sort=createdAt:${sort}${type === "all"? "": `&type=${type}`}${status === "all"? "": `&status=${status}`}&page=${page}`;

    const handleStatusChange = (event) => {
        setStatus(event.target.value);
    }

    const handleProductChange = (event) => {
        setProduct(event.target.value);
    }

    const handleSortChange = (event) => {
        setSort(event.target.value);
    }

    const handlePageChange = (event, page) => {
        setPage(page);
    }

    const handleSearchClicked = (event) => {
        event.preventDefault();
    }

    const handleSearchQueryChange = (event) => {
        setSearchQuery(event.target.value);
    }

    return (
        <Layout>
            <div className="padding-vertical-huge">
                <Container>
                    <Grid container={true} spacing={3} alignItems="center">
                        <Grid item={true} xs={12} md={6} lg={5}>
                            <p className="uppercase margin-vertical-large sub-header">Orders</p>
                        </Grid>

                        <Grid item={true} xs={7} md={5}>
                            <TextField
                                placeholder="Search Order ID"
                                label="Search"
                                onChange={handleSearchQueryChange}
                                fullWidth={true}
                                variant="outlined"
                                value={searchQuery}
                                margin="dense"
                                name="search"
                            />
                        </Grid>

                        <Grid item={true} xs={5} md={2}>
                            <Button
                                onClick={handleSearchClicked}
                                className={classes.searchButton}
                                size="small"
                                variant="outlined"
                                fullWidth={true}
                                endIcon={<Search />}>
                                Search
                            </Button>
                        </Grid>
                    </Grid>

                    <Divider className={classes.divider} variant="fullWidth"/>
                    <Card variant="outlined" elevation={0} raised={false}>
                        <CardContent>
                            <Grid container={true} spacing={2}>
                                <Grid item={true} xs={12}>
                                    <p className="font-weight-bold font-size-medium uppercase">Filters</p>
                                </Grid>
                                <Grid item={true} xs={6} md={4}>
                                    <p className="font-weight-bold font-size-small uppercase">Status</p>
                                    <Select
                                        fullWidth={true}
                                        variant="outlined"
                                        margin="dense"
                                        label="Order Status"
                                        onChange={handleStatusChange}
                                        value={status}>
                                        <MenuItem value="all">
                                            All
                                        </MenuItem>
                                        <MenuItem value="PREPARED">
                                            Prepared
                                        </MenuItem>
                                        <MenuItem value="TRANSIT">
                                            In Transit
                                        </MenuItem>
                                        <MenuItem value="DELIVERED">
                                            Delivered
                                        </MenuItem>
                                    </Select>
                                </Grid>

                                <Grid item={true} xs={6} md={4}>
                                    <p className="font-weight-bold font-size-small uppercase">Product</p>
                                    <Select
                                        fullWidth={true}
                                        variant="outlined"
                                        margin="dense"
                                        label="Product"
                                        onChange={handleProductChange} value={product}>
                                        <MenuItem value="all">
                                            All
                                        </MenuItem>
                                        <MenuItem value="SACHET">
                                            Sachet
                                        </MenuItem>
                                        <MenuItem value="BOTTLE">
                                            Bottle
                                        </MenuItem>
                                        <MenuItem value="GALLON">
                                            Gallon
                                        </MenuItem>
                                    </Select>
                                </Grid>

                                <Grid item={true} xs={12} md={4}>
                                    <p className="font-weight-bold font-size-small uppercase">Sort</p>
                                    <Select
                                        fullWidth={true}
                                        variant="outlined"
                                        margin="dense"
                                        label="Sort Order"
                                        onChange={handleSortChange} value={sort}>
                                        <MenuItem value="desc">
                                            Descending
                                        </MenuItem>
                                        <MenuItem value="asc">
                                            Ascending
                                        </MenuItem>
                                    </Select>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <Divider className={classes.divider} variant="fullWidth"/>


                    <Grid container={true} spacing={3}>
                        {
                            (!orders.length) ? (
                                <Grid container={true} item={true} xs={12} alignItems="center" justify="center">
                                    <Grid item={true}>
                                        <p className="uppercase font-weight-bold font-size-medium grey-text">
                                            No Orders Available
                                        </p>
                                    </Grid>
                                </Grid>
                            ) : (
                                orders.map((order, index) => {
                                    return (
                                        <Grid key={index} item={true} xs={12} md={6} lg={4}>
                                            <Order order={order}/>
                                        </Grid>
                                    )
                                })
                            )
                        }
                    </Grid>

                    <div className="padding-vertical-large">
                        <Container>
                            <Grid container={true} justify="center">
                                <Grid item={true} xs={12} md={6}>
                                    <Pagination
                                        variant="outlined"
                                        count={5}
                                        defaultPage={1}
                                        page={page}
                                        size="medium"
                                        onChange={handlePageChange}
                                    />
                                </Grid>
                            </Grid>
                        </Container>
                    </div>

                </Container>

            </div>
        </Layout>
    )
}

const mapStateToProps = state => {
    return {
        orders: state.orders.orders,
        loading: state.orders.loading
    }
}

export default connect(mapStateToProps) (OrdersPage);
