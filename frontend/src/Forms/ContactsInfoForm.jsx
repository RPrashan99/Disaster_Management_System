import React, { useEffect, useState } from "react";
// import { DragDrop } from "../../components/Controller/News/DragDrop";
import axios from "axios";
import {message} from "antd";
import PropTypes from 'prop-types';
import { FaXmark } from "react-icons/fa6";
import { TextField } from "@mui/material";

const ContactInfoForm = ({selection}) => {

  const [ formData, setFormData ] = useState({
    authority:'',
    heading:'',
    author:'',
    image:'',
    newsBody:'',
    show: ''
  });
  useEffect(() =>{
    if (selection){
      setFormData({
        newsId: selection.newsId || '',
        heading: selection.heading || '',
        author: selection.author || '',
        image: selection.image || '',
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

  const handleFileUpload = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const response = await axios.post("/api/news/upload", formData);
      const imagePath = response.data.imagePath; // Assuming the response contains the imagePath
      setFormData({ ...formData, image: imagePath }); // Set imagePath in state
      return imagePath; // Assuming the response contains the file path

    } catch (error) {
      console.error("Error uploading file:", error);
      throw error;
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!formData.heading || !formData.author || !formData.newsBody  || !formData.newsBody) {
      message.error('Missing required fields');
      return;
    }
    // else if (formData.image) {
    //   try {
    //     const filePath = await handleFileUpload(formData.image);
    //     // Update the form data with the file path if needed
    //     setFormData({ ...formData, image: filePath });
    //   } catch (error) {
    //     console.error("Error handling file upload:", error);
    //     // Handle error, show message, etc.
    //     return;
    //   }
    // } 
    else{
      try{
        let imagePath = !formData.image ? formData.image:await handleFileUpload(formData.image) ;
        // if (formData.image) {
        //     imagePath = await handleFileUpload(formData.image);
        // }
        // const newsData = { ...formData, imagePath };
        const response = await axios.post('http://localhost:5000/api/news/createNews', {
          heading: formData.heading,
          author: formData.author,
          newsBody: formData.newsBody,
          imagePath: imagePath // Make sure imagePath is properly set before sending the request
        });
        console.log('Form submitted succedded: ', response.data);
        message.success('News is created!')
        setFormData({
          heading:'',
          author:'',
          image: '',
          newsBody:'',
          show: false
        });
      } catch (error){
        console.error('Error submitting form:', error);
        message.error('Failed to create news!')
      }
  
    }
  };
  const editHandler = async(e) =>{
    e.preventDefault();
    if (!formData.heading || !formData.author || !formData.newsBody ) {
      message.error('Missing required fields');
      return;
    }
    else{
      try{
        let imagePath = formData.image || null; // Set imagePath to null if no new image uploaded

        if (formData.image instanceof File) {
          // If a new image is uploaded, handle file upload and get the new imagePath
          imagePath = await handleFileUpload(formData.image);
        }


        const response = await axios.patch('http://localhost:5000/api/news/updateNews/' + formData.newsId, {
            heading: formData.heading,
            author: formData.author,
            newsBody: formData.newsBody,
            imagePath: imagePath, // Send imagePath as null if no new image uploaded
            show: formData.show
        });

        console.log('Form update succeeded: ', response.data);
        message.success('News is updated!')


        setFormData({
          ...formData,
          image:'',
        });
      } catch (error){
        console.error('Error updating form:', error);
        message.error('Failed to update news!')
      }
  
    }
  }

  return (
    <>
      <div>
        <div>
            <div className="bg-blue-100 p-5 m-5 justify-center items-center relative">
                <input type="text"
                    id="authority"
                    name="authority"
                    value={formData.authority}
                    onChange={handleChange}
                    required
                    placeholder="Name of the authority/department/Society"
                    className="bg-gray-50 border w-5/12 border-gray-300 text-black text-lg rounded-lg focus:ring-[gray] focus:border-[gray] block p-2.5 my-2"
                ></input>
                <input type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    placeholder="Enter the address"
                    className="bg-gray-50 border w-4/12 border-gray-300 text-black text-sm rounded-lg focus:ring-[gray] focus:border-[gray] block p-2.5 my-2"
                ></input>
                <div className="w-full bg-white p-2 md:p-5 mt-5 shadow-lg flex items-center justify-between">

                  <div className=" text-white font-bold text-base md:text-2xl p-2 rounded-md">
                    <input  type="tel"
                            id="hotline"
                            name="hotline"
                            value={formData.hotline}
                            onChange={handleChange}
                            required
                            placeholder="Hotline"
                            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-[gray] focus:border-[gray] block p-2.5 my-2"
                        ></input>
                  </div>
                <div className="flex items-center justify-center mt-5 shadow-2xl ">
                  <button type="submit" onClick={(selection? editHandler:handleSubmit)} className="bg-ControllerSec shadow-md shadow-[gray] rounded-lg focus:ring-4 focus:outline-none hover:bg-[gray] py-2 px-5 w-full text-white font-semibold text-xl text-[1.2rem]">
                      Create
                  </button>
                </div>
            </div>

            <div className="overflow-auto rounded-lg shadow">
              <table className="mt-5 w-full">
                <thead className="bg-gray-50 border-b-2 border-gray-200">
                  <tr>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">
                      Name
                    </th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">
                      Title
                    </th>
                    <th className=" p-3 text-sm font-semibold tracking-wide text-left">
                      Direct Dial
                    </th>
                    <th className=" p-3 text-sm font-semibold tracking-wide text-left">
                      Mobile
                    </th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">
                      Email
                    </th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">
                      
                    </th>

                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-white">
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      Major General(Retired) Udaya Herath
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      Director General
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      0112136103
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      0773 957 896
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      <a
                        className="font-bold hover:underline"
                        href="mailto:example@example.com"
                      >
                        example@example.com
                      </a>
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                        <button type="submit" onClick={""} className="bg-red-600 shadow-[gray] shadow-md rounded-lg items-center justify-center focus:ring-4 focus:outline-none hover:bg-[gray] p-2 text-white font-semibold text-[1.2rem]">
                          <FaXmark/>
                        </button>
                    </td>
                  </tr>

                  <tr className="bg-gray-50">
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                        <input  type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Name"
                            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-[gray] focus:border-[gray] block p-2.5 my-2"
                        ></input>
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                        <input  type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            placeholder="Title"
                            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-[gray] focus:border-[gray] block p-2.5 my-2"
                        ></input>
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                        <input  type="tel"
                            id="directDial"
                            name="directDial"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="Direct Dial"
                            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-[gray] focus:border-[gray] block p-2.5 my-2"
                        ></input>
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                        <input  type="tel"
                            id="mobile"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            required
                            placeholder="Mobile"
                            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-[gray] focus:border-[gray] block p-2.5 my-2"
                        ></input>
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                        
                        <input  type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Email"
                            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-[gray] focus:border-[gray] block p-2.5 my-2"
                        ></input>
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      <button type="submit" onClick={(selection? editHandler:handleSubmit)} className="bg-ControllerSec rounded-lg focus:ring-4 focus:outline-none hover:bg-[gray] py-2 px-5 w-full text-white font-semibold shadow-md shadow-[gray] text-xl text-[1.2rem]">
                          Add
                      </button>
                    </td>
                  </tr>               
                </tbody>
              </table>
            </div>
            </div>
            
          </div>
      </div>
    </>
  );
};

ContactInfoForm.propTypes = {
  selection: PropTypes.any.isRequired // Adjust the PropTypes type according to your needs
};
export default ContactInfoForm;