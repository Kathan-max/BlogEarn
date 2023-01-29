import {React, useState } from "react"
import { useNavigate } from 'react-router-dom';
import {ethers} from 'ethers';
import { createCampaign, money } from '../assets';
import { useStateContext } from '../context';
import { CustomButton,Loder} from '../components';
import {checkIfImage} from '../utils';
import {FormField,Dropmen,Dropwdown} from '../components';


const CreateBlog = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const {createBlog} = useStateContext();
  const [form, setForm] = useState({
    name:'',
    title:'',
    description:'',
    tags:'',
    image:'',
    link1:'',
    link2:'',
    link3:'',
  });

  const handleFormFieldChange = (fieldName,e) =>{
    setForm({ ...form,[fieldName]:e.target.value})
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    checkIfImage(form.image, async (exists) => {
      if(exists){
        setIsLoading(true);
        await createBlog({ ...form,})
        console.log(form);
        setIsLoading(false);
        navigate('/');
      }else{
        alert('Provide valid image URL')
        setForm({ ...form, image: ''});
      }
    })
  }

  return (
    <div className="bg-[#042A53] opacity-70 flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      {isLoading && <Loder/>}
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-transparent border-2 border-[#5BDFD1] rounded-[10px]">
        <h1 className="font-Jost font-bold 
        sm:text-[25px] text-[18px] leading-[38px] text-[#5BDFD1]">CREATE A BLOG</h1>
      </div>
      <form onSubmit={handleSubmit} className="w-full mt-[65px] flex flex-col gap-[30px]">
        <div className="flex flex-wrap gap-[40px]">
        <FormField 
            labelName="Your Name *"
            placeholder="Demo Name"
            inputType="text"
            value={form.name}
            handleChange={(e) => handleFormFieldChange('name',e)}
          />
          <FormField 
            labelName="Blog Title *"
            placeholder="Write a title"
            inputType="text"
            value={form.title}
            handleChange={(e) => handleFormFieldChange('title',e)}
          />
        </div>
        <FormField
          labelName="Story *"
          placeholder="Write your story"
          isTextArea
          value={form.description}
          handleChange={(e) => handleFormFieldChange('description',e)}    
        />

        <div className="w-full flex justify-start items-center p-4 bg-[#024d64] h-[120px] rounded-[10px]">
          <img src={money} alt="Money" className="w-[40px] h-[40px] object-contain"/>
          <h4 className="font-Jost font-bold text-[25px] text-white ml-[20px]">Earn Money Based on your Content</h4> 
        </div>
          <FormField 
            labelName="Relevant Tags*"
            placeholder="Place The tags saperated by ','"
            inputType="text"
            value={form.tags}
            handleChange={(e) => handleFormFieldChange('tags',e)}    
          />
          <FormField 
            labelName="Relevant Image *"
            placeholder="Place image URL of your Blog"
            inputType="url"
            value={form.image}
            handleChange={(e) => handleFormFieldChange('image',e)}    
          />
          <FormField 
            labelName="Relevant Link *"
            placeholder="Add the Link of the Places you Visited"
            inputType="url"
            value={form.link1}
            handleChange={(e) => handleFormFieldChange('link1',e)}    
          />
          {/* <Dropmen
            labelName="Relevant Link *"
            placeholder="Select the links for the Relevant Hotels"
            handleChange={(e) => handleFormFieldChange('link1',e)}
          /> */}
          {/* <Dropwdown
            labelName="Relevant Link *"
            placeholder="Add the Link of the Places you Visited"
            handleChange={(e) => handleFormFieldChange('link1',e)}
          /> */}
          <FormField 
            labelName="Relevant Link *"
            placeholder="Add the Link of the Places you Visited"
            inputType="url"
            value={form.link2}
            handleChange={(e) => handleFormFieldChange('link2',e)}    
          />
          <FormField 
            labelName="Relevant Link *"
            placeholder="Add the Link of the Places you Visited"
            inputType="url"
            value={form.link3}
            handleChange={(e) => handleFormFieldChange('link3',e)}    
          />

          <div className="flex justify-center items-center mt-[40px]">
            <CustomButton
              btnTypes="submit"
              title="Submit new Blog"
              styles="border-2 border-[#5BDFD1]"
            />
          
        </div>
      </form>
    </div>
  )

  
}

export default CreateBlog