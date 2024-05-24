import React from 'react'

export default function HeaderItem({name , Icon}) {
  return (
    <div className='text-white flex items-center font-semibold cursor-pointer
     gap-0 text-[10px]
     sm:gap-0 sm:text-[13px]
     md:gap-1 md:text-[15px]
     lg:gap-3 lg:text-[18px] 
    '>
        <Icon />
        {name}
    </div>
  )

  
}


