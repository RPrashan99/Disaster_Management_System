import React, {useEffect, useState, useReducer} from "react";
import {LanguageBar} from "../../components/Controller/LanguageBar";
import { HeaderBar } from "../../components/Controller/HeaderBar";
import { SearchBar } from "../../components/Controller/SearchBar";
import { getContacts } from "../../services/contactsServices";
import ContactsInfoForm from "../../Forms/ContactsInfoForm";

const initialState = { contactItems: []};
const reducer = (state, action) => {
  switch (action.type){
    case 'Contacts_Loaded':
      return {...state, contactItems:action.payload};
    default:
      return state;  
  }
};

const ContactInfoAdder = () => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const {contactItems} = state;
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedCreate, setSelectedCreate] = useState(false);
  const [selectedEdit, setSelectedEdit] = useState(null);

  useEffect(() =>{

  const loadContacts = getContacts();
  console.log("contact details:", selectedDepartment);
  loadContacts.then(contactItems =>{
    dispatch({type:'Contacts_Loaded', payload: contactItems})
  })
  },
  [selectedDepartment]);

  // Group contact items by department
  const groupedContacts = {};
  contactItems.forEach(contact => {
    const { department, hotline, address } = contact;
    if (!groupedContacts[department]) {
      groupedContacts[department] = {contacts:[], hotline,address,department};
    }
    groupedContacts[department].contacts.push(contact);
  });

  const handleCardClick = (department) =>{
    setSelectedDepartment(department);
    console.log("selected department", department);
  }

  const handleCreate = () =>{
    setSelectedCreate(true);
  }

  const handleEdit = (selectedContact)=> {
    setSelectedEdit(selectedContact);
  }

  return (
    <>
      <LanguageBar />
      <HeaderBar/>
      <div className="flex justify-center items-center ">
          <h1 className=" text-[2.4rem] text-ControllerPrim font-extrabold">Contact Info</h1>
      </div>
      <div className="flex flex-row bg-gray-700 m-3" >
        {/* left Section */}
        <div className=" flex flex-col justify-center items-center w-[20%] bg-gray-200 h-[500px] ">
          <h1 className=" text-ControllerPrim text-[1.5rem]">Dipartments</h1>
          <div className=" flex bg-secondary m-1">
              <div className=" flex ">
                <SearchBar/>
              </div>
          </div>
          <div className="flex flex-col h-[450px] overflow-auto">
            {Object.values(groupedContacts) && groupedContacts.map(([department, contacts]) => (
              <React.Fragment key={department}>
                <div onClick={() => handleCardClick(contacts)} className=" bg-blue-200 shadow-md m-1 rounded-sm text-center text-gray-800 h-10 w-full focus:bg-slate-400">
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
              <div className="bg-blue-100 p-5 m-5">
                <h1 className="text-base md:text-3xl font-bold text-center">
                  {selectedDepartment.department}
                </h1>
                <p className="text-sm text-center">
                  {selectedDepartment.address}
                </p>
                <div className="w-full bg-white p-2 md:p-5 mt-5 shadow-lg flex items-center justify-between">
                  <h1 className="text-red-600 font-semibold text-base md:text-2xl">
                    Hotline:-
                  </h1>
                  <div className="bg-red-600 text-white font-bold text-base md:text-2xl p-2 rounded-md">
                    {" "}
                    {selectedDepartment.hotline}{" "}
                  </div>
                  <button type="submit" onClick={() =>{handleEdit(selectedDepartment)}} className="bg-ControllerSec w-[10%] rounded-lg items-center
                  justify-center focus:ring-4 focus:outline-none hover:bg-[gray] shadow-md shadow-[gray] py-2 
                  px-1 text-white font-semibold text-xl text-center text-[1.2rem]">
                    Edit
                  </button>
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
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 overflow-auto">
                      {Array.isArray(selectedDepartment.contacts) && selectedDepartment.contacts.map((contact,i) => (
                        <React.Fragment key={i}>
                          <tr className="bg-white">
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
                <div className="flex items-center justify-center mt-5 shadow-2xl ">
                  <button type="submit" onClick={() =>handleCreate()} className="bg-ControllerSec shadow-md shadow-[gray] rounded-lg focus:ring-4 focus:outline-none hover:bg-[gray] py-2 px-5 w-full text-white font-semibold text-xl text-[1.2rem]">
                      Create New Contact
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