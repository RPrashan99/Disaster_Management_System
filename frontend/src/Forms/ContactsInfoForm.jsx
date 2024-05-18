import React, { useEffect, useState, useReducer } from "react";
// import { DragDrop } from "../../components/Controller/News/DragDrop";
import axios from "axios";
import {message} from "antd";
import PropTypes from 'prop-types';
import { FaXmark } from "react-icons/fa6";
import { deleteContact } from "../services/contactsServices";

const initialState = { contactItems: []};
const reducer = (state, action) => {
    switch (action.type) {
        case 'Contacts_Loaded':
            return {...state, contactItems: action.payload};
        default:
            return state;
    }
};

const ContactsInfoForm = ({selection}) => {

  const [state,dispatch] = useReducer(reducer, initialState);
  const {contactItems} = state
  const [ formData, setFormData ] = useState({
    id:'',
    address: '',
    department: '',
    contactName:'',
    title:'',
    hotline: '',
    directDial: '',
    mobile: '',
    email: ''
  });

  useEffect(() =>{
    // if ((selection.contacts) && Array.isArray(selection.contacts)) {
    //   setFormData((selection.contacts).map(contact => ({
    //     id: contact.id || '',
    //     address: contact.address || '',
    //     department: contact.department || '',
    //     contactName: contact.contactName || '',
    //     title: contact.title || '',
    //     hotline: contact.hotline || '',
    //     directDial: contact.directDial || '',
    //     mobile: contact.mobile || '',
    //     email: contact.email || ''
    //   })));
    // }
    console.log("selectionData:",selection)
  },[selection]);

  const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
  };


  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!formData.contactName || !formData.directDial || !formData.title  || !formData.email) {
      message.error('Missing required fields');
      return;
    }
    else{
      try{
        const response = await axios.post('http://localhost:5000/api/contacts/addContact', {
          address:formData.address,
          department: formData.department,
          contactName:formData.contactName,
          title: formData.title,
          hotline:formData.hotline,
          directDial:formData.directDial,
          mobile: formData.mobile,
          email: formData.email
        });
        console.log('Form submitted succedded: ', response.data);
        message.success('Contact is created!')
        setFormData({
          ...formData,
        });
      } catch (error){
        console.error('Error submitting form:', error);
        message.error('Failed to create contact!')
      }
  
    }
  };

  const handleDelete = async (contactID) => {
    try {
      await deleteContact(contactID);
      dispatch({
        type: "News_Loaded",
        payload: contactItems.filter((item) => item.contacts.contactID !== contactID),
      });
      console.log("News item deleted successfully");
      message.success("Successfully deleted the news item!")
    } catch (error) {
      console.error("Error deleting news item:", error);
      message.error("Deletion failed!")
    }
};

  // const handleEdit = async(e) =>{
  //   e.preventDefault();
  //   if (!formData.contactName || !formData.directDial || !formData.title  || !formData.email) {
  //     message.error('Missing required fields');
  //     return;
  //   }
  //   else{
  //     try{
  //       const response = await axios.patch('http://localhost:5000/api/contacts/updateContact' + formData.id, {
  //         address:formData.address,
  //         department: formData,
  //         contactName:formData.contactName,
  //         title: formData.title,
  //         hotline:formData.hotline,
  //         directDial:formData.directDial,
  //         mobile: formData.mobile,
  //         email: formData.email
  //       });

  //       console.log('Form update succeeded: ', response.data);
  //       message.success('Contact is updated!')


  //       setFormData({
  //         ...formData,
  //       });
  //     } catch (error){
  //       console.error('Error updating form:', error);
  //       message.error('Failed to update contacts!')
  //     }
  
  //   }
  // }

  return (
    <div>
      <div className="bg-blue-100 p-5 m-5 justify-center items-center relative">
        <input type="text"
          id="department"
          name="department"
          value={selection[0].department}
          onChange={handleChange}
          placeholder="Name of the authority/department/Society"
          className="bg-gray-50 border w-5/12 border-gray-300 text-black text-lg rounded-lg focus:ring-[gray] focus:border-[gray] block p-2.5 my-2"
        ></input>
      </div>
      <div className="w-full bg-white p-2 md:p-5 mt-5 shadow-lg flex items-center justify-between">
        <div className=" text-white font-bold text-base md:text-2xl p-2 rounded-md">
          <input  type="tel"
            id="hotline"
            name="hotline"
            value={selection[0].hotline}
            onChange={handleChange}
            placeholder="Hotline"
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-[gray] focus:border-[gray] block p-2.5 my-2"
          ></input>
        </div>
        <div className="flex items-center justify-center mt-5 shadow-2xl ">
          <button type="submit" onClick={(handleSubmit)} className="bg-ControllerSec shadow-md shadow-[gray] rounded-lg focus:ring-4 focus:outline-none hover:bg-[gray] py-2 px-5 w-full text-white font-semibold text-xl text-[1.2rem]">
            Create
          </button>
        </div>
      </div>

      <div className="overflow-auto rounded-lg shadow">
        <table className="mt-5 w-full">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">
                      Address
                    </th>
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
          <tbody className="divide-y divide-gray-100 overflow-auto">
          {selection && selection.map((contact, index) => (
            <tr key={index} className="bg-white">
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      {contact.address}
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      {contact.contactName}
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      {contact.title}
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      {contact.directDial}
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      {contact.mobile}
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      <a
                        className="font-bold hover:underline"
                        href="mailto:example@example.com"
                      >
                        {contact.email}
                      </a>
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                        <button type="submit" onClick={() =>handleDelete(contact.id)} className="bg-red-600 shadow-[gray] shadow-md rounded-lg items-center justify-center focus:ring-4 focus:outline-none hover:bg-[gray] p-2 text-white font-semibold text-[1.2rem]">
                          <FaXmark/>
                        </button>
                    </td>
                  </tr>
          ))}

                  <tr className="bg-gray-50">
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                        <input  
                            type="text"
                            id="address"
                            name="address"
                            onChange={handleChange}
                            placeholder="Address"
                            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-[gray] focus:border-[gray] block p-2.5 my-2"
                        ></input>
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                        <input  type="text"
                            id="name"
                            name="name"
                            onChange={handleChange}
                            placeholder="Name"
                            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-[gray] focus:border-[gray] block p-2.5 my-2"
                        ></input>
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                        <input  type="text"
                            id="title"
                            name="title"
                            onChange={handleChange}
                            placeholder="Title"
                            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-[gray] focus:border-[gray] block p-2.5 my-2"
                        ></input>
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                        <input  type="tel"
                            id="directDial"
                            name="directDial"
                            onChange={handleChange}
                            placeholder="Direct Dial"
                            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-[gray] focus:border-[gray] block p-2.5 my-2"
                        ></input>
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                        <input  type="tel"
                            id="mobile"
                            name="mobile"
                            onChange={handleChange}
                            placeholder="Mobile"
                            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-[gray] focus:border-[gray] block p-2.5 my-2"
                        ></input>
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                        
                        <input  type="email"
                            id="email"
                            name="email"
                            onChange={handleChange}
                            placeholder="Email"
                            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-[gray] focus:border-[gray] block p-2.5 my-2"
                        ></input>
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      <button type="submit" onClick={(handleSubmit)} className="bg-ControllerSec rounded-lg focus:ring-4 focus:outline-none hover:bg-[gray] py-2 px-5 w-full text-white font-semibold shadow-md shadow-[gray] text-xl text-[1.2rem]">
                          Add
                      </button>
                    </td>
            </tr>               
          </tbody>
        </table>
      </div>
    </div>
  );
};


ContactsInfoForm.propTypes = {
  selection: PropTypes.any.isRequired // Adjust the PropTypes type according to your needs
};
export default ContactsInfoForm;