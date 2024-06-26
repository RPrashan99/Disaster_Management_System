import React from "react";
import { contacts_map, webLinks_map, store_map } from "./Data";
import {
  FaFacebookF,
  FaWhatsapp,
  FaTwitter,
  FaTelegram,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="max-w-full bg-primary bottom-0 left-0 right-0">
      <div className="mx-auto w-full max-w-screen-xl">
        {/* Left div */}
        <div className="grid grid-cols-1 gap-8 px-10 py-1 lg:py-8 md:grid-cols-3">
          <div className="text-center">
            <h2 className="mb-6 text-lg font-semibold text-white uppercase ">
              Contact Us
            </h2>
            <ul className="text-white font-normal text-sm">
              {contacts_map.map((item) => (
                <li className="mb-4 flex gap-4  items-center">
                  <i>
                    <item.icon />
                  </i>
                  <a href={item.link} className=" hover:underline">
                    {item.content}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Center div */}
          <div className="text-center">
            <h2 className="mb-6 text-2xl font-semibold text-white uppercase ">
              Related links
            </h2>
            <ul className="text-white  font-normal text-sm">
              {webLinks_map.map((item) => (
                <li className="mb-4">
                  <a href={item.link} className="hover:underline">
                    {item.content}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right div */}
        <div className="text-center">
          <h2 className="mb-6 text-2xl font-semibold text-white uppercase ">
            Call Center
            <br />
            <span> 1717</span>
          </h2>
          <ul className="text-white font-normal text-sm">
            <li className="mb-4">
              <a href="#" className="font-medium">
                Switch to The App
              </a>
            </li>
            {store_map.map((item) => (
              <li className="mb-4">
                <button>
                  <span
                    className="inline-flex px-2 py-1 gap-5 boarder rounded-md"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                  >
                    <img src={item.image} alt="" className="w-8 h-8 " />
                    <div className="text-white">
                      <div className="text-xs">{item.content1}</div>
                      <div className="-mt-1 font-sans text-xl font-semibold">
                        {item.content2}
                      </div>
                    </div>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>


        </div>

        
        <div className="px-4 py-3 bg-secondary md:flex md:items-center md:justify-between ">
          <span className="text-sm text-black sm:text-center">
            © 2023{" "}
            <a href="https://www.bing.com/search?pglt=43&q=Disaster+management+website+in+sri+lanka&cvid=e63b08b5be554115b7071953d5196b3c&gs_lcrp=EgZjaHJvbWUqBggDEEUYOzIGCAAQRRg5MgYIARAAGEAyBggCEAAYQDIGCAMQRRg7MgYIBBAAGEAyBggFEC4YQDIGCAYQRRg8MgYIBxBFGDwyBggIEEUYPNIBCDQ2NTRqMGoxqAIAsAIA&FORM=ANNTA1&PC=PCMEDGEDP">
              Disaster Management Center™
            </a>{" "}
            | All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <i>
              <FaFacebookF />
            </i>
            <i>
              <FaWhatsapp />
            </i>
            <i>
              <FaTwitter />
            </i>
            <i>
              <FaTelegram />
            </i>
            <i>
              <FaInstagram />
            </i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
