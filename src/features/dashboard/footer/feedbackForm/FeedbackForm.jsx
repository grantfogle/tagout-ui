import * as React from 'react';
import {Box, Button, Typography, Modal, TextField} from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column'
  };

export default function FeedbackForm() {

    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // thanks for your feedback
    // feedback form
    return (
        <Box sx={{ height: '60px' }}>
            <Button sx={{color: '#fff'}} onClick={handleOpen}>Leave Feedback</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Typography 
                        sx={{marginBottom: '.5em'}}
                        id="modal-modal-title"
                        variant="h6"
                        component="h2">
                        Share your feedback
                    </Typography>
                    <TextField
                        sx={{marginBottom: '1em'}}
                        id="feedback-email"
                        label="Email"
                    />
                    <TextField
                        sx={{marginBottom: '1em'}}
                        id="feedback-message"
                        label="Feedback"
                        multiline
                        rows={4}
                    />
                    <Button color="success" variant="contained">Submit</Button>
                </Box>
            </Modal>
        </Box>
    );
}
