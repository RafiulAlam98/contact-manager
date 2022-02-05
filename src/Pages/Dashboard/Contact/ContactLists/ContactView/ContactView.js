import React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ContactEdit from '../../ContactEdit/ContactEdit';
import ContactDelete from '../../ContactDelete/ContactDelete';




function Row(props) {
     const { contact, } = props;
     const [open, setOpen] = React.useState(false);
     
   
     return (
          <React.Fragment>

                    <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                         <TableCell>
                         <IconButton
                              aria-label="expand row"
                              size="small"
                              onClick={() => setOpen(!open)}
                         >
                              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                         </IconButton>
                         </TableCell>
                         <TableCell align="center">{contact.name}</TableCell>
                         <TableCell align="center">{contact.email}</TableCell>
                         <TableCell align="center">{contact.phone}</TableCell>
                         <TableCell align="center">{contact.status}</TableCell>
                    </TableRow>
                    <TableRow>
                         <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                         <Collapse in={open} timeout="auto" unmountOnExit>
                              <Box sx={{ margin: 1 }}>
                                   <ContactEdit id={contact._id}></ContactEdit>
                                   <ContactDelete id={contact._id}></ContactDelete>
                              </Box>
                         </Collapse>
                         </TableCell>
                    </TableRow>
               
          </React.Fragment>
     );
   }

const ContactView = ({ loading, contacts,searchContact }) => {
     
     return (
          <>
               <TableContainer component={Paper}>
               <Table aria-label="collapsible table">
                    <TableHead>
                    <TableRow>
                    <TableCell />
                    <TableCell align="center">Name / ID</TableCell>
                    <TableCell align="center">Email</TableCell>
                    <TableCell align="center">Phone</TableCell>
                    <TableCell align="center">Status</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>        
                    {contacts.map(contact => (
                    <Row key={contact._id} contact={contact} />
                    ))} 
                    {searchContact.map(contact => (
                    <Row key={contact._id} contact={contact} />
                    ))}
                    
                    </TableBody>
               </Table>
              </TableContainer>     
          </>
     );
};

export default ContactView;