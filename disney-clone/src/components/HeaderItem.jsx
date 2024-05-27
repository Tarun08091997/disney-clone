import React from 'react'

export default function HeaderItem({name , Icon}) {
  return (
    <div className='text-white flex items-center font-semibold cursor-pointer  
     gap-1 text-[13px]
     sm:gap-0 sm:text-[13px]
     md:gap-1 md:text-[15px]
     lg:gap-3 lg:text-[18px] 

     hover:underline  underline-offset-8
    '>
        <Icon />
        <h2 className=''>{name}</h2>
    </div>
  )

  
}


