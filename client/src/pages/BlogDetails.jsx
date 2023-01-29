import React, {useState, useEffect} from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';

import { useStateContext } from '../context';
import { CustomButton, Loder,CountBox2 } from '../components';
import { ProfileImg} from '../assets';
import {CountBox} from '../components';
const BlogDetails = () => {
  const {state} = useLocation();
  const navigate = useNavigate();
  const {donate ,getDonations,contract, address, numofUseBlog} = useStateContext();
  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState('');
  const [donaters, setDonaters] = useState([]); 
  const [numBlogs, setnumBlogs] = useState(0);
  const [currID,setcurrID] = useState(0);


  const fetchDonators = async () => {
    const data = await getDonations(state.pId);
    setDonaters(data);
  }

  const numofB = async () => {
    const num = await numofUseBlog(state.owner);
    setnumBlogs(num);
    console.log(state.pId);
  }

  
  const upVoteN =  ethers.utils.formatUnits(state.upVotes, 6);
  // const numofupV = async () => {
  //   const uV = state.upVotes
  // }


  useEffect(()=>{
    if(contract){ 
      fetchDonators();
      numofB();
    }
  },[contract,address])
    const handleDonate = async () => {
      setIsLoading(true);
      await donate(state.pId, amount);
      navigate('/');
      setIsLoading(flase);
    }

  return (
    <div>
      {isLoading && <Loder/>}
      <div className='w-full flex md:flex-row flex-col mt-10 gap-[30px]'>
        <div className='flex-1 flex-col'>
          <img src={state.image} alt="Blog" className='w-full h-[410px] object-cover rounded-xl'/>
        </div>

        <div className='flex md:w-[150px] w-full flex-wrap
        justify-between gap-[30px]'>
          <CountBox2 title="Total upVotes" value={upVoteN}/>
          <CountBox title= "Total Amount" value={state.amountCollected}/>
          <CountBox title="Total Backers" value={donaters.length}/>
        </div>
      </div>

      <div className='mt-[60px] flex lg:flex-row flex-col gap-5'>
        <div className='flex-[2] flex flex-col gap-[40px]'>
          <div>
            <h4 className='font-Jost font-semibold text-[18px] text-white
            uppercase'>User</h4>
  
            <div className='mt-[20px] flex flex-row items-center flex-wrap gap-[14px]'>
              <div className='w-[52px] h-[52px] flex items-center justify-center rounded-full bg-[#2c2f32] cursor-pointer'>
                <img src={ProfileImg} alt="user" className='w-[60px] h-[60px] object-contain'/>
              </div>
    
              <div>
                <h4 className='font-Jost font-semibold text-[14px] text-white break-all'>{state.owner}</h4>
                <p className='mt-[4px] font-Jost font-normal text-[12px] text-[#808191]'>{numBlogs}</p>
                {/* <p className='mt-[4px] font-Jost font-normal text-[12px] text-[#808191]'>10 Blogs</p> */}
              </div>
            </div>
          </div>
          
          <div>
            <h4 className='font-Jost font-semibold text-[18px] text-white
            uppercase'>Story</h4>
            <div className='mt-[20px]'>
            <p className='font-Jost font-normal text-[16px] text-[#808191] leading-[26px] text-justify'>{state.description}</p>
            </div>
          </div>

          <div>
            <h4 className='font-Jost font-semibold text-[18px] text-white
            uppercase'>Donators</h4>
            <div className='mt-[20px] flex flex-col gap-4'>
              {donaters.length > 0 ? donaters.map((item, index)=> (
                <div>
                  <div key={`${item.donator}-${index}`}
                  className='flex justify-between items-center gap-4'>
                    <p className='font-Jost font-normal text-[16px] text-[#b2b3bd] leading-[26px] break-all'>{index + 1}. {item.donator}</p>
                    <p className='font-Jost font-normal text-[16px] text-[#808191] leading-[26px] break-all'>{item.donations}</p>
                  </div>
                </div>
              )):(
                <p className='font-Jost font-normal text-[16px] text-[#808191] leading-[26px] text-justify'>No Donators yet. Be the first one</p>
              )}
              
              <p className='font-Jost font-normal text-[16px] text-[#808191] leading-[26px] text-justify'>{state.description}</p>
            </div>


          </div>
        </div>

        

        <div className='flex-1'>
          <h4 className='font-Jost font-semibold text-[18px] text-white
          uppercase'>Fund</h4>

        <div className='mt-[20px] flex flex-col p-4 bg-[#1c1c24] rounded-[10px]'>
          <p className='font-epiloue font-medium text-[20px] leading-[30px] text-center text-[#808191]'>
            Fund the Blog
          </p>
          <div className='mt-[30px]'>
            <input 
              type="number" 
              placeholder='ETH 0.1'
              step="0.01"
              className='w-full py-10px sm:px-[20px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-Jost text-white text-[18px] leading-[30px] placeholder:text-[#4b5264] rounded-[10px]'
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

            <div className='my-[20px] p-4 bg-[#13131a] rounded-[10px]'>
              <h4 className='font-Jost font-semibold text-[14px] leading-[22px] text-white'>Back it because you belive in it.</h4>
              <p className='mt-[20px] font-Jost font-normal leading-[22px] text-[#808191]'>Support the Blog for no reward, just because it speaks to you.</p>
            </div>

            <div className='flex flex-center justify-center'>
            <CustomButton 
              btnTypes = "button"
              title= "Fund Blog"
              styles="border-2 border-[#5BDFD1]"
              handleClick={handleDonate}
            />
            </div>

          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default BlogDetails

