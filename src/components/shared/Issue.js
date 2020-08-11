import React from "react";
import {Card, CardHeader, CardActions, Button, CardContent, Avatar, Divider} from "@material-ui/core";

const Issue = ({issue}) => {

    const {owner, createdAt, subject, description, resolved, status} = issue;

    const handleResolveIssueClicked = (event) => {
        event.preventDefault();
    }

    return (
        <Card elevation={0} raised={false} variant="outlined">

            <CardHeader
                avatar={<Avatar src={owner.avatar}/>}
                title={owner.name}
                subheader={new Date(createdAt).toDateString()}
            />

            <Divider variant="fullWidth"/>

            <CardContent>

                <p className="font-size-medium text font-weight-bold">{subject}</p>
                <p className="font-size-medium text">{description}</p>
                <p className="font-size-medium text uppercase font-weight-bold">{status}</p>
            </CardContent>
            <Divider variant="fullWidth"/>
            <CardActions>
                <Button
                    fullWidth={true}
                    onClick={handleResolveIssueClicked}
                    size="small"
                    variant="text">
                    {resolved ? "Not Resolved" : "Resolved"}
                </Button>
            </CardActions>
        </Card>
    )
}

export default Issue;
