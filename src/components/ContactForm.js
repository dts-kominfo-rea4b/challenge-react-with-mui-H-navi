// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import { Button, Card, CardActions, CardContent, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

const ContactForm = () => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada

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
                                defaultValue=""
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="phone-required"
                                label="Phone"
                                defaultValue=""
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="email-required"
                                label="Email"
                                defaultValue=""
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="photo-required"
                                label="Photo Url"
                                defaultValue=""
                            />
                        </Grid>
                    </div>
                </Box>
            </CardContent>
            <CardActions>
                <Grid item xs={12}>
                    <Button variant="contained" color="success" sx={{ width: '90%' }}>
                        Add New
                    </Button>
                </Grid>
            </CardActions>
        </Card>
    );
}

export default ContactForm;