import React from 'react';

export const Menues = () => {

    const service =[
        {
            id: 1,
            title: "Family Emergency Plans",
            description: "Tool to create plans during the Emergency.",
            image: "/controller/Full Family.png",
          },
          {
            id: 2,
            title: "Volunteering",
            description:
              "Give your support  to the people in need during Emergencies.",
            image: "/controller/Volunteering.png",
          },
          {
            id: 3,
            title: "Safety Tips",
            description:
              "Discover essential safety tips for any disaster. Be ready, stay vigilant. Your safety matters most.",
            image: "/controller/Light On.png",
          },
          {
            id: 4,
            title: "Donation",
            description:
              "Contribute today to support disaster relief efforts, helping communities rebuild and thrive. ",
            image: "/controller/Donation.png",
          },
          {
            id: 5,
            title: "Evacuation Routes",
            description: "Guides until you reach a safe place.",
            image: "/controller/Exit Sign.png",
          },
          {
            id: 6,
            title: "Whether",
            description:
              "Provides information on whether around you. You can be ready according to the whether.",
            image: "/controller/Weather.png",
          },
          {
            id: 7,
            title: "News",
            description:
              "Be aware on things hapenning in the environment around you.",
            image: "/controller/News.png",
          },
          {
            id: 8,
            title: "Shelter Information",
            description:
              "Find a safe place until disaster goes away. ",
            image: "/controller/Majlis Tent.png",
          },

    ];

    return(     
      <div className="mt-10 grid group w-[80%] md:h-[100%] sm:h-[100%] lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mx-auto my-10 px-2 grid-cols-1  md:w-11/18 gap-0">
                {service.map((service) => (
            <div key={service.id} className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80
                   hover:-translate-y-5 rounded-md cursor-pointer group-hover:scale-[0.85] hover:scale-100 group-hover:blur-sm hover:!blur-none hover:border-b-8 hover:border-secondary 
                   hover:bg-[#595a5a]  hover:text-white transition-all duration-300 flex items-center justify-center h-full 
                   bg-[#ffffff] shadow-xl hover:rounded-[20px] shadow-primary">
              <div className="">
              <div className="flex items-end h-[10%] w-[20%] p-[2%] bg-secondary rounded-[50%] mb-4 mx-auto ">
                <img src={service.image} alt="" className="flex items-end h-[70%] w-[90%] p-[2%] rounded-[10%] ml-1 " />
              </div>
              <h4 className="text-2xl font-bold text-primary mb-2 px-2 hover:text-[#ffffff]">
                {service.title}
              </h4>
              <p className="text-sm text-[#aaaaaa] hover:text-[#ffffff]">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    )
}