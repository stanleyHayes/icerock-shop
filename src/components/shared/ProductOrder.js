import React from "react";
import {Card, CardContent, CardMedia, Grid, makeStyles} from "@material-ui/core";

const ProductOrder = ({product}) => {

    const {price, name, image, quantity} = product;


    const useStyles = makeStyles({
        image: {
            height: "100%"
        },
        gridItem: {
            flexGrow: 1
        }
    });

    const classes = useStyles();

    return (
        <div className="shadow">
            <Card
                elevation={0}
                raised={false}
                variant="outlined">

                <CardContent>
                    <Grid container={true} spacing={3} justify="space-between">
                        <Grid className={classes.gridItem} item={true} xs={5}>
                            <CardMedia className={classes.image} component="img" src={image}/>
                        </Grid>

                        <Grid className={classes.gridItem} item={true} xs={7}>
                            <p className="uppercase font-weight-bold grey-text font-size-medium">{name}</p>
                            <p className="uppercase grey-text font-size-small">{quantity}</p>
                            <p className="uppercase grey-text font-size-small">{price} GHS</p>
                        </Grid>
                    </Grid>

                </CardContent>

            </Card>
        </div>
    )
}

export default ProductOrder;
