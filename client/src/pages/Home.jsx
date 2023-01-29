import React,{useEffect,useState} from 'react';
import { useStateContext } from '../context';
import { DisplayBlogs } from '../components';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);

  const {address, contract, getBlogs} = useStateContext();

  const fetchBlogs = async () => {
    setIsLoading(true);
    const data = await getBlogs();
    setBlogs(data);
    setIsLoading(false);
  }

  useEffect(() => {
    if(contract) fetchBlogs();
  },[address,contract]);

  return (
    <DisplayBlogs
      title=""
      isLoading={isLoading}
      blogs={blogs}
    />
  )
}

export default Home