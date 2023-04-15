import React, { useState } from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../Components/HeroBanner'
import SearchExercises from '../Components/SearchExercises'
import Exercises from '../Components/Exercises'

const Home = () => {
  const [bodyPart,setBodyPart]=useState("all");
  const [exercises, setexercises]=useState([]);
  return (
    <Box>
        <HeroBanner/>
        <SearchExercises setexercises={setexercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        <Exercises setexercises={setexercises} bodyPart={bodyPart} Exercises={exercises}/>
    </Box>
  )
}

export default Home