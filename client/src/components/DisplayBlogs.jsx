import React from 'react';
import { useNavigate} from 'react-router-dom';
import { loader } from '../assets';
import {FundBlogs} from '../components';

const DisplayBlogs = ({title,isLoading,blogs}) => {
    const navigate = useNavigate();
    const handleNavigate = (blog)=>{
        navigate(`/Blog-details/${blog.title}`,{state:blog})
    }
    return (
      <div>
        {/* <h1 className="font-Jost font-semibold text-[18px]
        text-white text-left">{title} ({blogs.length})</h1> */}

        <div className="flex flex-wrap mt-[20px] gap-[26px]">
            {isLoading && (
                <img src={loader} alt="Loader" className="w-[100px] h-[100px] object-contain"/>
            )}

            {!isLoading && blogs.length === 0 && (
                <p className="font-Jost font-semibold text-[14px] leading-[30px] text-[#818183]">
                    You have not created any blogs yet
                </p>
            )}

            {!isLoading && blogs.length > 0 && blogs.map
            ((blog) => <FundBlogs
                key={blog.id}
                {...blog}
                handleClick={() => handleNavigate(blog)} 
            />)}
        </div>
      </div>
    )
}

export default DisplayBlogs