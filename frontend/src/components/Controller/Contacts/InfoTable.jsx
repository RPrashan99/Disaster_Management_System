import React from "react";
import {LanguageBar} from "../../components/Controller/LanguageBar";
import { HeaderBar } from "../../components/Controller/HeaderBar";
import { FaXmark } from "react-icons/fa6";
//import Emergancy from "../../components/Common/Emergancy_icon";
//import SearchBar from "../../components/Common/SearchBar";

const ContactInfoAdder = () => {
  return (
    <>
      <LanguageBar />
      <HeaderBar/>
      {/* <Emergancy /> */}

      <div>
        {/* <SearchBar /> */}

        <div>
          <div className="bg-blue-100 p-5 m-5">
            <h1 className="text-base md:text-3xl font-bold text-center">
              Ministry Of Disaster Managment
            </h1>
            <p className="text-sm text-center">
              Address of the ministry -HEAD Qa
            </p>

            <div className="w-full bg-white p-2 md:p-5 mt-5 shadow-lg flex items-center justify-between">
              <h1 className="text-red-600 font-semibold text-base md:text-2xl">
                Hotline:-
              </h1>
              <div className="bg-red-600 text-white font-bold text-base md:text-2xl p-2 rounded-md">
                {" "}
                1717{" "}
              </div>
              <button type="submit" onClick={""} className="bg-ControllerSec w-[10%] rounded-lg shadow-2xl items-center justify-center focus:ring-4 focus:outline-none hover:bg-[gray] border-[2px] border-[white] py-2 px-1 text-white font-semibold text-xl text-center text-[1.2rem]">
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
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-white">
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      Major General(Retired) Udaya Herath
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      Director General
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      0112136103
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      0773 957 896
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      <a
                        className="font-bold hover:underline"
                        href="mailto:example@example.com"
                      >
                        example@example.com
                      </a>
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                        <button type="submit" onClick={""} className="bg-red-600  rounded-lg shadow-2xl items-center justify-center focus:ring-4 focus:outline-none hover:bg-[gray] border-[2px] border-[white] p-2 text-white font-semibold text-[1.2rem]">
                          <FaXmark/>
                        </button>
                      </td>
                  </tr>

                  <tr className="bg-gray-50">
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      Mrs.H.Udayangani
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      Personal Assistant
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      0112136103
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      0760 994 808
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      <a
                        className="font-bold hover:underline"
                        href="mailto:example@example.com"
                      >
                        example@example.com
                      </a>
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                        <button type="submit" onClick={""} className="bg-red-600  rounded-lg shadow-2xl items-center justify-center focus:ring-4 focus:outline-none hover:bg-[gray] border-[2px] border-[white] p-2 text-white font-semibold text-[1.2rem]">
                          <FaXmark/>
                        </button>
                      </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          
        </div>
      </div>
    </>
  );
};

export default ContactInfoAdder;