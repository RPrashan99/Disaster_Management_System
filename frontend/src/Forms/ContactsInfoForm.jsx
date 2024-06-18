import React, { useEffect, useState, useReducer } from "react";
import axios from "axios";
import {message} from "antd";
import PropTypes from 'prop-types';
import { FaXmark } from "react-icons/fa6";
import { deleteContact } from "../services/contactsServices";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const initialState = { contactItems: []};
const reducer = (state, action) => {
  switch (action.type) {
    case 'Contacts_Loaded':
      return {...state, contactItems: action.payload};
    case 'Add_Contact':
      return {...state, contactItems: [...state.contactItems, action.payload]};  
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
    contactName:'',
    title:'',
    department:selection && selection[0] ? selection[0].department :'',
    hotline: selection && selection[0]?  selection[0].hotline : '',
    directDial: '',
    mobile: '',
    email: ''
  });

  useEffect(() =>{
    dispatch({
      type: "Contacts_Loaded",
      payload: selection,
    });

  },[selection]);

  const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
  };

  const handleExit = () =>{
    window.location.reload();
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!formData.address || !formData.directDial || !formData.title  || !formData.email) {
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

        if(selection){
          dispatch({
            type: "Add_Contact",
            payload: response.data,
          });  
        }else{
          window.location.reload();
        }
      
        message.success('Contact is created!')
        setFormData({
          id:'',
          address: '',
          contactName:'',
          title:'',
          department:selection && selection[0] ? selection[0].department :'',
          hotline: selection && selection[0]?  selection[0].hotline : '',
          directDial: '',
          mobile: '',
          email: ''
        });

      } catch (error){
        console.error('Error submitting form:', error);
        message.error('Failed to create contact!');
      }
  
    }
  };

  const handleDelete = async (contactID) => {
    try {
      await deleteContact(contactID);
      console.log("deleted", contactID);
      dispatch({
        type: "Contacts_Loaded",
        payload: contactItems.filter((item) => item.id !== contactID),
        
      });
    
      message.success("Successfully deleted the contact item!")

    } catch (error) {
      console.error("Error deleting contact item:", error);
      message.error("Deletion failed!")
    }
};
  return (
    <div>
      <div className="bg-blue-100 p-5 m-5 justify-center items-center relative">
        <input type="text"
          id="department"
          name="department"
          value={formData.department}
          onChange={handleChange}
          placeholder="Name of the authority/department/Society"
          className="bg-gray-50 border text-sm md:text-xl w-full md:w-5/12 border-gray-300 text-black rounded-lg focus:ring-[gray] focus:border-[gray] block p-2.5 my-2"
        ></input>
      </div> 
      <div className="w-full bg-white p-2 md:p-5 mt-5 shadow-lg flex items-center justify-between">
        <div className="flex text-white font-bold text-base md:text-2xl p-2 rounded-md">
          <label className="text-[red] p-3">Hotline</label>
          <input  type="tel"
            id="hotline"
            name="hotline"
            value={formData.hotline}
            onChange={handleChange}
            placeholder="Hotline"
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-[gray] focus:border-[gray] block p-2.5 my-2"
          ></input>
        </div>
        <div className="flex items-center justify-center mt-5 shadow-2xl ">
          <button type="submit" onClick={(handleExit)} className="bg-ControllerSec shadow-md shadow-[gray] rounded-lg focus:ring-4 focus:outline-none hover:bg-ControllerHov focus:bg-slate-600 py-1 px-3 w-full text-white font-semibold text-sm md:text-xl">
            <ExitToAppIcon fontSize="inherit"/>
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
          {state.contactItems && state.contactItems.map((contact, index) => (
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
                  <button type="submit" onClick={() =>handleDelete(contact.id)} className="bg-red-600 shadow-[gray] shadow-md rounded-lg items-center justify-center focus:ring-4 focus:outline-none hover:bg-[red] focus:bg-slate-600 p-2 text-white font-semibold text-sm md:text-xl">
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
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Address"
                  required
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-[gray] focus:border-[gray] block p-2.5 my-2"
                ></input>
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                <input  type="text"
                  id="contactName"
                  name="contactName"
                  onChange={handleChange}
                  value={formData.contactName}
                  placeholder="Contact Name"
                  required
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-[gray] focus:border-[gray] block p-2.5 my-2"
                ></input>
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                <input  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Title"
                  required
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-[gray] focus:border-[gray] block p-2.5 my-2"
                ></input>
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                <input  type="tel"
                  id="directDial"
                  name="directDial"
                  value={formData.directDial}
                  onChange={handleChange}
                  placeholder="Direct Dial"
                  required
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-[gray] focus:border-[gray] block p-2.5 my-2"
                ></input>
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                <input  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Mobile"
                  required
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-[gray] focus:border-[gray] block p-2.5 my-2"
                ></input>
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">  
                <input  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-[gray] focus:border-[gray] block p-2.5 my-2"
                ></input>
              </td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                <button type="submit" onClick={(handleSubmit)} className="bg-ControllerSec rounded-lg focus:ring-4 focus:outline-none hover:bg-ControllerHov focus:bg-slate-600 py-1 px-3 w-full text-white font-semibold shadow-md shadow-[gray] text-sm md:text-xl">
                    <PersonAddIcon fontSize="inherit"/>
                </button>
              </td>
            </tr>               
          </tbody>
        </table>
      </div>
    </div>
  );
}

ContactsInfoForm.propTypes = {
  selection: PropTypes.any.isRequired 
};
export default ContactsInfoForm;
