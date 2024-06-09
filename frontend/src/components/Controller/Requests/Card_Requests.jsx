import React from "react";

export const Card_Requests = ({
  D_type,
  Verification,
  Time,
  Date,
  Location,
  AffectedPeople,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3  shadow-2xl border-b-[5px] border-[gray] bg-slate-100 relative rounded-lg justify-center items-center h-full w-[100%]  self-stretch flex-wrap md:text-wrap sm:text-wrap">
      {/* <div className="flex relative w-full md:justify-center sm:justify-center h-fit items-center" >
                {imageUrl && <img src={imageUrl} alt="Image" className="w-[200px] h-[100px] shadow-2xl  rounded-lg" />}
            </div> */}
      <div className="flex flex-row relative text-center bg-transparent   justify-center items-center mb-2 w-full h-full m-1 px-5 ">
        {D_type &&
          <text className="w-[60%] h-1/3 bg-transparent mx-10 my-3 rounded-[50px] border-none justify-center items-center font-bold text-center text-ControllerPrim  text-[1.6rem]">
            {D_type}
          </text>}
        {Verification &&
          <text className=" w-32 h-[2/3] font-bold rounded shadow-md bg-ControllerSec text-[black]] text-[1rem] ">
            {Verification}
          </text>}
      </div>
      <div className="flex flex-row relative text-center justify-center items-center w-full h-full m-1">
        <div className="flex relative justify-center border-l-2 border-gray-400 items-center h-[80%] w-[50%] flex-row">
          <img
            src="/controller/time.png"
            alt="time"
            className="w-5 h-5 ml-5 mx-2"
          />
          <div className="flex relative  justify-center items-center">
            {Time &&
              <text className="w-full h-full  text-[black] text-[0.8rem]  mx-2">
                {Time}
              </text>}
          </div>
        </div>
        <div className="flex relative justify-center border-l-2 border-gray-400 items-center w-[50%] h-[80%] flex-row">
          <img
            src="/controller/Location.png"
            alt="time"
            className="w-5 h-5 ml-5 mx-2"
          />
          <div className="flex relative w-full justify-center items-center">
            {Location &&
              <text className="w-full h-full rounded-lg text-[black] font-bold text-[1.2rem] mx-2">
                {Location}
              </text>}
          </div>
        </div>
      </div>
      <div className="flex flex-row relative justify-center items-center  shadow-2xl  text-center w-full h-full m-1">
        <div className="flex relative justify-center border-l-2 border-gray-400 items-center w-[50%] h-[80%] flex-row">
          <img
            src="/controller/calendar.png"
            alt="time"
            className="w-5 h-5 ml-5 mx-2"
          />
          <div className="flex relative w-full justify-center items-center">
            {Date &&
              <text className="w-full h-full rounded-lg text-[black] text-[0.8rem] mx-2">
                {Date}
              </text>}
          </div>
        </div>
        <div className="flex relative justify-center border-l-2 border-gray-400 items-center w-[50%] h-[80%] flex-row">
          <img
            src="/controller/people.png"
            alt="time"
            className="w-5 h-5 ml-5 mx-2 justify-center items-center"
          />
          <div className="flex flex-wrap relative w-full justify-center items-center">
            {AffectedPeople &&
              <text className="w-full h-full rounded-lg text-[black] text-[0.8rem] mx-1">
                {AffectedPeople}
              </text>}
          </div>
        </div>
      </div>
    </div>
  );
};
