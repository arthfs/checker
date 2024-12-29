import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import Image from 'next/image';
import { useFormState } from 'react-dom';
import { userefcontext } from './context';

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };



const {handleclick,selectedimage,formdata,updateform} = userefcontext()

  return (
    <Dialog className='dialog' onClose={handleClose} open={open}>
      <div style={{marginTop:'10px', justifyContent:'center',display:'flex'}}> <Image  className='settingsavatar' width={50} height={50} src={ selectedimage || '/emptyprofile.jpg'} alt='profile'></Image> </div>
      <div style={{justifyContent:'center',display:'flex'}}   > <Button onClick={()=>{handleclick()}}> Change photo </Button> </div>
      <DialogTitle className='dialogtitle'>Profile Informations</DialogTitle>
      <form onSubmit={(event)=>{
        
      }}>
        <div className='formfield'>
            <label className='label'> Username</label>
            <input className='input' type='text' placeholder='Enter your username' name={'username'} value={formdata['username']} onChange={(event)=>{updateform(event.target.name,event.target.value)}} ></input>
        </div>

        <div className='formfield'>
            <label className='label'> First Name</label>
            <input className='input' type='text' placeholder='Enter your firstname' name={'firstname'} value={formdata['firstname']} onChange={(event)=>{updateform(event.target.name,event.target.value)}} ></input>
        </div>

        <div className='formfield'>
            <label className='label'> Last Name</label>
            <input className='input' type='text' name='lastname' placeholder='Enter your last name' value={formdata['lastname'] } onChange={(event)=>{updateform(event.target.name,event.target.value)}} ></input>
        </div>

        <div className='formfield'>
            <label className='label'>Email</label>
            <input className='input' type='email' name='email' placeholder='Enter your email' value={formdata['email']} onChange={(event)=>{updateform(event.target.name,event.target.value)}}></input>
        </div>

       <div style={{margin:'20px', display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
        <Button variant={'outlined'} onClick={handleClose}>Cancel</Button>
        <Button  variant='outlined' onClick={()=>{
           handleClose()
        }
        }>Save</Button>
      </div>
      </form>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo({close}) {
  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    close(event)
    setOpen(false);
    
  };

  return (
    <div>
     
      <h1  onClick={handleClickOpen}>
        Profile Settings
      </h1>
      <SimpleDialog
       
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}