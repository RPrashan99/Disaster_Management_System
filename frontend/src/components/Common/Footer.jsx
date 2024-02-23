import React from 'react'

import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { HiOutlinePrinter } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import playStore from '../../assets/Playstore.png';
import AppStore from '../../assets/AppStore.png'
import { FaFacebookF,FaWhatsapp,FaTwitter,FaTelegram ,FaInstagram } from "react-icons/fa";

const Footer = () => {
    
    return (
        <footer  className='max-w-full bg-primary'>
            <div class="mx-auto w-full max-w-screen-xl">
                <div class="grid grid-cols-1 gap-8 px-10 py-1 lg:py-8 md:grid-cols-3">
                    <div className='text-center'>
                        <h2 class="mb-6 text-lg font-semibold text-white uppercase ">Contact Us</h2>
                        <ul class="text-white font-normal text-sm">
                            <li class="mb-4 flex gap-4  items-center">
                                <i><LuPhoneCall /></i>
                                <a href="#" class=" hover:underline">+94 112 136 222  /+94 112 670 002</a>
                            </li>
                            <li class="mb-4 flex gap-4 items-center">
                                <i><HiOutlinePrinter /></i>
                                <a href="#" class="hover:underline">+94 11 2670079</a>
                            </li>
                            <li class="mb-4 flex gap-4 items-center">
                                <i><MdOutlineMailOutline /></i>
                                <a href="#" class="hover:underline">dmc@gmail.com</a>
                            </li>
                            <li class="mb-4 flex gap-4 items-center">
                                <i><IoLocationOutline /></i>
                                <a href="#" class="hover:underline">120/2,Vidya Mawatha, Colombo 07, Sri Lanka</a>
                            </li>

                        </ul>
                    </div>
                    <div className='text-center'>
                        <h2 class="mb-6 text-2xl font-semibold text-white uppercase ">Related links</h2>
                        <ul class="text-white  font-normal text-sm">
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Sri  Lanka Red Cross Society </a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Department of Meteorology</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Health Promotion Bureau</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Sri Lanka Police</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Sri Lanka Army</a>
                            </li>
                        </ul>
                    </div>
                    <div className='text-center'>
                        <h2 class="mb-6 text-2xl font-semibold text-white uppercase ">Call Center<br /><span> 1717</span></h2>
                        <ul class="text-white font-normal text-sm">
                            <li class="mb-4">
                                <a href="#" class="font-medium">Switch to The App</a>
                            </li>
                            <li class="mb-4 ">
                                <button>
                                    <span className='inline-flex px-2 py-1 gap-5 boarder rounded-md' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                                        <img src={playStore} alt="" className='w-8 h-8 ' />
                                        <div className='text-white'>
                                            <div class="text-xs">
                                                GET IT ON
                                            </div>
                                            <div class="-mt-1 font-sans text-xl font-semibold">
                                                Google Play
                                            </div>
                                        </div>


                                    </span>
                                </button>

                            </li>
                            <li class="mb-4">
                                <button>
                                    <span className='inline-flex px-2 py-1 gap-5 boarder rounded-md' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                                        <img src={AppStore} alt="" className='w-8 h-8 ' />
                                        <div className='text-white'>
                                            <div class="text-xs">
                                                Download on the

                                            </div>
                                            <div class="-mt-1 font-sans text-xl font-semibold">
                                                App Store
                                            </div>
                                        </div>


                                    </span>
                                </button>
                            </li>
                        </ul>
                    </div>

                </div>
                <div class="px-4 py-3 bg-secondary md:flex md:items-center md:justify-between ">
                    <span class="text-sm text-black sm:text-center">© 2023 <a href="https://www.bing.com/search?pglt=43&q=Disaster+management+website+in+sri+lanka&cvid=e63b08b5be554115b7071953d5196b3c&gs_lcrp=EgZjaHJvbWUqBggDEEUYOzIGCAAQRRg5MgYIARAAGEAyBggCEAAYQDIGCAMQRRg7MgYIBBAAGEAyBggFEC4YQDIGCAYQRRg8MgYIBxBFGDwyBggIEEUYPNIBCDQ2NTRqMGoxqAIAsAIA&FORM=ANNTA1&PC=PCMEDGEDP">
                        Disaster Management Center™</a> | All Rights Reserved.
                    </span>
                    <div class="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
                        <i><FaFacebookF/></i>
                        <i><FaWhatsapp/></i>
                        <i><FaTwitter/></i>
                        <i><FaTelegram/></i>
                        <i><FaInstagram /></i>
                        
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer

