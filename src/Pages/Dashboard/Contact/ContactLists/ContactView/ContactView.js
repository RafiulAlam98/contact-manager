import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';

const ContactView = ({ loading, poojas }) => {
     if (loading) {
          return <CircularProgress />;
        }
     return (
          <>
          <TableContainer component={Paper}>
               <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                    <TableCell align="center">Number</TableCell>
                    <TableCell align="center">Title</TableCell>
                    <TableCell align="center"> Charge (&#8377;)</TableCell>
                    <TableCell align="center">Total Sell</TableCell>
               
                    </TableRow>
                    </TableHead>
                    <TableBody>
                         {poojas.map(pooja => (
                         <TableRow
                              key={pooja.poojaId}
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                         >
                              <TableCell align="center">
                              {pooja.poojaNum}
                              </TableCell>
                              <TableCell align="center">{pooja.name} </TableCell>
                              <TableCell align="center"> &#8377; {pooja.charge}</TableCell>
                              <TableCell align="center">{pooja.totalCount}</TableCell>
                         
                         </TableRow>
                         ))}
                    </TableBody>
               </Table>
          </TableContainer>     
          </>
     );
};

export default ContactView;