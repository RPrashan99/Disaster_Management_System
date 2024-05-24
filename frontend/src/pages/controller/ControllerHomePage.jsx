import React from "react";
import { LanguageBar } from "../../components/Controller/LanguageBar";
import { HeaderBar } from "../../components/Controller/HeaderBar";
import { Menues } from "../../components/Controller/Home/Menues";
import { Footer } from "../../components/Controller/Footer"
import Weather from "../../components/Controller/Weather/Weather";
import { GoogleMap } from "../../components/Controller/Home/GoogleMap";

export const ControllerHomePage = () => {
    return(
        <div className="flex justify-content-center flex-col h-full w-full items-start relative bg-[#ffffff] border-0 border-none" >
            <div className=" flex flex-col items-start justify-between  relative self-stretch flex-[0_0_auto]">
                <div className="flex flex-row items-start justify-between  relative self-stretch w-full flex-[0_0_auto] ">
                    <LanguageBar/>
                </div>
                <div className="flex flex-grow items-start justify-content-center px-0 py-[5px] relative self-stretch flex-[0_0_auto]"> 
                    <HeaderBar/>
                </div>
            </div>
            <div className="grid lg:grid-cols-1 font-sans md:grid-cols-1 sm:grid-cols-1 w-full bg-gray-400 h-full grid-cols-1 self-stretch ">
                {/* <div className="flex bg-[#ffffff] self-stretch lg:h-[500px] md:h-[400px] sm:h-[400px] ">
                    <DisasterStatus/>
                </div > */}

                <div className="flex flex-row shadow-sm mx-[2%] rounded-[20%] self-stretch lg:h-[500px] md:h-[400px] sm:h-[400px] w-[96%]">
                    <GoogleMap/>
                </div>  
            </div>
                <Menues/>
                <div className="w-full">
                    <Weather/>
                </div>  
                <Footer/>
  

        </div>

    )

}



// import React, { useEffect, useState } from "react";
// // import { DragDrop } from "../../components/Controller/News/DragDrop";
// import axios from "axios";
// import {message} from "antd";
// import PropTypes from 'prop-types';

// const NewsCreatorForm = ({selection}) => {

//   const [ formData, setFormData ] = useState({
//     newsId:'',
//     heading:'',
//     author:'',
//     image:'',
//     newsBody:'',
//     show: ''
//   });
//   useEffect(() =>{
//     if (selection){
//       setFormData({
//         newsId: selection.newsId || '',
//         heading: selection.heading || '',
//         author: selection.author || '',
//         image: selection.image || '',
//         newsBody: selection.newsBody || '',
//         show: selection.show || ''
//       });
//     }
//     console.log("selectionData:",selection)
//   },[selection]);

//   const handleChange = (e) => {
//     if(e.target.type === "file"){
//       setFormData({
//         ...formData,
//         image:e.target.files[0],
//       });
//     }else{
//       setFormData({
//         ...formData,
//         [e.target.id]: e.target.value,
//       });
//     }
//   };

//   const handleFileUpload = async (file) => {
//     try {
//       const formData = new FormData();
//       formData.append("file", file);
//       const response = await axios.post("/api/news/upload", formData);
//       const imagePath = response.data.imagePath; // Assuming the response contains the imagePath
//       setFormData({ ...formData, image: imagePath }); // Set imagePath in state
//       return imagePath; // Assuming the response contains the file path

//     } catch (error) {
//       console.error("Error uploading file:", error);
//       throw error;
//     }
//   };

//   const handleSubmit = async(e) => {
//     e.preventDefault();
//     if (!formData.heading || !formData.author || !formData.newsBody  || !formData.newsBody) {
//       message.error('Missing required fields');
//       return;
//     }
//     // else if (formData.image) {
//     //   try {
//     //     const filePath = await handleFileUpload(formData.image);
//     //     // Update the form data with the file path if needed
//     //     setFormData({ ...formData, image: filePath });
//     //   } catch (error) {
//     //     console.error("Error handling file upload:", error);
//     //     // Handle error, show message, etc.
//     //     return;
//     //   }
//     // } 
//     else{
//       try{
//         let imagePath = !formData.image ? formData.image:await handleFileUpload(formData.image) ;
//         // if (formData.image) {
//         //     imagePath = await handleFileUpload(formData.image);
//         // }
//         // const newsData = { ...formData, imagePath };
//         const response = await axios.post('http://localhost:5000/api/news/createNews', {
//           heading: formData.heading,
//           author: formData.author,
//           newsBody: formData.newsBody,
//           imagePath: imagePath // Make sure imagePath is properly set before sending the request
//         });
//         console.log('Form submitted succedded: ', response.data);
//         message.success('News is created!')
//         setFormData({
//           heading:'',
//           author:'',
//           image: '',
//           newsBody:'',
//           show: false
//         });
//         setTimeout(() => {
//           window.location.reload();
//         }, 2000);
//       } catch (error){
//         console.error('Error submitting form:', error);
//         message.error('Failed to create news!')
//       }
//     }
//   };
//   const editHandler = async(e) =>{
//     e.preventDefault();
//     if (!formData.heading || !formData.author || !formData.newsBody ) {
//       message.error('Missing required fields');
//       return;
//     }
//     else{
//       try{
//         let imagePath = formData.image || null; // Set imagePath to null if no new image uploaded

