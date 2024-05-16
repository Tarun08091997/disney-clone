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
    <div className='flex items-center p-6 justify-between w-[100vW]'>
        <div className='flex gap-8'>
          <img src={logo} className='w-[80px] 
            md:w-[115px] object-cover
          '/>

          {menu.map((item)=>(
            <HeaderItem name={item.name} Icon = {item.icon} />
          ))}
        </div>
        <img src={avtar} className='w-[50px] rounded-full' />
    </div>
  )
}
