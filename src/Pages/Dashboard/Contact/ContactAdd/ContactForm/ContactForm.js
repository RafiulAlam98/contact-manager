import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useForm } from "react-hook-form";
import Modal from '@mui/material/Modal';

const style = {
     position: 'absolute',
     top: '50%',
     left: '50%',
     transform: 'translate(-50%, -50%)',
     width: 400,
     bgcolor: 'background.paper',
     border: '2px solid #000',
     boxShadow: 24,
     p: 4,
   };

const ContactForm = ({ open, handleClose }) => {

     const [contactInfo, setContactInfo] = useState({});
     const { register, handleSubmit } = useForm();
     const onSubmit = data => {
          console.log('click')
     }

     return (
          <>
              <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
               >
               <Box sx={style}>
                    <Grid>
                         <Box> 
                              <form onSubmit={handleSubmit(onSubmit)}>
                                   <input {...register("name", { required: true, maxLength: 20 })} />
                                   <input {...register("email", { required: true })} />
                                   <input type="number" {...register("phone",)} />
                                   <input type="submit" />
                              </form>
                         </Box>
                    </Grid>
               </Box>
        </Modal>  
          </>
     );
};

export default ContactForm;