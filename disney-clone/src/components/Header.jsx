import React from 'react'
import logo from '../assets/Images/logo.png'
import { HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv } from "react-icons/hi2";
import { FaUser } from "react-icons/fa";
import { HiPlus,HiDotsVertical } from "react-icons/hi";
import HeaderItem from './HeaderItem';
import avtar from '../assets/Images/Avtar.avif'
export default function Header() {

  const menu=[
    {
        name:'HOME',
        icon:HiHome
    },
    {
        name:'SEARCH',
        icon:HiMagnifyingGlass
    },
    {
        name:'WATCH LIST',
        icon:HiPlus
    },
    {
        name:'ORIGINALS',
        icon:HiStar
    },
    {
        name:'MOVIES',
        icon:HiPlayCircle
    },
    {
        name:'SERIES',
        icon:HiTv
    }
]

  return (
    <div className='flex items-center justify-between w-[100vW] p-6'>
        <div className='flex gap-2 sm:gap-3 md:gap-4 lg:gap-8'>
          <img src={logo} className='object-cover 
            w-[35px]
            sm:w-[75px]
            md:w-[90px]
            lg:w-[125px] 
                       
          '/>

          {menu.map((item)=>(
            <HeaderItem name={item.name} Icon = {item.icon} />
          ))}
        </div>
        <img src={avtar} className='w-[20px] sm:w-[25px] md:w-[30px] lg:w-[50px]   rounded-full' />
    </div>
  )
}
