import React, { useState, useEffect } from "react";

import image_1 from "../../assets/HomePage/Image_Slider/one.png";
import image_2 from "../../assets/HomePage/Image_Slider/two.png";
import image_3 from "../../assets/HomePage/Image_Slider/three.png";
import image_4 from "../../assets/HomePage/Image_Slider/four.png";
import {
  IoMdArrowDroprightCircle,
  IoMdArrowDropleftCircle,
} from "react-icons/io";

let currentSlideID = 1;
let intervalId;

const next = () => {
  const sliderElement = document.getElementById("slider");
  const totalSlides = sliderElement.childElementCount;

  if (currentSlideID < totalSlides) {
    currentSlideID++;
    showSlider();
  } else {
    currentSlideID = 1;
    showSlider();
  }
};

const prev = () => {
  if (currentSlideID > 1) {
    currentSlideID--;
    showSlider();
  } else {
    const sliderElement = document.getElementById("slider");
    currentSlideID = sliderElement.childElementCount;
    showSlider();
  }
};

const showSlider = () => {
  const slides = document.getElementById("slider").getElementsByTagName("li");
  const totalSlides = slides.length;

  for (let i = 0; i < totalSlides; i++) {
    const element = slides[i];
    if (currentSlideID === i + 1) {
      element.classList.remove("hidden");
    } else {
      element.classList.add("hidden");
    }
  }
};

const Image_Slider = () => {

  const [timerEnabled, setTimerEnabled] = useState(true);

  useEffect(() => {
    if (timerEnabled) {
      intervalId = setInterval(() => {
        next();
      }, 3000);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [timerEnabled]);

  
  return (
    <>
      <div className="relative">
        <ul id="slider">
          <li className="h-[60vh] relative ">
            <img src={image_1} alt="" className="w-full h-full object-cover inset-0" />
          </li>
          <li className="h-[60vh] relative hidden">
            <img src={image_2} alt="" className="w-full h-full object-cover inset-0" />
          </li>
          <li className="h-[60vh] relative hidden">
            <img src={image_3} alt="" className="w-full h-full object-cover inset-0" />
          </li>
          <li className="h-[60vh] relative hidden">
            <img src={image_4} alt="" className="w-full h-full object-cover inset-0" />
          </li>
        </ul>

        <div className="absolute px-3 flex h-full w-full top-0 left-0 ">
          <div className="my-auto w-full flex justify-between">
            <button
              onClick={prev}
              className="text-white shadow-lg hover:text-black"
            >
              <IoMdArrowDropleftCircle className="w-8 h-8" />
            </button>
            <button
              onClick={next}
              className="text-white shadow-lg hover:text-black"
            >
              <IoMdArrowDroprightCircle className="w-8 h-8" />
            </button>
          </div>
        </div>

        <div className="absolute w-full top-5 px-5">
          <div className="flex bg-white items-center">
            <div className="md:w-1/8 w-1/10 bg-gradient-to-br from-red-600 via-red-800 to-black h-full hover:bg-gradient-to-r p-1 items-center flex justify-center">
              <h1 className="font-bold px-3 md:text-lg text-base text-white shadow-lg">
                Warnings
              </h1>
            </div>
            <div className="items-center flex justify-center px-3">
              <p
                className="md:text-sm text-xs text-black overflow-hidden"
                style={{ maxHeight: "1.5em"  }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
                animi repellendus reiciendis, aperiam ut
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Image_Slider;
