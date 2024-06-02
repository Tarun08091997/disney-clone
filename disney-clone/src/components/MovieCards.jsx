import React from 'react'
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original'
export default function MovieCards({movie}) {
  return (
    <>
        <img src={IMAGE_BASE_URL + movie.poster_path } className=' w-[110px] md:w-[200px] shrink-0 hover:cursor-pointer 
        rounded-xl hover:border-[2px] border-gray-500 hover:scale-110
        transition-all duration-200 ease-in'/>
    </>
)}
