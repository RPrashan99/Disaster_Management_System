import React, { useState } from "react";
import NavBar from "../../Components/Commen/Header/NavBar";
import Volunteering_Image from "../../assets/Volunteering/Volunteering.jpg";
import { TextInput, Textarea } from "flowbite-react";
import Footer from "../../Components/Commen/Footer/Footer";
import SelectDropDown from "react-dropdown-select";

const Volunteering = () => {
  const options = [
    { label: "First Aid/CPR", value: 1 },
    { label: "Search and Rescue", value: 2 },
    { label: "Medical/Nursing", value: 3 },
    { label: "Firefighting", value: 4 },
    { label: "Emergency Medical Technician (EMT)", value: 5 },
    { label: "Water Rescue/Swimming", value: 6 },
    { label: "Electrical/Plumbing", value: 7 },
    { label: "Food Service/Cooking", value: 8 },
    { label: "Language Translation/Interpretation", value: 9 },
  ];
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [formdata, setFormdata] = useState({});

  const handleChange = (e, selectedValues) => {
    const { id, value } = e.target;
    const newValue = id === "skills" ? selectedValues : value.trim();
    setFormdata({ ...formdata, [id]: newValue });
    setSelectedSkills(selectedValues);

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formdata);
    console.log(selectedSkills);
    
  }
  return (
    <>
      <NavBar />

      <div className="pt-10 md:pt-18 ">
        <div className="grid gap-10 mb-6 md:grid-cols-2 p-5 ">
          <div className="text-start items-center text-black">
            <div className="px-5">
              <p className="text-md md:text-xl italic font-semibold">
                Help the people with us
              </p>
              <h1 className="text-2xl md:text-3xl  font-semibold">
                Need Your Heartful Help
              </h1>
            </div>
            <div>
              <img
                src={Volunteering_Image}
                alt=""
                className="items-center justify-center p-1"
              />
            </div>
          </div>

          <div className="bg-blue-100 p-5 rounded-lg text-black text-base">
            <div className="font-semibold text-primary text-center py-5">
              <h1 className="text-3xl md:text-4xl">Complete the Form</h1>
              <p className="text-sm md:text-base text-red-600">
                Fill Form and Beacame Volonteer
              </p>
            </div>

            <form className="p-1 md:p-5 flex flex-col gap-4" onSubmit={handleSubmit}>
              <TextInput type="text" placeholder="Enter your Name" id="name" onChange={handleChange}/>

              <TextInput
                type="tel"
                placeholder="Enter your phone number"
                id="phone"
                
                onChange={(e)=>handleChange(e,null)}
              />

              <TextInput
                type="email"
                placeholder="Enter your Email"
                id="email"
                onChange={(e)=>handleChange(e,null)}
              />

              <TextInput
                type="text"
                placeholder="Enter the district you living"
                id="address"
                onChange={(e)=>handleChange(e,null)}
              />

              <div>
                <p className="mt-0 py-0 px-1 text-xs text-blue-500">
                  Select skills that you have.
                </p>
                <SelectDropDown
                  name="select"
                  options={options}
                  labelField="label"
                  valueField="value"
                  multi
                  id="skills"
                  onChange={(values) => handleChange({ target: { id: "skills" } }, values)}
                  className=" bg-white border border-gray-300 focus:outline-none focus:border-blue-600"
                ></SelectDropDown>
              </div>

              <div>
              <p className="mt-0 py-0 px-1 text-xs text-blue-500">
                  How you are going to help
                </p>
                <Textarea
                  type="text"
                  id="experience"
                  placeholder="How you can help us?"
                  rows={4}
                  onChange={(e) => handleChange(e, null)}
                />
              </div>

              <div>
              <p className="mt-0 py-0 px-1 text-xs text-blue-500">
                  What is the motivation behind you to join with us?
                </p>
              <Textarea
                type="text"
                id="motivation"
                placeholder="What is the motivation behind you to join with us?"
                rows={2}
                onChange={(e) => handleChange(e, null)}
              /></div>

              <div className="flex items-center justify-center mt-5 ">
                <button className="bg-primary py-2 px-10 w-full text-white font-semibold text-xl rounded-2xl" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Volunteering;
