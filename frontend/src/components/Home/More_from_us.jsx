import React from "react";

const More_from_us = () => {
  const service = [
    {
      id: 1,
      title: "Family Emergency Plans",
      description: "Tool to create plans during the Emergency.",
      image: "/src/assets/Full_Family.png",
    },
    {
      id: 2,
      title: "Volunteering",
      description:
        "Give your support  to the people in need during Emergencies.",
      image: "/src/assets/Volunteering.png",
    },
    {
      id: 3,
      title: "Safety Tips",
      description:
        "Discover essential safety tips for any disaster. Be ready, stay vigilant. Your safety matters most.",
      image: "/src/assets/Light_On.png",
    },
    {
      id: 4,
      title: "Donation",
      description:
        "Contribute today to support disaster relief efforts, helping communities rebuild and thrive. ",
      image: "/src/assets/Donation.png",
    },
  ];
  return (
    <div className='md:px-14 px-4 py-8 max-w-screen-2xl mx-auto bg-grey'>
      <div className="my-10 md:w-1/2 mx-auto text-center">
        <h2 className="text-5xl text-primary font-bold mb-3">
          Join with Us For
        </h2>
        
      </div>
      <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-10 px-2 ">
        {service.map((service) => (
          <div
            key={service.id}
            className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md cursor-pointer
                   hover:-translate-y-5 hover:border-b-4 hover:border-primary transition-all duration-300 flex items-center justify-center h-full 
                   bg-white shadow-md"
          >
            <div className="">
              <div className="bg-[#a2adcd] mb-4 h-10 w-10 mx-auto rounded-tl-3xl rounded-br-3xl">
                <img src={service.image} alt="" className="ml-1 w-15" />
              </div>
              <h4 className="text-2xl font-bold text-primary mb-2 px-2">
                {service.title}
              </h4>
              <p className="text-sm text-gray-500 ">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default More_from_us;


