import React, {useState} from "react";
import Layout from "../../components/layout/Layout";
import {
    CardContent,
    Container,
    Grid,
    Card,
    makeStyles,
    Button,
    LinearProgress, Divider, Hidden
} from "@material-ui/core";
import {Rating, ToggleButton, ToggleButtonGroup} from "@material-ui/lab";
import Review from "../../components/shared/Review";
import ImageGallery from "react-image-gallery";
import {connect} from "react-redux";
import CreateReview from "../../components/shared/CreateReview";
import {ChevronLeft, ChevronRight} from "@material-ui/icons";

function ProductDetailPage({product, loading}) {


    const useStyles = makeStyles(theme => {
        return {
            container: {
                minHeight: "100vh",
                backgroundColor: "#eeeeee",
                paddingTop: 30,
                paddingBottom: 30
            },
            noReviews: {
                minHeight: "30vh"
            },
            editButton: {
                paddingTop: 6,
                paddingBottom: 6,
                backgroundColor: "darkblue",
                fontFamily: "Poppins",
                fontWeight: "bold",
                color: "white"
            },
            writeReviewButton: {
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
            },
            gridContainer: {
                marginTop: 32
            },
            addToCartButton: {
                fontWeight: "bold",
                fontFamily: "Poppins",
                color: "white",
                backgroundColor: "darkgreen",
                '&:hover': {
                    backgroundColor: "white",
                    color: "darkgreen"
                }
            },
            divider: {
                marginTop: 16,
                marginBottom: 16
            }
        }
    });

    const [open, setOpen] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const handleDecreaseClick = () => {
        setQuantity(prevState => prevState - 1);
    }

    const handleIncreaseClick = () => {
        setQuantity(prevState => prevState + 1);
    }

    const handleAddClick = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const classes = useStyles();

    const {reviews, name, status, summary, averageRating, price, images} = product;

    return (
        <Layout>
            <div className={classes.container}>
                {loading && <LinearProgress variant="query"/>}
                <Container>
                    <Grid container={true}>
                        <Grid item={true} xs={12}>
                            <p className="uppercase margin-vertical-large sub-header">Product Detail</p>
                        </Grid>
                    </Grid>

                    <Grid container={true} justify="center" spacing={4}>

                        <Grid item={true} xs={12} md={6} lg={6}>
                            <ImageGallery
                                autoPlay={true}
                                items={images}
                                infinite={true}
                                showBullets={true}
                                useTranslate3D={true}
                                thumbnailPosition="bottom"
                                showFullscreenButton={true}
                                showThumbnails={true}
                            />
                        </Grid>

                        <Grid item={true} xs={12} md={6} lg={6} container={true}>
                            <Card elevation={0} variant="outlined" raised={false}>
                                <CardContent>

                                    <Hidden lgUp={true}>
                                        <div>
                                            <Grid container={true} spacing={2} justify="space-around"
                                                  alignItems="center">
                                                <Grid item={true} xs={4}>
                                                    <Rating
                                                        readOnly={true}
                                                        value={averageRating}
                                                        max={5}
                                                        precision={.1}
                                                        size="small"
                                                    />
                                                </Grid>
                                                <Grid item={true} xs={4}>
                                                    <p className="font-size-small text">{reviews.length} reviews</p>
                                                </Grid>

                                                <Grid item={true} xs={4}>
                                                    <Button
                                                        fullWidth={true}
                                                        className={classes.writeReviewButton}
                                                        onClick={handleAddClick}
                                                        variant="text"
                                                        size="small">
                                                        Review
                                                    </Button>
                                                </Grid>

                                            </Grid>
                                        </div>
                                    </Hidden>

                                    <Hidden mdDown={true}>
                                        <div>
                                            <Grid container={true} spacing={2} justify="space-around"
                                                  alignItems="center">
                                                <Grid item={true} xs={4}>
                                                    <Rating
                                                        readOnly={true}
                                                        value={averageRating}
                                                        max={5}
                                                        precision={.1}
                                                        size="large"
                                                    />
                                                </Grid>
                                                <Grid item={true} xs={4}>
                                                    <p className="font-size-small text">{reviews.length} reviews</p>
                                                </Grid>

                                                <Grid item={true} xs={4}>
                                                    <Button
                                                        fullWidth={true}
                                                        className={classes.writeReviewButton}
                                                        onClick={handleAddClick}
                                                        variant="text"
                                                        size="small">
                                                        Write a review
                                                    </Button>
                                                </Grid>

                                            </Grid>
                                        </div>
                                    </Hidden>

                                    <p className="font-size-medium text font-weight-bold">{name}</p>

                                    <p className="font-size-small text">{summary}</p>

                                    <p className="font-size-small text">{status}</p>

                                    <p className="font-size-small text">{price} GHS</p>

                                    <div className="text-align-center">
                                        <ToggleButtonGroup size="small">
                                            <ToggleButton
                                                size="small"
                                                onClick={handleDecreaseClick}
                                                disabled={quantity === 0}>
                                                <ChevronLeft/>
                                            </ToggleButton>
                                            <ToggleButton>
                                                <p className="font-weight-bold font-size-small text">{quantity}</p>
                                            </ToggleButton>
                                            <ToggleButton
                                                size="small"
                                                onClick={handleIncreaseClick}>
                                                <ChevronRight/>
                                            </ToggleButton>
                                        </ToggleButtonGroup>
                                    </div>

                                    <div>
                                        <p className="font-size-small font-weight-bold">Sizes</p>
                                    </div>

                                    <Divider className={classes.divider} variant="fullWidth"/>

                                    <div className="text-align-center margin-vertical-large">
                                        <Button
                                            className={classes.addToCartButton}
                                            onClick={handleAddClick}
                                            variant="outlined"
                                            size="large">
                                            Add to Cart
                                        </Button>
                                    </div>

                                </CardContent>
                            </Card>
                        </Grid>

                    </Grid>

                    <Grid container={true} spacing={2} className={classes.gridContainer}>
                        {
                            (!reviews.length) ? (
                                <Grid container={true}>
                                    <Grid item={true} xs={12} className={classes.noIssues}>
                                        <p className="text-align-center uppercase font-size-small font-weight-bold">
                                            No product reviews
                                        </p>
                                    </Grid>
                                </Grid>
                            ) : (
                                reviews.map((review, index) => {
                                    return (
                                        <Grid item={true} xs={12} md={4} key={index}>
                                            <div className="shadow">
                                                <Review review={review}/>
                                            </div>
                                        </Grid>
                                    )
                                })
                            )
                        }
                    </Grid>

                    <CreateReview open={open} handleClose={handleClose}/>
                </Container>
            </div>
        </Layout>
    )
}

const mapStateToProps = state => {
    return {
        product: state.products.product,
        loading: state.products.loading
    }
}

export default connect(mapStateToProps)(ProductDetailPage);
