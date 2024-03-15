import React, { useState } from "react";
import { DragDrop } from "../../components/Controller/News/DragDrop";
import axios from "axios";

export const NewsCreatorForm = () => {

  const [ formData, setFormData ] = useState({
    newsID: '',
    heading:'',
    author:'',
    createdDate:'',
    createdTime:'',
    image:'',
    newsBody:'',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    try{
      const response = await axios.post('', formData);
      console.log('Form submitted succedded: ', response.data);
      setFormData({
        newsID: '',
        heading:'',
        author:'',
        createdDate:'',
        createdTime:'',
        image:'',
        newsBody:'',
      });
    } catch (error){
      console.error('Error submitting form:', error);
    }

  };

  return (
    <div>
      <div className="pt-10 pl-5">
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
                        <label >Author</label>
                        <input 
                            type="text"
                            id="author"
                            value={formData.author}
                            onChange={handleChange}
                            required
                            placeholder="Enter Name"
                            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-black focus:border-black block w-[50%] p-2.5 my-2"
                        ></input>
                        <label >Date</label>
                        <input 
                            type="Date"
                            id="createdDate"
                            value={formData.createdDate}
                            onChange={handleChange}
                            required
                            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-black focus:border-black block w-[50%] p-2.5 my-2"
                        ></input>
                        <label >Time</label>
                        <input 
                            type="Time"
                            id="createdTime"
                            value={formData.createdTime}
                            onChange={handleChange}
                            required
                            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-black focus:border-black block w-[50%] p-2.5 my-2"
                        ></input>    
                </div>
            </div>

            <div className="bg-[#c2c0c0] p-5 rounded-lg text-black text-base">
              <div className="font-semibold text-primary text-center py-5">
                <h1 className=" md:text-2xl">Create News</h1>
              </div>

              <div className="p-1 md:p-1">
                <label>Heading</label>
                <input 
                  type="text"
                  id="heading"
                  value={formData.heading}
                  onChange={handleChange}
                  required
                  placeholder="Enter Subject"
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 mt-1 mb-3"
                ></input>

                <label>Body</label>
                <textarea
                  type="Form"
                  id="newsBody"
                  value={formData.newsBody}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full h-auto p-2.5 mt-1 mb-3"
                  placeholder="......"
                  required
                  height="Auto"
                />
                <label>Media Files</label>
                <DragDrop/>

              <div className="flex items-center justify-center mt-5 shadow-2xl ">
                <button type="submit" onChange={handleSubmit} className="bg-ControllerSec border-[2px] border-[white] py-2 px-10 w-full text-white font-semibold text-xl rounded">
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
