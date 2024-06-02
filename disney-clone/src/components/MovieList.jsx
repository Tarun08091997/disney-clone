import React, { useEffect, useRef, useState } from 'react'
import { getMovieByGenreId } from '../services/ApiServices';
import MovieCards from './MovieCards';
import { HiChevronRight } from "react-icons/hi";
import { HiChevronLeft } from "react-icons/hi";

export default function MovieList({genreID}) {
    const [movieList , setMovieList] = useState([]);
    const scrollRef = useRef(null);
    useEffect(()=>{
        getMovieByGenreId(genreID)
        .then(res => setMovieList(res.data.results))
        .catch(err => console.log(err));
    } , [])

    const scrollLeft = () =>{
      scrollRef.current.scrollLeft -= window.innerWidth +22
  }

  const scrollRight = () =>{
      scrollRef.current.scrollLeft += window.innerWidth - 22
  }

  return (
    <>
      <HiChevronLeft className=' text-white text-[40px] absolute mt-[150px] -ml-5 cursor-pointer  hover:scale-150 transition-all duration-100 ease-in-out' onClick={() => scrollLeft()}/>
      <div ref={scrollRef}  className='flex overflow-x-auto scrollbar-hide scroll-smooth gap-5 p-5'>
          {movieList.map((item,index)=>(
            <MovieCards key={index} movie={item}/>
          ))}
      </div>
      <HiChevronRight className=' text-white text-[40px] absolute -mt-[200px] -right-1 cursor-pointer hover:scale-150 transition-all duration-100 ease-in-out' onClick={() => scrollRight()}/>
    </>
  )
}
