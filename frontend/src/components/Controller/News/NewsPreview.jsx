import React from "react"

export const NewsPreview = () =>{
    const news_list = [
        {
          id: 1,
          heading: "This is news heading 1",
          Auther: "Auther",
          date: "31 Dec 2023",
          time: "8AM",
          image: "/controller/NewsCreator.png",
          news_body:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
        },
        {
          id: 1,
          heading: "This is news heading 2",
          Auther: "Auther 2",
          date: "31 Dec 2023",
          time: "8AM",
          news_body:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
        },
        {
          id: 1,
          heading: "This is news heading 3",
          Auther: "Auther 3",
          date: "31 Dec 2023",
          time: "8AM",
          news_body:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
        },
        {
          id: 1,
          heading: "This is news heading 4",
          Auther: "Auther 4",
          date: "31 Dec 2023",
          time: "8AM",
          news_body:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
        },
    ];
    return(
        <div className="flex flex-col justify-between bg-ControllerPrim py-5 px-5 gap-5">
            <h1 className="text-[white] font-mono text-[2rem] font-bold">News Preview</h1>
            <div className="flex flex-row gap-5">
                {/* left Section */}
                <div className="sm:w-2/3 bg-white ">
                    <div className="px-5 py-3">
                        <h1 className="text-primary font-bold md:text-3xl text-lg">
                        Colombo residents should be vigilant on COVID and other diseases:
                        CMC
                        </h1>
                        <p className="my-3 text-base">By Auther</p>
                        <div className="w-1/4 flex justify-between text-xs text-gray-500">
                        <p>31 Dec 2023 </p>
                        <p>8AM</p>
                        </div>

                        <div className="mt-5">
                            <img src="/controller/NewsCreator.png" alt="" className="object-cover w-full h-full shadow-2xl" />
                        </div>

                        <div className="mt-3">
                        <p className="text-black text-sm leading-7 font-serif">
                            Contrary to popular belief, Lorem Ipsum is not simply random
                            text. It has roots in a piece of classical Latin literature from
                            45 BC, making it over 2000 years old. Richard McClintock, a
                            Latin professor at Hampden-Sydney College in Virginia, looked up
                            one of the more obscure Latin words, consectetur, from a Lorem
                            Ipsum passage, and going through the cites of the word in
                            classical literature, discovered the undoubtable source. Lorem
                            Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus
                            Bonorum et Malorum  (The Extremes of Good and Evil) by Cicero,
                            written in 45 BC. This book is a treatise on the theory of
                            ethics, very popular during the Renaissance.
                            <br />
                            The first line of Lorem Ipsum, `Lorem ipsum dolor sit amet..``,
                            comes from a line in section 1.10.32. The standard chunk of
                            Lorem Ipsum used since the 1500s is reproduced below for those
                            interested. Sections 1.10.32 and 1.10.33 from  de Finibus
                            Bonorum et Malorum by Cicero are also reproduced in their exact
                            original form, accompanied by English versions from the 1914
                            translation by H. Rackham.
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
                                            <p className="text-black">{news.Auther}</p>
                                            <p className="text-gray-800">{news.date}</p>
                                        </div>
                                    </div>
                                </React.Fragment>
                            ))}       
                        </div>
                        <div className="my-3">
                            <button
                                type="button"
                                className="text-white w-full bg-ControllerSec shadow-2xl border-[2px] shadow-black hover:bg-[#4e4e4e] focus:ring-4 focus:ring-blue-300 font-bold rounded text-base px-5 py-2 me-2 mb-2  focus:outline-none "
                            >
                                View More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>  

    )
}