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
    <div className='flex'>
        {productionHouseList.map((item)=>(
            <img src = {item.image} className='w-[300px]'/>
        ))}
    </div>
  )
}
