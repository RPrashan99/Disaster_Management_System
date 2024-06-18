import React, { useEffect, useState, useReducer } from "react";
import { LanguageBar } from "../../components/Controller/LanguageBar";
import { HeaderBar } from "../../components/Controller/HeaderBar";
import { SearchBar } from "../../components/Controller/SearchBar";
import { getContacts } from "../../services/contactsServices";
import ContactsInfoForm from "../../Forms/ContactsInfoForm";
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

const initialState = { contactItems: [] };
const reducer = (state, action) => {
  switch (action.type) {
    case 'Contacts_Loaded':
      return { ...state, contactItems: action.payload };
    default:
      return state;
  }
};

const ContactInfoAdder = () => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const { contactItems } = state;
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedCreate, setSelectedCreate] = useState(false);
  const [selectedEdit, setSelectedEdit] = useState(null);

  useEffect(() => {

    const loadContacts = getContacts();
    console.log("contact details:", selectedDepartment);
    loadContacts.then(contactItems => {
      dispatch({ type: 'Contacts_Loaded', payload: contactItems })
    })
  },
    [selectedDepartment]);

  // Group contact items by department
  const groupedContacts = {};
  contactItems.forEach(contact => {
    const { department } = contact;
    if (!groupedContacts[department]) {
      groupedContacts[department] = [];
    }
    groupedContacts[department].push(contact);
  });

  const handleCardClick = (department) => {
    setSelectedDepartment(groupedContacts[department]);
    console.log("selected department", groupedContacts[department]);
  }

  const handleCreate = () => {
    setSelectedCreate(true);
  }

  const handleEdit = (selectedContact) => {
    setSelectedEdit(selectedContact);
    console.log("selected Edit", selectedContact);
  }

  return (
    <>
      <LanguageBar />
      <HeaderBar />
      <div className="flex justify-center items-center ">
        <h1 className=" text-[2.4rem] text-ControllerPrim font-extrabold">Contact Info</h1>
      </div>
      <div className="flex flex-row bg-gray-700 m-3" >
        {/* left Section */}
        <div className=" flex flex-col justify-center items-center w-[20%] bg-userBlue h-auto ">
          <h1 className=" text-ControllerPrim font-semibold py-2 w-full text-center bg-white m-3 text-[1rem] md:text-[1.5rem]">Departments</h1>
          <div className=" flex bg-ControllerSec m-1 mb-3">
              <div className=" flex ">
                <SearchBar/>
              </div>
          </div>
          <div className="flex flex-col w-full h-[450px] overflow-auto" >
            {Object.keys(groupedContacts).map(department => (
              <React.Fragment key={department}>
                <div onClick={() => handleCardClick(department)} className="flex justify-center bg-gray-300 hover:bg-gray-100 focus:bg-slate-600 text-[0.8rem] md:text-[1rem] text-black shadow-md mb-[3px] cursor-pointer rounded-sm align-middle items-center text-center h-10 w-full">
                  {department}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
        {/* right section */}
        <div className="bg-gray-300 w-[80%]">
          {selectedDepartment?(
            selectedEdit?(
              <ContactsInfoForm selection={selectedEdit}/>
              
            ):(
              <div className="bg-blue-100 border-[15px] border-gray-400 p-5 m-5">
                <h1 className="text-base md:text-3xl font-bold text-center">
                  {selectedDepartment[0].department}
                </h1>
                <p className="text-sm text-center">
                </p>
                <div className="w-full bg-white p-2 md:p-5 mt-5 shadow-lg flex items-center justify-between">
                  <h1 className="text-red-600 font-semibold text-md md:text-2xl">
                    Hotline:-
                  </h1>
                  <div className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm md:text-2xl py-2 px-5 rounded-md">
                    {" "}
                    {selectedDepartment[0].hotline}{" "}
                  </div>
                  <button type="submit" onClick={() =>{handleEdit(selectedDepartment)}} className="bg-ControllerSec rounded-lg items-center
                  justify-center focus:ring-4 focus:outline-none hover:bg-ControllerHov focus:bg-slate-600 shadow-md shadow-[gray] py-1 
                  px-3 text-white font-semibold text-sm text-center md:text-xl">
                    <EditIcon fontSize="inherit"/>
                  </button>
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
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 overflow-auto">
                      {Array.isArray(selectedDepartment) && selectedDepartment.map((contact, i) => (
                        <React.Fragment key={i}>
                          <tr className="bg-white">
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
                          </tr>
                        </React.Fragment>
                        ))}
                      </tbody>
                    </table>
                  </div>
              </div>  
            )):(selectedCreate?(
              <ContactsInfoForm/>
            ):(
              <div className=" flex flex-col items-center mt-20 h-full w-full ">
                <h1 className=" text-[0.8rem] md:text-[1rem] [font-family:'Inter',Helvetica]">Create a collection of contact information.</h1>
                <img src="/controller/contactImage1.png" alt="" className=" w-56 h-56"/>
                <button type="submit" onClick={() =>handleCreate()} className="bg-ControllerSec shadow-lg shadow-[gray] rounded-lg focus:ring-4 focus:outline-none hover:bg-ControllerHov focus:bg-slate-600 py-2 px-5 text-white font-semibold text-md md:text-xl">
                  Create New Contacts
                </button>
              </div>  
            )
          )}
        </div>
      </div>
    </>
  );
};

export default ContactInfoAdder;