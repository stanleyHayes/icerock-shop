import React, {useState} from "react";
import Layout from "../../components/layout/Layout";
import {
    Card,
    CardContent,
    Container,
    Divider,
    Grid,
    makeStyles,
    MenuItem,
    Select
} from "@material-ui/core";
import {connect} from "react-redux";
import Information from "../../components/shared/Information";
import {Pagination} from "@material-ui/lab";

function WhatsNewPage({news}) {

    const useStyles = makeStyles({
        divider: {
            marginTop: 16,
            marginBottom: 16
        },
        createButton: {
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
    const [status, setStatus] = useState("all");
    const [page, setPage] = useState(1);

    // let query = `?sort=createdAt:${sort}${type === "all"? "": `&type=${type}`}${status === "all"? "": `&status=${status}`}&page=${page}`;

    const handleStatusChange = (event) => {
        setStatus(event.target.value);
    }

    const handleSortChange = (event) => {
        setSort(event.target.value);
    }

    const handlePageChange = (event, page) => {
        setPage(page);
    }

    return (
        <Layout>
            <div className="padding-vertical-huge">
                <Container>
                    <Grid
                        container={true}
                        spacing={3}
                        justify="space-between"
                        alignItems="center">
                        <Grid item={true} xs={12}>
                            <p className="uppercase margin-vertical-large sub-header">What's new</p>
                        </Grid>
                    </Grid>

                    <Divider className={classes.divider} variant="fullWidth"/>
                    <Card variant="outlined" elevation={0} raised={false}>
                        <CardContent>
                            <Grid container={true} spacing={2}>
                                <Grid item={true} xs={12}>
                                    <p className="font-weight-bold font-size-medium uppercase">Filters</p>
                                </Grid>
                                <Grid item={true} xs={12} md={6}>
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
                                        <MenuItem value="URGENT">
                                            Urgent
                                        </MenuItem>
                                        <MenuItem value="CASUAL">
                                            Casual
                                        </MenuItem>
                                    </Select>
                                </Grid>

                                <Grid item={true} xs={12} md={6}>
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
                            (!news.length) ? (
                                <Grid
                                    container={true}
                                    item={true} xs={12}
                                    alignItems="center"
                                    justify="center">
                                    <Grid item={true}>
                                        <p className="uppercase font-weight-bold font-size-medium grey-text">
                                            No Information Available
                                        </p>
                                    </Grid>
                                </Grid>
                            ) : (
                                news.map((info, index) => {
                                    return (
                                        <Grid key={index} item={true} xs={12} md={6} lg={4}>
                                            <Information info={info}/>
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
        news: state.news.news,
        loading: state.news.loading
    }
}

export default connect(mapStateToProps)(WhatsNewPage);
