import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {CustomButton} from './';
import {logo,menu,search,thirdweb,ProfileImg} from '../assets';
import { navlinks } from '../constants';
import { useStateContext } from '../context';

const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const {address, connect} = useStateContext();
  return (
    <div className="flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6">
      <div className="lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px]
       bg-transparent border-2 border-[#5BDFD1] rounded-[100px]">
        <input type="text" placeholder="Search..." className="flex w-full
        font-epilogue font-normal text-[14px]
        placeholder:text-white text-white
        bg-transparent outline-none border-2px border-[#5BDFD1]"/>
        <div className="w-[72px] h-full rounded-[20px] bg-[#000] flex justify-center 
        items-center cursor-pointer">
          <img src={search} alt="Search btn" 
          className="w-[15px] h-[15px]
          object-contain"/>
        </div>
       </div>
       <div className="sm:flex hidden flex-row
       justify-end gap-4">
          <CustomButton
            btnType = "button"
            title = {address ? 'Create a Blog' : 'Connect'}
            styles = {address ? 'border-2 border-[#5BDFD1]' : 'border-2 border-[#76B6FD]'}
            handleClick = {() => {
              if(address) navigate('create-Blog')
              else connect()
            }}
          />
          <Link to="/profile">
            <div className="w-[45px] h-[45px] rounded-full
              bg-[#000] flex justify-center items-center
              cursor-pointer border-2 border-[#5BDFD1]">
              <img src={ProfileImg} alt="user" className="w-[75%] h-[75%]
              object-contain" />
            </div>
          </Link>
        </div>


        {/* Small Screen Navigation aka hamburger */}
        <div className="sm:hidden flex justify-between 
        items-center relative">
          <div className="w-[40px] h-[40px] rounded-[10px]
              bg-[#2c2f32] flex justify-center items-center
              cursor-pointer">
              <img src={logo} alt="user" className="w-[60%] h-[60%]
              object-contain" />
          </div>
            <img src={menu} 
            alt="menu"
            className="w-[34px] h-[34px] object-contain
            cursor-pointer"
            onClick={() => setToggleDrawer((prev) => !prev)} />

            <div className={`absolute top-[60px] right-0 left-0
              bg-[#1c1c24] z-10 shadow-secondary py-4 
              ${!toggleDrawer ? '-translate-y-[100vh]' : 'translate-y-0'} transition-all duration-700`}>

                <ul className="mb-4">
                  {navlinks.map((Link) => (
                    <li
                     key = {Link.name}
                     className = {`flex p-4 ${isActive === Link.name && 'bg-[#3a3a43]'}`}
                     onClick={() => {
                      setIsActive(Link.name);
                      setToggleDrawer(false);
                      navigate(Link.link);
                     }}
                    >
                      <img
                        src={Link.imgUrl}
                        alt = {Link.name} 
                        className = {`w-[24px] h-[24px] object-contain
                         ${isActive === Link.name ? 'grayscale-0' : 'grayscale'} `}                       
                      />
                      <p className={`ml-[20px]  font-epilogue font-semibold
                      text-[14px] ${isActive === Link.name ? 'text-[#5BDFD1]' : 'text-[#808191]'}`}>
                        {Link.name}
                      </p>
                    </li>
                  ))}
                </ul>

                <div className="flex mx-4">
                <CustomButton
                  btnType = "button"
                  title = {address ? 'Create a Blog' : 'Connect'}
                  styles = {address ? 'border-2 border-[#5BDFD1]' : 'border-2 border-[#76B6FD]'}
                  handleClick = {() => {
                    if(address) navigate('create-Blog')
                    else connect()
                  }}
                />
                </div>
              </div>
        </div> 
    </div>
  )
}

export default Navbar