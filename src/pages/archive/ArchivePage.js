import React, {useState} from "react";
import Layout from "../../components/layout/Layout";
import {
    Container,
    Grid,
    makeStyles,
    Divider,
    MenuItem,
    Select,
    Card,
    CardContent,
    TextField,
    Button
} from "@material-ui/core";
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
    const [day, setDay] = useState("all");
    const [month, setMonth] = useState("all");
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

    const handleDayChange = (event) => {
        setDay(event.target.value);
    }

    const handleMonthChange = (month) => {
        setMonth(month);
    }


    const handleSearchClicked = (event) => {
        event.preventDefault();
    }

    const handleSearchQueryChange = (event) => {
        setSearchQuery(event.target.value);
    }

    const getDaysCountByMonth = month => {
        switch (month) {
            case "1":
                return 31;
            case "2":
                return 28;
            case "3":
                return 31;
            case "4":
                return 30;
            case "5":
                return 31;
            case "6":
                return 30;
            case "7":
                return 31;
            case "8":
                return 31;
            case "9":
                return 30;
            case "10":
                return 31;
            case "11":
                return 30;
            case "12":
                return 31;
            default:
                return 30;
        }
    }

    return (
        <Layout>
            <div className="padding-vertical-huge">
                <Container>
                    <Grid container={true} spacing={3} alignItems="center">
                        <Grid item={true} xs={12} md={6} lg={5}>
                            <p className="uppercase margin-vertical-large sub-header">Archive</p>
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
                                endIcon={<Search/>}>
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

                                <Grid item={true} xs={6}>
                                    <p className="font-weight-bold font-size-small uppercase">Month</p>
                                    <Select
                                        fullWidth={true}
                                        variant="outlined"
                                        margin="dense"
                                        label="Product"
                                        onChange={handleMonthChange}
                                        value={month}>
                                        <MenuItem value="all">
                                            All
                                        </MenuItem>
                                        <MenuItem value="1">
                                            January
                                        </MenuItem>
                                        <MenuItem value="2">
                                            February
                                        </MenuItem>
                                        <MenuItem value="3">
                                            March
                                        </MenuItem>
                                        <MenuItem value="4">
                                            April
                                        </MenuItem>
                                        <MenuItem value="5">
                                            May
                                        </MenuItem>
                                        <MenuItem value="6">
                                            June
                                        </MenuItem>
                                        <MenuItem value="7">
                                            July
                                        </MenuItem>
                                        <MenuItem value="8">
                                            August
                                        </MenuItem>
                                        <MenuItem value="9">
                                            September
                                        </MenuItem>
                                        <MenuItem value="10">
                                            October
                                        </MenuItem>
                                        <MenuItem value="11">
                                            November
                                        </MenuItem>
                                        <MenuItem value="12">
                                            December
                                        </MenuItem>
                                    </Select>
                                </Grid>

                                <Grid item={true} xs={6}>
                                    <p className="font-weight-bold font-size-small uppercase">Day</p>
                                    <Select
                                        fullWidth={true}
                                        variant="outlined"
                                        margin="dense"
                                        label="Order day"
                                        onChange={handleDayChange}
                                        value={day}>
                                        <MenuItem value="all">
                                            All
                                        </MenuItem>
                                        <MenuItem value="1">
                                            1
                                        </MenuItem>
                                        <MenuItem value="2">
                                            2
                                        </MenuItem>
                                        <MenuItem value="3">
                                            3
                                        </MenuItem>
                                        <MenuItem value="4">
                                            4
                                        </MenuItem>
                                        <MenuItem value="5">
                                            5
                                        </MenuItem>
                                        <MenuItem value="6">
                                            6
                                        </MenuItem>
                                        <MenuItem value="7">
                                            7
                                        </MenuItem>
                                        <MenuItem value="8">
                                            8
                                        </MenuItem>
                                        <MenuItem value="9">
                                            9
                                        </MenuItem>
                                        <MenuItem value="10">
                                            10
                                        </MenuItem>
                                        <MenuItem value="11">
                                            11
                                        </MenuItem>
                                        <MenuItem value="12">
                                            12
                                        </MenuItem>
                                        <MenuItem value="13">
                                            13
                                        </MenuItem>
                                        <MenuItem value="14">
                                            14
                                        </MenuItem>
                                        <MenuItem value="15">
                                            15
                                        </MenuItem>
                                        <MenuItem value="16">
                                            16
                                        </MenuItem>
                                        <MenuItem value="17">
                                            17
                                        </MenuItem>
                                        <MenuItem value="18">
                                            18
                                        </MenuItem>
                                        <MenuItem value="19">
                                            19
                                        </MenuItem>
                                        <MenuItem value="20">
                                            20
                                        </MenuItem>
                                        <MenuItem value="21">
                                            21
                                        </MenuItem>
                                        <MenuItem value="22">
                                            22
                                        </MenuItem>
                                        <MenuItem value="23">
                                            23
                                        </MenuItem>
                                        <MenuItem value="24">
                                            24
                                        </MenuItem>
                                        <MenuItem value="25">
                                            25
                                        </MenuItem>
                                        <MenuItem value="26">
                                            26
                                        </MenuItem>
                                        <MenuItem value="27">
                                            27
                                        </MenuItem>
                                        <MenuItem value="28">
                                            28
                                        </MenuItem>
                                        <MenuItem value="29">
                                            29
                                        </MenuItem>
                                        <MenuItem value="30">
                                            30
                                        </MenuItem>
                                        <MenuItem value="31">
                                            31
                                        </MenuItem>
                                    </Select>
                                </Grid>

                                <Grid item={true} xs={6}>
                                    <p className="font-weight-bold font-size-small uppercase">Product</p>
                                    <Select
                                        fullWidth={true}
                                        variant="outlined"
                                        margin="dense"
                                        label="Product"
                                        onChange={handleProductChange}
                                        value={product}>
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

                                <Grid item={true} xs={6}>
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
                                        color="primary"
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

export default connect(mapStateToProps)(OrdersPage);
