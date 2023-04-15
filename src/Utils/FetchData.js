



export const exerciseOptions={
	method: 'GET',
	headers: {
		'X-RapidAPI-Key':process.env.REACT_APP_REST_API_EXERCISE_KEY,
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};

export const Youtubeoptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_REST_API_YOUTUBEVIDEO_KEY,
		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
	}
};





export const fetchData=async (url,options)=>{
	console.log(process.env);
    const response=await fetch(url,options);
    const data=await response.json();

    return data;
}