import React from "react";
import image1 from "../../assets/Slide_Bar/one.png";
import image2 from "../../assets/Slide_Bar/two.png";
import image3 from "../../assets/Slide_Bar/three.png";
import image4 from "../../assets/Slide_Bar/four.png";
import { Carousel } from "flowbite-react";

const Image_slider = () => {
  return (
    <div>
      <div className=" max-w-screen-2xl lg-py-0 mx-0 min-h-screen h-screen">
        <Carousel className="w-full mx-auto">
          <img src={image1} alt=""  />
          <img src={image2} alt=""  />
          <img src={image3} alt=""  />
          <img src={image4} alt=""  />
        </Carousel>
      </div>
    </div>
  );
};

export default Image_slider;


