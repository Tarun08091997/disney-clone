import React from 'react'

import disney from './../assets/Images/disney.png';
import marvel from './../assets/Images/marvel.png';
import nationalG from './../assets/Images/nationalG.png'
import pixar from './../assets/Images/pixar.png'
import starwars from './../assets/Images/starwar.png'


import starwarV from './../assets/Videos/star-wars.mp4'
import disneyV from './../assets/Videos/disney.mp4'
import marvelV from './../assets/Videos/marvel.mp4'
import nationalGV from './../assets/Videos/national-geographic.mp4'
import pixarV from './../assets/Videos/pixar.mp4'


export default function ProductionHouse() {
    const productionHouseList=[
        {
            id:1,
            image:disney,
            video:disneyV
        },
        {
            id:2,
            image:pixar,
            video:pixarV
        },
        {
            id:3,
            image:marvel,
            video:marvelV
        },
        {
            id:4,
            image:starwars,
            video:starwarV
        },
        {
            id:5,
            image:nationalG,
            video:nationalGV
        },

    ]
  return (
    <div className='flex md:my-10 justify-between my-3 px-6'>
        {productionHouseList.map((item , index)=>(
            <div key = {index}  className='w-[75px] sm:w-[100px] border-[3px] border-gray-800 hover:border-[2px] hover:border-gray-100 hover:scale-110 md:w-[150px] lg:w-[200px] md:hover:border-[3px] transition-all duration-300 ease-in-out rounded-xl shadow-xl shadow-gray-800 cursor-pointer'>
                
                <img src = {item.image} className=' w-full z-10'/>
                <video src={item.video} autoPlay loop playsInline className='absolute top-0 left-0 rounded-xl z-0 opacity-0  hover:opacity-50'/>
            </div>
            
            
        ))}
    </div>
  )
}
