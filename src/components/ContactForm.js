// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import { Button, Card, CardActions, CardContent, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const ContactForm = ({ handleClick }) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [photo, setPhoto] = useState('');

    return (
        <Card sx={{ minWidth: 275, margin: "25px" }}>
            <CardContent>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '90%' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="name-required"
                                label="Name"
                                value={name}
                                onChange={(name) => {
                                    setName(name.target.value);
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="phone-required"
                                label="Phone"
                                value={phone}
                                onChange={(phone) => {
                                    setPhone(phone.target.value);
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="email-required"
                                label="Email"
                                value={email}
                                onChange={(email) => {
                                    setEmail(email.target.value);
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="photo-required"
                                label="Photo Url"
                                value={photo}
                                onChange={(photo) => {
                                    setPhoto(photo.target.value);
                                }}
                            />
                        </Grid>
                    </div>
                </Box>
            </CardContent>
            <CardActions>
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        color="success"
                        sx={{ width: '90%' }}
                        onClick={() => {
                            handleClick(name, phone, email, photo);
                            // handleClick(phone);
                            // handleClick(email);
                            // handleClick(photo);
                            setName('');
                            setPhone('');
                            setEmail('');
                            setPhoto('');
                        }}>
                        Add New
                    </Button>
                </Grid>
            </CardActions>
        </Card>
    );
}

export default ContactForm;