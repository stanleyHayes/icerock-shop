import React from "react";
import {Avatar, Card, CardContent, CardHeader, Divider} from "@material-ui/core";
import {Rating} from "@material-ui/lab";

const Review = ({review}) => {

    const {user, createdAt, feedback, rating} = review;

    return (
        <div className="shadow">
            <Card
                elevation={0}
                raised={false}
                variant="outlined">
                {
                    user.avatar ? (
                        <CardHeader
                            avatar={<Avatar src={user.avatar}/>}
                            title={user.name}
                            subheader={new Date(createdAt).toDateString()}/>
                    ) : (
                        <Avatar title={`${user.name[0][0]} ${user.name[1][0]}`}/>
                    )
                }
                <Divider variant="fullWidth"/>
                <CardContent>
                    <p className="text font-size-medium text">{feedback}</p>
                    <Rating
                        readOnly={true}
                        value={rating}
                        max={5}
                        precision={.1}
                        size="small"/>
                </CardContent>
            </Card>
        </div>
    )
}

export default Review;
