import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';

import ContactForm from './components/ContactForm';
import Contact from './components/Contact';
import Header from './components/Header';
// Uncomment untuk memuat daftar kontak
// import contactsJSON from './data/contacts.json';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const [contacts, setContacts] = useState([]);

  const handleClick = (name, phone, email, photo) => {
    setContacts([...contacts, { nama: name, hp: phone, email: email, foto: photo, id: contacts.length + 1 }]);
    // setContacts([...phones, { hp: phone, phone_id: phones.length + 1 }]);
    // setContacts([...emails, { email: email, email_id: emails.length + 1 }]);
    // setContacts([...photos, { foto: photo, photo_id: photos.length + 1 }]);
  };

  return (
    <div className="App">
      <div className='contact-app'>
        <Header />
        <Grid justifyContent="center" container spacing={2}>
          <Grid item md={6} lg={6}>
            <ContactForm handleClick={handleClick} />
          </Grid>
          <Grid item md={6} lg={6}>
            <Contact contacts={contacts} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default App;
