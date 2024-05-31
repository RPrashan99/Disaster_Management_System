import React, { useState, useReducer, useEffect } from "react";
import { LanguageBar } from "../../components/Controller/LanguageBar";
import { HeaderBar } from "../../components/Controller/HeaderBar";
import { RequestsDetails } from "../../components/Controller/Requests/RequestsDetails";
import { Footer } from "../../components/Controller/Footer";
import { Card_Requests } from "../../components/Controller/Requests/Card_Requests";
import { getRequests } from "../../services/requestService";
// import {  parseISO } from 'date-fns';
import { WindowComponent } from "../../Windows/RequestWindow";
import { Tag, message } from "antd";
import axios from "axios";
import { BarSlideShow } from "../../components/Controller/Requests/BarSlideShow";
import { FaXmark, FaBars } from "react-icons/fa6";

const intialState = {
  requests: [],
};

const reducer = (state, action) => {
  let updatedRequests;
  switch (action.type) {
    case "Request_Loaded":
      return { ...state, requests: action.payload };
    case "Select_Request":
      updatedRequests = state.requests.map(
        request =>
          request.requestID === action.payload.requestID
            ? action.payload
            : request
      );
      return { ...state, requests: updatedRequests };
    default:
      return state;
  }
};
export const Requests = () => {
  const [state, dispatch] = useReducer(reducer, intialState);
  const { requests } = state;
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [showRequests, setShowRequests] = useState([]);
  const [filteredRequests, setFilteredRequests] = useState({
    allRequests: [],
    floodRequests: [],
    tsunamiRequests: [],
    fireRequests: [],
    landslideRequests: [],
    extremeWindRequests: [],
    verifiedRequests: [],
    todayRequests: [],
    monthlyRequests: [],
    otherRequests: [],
    allReadRequests: [],
    todayReadRequests: [],
    monthlyReadRequests: [],
  });
  const disasters = ["flood", "tsunami", "fire", "wind", "landslide"];
  useEffect(() => {
    const loadRequests = getRequests();
    console.log("Requests", requests);
    loadRequests.then(requests => {
      // Sort requests by date and time in descending order
      const sortedRequests = requests.sort((a, b) => {
        const dateComparison =
          new Date(b.requestDate) - new Date(a.requestDate);

        //const converted = requestTime.split(' ')[0].split(':');
        if (dateComparison !== 0) {
          return dateComparison;
        }
        const timeA = a.requestTime.split(" ")[0];
        const timeB = b.requestTime.split(" ")[0];
        return timeB.localeCompare(timeA);
      });
      const other = requests.filter(
        request =>
          !disasters.some(disasters =>
            request.disasterType.toLowerCase().includes(disasters)
          )
      );
      const flood = requests.filter(request =>
        request.disasterType.toLowerCase().includes("flood")
      );
      const tsunami = requests.filter(request =>
        request.disasterType.toLowerCase().includes("tsunami")
      );
      const fire = requests.filter(request =>
        request.disasterType.toLowerCase().includes("fire")
      );
      const extremeWind = requests.filter(request =>
        request.disasterType.toLowerCase().includes("wind")
      );
      const landslide = requests.filter(request =>
        request.disasterType.toLowerCase().includes("landslide")
      );
      const verified = requests.filter(
        request => request.verification === "verified"
      );
      const today = requests.filter(
        request => request.requestDate === new Date().toDateString()
      );
      const monthly = requests.filter(
        request =>
          request.requestDate.split(" ")[1] ===
          new Date().toDateString().split(" ")[1]
      );
      const allRead = requests.filter(request => request.read === true);
      const todayRead = requests.filter(
        request =>
          request.read === true &&
          request.requestDate.split(" ")[2] ===
            new Date().toDateString().split(" ")[2]
      );
      const monthlyRead = requests.filter(
        request =>
          request.read === true &&
          request.requestDate.split(" ")[1] ===
            new Date().toDateString().split(" ")[1]
      );

      dispatch({ type: "Request_Loaded", payload: sortedRequests });
      setShowRequests(requests);
      setFilteredRequests({
        allRequests: requests,
        floodRequests: flood,
        tsunamiRequests: tsunami,
        fireRequests: fire,
        extremeWindRequests: extremeWind,
        landslideRequests: landslide,
        verifiedRequests: verified,
        todayRequests: today,
        monthlyRequests: monthly,
        otherRequests: other,
        allReadRequests: allRead,
        todayReadRequests: todayRead,
        monthlyReadRequests: monthlyRead,
      });
    });
  }, []);

  const handleCardClick = async request => {
    try {
      const updatedRequest = { ...request, read: true };
      setSelectedRequest(updatedRequest);
      await axios.put(
        `http://localhost:5000/api/requests/updateRequest/${request.requestID}`,
        updatedRequest
      );
      const updatedRequests = await getRequests();
      setShowRequests(updatedRequests);
      console.log("Updated Request:", updatedRequest.read);
    } catch (error) {
      console.error("Error updating request:", error);
    }
  };

  const handleTag = tag => {
    if (tag == "all") {
      setShowRequests(filteredRequests.allRequests);
    } else if (tag === "flood") {
      setShowRequests(filteredRequests.floodRequests);
    } else if (tag === "tsunami") {
      setShowRequests(filteredRequests.tsunamiRequests);
    } else if (tag === "fire") {
      setShowRequests(filteredRequests.fireRequests);
    } else if (tag === "extreme wind") {
      setShowRequests(filteredRequests.extremeWindRequests);
    } else if (tag === "landslide") {
      setShowRequests(filteredRequests.landslideRequests);
    } else if (tag === "verified") {
      setShowRequests(filteredRequests.verifiedRequests);
    } else if (tag === "today") {
      setShowRequests(filteredRequests.todayRequests);
    } else if (tag === "monthly") {
      setShowRequests(filteredRequests.monthlyRequests);
    } else if (tag === "read") {
      setShowRequests(filteredRequests.allReadRequests);
    } else if (tag === "other") {
      setShowRequests(filteredRequests.otherRequests);
    } else {
      message.info("Not Such requests");
      return [];
    }
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <LanguageBar />
      <HeaderBar />
      <div className="flex flex-wrap gap-0 items-center relative bg-userBlue justify-center w-full h-full">
        <h1 className="flex justify-center items-center text-[25px] font-bold h-[50px] text-[black] bg-gray-200 w-full font-Inter">
          Details on Requests
        </h1>
        <div className="flex justify-center items-center pt-2 w-full h-full flex-wrap">
          <RequestsDetails
            flood={filteredRequests.floodRequests}
            tsunami={filteredRequests.tsunamiRequests}
            fire={filteredRequests.fireRequests}
            wind={filteredRequests.extremeWindRequests}
            other={filteredRequests.otherRequests}
            all={filteredRequests.allRequests}
            today={filteredRequests.todayRequests}
            monthly={filteredRequests.monthlyRequests}
            todayRead={filteredRequests.todayReadRequests}
            monthlyRead={filteredRequests.monthlyReadRequests}
            allRead={filteredRequests.allReadRequests}
          />
        </div>
      </div>
      <div className="flex flex-col flex-wrap gap-0  relative w-full mt-5 h-full ">
        <h1 className="flex text-[2rem] font-serif m-10 h-[20%] font-bold text-ControllerPrim">
          Requests
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1">
          {selectedRequest
            ? <div>
                <div>
                  <WindowComponent
                    requestID={selectedRequest.requestID}
                    requesterName={selectedRequest.requesterName}
                    disasterLocation={selectedRequest.disasterLocation}
                    disasterType={selectedRequest.disasterType}
                    affectedCount={selectedRequest.affectedCount}
                    medicalNeed={selectedRequest.medicalNeed}
                    otherNeeds={selectedRequest.otherNeeds}
                    verification={selectedRequest.verify}
                    locationLatLan={selectedRequest.disasterLocationLatLan}
                  />
                </div>
              </div>
            : <div>
                <div>
                  <div>
                    <div className="md:flex hidden flex-row justify-center items-center my-3 mx-10">
                      <Tag
                        className=" w-32 h-8 bg-[#707070] hover:bg-slate-600 text-[1rem] text-center text-[white] m-1 p-1 shadow-2xl cursor-pointer"
                        onClick={() => handleTag("all")}
                      >
                        All{" "}
                      </Tag>
                      <Tag
                        className=" w-32 h-8 bg-[#707070] hover:bg-slate-600 text-[1rem] text-center text-[white] m-1 p-1 shadow-2xl cursor-pointer"
                        onClick={() => handleTag("flood")}
                      >
                        Flood{" "}
                      </Tag>
                      <Tag
                        className=" w-32 h-8 bg-[#707070] hover:bg-slate-600 text-[1rem] text-center text-[#ffffff] m-1 p-1 shadow-xl cursor-pointer"
                        onClick={() => handleTag("tsunami")}
                      >
                        Tsunami
                      </Tag>
                      <Tag
                        className=" w-32 h-8 bg-[#707070] hover:bg-slate-600 text-[1rem] text-center text-[white] m-1 p-1 shadow-xl cursor-pointer"
                        onClick={() => handleTag("extreme wind")}
                      >
                        Extreme Wind
                      </Tag>
                      <Tag
                        className=" w-32 h-8 bg-[#707070] hover:bg-slate-600 text-[1rem] text-center text-[white] m-1 p-1 shadow-xl cursor-pointer"
                        onClick={() => handleTag("fire")}
                      >
                        Fire
                      </Tag>
                      <Tag
                        className=" w-32 h-8 bg-[#707070] hover:bg-slate-600 text-[1rem] text-center text-[white] m-1 p-1 shadow-xl cursor-pointer"
                        onClick={() => handleTag("landslide")}
                      >
                        Landslide
                      </Tag>
                      <Tag
                        className=" w-32 h-8 bg-[#707070] hover:bg-slate-600 text-[1rem] text-center text-[white] m-1 p-1 shadow-xl cursor-pointer"
                        onClick={() => handleTag("other")}
                      >
                        Other
                      </Tag>
                      <Tag
                        className=" w-32 h-8 bg-[#707070] hover:bg-slate-600 text-[1rem] text-center text-[white] m-1 p-1 shadow-xl cursor-pointer"
                        onClick={() => handleTag("today")}
                      >
                        Today
                      </Tag>
                      <Tag
                        className="w-32 h-8 bg-[#707070] hover:bg-slate-600 text-[1rem] text-center text-[white] m-1 p-1 shadow-xl cursor-pointer"
                        onClick={() => handleTag("monthly")}
                      >
                        Monthly
                      </Tag>
                      <Tag
                        className="w-32 h-8 bg-[#707070] hover:bg-slate-600 text-[1rem] text-center text-[white] m-1 p-1 shadow-xl cursor-pointer"
                        onClick={() => handleTag("verified")}
                      >
                        Verified
                      </Tag>
                      <Tag
                        className="w-32 h-8 bg-[#707070] hover:bg-slate-600 text-[1rem] text-center text-[white] m-1 p-1 shadow-xl cursor-pointer"
                        onClick={() => handleTag("read")}
                      >
                        Read
                      </Tag>
                    </div>
                    <div className="flex md:hidden w-full items-center justify-end  ">
                      <button
                        onClick={toggleMenu}
                        className="text-black focus:outline-none justify-end m-4 focus:test-gray-500  "
                      >
                        {isMenuOpen
                          ? <FaXmark className="h-6 w-6 " />
                          : <FaBars className="h-6 w-6 " />}
                      </button>
                    </div>
                  </div>
                  <div
                    className={`absolute space-y-2 z-30  right-0 mt-10 w-[200px] mb-10 rounded-l-lg text-center justify-end items-center py-3 transition-all duration-500000 ease-in-out  bg-primary bg-opacity-10  shadow-lg border-[4px] border-[white] border-opacity-50 ${isMenuOpen
                      ? " h-auto pl-10 w-[200px] block text-center justify-center items-center hover:transition-transform hovet:text-opacity-100  hover:duration-50000 hover:ease-in-out text-opacity-0 text-[#c2c2c2] hover:text-opacity-100 hover:bg-ControllerPrim hover:border-opacity-100 mb-10"
                      : "hidden"}`}
                  >
                    <ul className=" flex flex-col gap-1 relative justify-center w-full !mt-[8.00px] !text-[14px] cursor-pointer  ![font-family:'Inter',Helvetica]  items-start mb-5 ">
                      <li key="1">
                        <a
                          className="flex relative transform  transition-transform w-full hover:font-bold bg-transparent  hover:text-[white]"
                          onClick={() => handleTag("all")}
                        >
                          {" "}All{" "}
                        </a>
                      </li>
                      <li key="2">
                        <a
                          className="flex relative transform transition-transform hover:font-bold  w-full bg-transparent  hover:text-[white] hover:bg-transparent "
                          onClick={() => handleTag("flood")}
                        >
                          {" "}Flood{" "}
                        </a>
                      </li>
                      <li key="3">
                        <a
                          className="flex relative transform hover:font-bold  flex-[0_0_auto] bg-transparent  hover:text-[white] hover:bg-transparen transition "
                          onClick={() => handleTag("tsunami")}
                        >
                          {" "}Tsunami{" "}
                        </a>
                      </li>
                      <li key="4">
                        <a
                          className="flex relative transform hover:font-bold  flex-[0_0_auto] bg-transparent hover:text-[white]  hover:bg-transparent transition"
                          onClick={() => handleTag("extreme wind")}
                        >
                          {" "}Extreme Wind{" "}
                        </a>
                      </li>
                      <li key="5">
                        <a
                          className="flex relative transform hover:font-bold  flex-[0_0_auto] bg-transparen hover:bg-transparent  hover:text-[white] transition "
                          onClick={() => handleTag("fire")}
                        >
                          {" "}Fire{" "}
                        </a>
                      </li>
                      <li key="6">
                        <a
                          className="flex relative transform hover:font-bold  flex-[0_0_auto] bg-transparen hover:bg-transparent  hover:text-[white] transition "
                          onClick={() => handleTag("landslide")}
                        >
                          {" "}Landslide{" "}
                        </a>
                      </li>
                      <li key="7">
                        <a
                          className="flex relative transform hover:font-bold  flex-[0_0_auto] bg-transparen hover:bg-transparent  hover:text-[white] transition "
                          onClick={() => handleTag("other")}
                        >
                          {" "}other{" "}
                        </a>
                      </li>
                      <li key="8">
                        <a
                          className="flex relative transform hover:font-bold  flex-[0_0_auto] bg-transparen hover:bg-transparent  hover:text-[white] transition "
                          onClick={() => handleTag("monthly")}
                        >
                          {" "}Monthly{" "}
                        </a>
                      </li>
                      <li key="9">
                        <a
                          className="flex relative transform hover:font-bold  flex-[0_0_auto] bg-transparen hover:bg-transparent hover:text-[white] transition "
                          onClick={() => handleTag("verified")}
                        >
                          {" "}Verified{" "}
                        </a>
                      </li>
                      <li key="10">
                        <a
                          className="flex relative transform hover:font-bold  flex-[0_0_auto] bg-transparen hover:bg-transparent hover:text-[white] transition "
                          onClick={() => handleTag("read")}
                        >
                          {" "}Read{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="max-h-[500px] overflow-auto mx-10 ">
                  <table className="flex w-[100%] lg:visible invisible">
                    <tbody className="flex w-full sm:no relative text-[1.2rem] text-[white]  bg-userBlue">
                      <tr key="index" className="flex w-full ">
                        <th className="flex relative ml-5 w-[22%] justify-center items-center ">
                          Disaster
                        </th>
                        <th className="flex w-[14%] justify-center items-center ">
                          Verification
                        </th>
                        <th className="flex  w-[17%] justify-center items-center ">
                          Time
                        </th>
                        <th className="flex  w-[17%] justify-center items-center ">
                          Location
                        </th>
                        <th className="flex  w-[18%] justify-center items-center ">
                          Date
                        </th>
                        <th className="flex  w-[17%] justify-center items-center ">
                          Affected Count
                        </th>
                      </tr>
                    </tbody>
                  </table>

                  {Array.isArray(showRequests) &&
                    showRequests.map(request =>
                      <div
                        key={request.requestID}
                        className="flex justify-center items-center bg-[white] w-full flex-wrap cursor-pointer"
                        onClick={() => handleCardClick(request)}
                      >
                        <Card_Requests
                          D_type={request.disasterType}
                          Verification={request.verify}
                          Time={request.requestTime.split(" ")[0]}
                          Date={request.requestDate}
                          Location={request.disasterLocation}
                          AffectedPeople={request.affectedCount}
                        />
                      </div>
                    )}
                </div>
              </div>}
        </div>
      </div>
      <div className="flex relative bg-gray-300 w-full h-[20%] mt-10">
        <BarSlideShow req={requests} />
      </div>
      <Footer />
    </div>
  );
};
