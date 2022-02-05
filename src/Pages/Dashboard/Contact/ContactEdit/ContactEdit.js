import React from 'react';
import Button from '@mui/material/Button';

const ContactEdit = ({id }) => {
     
     
     const handleUpdate = id => {
          console.log(id)
     fetch(`http://localhost:5000/allContacts/${id}`, {
          method: 'PUT',
          headers: {
          'content-type': 'application/json',
          },
          body: JSON.stringify(),
     })
          .then(res => res.json())
          .then(info => {
               console.log(info.modifiedCount);
               if(info.modifiedCount === 1){
                    alert("Contact updated successfully")
               }
          });
     };
     return (
          <>
            <>
               <Button sx={{mx:'4'}} size='small' variant="contained" onClick={() => handleUpdate( id)}>Approve</Button> 
            </>  
          </>
     );
};

export default ContactEdit;