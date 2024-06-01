import React, { useEffect, useState } from 'react'
import { getMovieByGenreId } from '../services/ApiServices';
import MovieCards from './MovieCards';

export default function MovieList({genreID}) {
    const [movieList , setMovieList] = useState([]);

    useEffect(()=>{
        getMovieByGenreId(genreID)
        .then(res => setMovieList(res.data.results))
        .catch(err => console.log(err));
    } , [])

  return (
    <div className='flex overflow-x-auto scrollbar-hide scroll-smooth gap-3'>
        {movieList.map((item,index)=>(
           <MovieCards key={index} movie={item}/>
        ))}
    </div>
  )
}
