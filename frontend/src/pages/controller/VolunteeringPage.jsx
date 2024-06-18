import React, { useEffect, useState, useReducer } from "react";
import {
  getVolunteerDetails,
  getVolunteers,
} from "../../services/volunteeringService";
import { VolunteeringWindow } from "../../Windows/VolunteeringWindow";
import { Footer } from "../../components/Controller/Footer";
import { LanguageBar } from "../../components/Controller/LanguageBar";
import { HeaderBar } from "../../components/Controller/HeaderBar";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const intialState = {
  volunteers: [],
};

const reducer = (state, action) => {
  let updatedVolunteers;
  switch (action.type) {
    case "Volunteers_Loaded":
      return { ...state, volunteers: action.payload };
    case "Select_Volunteer":
      updatedVolunteers = state.volunteers.map(
        volunteer =>
          volunteer.id === action.payload.id ? action.payload : volunteer
      );
      return { ...state, volunteers: updatedVolunteers };
    default:
      return state;
  }
};

export const VolunteeringPage = () => {
  const [state, dispatch] = useReducer(reducer, intialState);
  const { volunteers } = state;
  const [selectedVolunteer, setSelectedVolunteer] = useState(null);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [filteredVolunteers, setFilteredVolunteers] = useState({
    sabaragamuwa: [],
    western: [],
    eastern: [],
    northern: [],
    southern: [],
    northWestern: [],
    northCentral: [],
    central: [],
    uva: [],
  });
  useEffect(() => {
    const loadVolunteers = getVolunteers();
    console.log("Volunteers", volunteers);
    loadVolunteers.then(volunteers => {
      const western = volunteers.filter(
        volunteer => volunteer.province == "Western"
      );
      const southern = volunteers.filter(
        volunteer => volunteer.province == "Southern"
      );
      const eastern = volunteers.filter(
        volunteer => volunteer.province == "Eastern"
      );
      const northWestern = volunteers.filter(
        volunteer => volunteer.province == "North Western"
      );
      const northCentral = volunteers.filter(
        volunteer => volunteer.province == "North Central"
      );
      const northern = volunteers.filter(
        volunteer => volunteer.province == "Northern"
      );
      const central = volunteers.filter(
        volunteer => volunteer.province == "Central"
      );
      const sabaragamuwa = volunteers.filter(
        volunteer => volunteer.province == "Sabaragamuwa"
      );
      const uva = volunteers.filter(volunteer => volunteer.province == "Uva");

      dispatch({ type: "Volunteers_Loaded", payload: loadVolunteers });
      setFilteredVolunteers({
        western: western,
        eastern: eastern,
        sabaragamuwa: sabaragamuwa,
        northern: northern,
        southern: southern,
        northWestern: northWestern,
        northCentral: northCentral,
        central: central,
        uva: uva,
      });
    });
  }, []);

  const handleProvinceClick = province => {
    setSelectedProvince(selectedProvince === province ? null : province);
  };

  const handleCardClick = async volunteer => {
    setSelectedVolunteer(volunteer);
    console.log("selectedVolunteer", volunteer);
    //const getVolunteer = await getVolunteerDetails(volunteer.id);
  };

  return (
    <div>
      <LanguageBar />
      <HeaderBar />
      <div>
        {selectedVolunteer
          ? <VolunteeringWindow
              volunteerID={selectedVolunteer.id}
              fullName={selectedVolunteer.fullName}
              age={selectedVolunteer.age}
              nicNumber={selectedVolunteer.nicNumber}
              email={selectedVolunteer.email}
              phoneNumber={selectedVolunteer.phoneNumber}
              address={selectedVolunteer.address}
              skills={selectedVolunteer.skills}
              motivation={selectedVolunteer.motivation}
              experience={selectedVolunteer.experience}
              status={selectedVolunteer.status}
            />
          : <div className="p-10">
              <h1 className="text-center text-[2rem] text-ControllerPrim font-bold font-mono p-5">
                Volunteers by Province
              </h1>
              {Object.keys(filteredVolunteers).map(province =>
                <div
                  key={province}
                  className=" px-5 py-2 my-2 mx-20 text-[1.2rem] text-[white]  bg-gray-300 shadow-md rounded justify-center items-center text-center"
                >
                  <div className="flex flex-row text-center items-center justify-between text-[1.5rem] font-bold text-userBlue">
                    {province.charAt(0).toUpperCase() + province.slice(1)}
                    <button
                      className="focus:outline-none "
                      onClick={() => handleProvinceClick(province)}
                    >
                      {selectedProvince === province
                        ? <IoIosArrowDropupCircle className="w-10 h-10" />
                        : <IoIosArrowDropdownCircle className="w-10 h-10" />}
                    </button>
                  </div>

                  {selectedProvince === province &&
                    <div>
                      <table className="flex-col w-full bg-slate-500">
                        <thead className="bg-userBlue m-2 border-4 rounded-xl border-slate-300 shadow-md">
                          <tr className="text-white">
                            <th className="p-2">Name</th>
                            <th className="p-2">Age</th>
                            <th className="p-2">Address</th>
                            <th className="p-2">Email</th>
                            <th className="p-2">Verification</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredVolunteers[province].map(volunteer =>
                            <tr
                              key={volunteer.id}
                              onClick={() => handleCardClick(volunteer)}
                              className="bg-white border-4 shadow-md rounded-xl text-black border-slate-300 gap-10 hover:bg-gray-100 hover:text-black"
                            >
                              <td>
                                {volunteer.fullName}
                              </td>
                              <td>
                                {volunteer.age}
                              </td>
                              <td>
                                {volunteer.address}
                              </td>
                              <td>
                                {volunteer.email}
                              </td>
                              <td className="flex justify-center rounded-3xl shadow-md bg-ControllerSec p-1 m-1">
                                {volunteer.status}
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>}
                </div>
              )}
            </div>}
      </div>
      <Footer />
    </div>
  );
};
