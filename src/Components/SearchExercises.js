import React, { useEffect, useState } from 'react';
import { Box,Button,button,Stack,TextField, Typography } from '@mui/material';


import { exerciseOptions,fetchData } from '../Utils/FetchData';
import HorizontalScrollBar from './HorizontalScrollBar';


const SearchExercises = ({setexercises,bodyPart,setBodyPart}) => {

  const [search,setsearch]= useState("");
 
  const [bodyParts,setbodyParts]=useState([])


  useEffect(()=>{
    const fetchexercisesData=async()=>{
      const bodypartData=await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        exerciseOptions
        )
        setbodyParts(["all",...bodypartData])
    }
    fetchexercisesData();
  },[])

  const handleSearch=async()=>{
      if (search) {
        const exercisesData=await fetchData(
          'https://exercisedb.p.rapidapi.com/exercises',
          exerciseOptions
        );

        const searchedExercises=exercisesData.filter(
          (exercise)=>exercise.name.toLowerCase().includes(search)
          || exercise.target.toLowerCase().includes(search)
          || exercise.equipment.toLowerCase().includes(search)
          || exercise.bodyPart.toLowerCase().includes(search)
          
        );

        setsearch("");
        setexercises(searchedExercises);


        console.log(exercisesData);
      }
  }



  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography sx={{fontSize:{lg:"44px",xs:"30px"}}} mb="50px" textAlign="center" fontWeight={700}>Awsome Exersices You <br/>
        Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{input:{fontWeight:"70px",border:"none",borderRadius:"4px"},
        width:{
          lg:"800px",xs:"350px"
        },backgroundColor:"#fff",borderRadius:"40px"}}
          height="76px"
          value={search}
          onChange={(e)=>setsearch(e.target.value.toLowerCase())}
          placeholder='Search Exercises '
          type='text'
        />
        <Button

        
        onClick={handleSearch}
        sx={{backgroundColor:"#1565C0",color:"#fff",textTransform:"none",width:{lg:"175px",xs:"80px"},
          fontSize:{lg:"20px",xs:"14px"},height:"56px",position:"absolute",right:"0"
        }} className='search-btn'>
          Search
        </Button>
      </Box>
      <Box sx={{position:"relative",width:"100%",p:"20px",borderColor:"#1565C0"}}>
          <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      </Box>
    </Stack>
  )
}

export default SearchExercises