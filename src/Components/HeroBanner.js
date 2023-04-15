import React from 'react'
import { Box,Stack,Typography,Button } from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'
const HeroBanner = () => {
  return (
    <Box sx={{
        mt:{lg:"212px",xs:"70px"},
        ml:{sm:"50px"}
    }} position="relative" p="20px">
        <Typography color="#3c6e82" fontWeight="700" fontSize="26px">
            Fitness Academy
        </Typography>
        <Typography fontWeight="700" sx={{
            fontSize:{lg:"44px",xs:"40px"}
        }} mb="23px" mt="30px">
            <span style={{color:"#1565c0"}}>GET FIT</span>, STRONG <br/> & MOTIVATED!
        </Typography>
        <Typography fontSize="22px" lineHeight="45px" mb={5}>
            Checkout the most effective exercises
        </Typography>
        <Button href='#exercises' variant='contained' style={{width:"200px",height:"60px"}} >Explore Exersices</Button>
        <Typography ml="-10px" mt="25px" fontWeight="600" color="#00A6EB" fontSize="200px"
        sx={{opacity:0.1,display:{lg:"block",xs:"none"}}}  >Exersices</Typography>
        
        <img src={HeroBannerImage} alt='image' className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner