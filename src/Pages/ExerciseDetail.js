
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { exerciseOptions,fetchData,Youtubeoptions } from '../Utils/FetchData';
import Details from '../Components/Details';
import ExerciseVideos from '../Components/ExerciseVideos';
import SimilerExercises from '../Components/SimilerExercises';

const ExerciseDetail = () => {

  const [exerciseDetail,setExerciseDetails]=useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const {id}=useParams();


  useEffect(()=>{
    const fetchExercisesData=async()=>{
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      console.log(exerciseDetailData);
      setExerciseDetails(exerciseDetailData);

      console.log(exerciseDetail);


      const exerciseVideoData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, Youtubeoptions);
      console.log(exerciseVideoData);

      setExerciseVideos(exerciseVideoData.contents);


    }
    fetchExercisesData();
    window.scrollTo({ top: 0, left: 100, behavior: 'smooth' });
  },[id])

  return (
    <Box>
      <Details exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      {/* <SimilerExercises/> */}
    </Box>
  )
}

export default ExerciseDetail