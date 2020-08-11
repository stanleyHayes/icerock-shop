import React, {useState} from "react";
import Layout from "../../components/layout/Layout";
import {Container, Grid, Button, makeStyles} from "@material-ui/core";
import {Pagination} from "@material-ui/lab";
import {connect} from "react-redux";
import Review from "../../components/shared/Review";
import {Add} from "@material-ui/icons";
import CreateReview from "../../components/shared/CreateReview";

const ReviewsPage = ({reviews, loading}) => {

    const [page, setPage] = useState(1);
    const [open, setOpen] = useState(false);

    const handleAddClick = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handlePageChange = (event, page) => {
        setPage(page);
    }

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
            color: "white",
            '&:hover': {
                color: "darkblue",
                backgroundColor: "white"
            }
        }
    });

    const classes = useStyles();


    return (
        <Layout>
            <div className="padding-vertical-huge">
                <Container>
                    <Grid container={true} spacing={3} alignItems="center">
                        <Grid item={true} xs={4} md={6} lg={8}>
                            <p className="uppercase margin-vertical-large sub-header">
                                Reviews
                            </p>
                        </Grid>
                        <Grid item={true} xs={8} md={6} lg={4}>
                            <Button
                                onClick={handleAddClick}
                                fullWidth={true}
                                className={classes.createButton}
                                size="small"
                                variant="outlined"
                                endIcon={<Add/>}>
                                Add Review
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container={true} spacing={3}>
                        {
                            (!reviews.length) ? (
                                <Grid container={true} item={true} xs={12} alignItems="center" justify="center">
                                    <Grid item={true}>
                                        <p className="uppercase font-weight-bold font-size-medium grey-text">
                                            No Reviews Available
                                        </p>
                                    </Grid>
                                </Grid>
                            ) : (
                                reviews.map((review, index) => {
                                    return (
                                        <Grid key={index} item={true} xs={12} md={6} lg={4}>
                                            <Review review={review}/>
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

                    <CreateReview open={open} handleClose={handleClose}/>

                </Container>
            </div>
        </Layout>
    )
}


const mapStateToProps = state => {
    return {
        reviews: state.reviews.reviews,
        loading: state.reviews.loading
    }
}

export default connect(mapStateToProps)(ReviewsPage);
