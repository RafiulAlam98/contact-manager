import React from 'react';
import ContactsIcon from '@mui/icons-material/Contacts';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import {
     
     Link,
     useRouteMatch
   } from "react-router-dom";
   
   
const DashboardLink = () => {
     let { url } = useRouteMatch();
     return (
          <>
               <List sx={{mt:1}}>
                    <Link exact to={`${url}`}  style={{textDecoration:'none'}}>
                         <Button color='inherit' sx={{ color: '#059862', fontWeight: '600',mr:2 }}>
                         <ContactsIcon sx={{ mr: 1 }}></ContactsIcon>
                              Contact List
                         </Button>
                    </Link>
                    
               </List>
          </>
     );
};

export default DashboardLink;