import React, { useEffect, useRef, useState } from 'react'
import { getTrandingMovies } from '../services/ApiServices';
import { HiChevronRight } from "react-icons/hi";
import { HiChevronLeft } from "react-icons/hi";

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original'

export default function Slider() {

    const [movieList , setMovieList] = useState([]);
    const scrollRef = useRef(null);

    const getTrandingMovieData = () =>{
        getTrandingMovies()
        .then(res =>setMovieList(res.data.results))
        .catch(err=>console.log(err))
    }

    useEffect(()=>{
        getTrandingMovieData();
    },[])

    // useEffect(()=>{
    //     // console.log(movieList);
    // } , [movieList])


    const scrollLeft = () =>{
        scrollRef.current.scrollLeft -= window.innerWidth +22
    }

    const scrollRight = () =>{
        scrollRef.current.scrollLeft += window.innerWidth - 22
    }

  return (

    <div>
        <HiChevronLeft className=' text-white text-[40px] absolute mt-[150px] ml-1 cursor-pointer' onClick={() => scrollLeft()}/>
        <HiChevronRight className=' text-white text-[40px] absolute mt-[150px] right-1 cursor-pointer' onClick={() => scrollRight()}/>
        <div className='w-full flex overflow-x-auto px-5 py-3 scrollbar-hide scroll-smooth ' ref={scrollRef}>
        {movieList.map((movie , index) =>(
            <img className='h-[310px] min-w-full 
              object-cover object-left-top 
              mr-4 rounded-md hover:border-[3px] border-gray-100 transition-all duration-100 ease-in-out'
             key ={index} src={IMAGE_BASE_URL + movie.backdrop_path} />
        ))}
        </div>
    </div>
  )
}
