import { Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Contact from '../components/Contact';
import ContactForm from '../components/ContactForm';
import Header from '../components/Header';

const ContactApp = () => {

    return (
        <div className='contact-app'>
            <Header />
            <Grid  justifyContent="center" container spacing={2}>
                <Grid item md={6} lg={6}>
                    <ContactForm/>
                </Grid>
                <Grid item md={6} lg={6}>
                    <Contact/>
                </Grid>
            </Grid>
        </div>
    );
};

export default ContactApp;