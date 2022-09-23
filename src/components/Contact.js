// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React from 'react';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email
    return (
        <List sx={{ width: '90%', bgcolor: '#8bc34a', marginTop: '25px' }}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar sx={{ paddingRight: '10px' }}>
                    <Avatar alt="Remy Sharp" src="http://placekitten.com/400/400" sx={{width: '70px', height: '70px'}} />
                </ListItemAvatar>
                <ListItemText
                    primary="Monica"
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'block' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                089634818236
                            </Typography>
                            <Typography
                                sx={{ display: 'block' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                monica@mail.com
                            </Typography>
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" sx={{ margin: '10px'}} />
            <ListItem alignItems="flex-start">
                <ListItemAvatar sx={{ paddingRight: '10px' }}>
                    <Avatar alt="Remy Sharp" src="http://placekitten.com/400/400" sx={{width: '70px', height: '70px'}} />
                </ListItemAvatar>
                <ListItemText
                    primary="Monica"
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'block' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                089634818236
                            </Typography>
                            <Typography
                                sx={{ display: 'block' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                monica@mail.com
                            </Typography>
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" sx={{ margin: '10px'}} />
            <ListItem alignItems="flex-start">
                <ListItemAvatar sx={{ paddingRight: '10px' }}>
                    <Avatar alt="Remy Sharp" src="http://placekitten.com/400/400" sx={{width: '70px', height: '70px'}} />
                </ListItemAvatar>
                <ListItemText
                    primary="Monica"
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'block' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                089634818236
                            </Typography>
                            <Typography
                                sx={{ display: 'block' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                monica@mail.com
                            </Typography>
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" sx={{ margin: '10px'}} />
            
        </List>
    );
};

export default Contact;
