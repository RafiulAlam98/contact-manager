import React,{useState,useEffect} from 'react';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import ContactView from '../ContactView/ContactView';

const ContactLists = () => {
     const [contacts, setContacts] = useState([]);
     const [loading, setLoading] = useState(false);

     
     useEffect(() => {
          setLoading(true);
          fetch('http://localhost:5000/allContacts')
            .then(res => res.json())
            .then(info => {
              setContacts(info);
              console.log(info);
              setLoading(false);
            });
        }, []);
      
        if (loading) {
          return <CircularProgress />;
        }
     return (
          <>
               <Grid container spacing={2}>
                   <ContactView loading={loading} contacts={contacts}></ContactView>
               </Grid>  
          </>
     );
};

export default ContactLists;