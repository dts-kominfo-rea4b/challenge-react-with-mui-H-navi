import { Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Contact from '../components/Contact';
import ContactForm from '../components/ContactForm';
import Header from '../components/Header';

const ContactApp = () => {
    const [contacts, setContacts] = useState([]);

    const handleClick = (name, phone, email, photo) => {
        setContacts([...contacts, { nama: name, hp: phone, email: email, foto: photo, id: contacts.length + 1 }]);
        // setContacts([...phones, { hp: phone, phone_id: phones.length + 1 }]);
        // setContacts([...emails, { email: email, email_id: emails.length + 1 }]);
        // setContacts([...photos, { foto: photo, photo_id: photos.length + 1 }]);
      };



    return (
        <div className='contact-app'>
            <Header />
            <Grid  justifyContent="center" container spacing={2}>
                <Grid item md={6} lg={6}>
                    <ContactForm handleClick={handleClick}/>
                </Grid>
                <Grid item md={6} lg={6}>
                    <Contact contacts={contacts}/>
                </Grid>
            </Grid>
        </div>
    );
};

export default ContactApp;