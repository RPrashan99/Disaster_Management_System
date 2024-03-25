import React, { useEffect, useState } from "react";
import { DragDrop } from "../../components/Controller/News/DragDrop";
import axios from "axios";
import {message} from "antd";

export const NewsCreatorForm = ({selection}) => {

  const [ formData, setFormData ] = useState({
    newsId:'',
    heading:'',
    author:'',
    image:null,
    newsBody:'',
    show: ''
  });
  useEffect(() =>{
    if (selection){
      setFormData({
        newsId: selection.newsId || '',
        heading: selection.heading || '',
        author: selection.author || '',
        image: selection.image || null,
        newsBody: selection.newsBody || '',
        show: selection.show || ''
      });
    }
    console.log("selectionData:",selection)
  },[selection]);

  const handleChange = (e) => {
    if(e.target.type === "file"){
      setFormData({
        ...formData,
        image:e.target.files[0],
      });
    }else{
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!formData.heading || !formData.author || !formData.newsBody  || !formData.newsBody) {
      message.error('Missing required fields');
      return;
    }
    else{
      try{

        const response = await axios.post('http://localhost:5000/api/news/createNews',  formData);
        console.log('Form submitted succedded: ', response.data);
        message.success('News is created!')
        setFormData({
          heading:'',
          author:'',
          image:null,
          newsBody:'',
          show: ''
        });
      } catch (error){
        console.error('Error submitting form:', error);
      }
  
    }
  };
  const editHandler = async(e) =>{
    e.preventDefault();
    if (!formData.heading || !formData.author || !formData.newsBody  || !formData.newsBody) {
      message.error('Missing required fields');
      return;
    }
    else{
      try{
        const response = await axios.patch('http://localhost:5000/api/news/updateNews/' + formData.newsId,  formData);
        console.log('Form update succedded: ', response.data);
        message.success('News is updated!')
        setFormData({
          newsId:'',
          heading:'',
          author:'',
          image:null,
          newsBody:'',
          show: false
        });
      } catch (error){
        console.error('Error updating form:', error);
      }
  
    }
  }

  return (
    <div className="border-[10px] border-[gray]">
      <div className="pt-10 pl-5 ">
        <div className="px-5">
          <h1 className="text-[2rem] md:text-4xl  font-bold font-sans">News Creator</h1>
        </div>
      </div>
      <form className="p-1 md:p-5 justify-start items-start">
          <div className="grid gap-10 mb-6 md:grid-cols-2 p-5 ">
            <div className="flex flex-col text-start text-black border-r-[5px] border-[#494949]">
                <div className="p-5">
                    <img src="/controller/NewsPic.png" alt=""/>
                </div>
                <div className="px-5 border-spacing-x-24 border-[5px] border-ControllerSec m-5" >
                  <h1 className="text-2xl md:text-3xl  font-semibold">Details</h1>
                    <label htmlFor="author">Author</label>
                    <input 
                      type="text"
                      id="author"
                      name="author"
                      value={formData.author}
                      onChange={handleChange}
                      required
                      placeholder="Enter Name"
                      className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-[Gray] focus:border-[gray] block w-[50%] p-2.5 my-2"
                    ></input>
                    <label htmlFor="profile_pic">Media Files</label>
                    <DragDrop/>    
                </div>
            </div>

            <div className="bg-[#dfdede] p-3  text-black text-base border-[5px] border-[gray]">
              <div className="font-semibold text-primary text-center py-5">
                <h1 className=" md:text-2xl">Create News</h1>
              </div>

              <div className="p-1 md:p-1 ">
                <label htmlFor="heading">Heading</label>
                <input 
                  type="text"
                  id="heading"
                  name="heading"
                  value={(formData.heading)}
                  onChange={handleChange}
                  required
                  placeholder="Enter Subject"
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg  focus:ring-[Gray] focus:border-[gray] block w-full  p-2.5 mt-1 mb-3"
                ></input>

                <label htmlFor="newsBody">Body</label>
                <textarea
                  type="Form"
                  id="newsBody"
                  name="newsBody"
                  value={formData.newsBody}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[Gray] focus:border-[gray] block w-full h-[280px] p-2.5 mt-1 mb-3"
                  placeholder="......"
                  height="Auto"
                />

                <div className="flex items-center justify-center mt-5 shadow-2xl ">
                  <button type="submit" onClick={(selection? editHandler:handleSubmit)} className="bg-ControllerSec focus:ring-4 focus:outline-none hover:bg-[gray] border-[2px] border-[white] py-2 px-10 w-full text-white font-semiboldtext-xl rounded text-[1.2rem]">
                      Done
                  </button>
                </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
