import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth/useAuth';
import { useLocation } from 'react-router-dom';

const Login = () => {
     const [loginData, setLoginData] = useState({})
     const [loading,setLoading] = useState([])
     const {user,userSignIn,isLoading, error,userSignOut} = useAuth()
     const location = useLocation()
     const history = useHistory()

     const handleOnBlur = e =>{
          const field = e.target.name
          const value = e.target.value
          const newLoginData = {...loginData}
          newLoginData[field] = value
          console.log(newLoginData)
          setLoginData(newLoginData)
     }

     const handleSubmit = e =>{
          userSignIn(loginData.email,loginData.password,history,location)
          e.preventDefault()
     }
   

     return (
          <>
               <Container>
               <Grid container spacing={2}>
                    <Grid  sx={{width:'75%', mt:10}} item xs={12} md={12}>
                        
                         {
                              !isLoading &&

                                   <form onSubmit={handleSubmit}>
                                        <Typography sx={{color:'purple'}} variant="h3" gutterBottom>
                                             Log In
                                        </Typography>
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
                                             size="small"
                                             >Login
                                        </Button>
                                        <Link style={{textDecoration:'none'}} to="/register">
                                             <Typography  variant="body1" gutterBottom>
                                                  Not an Account? Please register
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

export default Login;