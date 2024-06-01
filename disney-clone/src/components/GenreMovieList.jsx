import React, { useEffect, useState } from 'react'
import MovieList from './MovieList'
import { getMovieGenreList } from '../services/ApiServices';

export default function GenreMovieList() {
    const [genres,setGenres] = useState([]);
    
    useEffect(()=>{
        getMovieGenreList()
        .then(res => setGenres(res.data.genres))
        .catch(err => console.log(err));
    } , [])

  return (
    <div>
        {genres.map((item , index)=> index <= 4 && (
            <div className='p-8 px-8  '>
                <h2 className=' text-[12px] md:text-[20px] font-bold cursor-pointer'>{item.name}</h2>
                <MovieList genreID = {item.id}/>
            </div>
        ))}
    </div>
  )
}
