import React,{useState,useEffect} from 'react';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';

const ContactLists = () => {
     const [poojas, setPoojas] = useState([]);
     const [loading, setLoading] = useState(false);

     
     useEffect(() => {
          setLoading(true);
          fetch('')
            .then(res => res.json())
            .then(pooja => {
              setPoojas(pooja.data);
              console.log(pooja.data);
              setLoading(false);
            });
        }, []);
      
        if (loading) {
          return <CircularProgress />;
        }
     return (
          <>
               <Grid container spacing={2}>
                   
               </Grid>  
          </>
     );
};

export default ContactLists;