import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "./event_map";

const past_event_slider = () => {
  return (
    <div>
      <div className="font-black text-l flex items-center gap-4 py-4">
        <div className="bg-black w-10 h-1 "></div>
        <h3 className="font-semibold">PAST EVENTS</h3>
      </div>

      <div className="flex items-center justify-center flex-col">
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="max-w-[100%] lg:max-w-[80%]"
        >
          {ServiceData.map((item) => (
            <SwiperSlide key={item.title}>
              <div className="flex flex-col gap-6 mb-10 group relative shadow-lg text-white hover:text-black rounded-xl px-6 py-8 h-[200px] w-[200px] lg:h-[350px] lg:w-[300px] cursor-pointer">
                <div
                  className="absolute inset-0 bg-cover bg-center rounded-xl g-black  group-hover:opacity-50"
                  style={{ backgroundImage: `url(${item.backgroundImage})` }}
                />

                <div className="relative flex flex-col gap-4">
                  <h1 className="text-xl lg:text-2xl sm:text-base font-semibold">{item.title}</h1>
                  <h5 className="lg:text-[18px] text-xs">{item.content}</h5>
                  
                  
                </div>

                <RxArrowTopRight className="absolute bottom-5 left-5 text-white group-hover:text-black group-hover:rotate-45  md:w-[35px] md:h-[35px] sm:w-[20px] sm:h-[20px]" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default past_event_slider;
