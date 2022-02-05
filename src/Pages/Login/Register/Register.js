import React , { useState } from 'react';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container, Typography } from '@mui/material';

import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth/useAuth';
import Box from '@mui/material/Box';

const Register = () => {

     const {user,registerUser,isLoading, error} = useAuth()
     const [registerData, setRegisterData] = useState()
     const location = useLocation()
     const history = useHistory()


     const handleOnBlur = e =>{
          const field = e.target.name
          const value = e.target.value
          const newRegisterData = {...registerData}
          newRegisterData[field] = value
          console.log(newRegisterData)
          setRegisterData(newRegisterData)
     }

     const handleSubmit = e =>{
          
          registerUser(registerData.email, registerData.password, registerData.name, history, location)
          e.preventDefault()
     }
     return (
          <>
         
               
            
          <Container>
                    <Box sx={{mt:4}}>
                         <Typography sx={{color:'#6B5B95'}}  variant="h6" gutterBottom component="div">
                              This is an application for contact manager. You can add new contact here. After login you will see the existing contact in the page. You can also update contact status from pending to approved. You can delete existing contact if you want to.
                         </Typography>
                    </Box>
               <Grid container spacing={2}>
                    <Grid  sx={{width:'75%', mt:6}} item xs={12} md={12}>
                         

                         {
                              !isLoading && 
                             
                              <form onSubmit={handleSubmit}>
                                   <Typography variant="h3" sx={{color:'purple'}} gutterBottom>
                                        Sign Up
                                   </Typography>
                              <TextField
                                   required
                                   id="outlined-required"
                                   label="Enter Your Name"
                                   sx={{width:'75%',m:1}}
                                   onBlur={handleOnBlur}
                                   name="name"
                                   helperText="Your name"
                                   variant="filled"
                                   size='small'
                              />
                              <TextField
                                   required
                                   id="outlined-required"
                                   label="Email"
                                   sx={{width:'75%',m:1}}
                                   onBlur={handleOnBlur}
                                   name="email"
                                   helperText="Email ID"
                                   variant="filled"
                                   size='small'
                              />
                              <TextField
                                   required
                                   id="outlined-password-input"
                                   label="Password"
                                   type="password"
                                   name="password"
                                   onBlur={handleOnBlur}
                                   autoComplete="current-password"
                                   sx={{width:'75%',m:1}}
                                   helperText="Password"
                                   variant="filled"
                                   size='small'
                              />
                              <Button 
                                   sx={{width:'25%',m:2}}
                                   variant="contained"
                                   type="submit"
                                   size='small'
                                   >Login
                              </Button>
                              <Link style={{textDecoration:'none'}} to="/login">
                                   <Typography  variant="body1" gutterBottom>
                                        Already registered?
                                   </Typography>
                              </Link>
                         </form>
                         }
                         {
                              isLoading && <CircularProgress />
                         }
                         {
                              error && <Alert variant="outlined" severity="error">
                                             {error}
                                        </Alert>
                         }
                    </Grid>
               </Grid>
          </Container>
          </>
     );
};

export default Register;