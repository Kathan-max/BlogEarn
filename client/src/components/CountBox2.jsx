import React, {useState, useEffect} from 'react'

const CountBox2 = ({title,value}) => {
    const [upVote, setupVote] = useState(value);
    const num = parseInt(value,10);
  return (
    <div className='flex flex-col items-center w-[150px] border-2 border-[#5BDFD1] rounded-b-[10px]'>
        <h4 className='font-Jost font-bold text-[30px] text-white
        p-3 bg-[#000] rounded-t-[10px] w-full text-center truncate'>{upVote}</h4>
        <button onClick={()=> setupVote(num+1)} className='font-Jost font-bold text-[16px] text-[#5BDFD1] cursor-pointer bg-[#434350] px-3 py-3 w-full rounded-b-[10px] text-center'>{title}</button>
    </div>
  )
}

export default CountBox2