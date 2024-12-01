import React from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, TextField, Button, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './HelpPage.css';

const HelpPage = () => {
    return (
        <Container className="help-page" maxWidth="md">
            <Typography variant="h4" gutterBottom>
                Help & Support
            </Typography>
            <Typography variant="h6" gutterBottom>
                Frequently Asked Questions
            </Typography>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>How do I add a new todo item?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        To add a new todo item, click on the "Add" button on the Todo List page and fill in the details.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>How do I mark a todo item as done?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Click on the todo item text to mark it as done. It will be crossed out and moved to the Done List.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>How do I delete a todo item?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Click on the "Delete" button next to the todo item to remove it from the list.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Box mt={4}>
                <Typography variant="h6" gutterBottom>
                    Contact Us
                </Typography>
                <form className="contact-form">
                    <TextField
                        label="Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Message"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        margin="normal"
                    />
                    <Button variant="contained" color="primary" type="submit">
                        Send
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default HelpPage;