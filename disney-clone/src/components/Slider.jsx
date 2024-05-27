import React, { useEffect, useState } from 'react'
import { getPopulerMovies } from '../services/ApiService'

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original'

export default function Slider() {

    const [movieList , setMovieList] = useState([]);

    const getPopulerMovieData = () =>{
        getPopulerMovies()
        .then(res =>setMovieList(res.data.results))
        .catch(err=>console.log(err))
    }

    useEffect(()=>{
        getPopulerMovieData();
    },[])

    // useEffect(()=>{
    //     // console.log(movieList);
    // } , [movieList])

  return (
    <div>
        {movieList.map((movie , index) =>(
            <img key ={index} src={IMAGE_BASE_URL + movie.backdrop_path} />
        ))}
    </div>
  )
}
