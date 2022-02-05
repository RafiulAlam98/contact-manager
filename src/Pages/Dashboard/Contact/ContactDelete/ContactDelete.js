import React from 'react';
import Button from '@mui/material/Button';

const ContactDelete = ({id }) => {
     const handleUpdate = id => {
          console.log(id)
          
     fetch(`https://cryptic-anchorage-19395.herokuapp.com/allContacts/${id}`, {
          method: 'DELETE',
          headers: {
          'content-type': 'application/json',
          },
          body: JSON.stringify(),
     })
          .then(res => res.json())
          .then(info => {
               console.log(info);
               if(info.deletedCount === 1){
                    alert("Contact Deleted successfully")
               }
          });
     };
     return (
          <>
               <Button sx={{mx:'4'}} size='small' variant="contained" onClick={() => handleUpdate( id)}>Delete</Button> 
          </>
     );
};

export default ContactDelete;