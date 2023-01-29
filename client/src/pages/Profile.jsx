import {React,useEffect, useState} from 'react'
import { useStateContext } from '../context'
import { DisplayBlogs } from '../components'


const Profile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const {address, contract, getUserBlog} = useStateContext();

  const fetchBlogs2 = async () => {
    setIsLoading(true);
    const data = await getUserBlog();
    setBlogs(data);
    setIsLoading(false);
  }

  useEffect(() => {
    if(contract) fetchBlogs2();
  },[address,contract]);

  return (
    <DisplayBlogs
      title=""
      isLoading={isLoading}
      blogs={blogs}
    />
  )
}

export default Profile