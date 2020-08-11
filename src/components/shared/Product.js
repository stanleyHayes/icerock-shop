import React from "react";
import {Card, CardActions, CardContent, CardMedia, Button, Divider} from "@material-ui/core";
import {Info} from "@material-ui/icons";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/styles";
import {Rating} from "@material-ui/lab";

const Product = ({product}) => {

    const useStyles = makeStyles(theme => {
        return {
            button: {
                fontWeight: "bold",
                fontFamily: "Poppins",
                color: "darkblue"
            },
            icon: {
                color: "darkblue"
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
            productImage: {
                height: 300
            }
        }
    });

    const classes = useStyles();

    const {price, averageRating, name, image, status} = product;

    return (
        <div className="shadow">
            <Card
                elevation={0}
                raised={false}
                variant="outlined">
                <CardMedia className={classes.productImage} component="img" src={image}/>
                <CardContent>
                    <p className="text-align-center text font-size-medium font-weight-bold">{name}</p>
                    <p className="text-align-center text font-size-small uppercase">{status}</p>
                    <p className="text-align-center text font-size-medium">{price} GHS</p>
                    <div className="text-align-center">
                        <Rating
                            readOnly={true}
                            value={averageRating}
                            max={5}
                            precision={.1}
                            size="medium"/>
                    </div>
                    <div className="text-align-center">
                        <Button variant="outlined"  className={classes.addToCartButton}>
                            Add to Cart
                        </Button>
                    </div>
                </CardContent>
                <Divider variant="fullWidth"/>
                <CardActions>
                    <Button
                        className={classes.button}
                        fullWidth={true}
                        endIcon={<Info className={classes.icon}/>}
                        size="small">
                        <Link
                            className="nav-link"
                            to={`/products/${name}`}>
                            View Product Details
                        </Link>
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default Product;
