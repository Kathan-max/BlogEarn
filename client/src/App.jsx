import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {Home, Profile,CreateBlog,BlogDetails} from './pages';
import styles from "./index.css";
import { Sidebar, Navbar } from './components';

const App = () => {
  return (
    <div className="relative sm:-8 p-4 bg-gradient-to-b from-black to-[#042A53] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar/>
      </div>
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />

        <Routes>
        <Route path="/" element={<Home/>}></Route> 
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/create-Blog" element={<CreateBlog/>}/>
          <Route path="/Blog-details/:id" element={<BlogDetails/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App