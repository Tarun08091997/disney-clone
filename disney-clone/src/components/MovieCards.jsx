import React from 'react'
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original'
export default function MovieCards({movie}) {
  return (
    <div className='w-[120px] md:[220px]'>
        <div className='w-[110px] md:w-[200px] shrink-0 border-[2px] border-transparent box-border  hover:border-white hover:cursor-pointer hover:scale-110 rounded-xl'>
            <img src={IMAGE_BASE_URL + movie.poster_path } className=' object-fill'/>
        </div>
    </div>
  )
}
