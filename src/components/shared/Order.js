import React from "react";
import {
    Card,
    CardContent,
    Divider,
    CardHeader,
    CardActions,
    Button,
    Avatar,
    Chip
} from "@material-ui/core";
import {ArrowForward, CheckCircle, HourglassEmptyRounded} from "@material-ui/icons";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/styles";

const Order = ({order}) => {

    const useStyles = makeStyles(theme => {
        return {
            icon: {
                color: "darkblue"
            },
            link: {
                color: "darkblue",
                fontWeight: "bold"
            },
            button: {
                color: "darkblue",
                fontWeight: "bold",
                fontFamily: "Poppins"
            },
            chip: {
                marginLeft: 4,
                marginRight: 4,
                marginTop: 4,
                marginBottom: 4
            },
            logo: {
                width: 25,
                height: 25
            },
            completedIcon: {
                color: "darkgreen"
            },
            pendingIcon: {
                color: "darkorange"
            }
        }
    });

    const classes = useStyles();

    const {orderID, createdAt, products, status, completed} = order;

    const getProductAvatar = (name) => {
        switch (name) {
            case "Sachet Water":
                return `${process.env.PUBLIC_URL}/images/sachet.svg`;

            case "Bottled Water":
                return `${process.env.PUBLIC_URL}/images/water-bottle.svg`;

            case "Gallon Water":
                return `${process.env.PUBLIC_URL}/images/gallon.svg`;

            default:
                return `${process.env.PUBLIC_URL}/images/sachet.svg`;
        }
    }

    return (
        <div className="shadow">
            <Card
                elevation={0}
                raised={false}
                variant="outlined">

                <CardHeader
                    avatar={<Avatar> {completed ? <CheckCircle className={classes.completedIcon}/> : <HourglassEmptyRounded className={classes.pendingIcon}/>} </Avatar>}
                    title={orderID}
                    subheader={new Date(createdAt).toDateString()}
                />

                <Divider variant="fullWidth"/>

                <CardContent>
                    <p className="font-weight-bold font-size-small uppercase text">Status</p>
                    <p className="font-size-medium text">{status}</p>
                    <p className="font-size-medium text font-size-small">{products.length} Items</p>
                    <div>
                        {
                            products.map((product, index) => {
                                return (
                                    <Chip
                                        className={classes.chip}
                                        key={index}
                                        size="small"
                                        icon={
                                            <Avatar
                                                className={classes.logo}
                                                src={getProductAvatar(product.name)}/>
                                        }
                                        label={product.name}
                                        variant="default"/>
                                )
                            })
                        }
                    </div>
                </CardContent>
                <Divider variant="fullWidth"/>
                <CardActions>
                    <Button className={classes.button} endIcon={<ArrowForward className={classes.icon}/>} size="small"
                            fullWidth={true} variant="text">
                        <Link className="text-decoration-none" to={`/orders/${orderID}`}>
                            View Order
                        </Link>
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default Order;
