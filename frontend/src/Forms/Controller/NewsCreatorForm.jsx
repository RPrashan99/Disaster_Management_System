import React, { useEffect, useState } from "react";
// import { DragDrop } from "../../components/Controller/News/DragDrop";
import axios from "axios";
import {message} from "antd";
import PropTypes from 'prop-types';
import { CircularProgressbar } from "react-circular-progressbar";
import {
  Label,
  TextInput,
  Select,
  Checkbox,
  FileInput,
  Textarea,
  Alert,
  Button,
} from "flowbite-react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import app from "../../firebase";

const NewsCreatorForm = ({selection}) => {

  const [ formData, setFormData ] = useState({
    newsId:'',
    heading:'',
    author:'',
    image:null,
    newsBody:'',
    show: ''
  });
  const [imageFile, setImageFiles] = useState(null);
  // const [imageFileUrl, setImageFileUrl] = useState(null);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const buttonStyle = {
    background: 'linear-gradient(to right, #124E70, #5CDB95)',
  }
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
    console.log("selection Author:", formData.author)
    console.log("selection Image:", formData.image)
  },[selection]);

  const handleChange = (e) => {
    if(e.target.type === "file"){
      setFormData({
        ...formData,
        image: e.target.files[0]
    });
      console.log("image file",formData.image);
    }else{
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!formData.heading || !formData.author || !formData.newsBody ) {
      message.error('Missing required fields');
      return;
    }
    
    else{
      try{
        const response = await axios.post('http://localhost:5000/api/news/createNews', {...formData});
        console.log('Form submitted succedded: ', response.data);
        message.success('News is created!')
        setFormData({
          heading:'',
          author:'',
          image: null,
          newsBody:'',
          show: false
        });
        setTimeout(() => {
          window.location.reload();
        }, 1500);
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
        const currentImageURL = selection.image;
        const imageURL = formData.image? formData.image : currentImageURL;

        const response = await axios.patch('http://localhost:5000/api/news/updateNews/' + formData.newsId, {
          heading:formData.heading,
          newsBody:formData.newsBody,
          author:formData.author,
          image: imageURL,
        });
        console.log('Form update succeeded: ', response.data);
        setFormData({
          ...formData,
          image: null,
        });
        message.success('News is updated!')
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } catch (error){
        console.error('Error updating form:', error);
        message.error('Failed to update news!')
      }
  
    }
  }

  const uploadImage = async () => {
    try {
      if (!imageFile) {
        setImageUploadError("Please select an image file");
        return;
      }
      setImageUploadError(null);
      const storage = getStorage(app);
      const fileName = new Date().getTime() + imageFile.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, imageFile);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setImageUploadProgress(progress.toFixed(0));
        },
        (error) => {
          setImageUploadError(
            "Could not upload the image file must be less than 10MB"
          );
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageUploadProgress(null);
            setImageUploadError(null);
            setFormData({...formData, image: downloadURL});
          });
        }
      );
    } catch (err) {
      setImageUploadError("An error occurred while uploading the image");
      setImageUploadProgress(null);
    }
  };

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
                <div className="p-5 self-center">
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
                    {/* <label htmlFor="image">Media Files</label> */}
                    {/* <DragDrop/>     */}
                    {/* <input 
                      type="file"
                      id="image"
                      name="image"
                      onChange={(e) => handleChange(e)}
                      className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-[Gray] focus:border-[gray] block w-[50%] p-2.5 my-2"
                    ></input> */}
                      <div className="px-5 pb-3">
              <div>
                <Label htmlFor="image" value="Click to upload the images" />
              </div>
              <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
                <FileInput
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImageFiles(e.target.files[0])}
                />
                <Button
                  type="button"
                  style={buttonStyle}
                  size="sm"
                  outline
                  onClick={uploadImage}
                  disabled={imageUploadProgress}
                >
                  {imageUploadProgress ? (
                    <div className="w-16 h-16">
                      <CircularProgressbar
                        value={imageUploadProgress}
                        text={`${imageUploadProgress || 0}`}
                      />
                    </div>
                  ) : (
                    "Upload Image"
                  )}
                </Button>
              </div>
            </div>
            {imageUploadError && (
              <Alert color="failure">{imageUploadError}</Alert>
            )}
            {formData.image && (
              <img
                src={(formData.image)}
                alt="uploaded image"
                className="w-full h-71 object-cover"
              />
            )}

                </div>
            </div>

            <div className="bg-blue-100 p-3  text-black text-base border-[5px] border-gray-400">
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
                  <button type="submit" onClick={(selection? editHandler:handleSubmit)} className="bg-ControllerSec hover:bg-ControllerHov focus:bg-slate-600 focus:ring-4 focus:outline-none border-[2px] border-[white] py-2 px-10 w-full text-white font-semiboldtext-xl rounded text-[1.2rem]">
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

NewsCreatorForm.propTypes = {
  selection: PropTypes.any.isRequired // Adjust the PropTypes type according to your needs
};
export default NewsCreatorForm;











