import React from "react";
import {Card, CardContent, CardHeader, Avatar} from "@material-ui/core";

const ProductOrder = ({product}) => {

    const {price, name, image, quantity} = product;

    return (
        <div className="shadow">
            <Card
                elevation={0}
                raised={false}
                variant="outlined">
                <CardHeader
                    title={name}
                    subheader={`${quantity} Items`}
                    avatar={<Avatar src={image}/>}
                />
                <CardContent>
                    <div className="center-vertical-align">
                        <span className="uppercase font-weight-bold grey-text font-size-medium">{price} GHS</span>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default ProductOrder;
