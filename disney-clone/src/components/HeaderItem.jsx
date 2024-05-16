import React from 'react'

export default function HeaderItem({name , Icon}) {
  return (
    <div className='text-white flex items-center gap-5 
      text-[18px] font-semibold cursor-pointer
    '>
        <Icon />
        {name}
    </div>
  )
}
