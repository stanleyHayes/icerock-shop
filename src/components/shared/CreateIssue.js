import React, {useState} from "react";
import {
    Dialog,
    DialogContent,
    DialogActions,
    Divider,
    Button,
    TextField,
    Select,
    MenuItem,
    makeStyles
} from "@material-ui/core";

const CreateIssue = ({open, handleClose}) => {

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


    const [issue, setIssue] = useState({state: "CASUAL"});
    const [error, setError] = useState({});

    const {subject, status, description} = issue;

    const handleConfirmClick = () => {
        if (!subject) {
            setError({...error, subject: "Subject field required"});
            return;
        } else {
            setError({...error, subject: null});
        }

        if (!description) {
            setError({...error, description: "Description field required"});
            return;
        } else {
            setError({...error, description: null});
        }
        handleClose();
    }

    const handleCancelClick = () => {
        handleClose();
    }

    const handleChange = (event) => {
        setIssue({...issue, [event.target.name]: event.target.value})
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogContent>

                <p className="text text-align-center font-size-large">
                    New Issue
                </p>
                <div className="margin-vertical-small">
                    <TextField
                        required={true}
                        name="subject"
                        fullWidth={true}
                        type="text"
                        margin="dense"
                        onChange={handleChange}
                        helperText={error.subject}
                        label="Subject"
                        placeholder="Enter subject"
                        error={error.subject}
                        value={subject}
                        variant="outlined"
                    />
                </div>

                <div className="margin-vertical-small">
                    <TextField
                        required={true}
                        name="description"
                        fullWidth={true}
                        type="text"
                        margin="dense"
                        onChange={handleChange}
                        helperText={error.description}
                        label="Description"
                        multiline={true}
                        placeholder="Enter description"
                        error={error.description}
                        value={description}
                        variant="outlined"
                    />
                </div>

                <div className="margin-vertical-small">
                    <Select variant="outlined" fullWidth={true} margin="dense" defaultValue="CASUAL"
                            onChange={handleChange} name="status" value={status}>
                        <MenuItem value="URGENT">Important</MenuItem>
                        <MenuItem value="CASUAL">Casual</MenuItem>
                    </Select>
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

export default CreateIssue;
