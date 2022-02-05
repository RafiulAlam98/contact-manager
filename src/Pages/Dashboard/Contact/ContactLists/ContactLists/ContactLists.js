import React,{useState,useEffect} from 'react';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import ContactView from '../ContactView/ContactView';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


const ContactLists = () => {
     const [contacts, setContacts] = useState([]);
     const [loading, setLoading] = useState(false);
     const [searchData, setSearchData] = useState({})
     const [searchContact,setSearchContact] = useState([])

     const handleOnBlur = e => {
          const value = e.target.value
          // console.log(value)
          setSearchData(value)
         
     }
     const handleSubmit = e =>{
          setLoading(true);
          fetch(`https://cryptic-anchorage-19395.herokuapp.com/allContacts/${searchData}`)
          .then(res => res.json())
          .then(info => {
               console.log(info); 
               setSearchContact(info) 
               setLoading(false); 
          });
          e.preventDefault()
     }
     
     useEffect(() => {
          setLoading(true);
          fetch('https://cryptic-anchorage-19395.herokuapp.com/allContacts')
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
               <form onSubmit={handleSubmit}>
                         <Box sx={{textAlign:'center'}}>
                         
                              <TextField 
                              sx={{mb:3,width:'50%'}}  
                              required
                              id="filled-required"
                              
                              defaultValue=""
                              variant="filled"
                              onBlur={handleOnBlur}
                              size='small' />
                              <Button 
                              sx={{width:'10%',ml:1,mt:2}}
                              variant="contained"
                              type="submit"
                              size="small"
                              >Search
                         </Button>
                         </Box>
                    </form>
               <Grid sx={{mt:2}} container spacing={2}>
                   <ContactView loading={loading} contacts={contacts} searchContact={searchContact}></ContactView>
               </Grid>  
          </>
     );
};

export default ContactLists;