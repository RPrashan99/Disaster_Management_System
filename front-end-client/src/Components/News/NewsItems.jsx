import React, { useState, useEffect } from "react";
import News_Image from "../../assets/News/News_Image.jpg";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import axios from "axios";

const NewsItems = () => {
  const [news, setNews] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [displayedNews, setDisplayedNews] = useState(10);

  const fetchData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/news/getNews"
      );
      console.log(response.data);

      const filteredNews = response.data.filter(newsItem => newsItem.show);
      
      setNews(filteredNews);
      setSelectedItem(filteredNews[filteredNews.length - 1]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleMouseClick = (newsItem) => {
    setSelectedItem(newsItem);
  };

  const handleNextNews = (currentItemId) => {
    const currentIndex = news.findIndex(
      (item) => item.newsId === currentItemId
    );
    if (currentIndex > 0) {
      setSelectedItem(news[currentIndex - 1]);
    } else [setSelectedItem(news[0])];
  };

  const handlePreviousNews = (currentItemId) => {
    const currentIndex = news.findIndex(
      (item) => item.newsId === currentItemId
    );
    if (currentIndex < news.length - 1) {
      setSelectedItem(news[currentIndex + 1]);
    } else [setSelectedItem(news[news.length - 1])];
  };

  const handleClickMore = () => {
    setDisplayedNews(displayedNews + 10);

  }

  return (
    <div>
      <div className="flex justify-between py-5 px-5 gap-5">
        {/* Left Section */}
        <div className="w-full sm:w-2/3 bg-white shadow-md">
          <div className="px-5 py-3">
            <h1 className="text-primary font-bold md:text-3xl text-lg">
              {selectedItem ? selectedItem.heading : "No News Selected"}
            </h1>
            <p className="my-3 text-base">
              By : {selectedItem ? selectedItem.author : "gfyew"}
            </p>
            <div className=" sm:flex justify-between text-xs text-gray-500 py-4">
              <p>
                <span className="text-black">Created Date : </span>
                {selectedItem ? selectedItem.createdDate : "No"}
              </p>
              <p>
                <span className="text-black">Created Time: </span>
                {selectedItem ? selectedItem.createdTime : "No"}
              </p>
            </div>

            <div
              className="relative"
              style={{ width: "100%", paddingBottom: "56.25%" }}
            >
              <img
                src={
                  selectedItem ? selectedItem.image || News_Image : News_Image
                }
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                style={{ width: "100%", height: "100%" }}
              />
            </div>

            <div className="mt-3">
              <p className="text-black text-sm leading-7">
                {selectedItem ? selectedItem.newsBody : "No News Selected"}
              </p>
            </div>
          </div>

          {/* Next and Previous Button */}
          <div className="flex justify-between my-10 mx-5">
            {/* left button */}
            <button
              className="bg-primary text-white font-semibold py-2 px-7 rounded my-10 flex justify-between items-center gap-3 hover:bg-yellow-200 hover:text-black transition duration-300 ease-in-out"
              onClick={() => handlePreviousNews(selectedItem.newsId)}
            >
              <FaArrowLeft />
              <span>Previous</span>
            </button>

            {/* Right button */}
            <button
              className="bg-primary text-white font-semibold py-2 px-7 rounded my-10 flex justify-between items-center gap-3 hover:bg-yellow-200 hover:text-black transition duration-300 ease-in-out"
              onClick={() => handleNextNews(selectedItem.newsId)}
            >
              <span>Next</span>
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Right Section - Move this section to another file*/}
        <div className="w-1/3 border border-black hidden md:block">
          <div className="px-2 py-2">
            <h1 className="text-primary font-bold md:text-2xl text-lg py-3">
              More News
            </h1>
            <div>
              {news.slice().reverse().slice(0,displayedNews).map((newsItems) => (
                  <div
                    key={newsItems._id}
                    className="flex items-center justify-start gap-2 bg-gray-200 h-20 my-2 cursor-pointer"
                    onClick={() => handleMouseClick(newsItems)}
                  >
                    <div className="w-1/3   py-0 h-full">
                      <img
                        src={newsItems.image ? newsItems.image : News_Image}
                        alt=""
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="mr-2 py-2">
                      <h1 className="font-semibold text-black text-base">
                        {newsItems.heading.slice(0, 35)}
                      </h1>

                      <div className=" mt-3 flex justify-between items-center gap-2 text-xs">
                        <p className="text-black">{newsItems.author}</p>
                        <p className="text-gray-800">{newsItems.createdDate}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <div className="my-3">
              <button
                type="button"
                className="bg-primary text-white font-semibold py-2 px-7 rounded my-10 w-full hover:bg-yellow-200 hover:text-black transition duration-300 ease-in-out"
                onClick={handleClickMore}
              >
                View More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItems;
