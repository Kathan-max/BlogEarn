import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {logo, sun} from '../assets';
import {navlinks} from '../constants';
import { useDisconnect } from "@thirdweb-dev/react";

const Icon = ({styles, name, imgUrl, isActive, disabled, handleClicks}) => (
  <div className={`w-[48px] h-[48px] rounded-[10px] ${isActive && isActive === name && 'bg-[#024d64]'} flex justify-center items-center ${!disabled && 'cursor-pointer'} ${styles}`} onClick={handleClicks}>
      {!isActive ?(
          <img src={imgUrl} alt="Fund_logo" className="w-1/2 h-1/2"/>
      ):(
          <img src={imgUrl} alt="Fund_logo" className=
          {`w-1/2 h-1/2 ${isActive !== name} && 
          'grayscale'`}/>
      )}
  </div>
)


const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive,setIsActive] = useState();
  const disconnect = useDisconnect();
  return (
    <div className="flex justify-between
    items-center flex-col sticky top-0 h-[75vh]">
        <Link to="/">
            <Icon styles="w-[69px] h-[69px] mt-[0px] bg-transparent" imgUrl={logo}/>
        </Link>

        <div className="flex flex-col
        justify-between items-center bg-[#042A53]
        rounded-[20px] w-[76px] py-12 mt-12 border-2 border-[#5BDFD1]">
            <div className="flex flex-col justify-center
            items-center gap-3">
                {navlinks.map((Link)=>(
                    <Icon 
                        key={Link.name}
                        {...Link}
                        isActive={isActive}
                        handleClicks={()=>{
                            if(!Link.disabled){
                                setIsActive(Link.name);
                                navigate(Link.link);
                            }
                        }}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Sidebar