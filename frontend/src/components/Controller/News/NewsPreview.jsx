import React, {useEffect, useState} from "react"

export const NewsPreview = () =>{
    const [selectedNews, setSelectedNews] = useState(null);
    
  useEffect(() => {
    console.log("NewsDetails:", selectedNews);

  },[selectedNews]);
    const news_list = [
        {
          newsId: 1,
          heading: "Colombo residents should be vigilant on COVID and other diseases CMC",
          author: "Auther",
          createdDate: "31 Dec 2023",
          createdTime: "8AM",
          image: "/controller/NewsCreator.png",
          newsBody:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lore"
        },
        {
          newsId: 1,
          heading: "Tens of thousands affected as severe flooding hits Thailand's south",
          author: "Auther 2",
          createdDate: "24 Nov 2023",
          createdTime: "7.30AM",
          image: "/controller/NewsItem2.webp",
          newsBody:
            "Days of torrential rain have also caused problems at sea, with at least seven boats sunk in the Gulf of Thailand and Andaman Sea since Friday.The kingdom’s state railway company said track subsidence meant that trains heading south to Malaysia were stopping at Yala, 100km (62 miles) away from the border. Authorities have warned residents in the provinces to be ready to evacuate if the floods get worse. Serious floods in the region in December last year killed at least three people",
        },
        {
          newsId: 1,
          heading: "Papar district declared drought disaster area",
          author: "Auther 3",
          createdDate: "29 Jan 2024",
          createdTime: "9.30AM",
          image: "/controller/NewsItem3.jpg",
          newsBody:
            "KOTA KINABALU — Papar district has been declared a drought disaster area, the district disaster management committee (JPBD) announced today.In a statement, it said the declaration was made today based on reports and information obtained in the area.Papar JPBD has taken action to address the water supply issues in the district, including scheduling water distribution to residents using water tankers from the Sabah State Water Department (JANS), the Beaufort District Council, and the Fire and Rescue Department, it added.",
        },
        {
          newsId: 1,
          heading: "'Weak and insufficient' progress made towards disaster risk reduction ",
          author: "Auther 4",
          createdDate: "11 Mar 2024",
          createdTime: "8AM",
          image: "/controller/NewsItem4.jpg",
          newsBody:
            "Managing risk is not an option but a global commitment, the UN Deputy Secretary-General told the gathering.“Our world is at a defining point in history. As we review our journey halfway to 2030, we must acknowledge that progress has been weak and insufficient,” Ms. Mohammed said. As countries did not meet climate and sustainable development commitments, natural hazards that could have been prevented have claimed hundreds of thousands of lives and forced millions to be uprooted, mainly women, children, and other vulnerable groups, she said.",
        },
    ];

    const handleCardClick = (news) => {
        setSelectedNews(news);
        console.log("Selected News:", news);
    };

    return(
        <div className="flex flex-col justify-between bg-ControllerPrim py-5 px-5 gap-5">
            <h1 className="text-[white] font-sans text-[2rem] font-bold">News Preview</h1>
            <div className="flex flex-row gap-5">
                {/* left Section */}
                <div className="sm:w-2/3 bg-white ">
                {selectedNews ? ( 
                    <div className="px-8 py-5">
                        <h1 className="text-primary font-bold md:text-3xl text-lg">
                        {selectedNews.heading}
                        </h1>
                        <p className="my-3 text-base">{selectedNews.author}</p>
                        <div className="w-1/4 flex justify-between text-xs text-gray-500">
                        <p>{selectedNews.createdTime} </p>
                        <p>{selectedNews.createdDate}</p>
                        </div>

                        <div className="mt-5">
                            <img src={selectedNews.image} alt="" className="object-cover w-full h-full shadow-2xl" />
                        </div>

                        <div className="mt-5">
                        <p className="text-black text-sm leading-7 font-serif text-justify">
                            {selectedNews.newsBody}
                        </p>
                        </div>

                        {/* Edit and delete Buttons */}
                        <div className="flex justify-between gap-5 m-2 items-center p-1 my-10 mx-5 shadow-md shadow-[gray]">
                        <button
                            type="button"
                            className="text-white  bg-ControllerSec hover:bg-[#413f3f] shadow-2xl border-[#666565] border-[2px] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm md:px-5 px-2.5 py-2.5 text-center inline-flex items-center"
                        >
                            <span className="hidden sm:inline ">Edit</span>
                        </button>

                        <button
                            type="button"
                            className="text-white bg-ControllerSec shadow-2xl border-[#666565] border-[2px] shadow-black hover:bg-[#413f3f] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm md:px-5 px-2.5 py-2.5 text-center inline-flex items-center "
                        >
                            <span className="hidden sm:inline">Delete</span>
                        </button>
                        </div>
                    </div>
                     ) : (
                        <p className="text-primary font-bold md:text-3xl text-lg">
                            Select a news item to view details.
                        </p>
                    )}
                </div>

                {/* Right Section */}
                <div className="w-1/3 border bg-opacity-20 bg-white border-white">
                    <div className="px-4 py-2">
                        <h1 className="text-white font-bold font-mono md:text-2xl text-lg py-3">              
                        Reasent News
                        </h1>

                        {/* News item */}
                        <div>
                            {news_list.map((news, i) => (
                                <React.Fragment key={i}>
                                    <div className="focus:bg-opacity-50 " onClick={() => handleCardClick(news)}>
                                        <div className="flex items-center justify-start gap-2 bg-gray-200 h-20 my-2">
                                            <div className="w-full   py-0 h-full">
                                                <img
                                                src={news.image}
                                                alt=""
                                                className="object-cover w-full h-full"
                                                />
                                            </div>
                                        </div>
                                        <div className="mr-2 py-2">
                                            <h1 className="font-semibold text-[black] text-base">
                                                {news.heading}
                                            </h1>

                                            <div className=" mt-3 flex justify-between text-xs">
                                                <p className="text-black">{news.author}</p>
                                                <p className="text-gray-800">{news.createdDate}</p>
                                            </div>
                                        </div>
                                    </div>
                                </React.Fragment> 
                            ))}    
                        </div>
                        <div className="my-3">
                            <button
                                type="button"
                                className="text-white w-full bg-ControllerSec shadow-2xl border-[2px] shadow-black hover:bg-[#4e4e4e] focus:ring-4 focus:ring-blue-300 font-bold rounded text-base px-5 py-2 me-2 mb-2  focus:outline-none ">
                                View More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    )
}