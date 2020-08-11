import React, {useState} from "react";
import {
    Dialog,
    DialogContent,
    DialogActions,
    Divider,
    Button,
    TextField,
    makeStyles
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

const CreateReview = ({open, handleClose}) => {

    const useStyles = makeStyles({
        divider: {
            marginTop: 16,
            marginBottom: 16
        },
        cancelButton: {
            paddingTop: 6,
            paddingBottom: 6,
            fontFamily: "Poppins",
            fontWeight: "bold",
            color: "darkblue"
        }
        ,
        confirmButton: {
            paddingTop: 6,
            paddingBottom: 6,
            backgroundColor: "darkgreen",
            fontFamily: "Poppins",
            fontWeight: "bold",
            color: "white"
        },
        textField: {
            marginTop: 8,
            marginBottom: 8
        }
    });

    const classes = useStyles();


    const [review, setReview] = useState({state: "CASUAL"});
    const [error, setError] = useState({});

    const {feedback, rating} = review;

    const handleConfirmClick = () => {
        if (!review) {
            setError({...error, review: "Subject field required"});
            return;
        } else {
            setError({...error, review: null});
        }

        handleClose();
    }

    const handleCancelClick = () => {
        handleClose();
    }

    const handleChange = (event) => {
        setReview({...review, [event.target.name]: event.target.value})
    }

    function handleRatingChange(event, rating) {
        setReview({...review, rating});
    }

    return (
        <Dialog
            fullScreen={false}
            maxWidth="md"
            open={open}
            onClose={handleClose}>
            <DialogContent>

                <p className="text text-align-center font-size-large">
                    New Review
                </p>
                <div className="margin-vertical-small">
                    <TextField
                        required={true}
                        name="feedback"
                        fullWidth={true}
                        type="text"
                        margin="dense"
                        onChange={handleChange}
                        helperText={error.feedback}
                        label="Review"
                        multiline={true}
                        rows={5}
                        placeholder="Enter feedback"
                        error={error.review}
                        value={feedback}
                        variant="outlined"
                    />
                </div>

                <div className="margin-vertical-small">
                    <Rating
                        readOnly={false}
                        name="rating"
                        onChange={handleRatingChange}
                        value={rating}
                        max={5}
                        precision={.1}
                        size="large"/>
                </div>

            </DialogContent>
            <Divider variant="fullWidth"/>
            <DialogActions>
                <Button className={classes.cancelButton} variant="text" size="large"
                        onClick={handleCancelClick}>Cancel</Button>
                <Button className={classes.confirmButton} variant="text" size="large"
                        onClick={handleConfirmClick}>Create</Button>
            </DialogActions>
        </Dialog>
    )
}

export default CreateReview;
