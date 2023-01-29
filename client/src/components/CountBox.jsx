import React from 'react'

const CountBox = ({title, value}) => {
  return (
    <div className='flex flex-col items-center w-[150px] border-2 border-[#5BDFD1] rounded-b-[10px]'>
        <h4 className='font-Jost font-bold text-[30px] text-white
        p-3 bg-[#000] rounded-t-[10px] w-full text-center truncate'>{value}</h4>
        <p className='font-Jost font-bold text-[16px] text-[#5BDFD1] bg-[#434350] px-3 py-3 w-full rounded-b-[10px] text-center'>{title}</p>
    </div>
  )
}

export default CountBox