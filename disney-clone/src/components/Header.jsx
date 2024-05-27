import React, {useState } from 'react'
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
  const [showMenu , setShowMenu] = useState(false);
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
            w-[75px]
            md:w-[90px]
            lg:w-[125px] 
                       
          '/>

          {/* For Larger Screens */}
          <div className='hidden sm:flex sm:gap-3 md:gap-4 lg:gap-8'>
            {menu.map((item , index)=>(
              <HeaderItem key = {index} name={item.name} Icon = {item.icon} />
            ))}
          </div>

            {/* For Smaller Screens */}
          <div className='sm:hidden 
              flex gap-5 self-center'>
            {menu.map((item, index)=> index < 3 && (
              <HeaderItem key = {index} name={""} Icon = {item.icon} />
            ))}

            <div className="sm:hidden" onClick={() => setShowMenu(!showMenu)}>
                <HeaderItem name={""} Icon = {HiDotsVertical} />
            </div>

            {showMenu? <div className='absolute ml-[110px] mt-5 flex-col
                  bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4 *:mb-2'>
              {menu.map((item, index)=> index > 2 && (
                <HeaderItem key = {index} name={item.name} Icon = {item.icon} />
            ))}
            </div> : null}
            

          </div>

        </div>
        <img src={avtar} className='w-[30px] sm:w-[25px] md:w-[30px] lg:w-[50px]   rounded-full' />
    </div>
  )
}