//         if (formData.image instanceof File) {
//           // If a new image is uploaded, handle file upload and get the new imagePath
//           imagePath = await handleFileUpload(formData.image);
//         }
//         const response = await axios.patch('http://localhost:5000/api/news/updateNews/' + formData.newsId, {
//             heading: formData.heading,
//             author: formData.author,
//             newsBody: formData.newsBody,
//             imagePath: imagePath, // Send imagePath as null if no new image uploaded
//             show: formData.show
//         });
//         console.log('Form update succeeded: ', response.data);
//         setFormData({
//           ...formData,
//           image:'',
//         });
//         message.success('News is updated!')
//         setTimeout(() => {
//           window.location.reload();
//         }, 2000);
//       } catch (error){
//         console.error('Error updating form:', error);
//         message.error('Failed to update news!')
//       }
  
//     }
//   }

//   return (
//     <div className="border-[10px] border-[gray]">
//       <div className="pt-10 pl-5 ">
//         <div className="px-5">
//           <h1 className="text-[2rem] md:text-4xl  font-bold font-sans">News Creator</h1>
//         </div>
//       </div>
//       <form className="p-1 md:p-5 justify-start items-start">
//           <div className="grid gap-10 mb-6 md:grid-cols-2 p-5 ">
//             <div className="flex flex-col text-start text-black border-r-[5px] border-[#494949]">
//                 <div className="p-5">
//                     <img src="/controller/NewsPic.png" alt=""/>
//                 </div>
//                 <div className="px-5 border-spacing-x-24 border-[5px] border-ControllerSec m-5" >
//                   <h1 className="text-2xl md:text-3xl  font-semibold">Details</h1>
//                     <label htmlFor="author">Author</label>
//                     <input 
//                       type="text"
//                       id="author"
//                       name="author"
//                       value={formData.author}
//                       onChange={handleChange}
//                       required
//                       placeholder="Enter Name"
//                       className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-[Gray] focus:border-[gray] block w-[50%] p-2.5 my-2"
//                     ></input>
//                     <label htmlFor="image">Media Files</label>
//                     {/* <DragDrop/>     */}
//                     <input 
//                       type="file"
//                       id="image"
//                       name="image"
//                       onChange={(e) => handleChange(e)}
//                       required
//                       placeholder="Enter Name"
//                       className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-[Gray] focus:border-[gray] block w-[50%] p-2.5 my-2"
//                     ></input>
//                 </div>
//             </div>

//             <div className="bg-[#dfdede] p-3  text-black text-base border-[5px] border-[gray]">
//               <div className="font-semibold text-primary text-center py-5">
//                 <h1 className=" md:text-2xl">Create News</h1>
//               </div>

//               <div className="p-1 md:p-1 ">
//                 <label htmlFor="heading">Heading</label>
//                 <input 
//                   type="text"
//                   id="heading"
//                   name="heading"
//                   value={(formData.heading)}
//                   onChange={handleChange}
//                   required
//                   placeholder="Enter Subject"
//                   className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg  focus:ring-[Gray] focus:border-[gray] block w-full  p-2.5 mt-1 mb-3"
//                 ></input>

//                 <label htmlFor="newsBody">Body</label>
//                 <textarea
//                   type="Form"
//                   id="newsBody"
//                   name="newsBody"
//                   value={formData.newsBody}
//                   onChange={handleChange}
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[Gray] focus:border-[gray] block w-full h-[280px] p-2.5 mt-1 mb-3"
//                   placeholder="......"
//                   height="Auto"
//                 />

//                 <div className="flex items-center justify-center mt-5 shadow-2xl ">
//                   <button type="submit" onClick={(selection? editHandler:handleSubmit)} className="bg-ControllerSec focus:ring-4 focus:outline-none hover:bg-[gray] border-[2px] border-[white] py-2 px-10 w-full text-white font-semiboldtext-xl rounded text-[1.2rem]">
//                       Done
//                   </button>
//                 </div>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// NewsCreatorForm.propTypes = {
//   selection: PropTypes.any.isRequired // Adjust the PropTypes type according to your needs
// };
// export default NewsCreatorForm;