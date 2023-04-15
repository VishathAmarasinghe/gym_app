import React from 'react'
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/Logo.png'

const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="none" sx={{gap:{
      sm:"122px",xs:"40px"
    },mt:{sm:"32px",xs:"20px"},px:"20px"}}>
      <Link to='/'>
        <img src={Logo} alt='logo' style={{width:'100px',height:'50px',margin:'0 20px'}}/>
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link to='/' style={{textDecoration:"none",color:"#3A1212",borderBottom:"3px solid #3C6E82"}}>Home</Link>
        <a href='#exercises' style={{textDecoration:"none",color:"#3A1212"}}>Exersices</a>
      </Stack>
    </Stack>
  )
}

export default Navbar