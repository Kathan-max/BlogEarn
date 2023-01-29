import React, {useContext, createContext, Children} from 'react';

import {useAddress, useContract, useMetamask, useContractWrite} from '@thirdweb-dev/react';
import { ethers} from 'ethers';


const StateContext = createContext();

export const StateContextProvider = ({children}) =>{
    const { contract } = useContract('0x2eA2823d4de56B774d040076140C1f7C228c74Df');
    const { mutateAsync:  createBlog } = useContractWrite(contract,'createBlog');
    const address = useAddress(); 
    const connect = useMetamask();


    const publishBolg = async(form) => {
        try{
            const linkArray = [form.link1,form.link2,form.link2];
            const tagsS = form.tags.split(",");
            const data = await createBlog([
                address,
                form.title,
                form.description,
                tagsS,
                form.image,
                linkArray
            ])
            console.log("Contract Call Success");
        }catch(error) {
            console.log("Contract call failure",error);
        }
    }

    const getBlogs = async () => {
        const blogs = await contract.call('getBlog');
        const parsedBlogs = blogs.map((blog,i) => ({
            owner: blog.owner,
            title: blog.title,
            description: blog.description,
            tags: blog.tags,
            amountCollected: ethers.utils.formatEther(blog.amountCollected.toString()),
            image: blog.image,
            upVotes: blog.upVotes,
            totClickCounts: blog.totClickCounts,
            linksadd: blog.linksadd,
            pId:i
        }));
        return parsedBlogs;
    }

    const getUserBlog = async () => {
        const blogs = await contract.call('getBlog');
        const userBlogs = blogs.filter((blog) => blog.owner === address);

        return userBlogs;
    }
    const numofUseBlog = async (address2) => {
        const blogs = await contract.call('getBlog');
        const userBlogs = blogs.filter((blog) => blog.owner === address2);
        return userBlogs.length;
    }

    const donate = async (pId, amount)=>{
        const data = await contract.call('donateToBlog',pId,{value: ethers.utils.parseEther(amount)});
        return data;
    }

    const getLinks = async (pId)=>{
        
    }
    const getDonations = async (pId) => {
        const donations = await contract.call('getDonators',pId);
        const numberOfblog = donations[0].length;

        const parsedBlogs = [];

        for(let i=0;i<numberOfblog;i++){
            parsedBlogs.push({
                donators: donations[0][i],
                donations: ethers.utils.formatEther(donations[i][1].toString())
            });
        }

        return parsedBlogs;
    }
    
    

    return(
        <StateContext.Provider
            value={{
                address,
                contract,
                connect,
                createBlog:publishBolg,
                getBlogs,
                getDonations,
                getUserBlog,
                numofUseBlog,
                donate,
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);