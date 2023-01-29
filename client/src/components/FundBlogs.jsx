import React from 'react';
import { tagType,thirdweb,ProfileImg,Folder,upvote } from '../assets';
const FundBlogs = ({owner, title, description, tags,amountCollected,image,upVotes,handleClick}) => {
  const allTags = tags.join();
  return (
    <div className="sm:w-[288px] w-full rounded-[15px] bg-[#171717] cursor-pointer" onClick={handleClick}>
        <img src={image} alt="fund" className="w-full h-[158px] object-cover rounded-[15px]" />
        <div className="flex flex-col p-4">
            <div className='flex flex-row items-center md-[18px]'>
                <img src={Folder} alt="Tag" className="w-[17px] h-[17px] object-contain" /> 
                <p className="ml-[12px] mt-[2px] font-Jost font text-[12px] font-bold text-[#ffffff]">{allTags}</p>
            </div>

            
            <div className='flex flex-row justify-between'>
                <div className='block truncate w-[80%]'>
                    <h3 className='font-Jost font-semibold text-[16px] text-white  text-left leading-[26px] truncate'>{title}</h3>
                    <p className='mt-[5px] font-Jost font-normal text-[#808191] text-left leading-[18px] truncate'>{description}</p>
                </div>
                <div className='block flex-5'>
                    <img src={upvote} alt="Upvote" className='flex flex-col  w-[38px] h-[38px]'/>
                </div>
            </div>

            

            <div className='flex items-center mt-[20px] gap-[12px]'>
                <div className='w-[30px] h-[30px] rounded-full  flex justify-center items-center bg-[#13131a]'>
                    <img src={ProfileImg} alt="user" className='w-full h-full object-contain ' />
                </div>
                <p className='flex-1 font-Jost font-normal text-[12px] text-[#808191] truncate'>by <span className='text-[#b2b3bd]'>{owner}</span></p>
            </div>
        </div>
    </div>
  )
}

export default FundBlogs