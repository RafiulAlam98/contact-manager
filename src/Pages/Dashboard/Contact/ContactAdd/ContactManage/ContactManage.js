import React from 'react';
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
import Typography from '@mui/material/Typography';
import './ContactManage.css'
import ContactForm from '../ContactForm/ContactForm';

const ContactManage = () => {
     const [open, setOpen] = React.useState(false);
     const handleOpen = () => setOpen(true);
     const handleClose = () => setOpen(false);
     return (
          <>
               <button className="addButton" variant="contained" onClick={handleOpen}>
                    <Typography sx={{ mr: 1 }} variant="body1" gutterBottom>
                         Add New Contact
                    </Typography>
                    <AddCircleOutlineTwoToneIcon></AddCircleOutlineTwoToneIcon>
               </button>
               <ContactForm open={open} handleClose={handleClose}></ContactForm>
          </>
     );
};

export default ContactManage;