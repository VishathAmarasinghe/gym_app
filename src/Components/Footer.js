import React from 'react'
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';



const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#1565C0" borderRadius="20px 20px 0px 0" ml="-30px" mr="-24px">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '200px', height: '101px' }} />
    </Stack>
    <Typography variant="h6" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">All Right Reserved 2023</Typography>
    <p style={{textAlign:"center",paddingBottom:"15px",fontWeight:"700",color:"white"}}>Developed By Vishath Amarasinghe</p>
  </Box>
  )
}

export default Footer