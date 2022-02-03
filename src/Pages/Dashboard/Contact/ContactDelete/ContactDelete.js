import React from 'react';
import Button from '@mui/material/Button';

const ContactDelete = ({id }) => {
     const handleUpdate = id => {
          console.log(id)
          
     fetch(`http://localhost:5000/allContacts/${id}`, {
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
          <div>
               <Button variant="contained" onClick={() => handleUpdate( id)}>Delete</Button> 
          </div>
     );
};

export default ContactDelete;