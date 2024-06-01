import React from 'react'
import genres from '../constants/genres'

export default function GenreMovieList() {
  return (
    <div>
        {genres.genre.map((item , index)=> index <= 4 && (
            <div className='p-8 px-8 text-[12px] md:text-[20px] font-bold '>
                <h2 className='cursor-pointer'>{item.name}</h2>
            </div>
        ))}
    </div>
  )
}
