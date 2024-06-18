import React, {useEffect, useState, useReducer} from "react"
import { getNews } from "../../../services/newsServices";
import { deleteNewsItem } from "../../../services/newsServices";
import { message } from "antd";
import NewsCreatorForm from "../../../Forms/Controller/NewsCreatorForm";
import { FormControlLabel } from "@mui/material";
import Switch from '@mui/material/Switch';
import { alpha, styled } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import axios from "axios";
import { Buffer } from 'buffer';


const GreenSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: green[900],
      '&:hover': {
        backgroundColor: alpha(green[600], theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: green[600],
    },
  }));

const intialState = { newsItems: []};
const reducer = (state, action) => {
    switch (action.type) {
        case 'News_Loaded':
            return {...state, newsItems: action.payload};
        default:
            return state;
    }
};

export const NewsPreview = () =>{
    const [selectedNews, setSelectedNews] = useState(null);
    const [state,dispatch] = useReducer(reducer, intialState);
    const {newsItems} = state;
    const [showMoreItems, setShowMoreItems] = useState(false);
    const [ selectedEdit, setSelectedEdit] = useState(null);
    const [IsShow, setShow] = useState(false);

    const [ formData, setFormData ] = useState({
        newsId:'',
        heading:'',
        author:'',
        image:'',
        newsBody:'',
        show: ''
      });

    useEffect(() => {
        if (selectedNews){
            setFormData({
              newsId: selectedNews.newsId || '',
              heading: selectedNews.heading || '',
              author: selectedNews.author || '',
              image: selectedNews.image || '',
              newsBody: selectedNews.newsBody || '',
              show: selectedNews.show || ''
            });
        }
    
        const loadNews = getNews();
        console.log("NewsDetails:", selectedNews);
        console.log("FormDetails:", formData);
        loadNews.then(newsItems => {
            // Sort requests by date and time in descending order
            const timeSortedNews = newsItems.sort((a, b) => {
                const dateComparison = new Date(b.createdDate) - new Date(a.createdDate);
                //const converted = requestTime.split(' ')[0].split(':');
                if (dateComparison !== 0) {
                    return dateComparison;
                }
                const timeA = (a.createdTime).split(' ')[0];
                const timeB = (b.createdTime).split(' ')[0];
                return timeB.localeCompare(timeA); 
         
            });
            const trueItems = timeSortedNews.filter(item => item.show);
            const falseItems = timeSortedNews.filter(item => !item.show);
            const sortedNews = [...trueItems, ...falseItems];
            dispatch({ type: 'News_Loaded', payload: sortedNews });  
        });

    },   
    [selectedNews]);

    const handleCardClick = (news) => {
        setSelectedNews(news);
        console.log("Selected News:", news);
    };

    const handleEdit = (selectedNews) => {
        setSelectedEdit(selectedNews);
        console.log("NewstobeEdited:", selectedNews);
    };

  const handleShowToggle = async (e) => {
    e.preventDefault();
    const newShowValue = !formData.show;

    // Optimistically update the UI
    setFormData({ ...formData, show: newShowValue });

    try {
      const updatedFormData = new FormData();
      updatedFormData.append('show', newShowValue);
      updatedFormData.append('heading', formData.heading);
      updatedFormData.append('author', formData.author);
      updatedFormData.append('newsBody', formData.newsBody);
      if (formData.image) {
        updatedFormData.append('image', formData.image);
      }
      const response = await axios.patch('http://localhost:5000/api/news/updateNews/' + formData.newsId, updatedFormData);
      message.success(`Show is ${newShowValue ? 'enabled' : 'disabled'} now!`);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.error('Error updating show:', error);
      message.error('Failed to update show status!');

    // Revert the UI update if the API call fails
    setFormData({ ...formData, show: !newShowValue });
    }
  };

    const handleDelete = async (newsId) => {
        try {
          await deleteNewsItem(selectedNews.newsId);
          dispatch({
            type: "News_Loaded",
            payload: newsItems.filter((item) => item.newsId !== newsId),
          });
          setSelectedNews(null);
          console.log("News item deleted successfully");
          message.success("Successfully deleted the news item!")
        } catch (error) {
          console.error("Error deleting news item:", error);
          message.error("Deletion failed!")
        }
    };

    const showMore = () => {
        setShowMoreItems(true);

    };
    const showLess = () => {
        setShowMoreItems(false);

    };

    return(
        <div>
        <div className="flex flex-col border-[10px] border-[#b9b9b9] justify-between bg-userBlue py-5 px-5 gap-5">
            <h1 className="text-[white] font-sans text-[2rem] font-bold">News Preview</h1>
            <div className="flex flex-row gap-5">
                {/* left Section */}
                <div className="sm:w-2/3 bg-white ">
                    {selectedNews ?             
                        (
                        <div className="px-8 py-5">
                            <h1 className="text-primary font-bold md:text-3xl text-lg">
                                {selectedNews.heading}
                            </h1>
                            <p className="my-3 text-base">{selectedNews.author}</p>
                            <div className="w-1/4 flex justify-between text-xs text-gray-500">
                                <p>{selectedNews.createdTime.split(' ')[0]} </p>
                                <p>{selectedNews.createdDate}</p>
                            </div>

                            <div className="mt-5 w-full h-40">
                                {selectedNews.image && selectedNews.image.data && (
                                    <img
                                        src={`data:${selectedNews.image.contentType};base64,${Buffer.from(selectedNews.image.data).toString('base64')}`}
                                        alt={selectedNews.heading}
                                        className="w-full h-full object-cover"
                                    />
                                )}
                            </div>

                            <div className="mt-5 text-justify">
                                <span dangerouslySetInnerHTML={{ __html: selectedNews.newsBody.replace(/\n/g, '<br />') }} className="text-black text-sm leading-7 font-serif text-justify h-auto"/>
                            </div>

                            {/* Edit and delete Buttons */}
                            <div className="flex justify-between gap-5 m-2 items-center p-1 my-10 mx-5 shadow-md rounded border-2 border-ControllerSec shadow-[gray]">
                                <button
                
                                    type="button"
                                    className="text-white  bg-ControllerSec hover:bg-ControllerHov focus:bg-slate-600 shadow-2xl shadow-[#000000] border-[#888888] border-[2px] focus:ring-4 
                                    focus:outline-none focus:ring-blue-300 font-medium rounded text-sm md:px-5 px-2.5 py-2.5 text-center inline-flex items-center"
                                
                                    onClick={(() => handleEdit(selectedNews))}
                                    >
                                    <span className="hidden sm:inline ">Edit</span>
                                    
                                </button>
                                <FormControlLabel 
                                    control={<GreenSwitch  checked={formData.show? true : false} onChange={handleShowToggle}/>}
                                    label={(IsShow? "Disable Show" : "Enable Show")}
                                    name="Show switch"
                                    id="Show switch"
                                    className="bg-transparent p-2 rounded"

                                />

                                <button
                                    type="button"
                                    className="text-white bg-ControllerSec shadow-2xl border-[#666565] border-[2px] shadow-black hover:bg-ControllerHov focus:bg-slate-600 focus:ring-4 
                                    focus:outline-none focus:ring-blue-300 font-medium rounded text-sm md:px-5 px-2.5 py-2.5 text-center inline-flex items-center "
                                    onClick={() => handleDelete(selectedNews.newsId)}  
                                    >
                                    <span className="hidden sm:inline">Delete</span>
                                </button>
                            </div>
                        </div>
                        ): (
                            <p className="text-primary font-bold md:text-2xl p-5 text-lg">
                                Select a news item to view details.
                            </p>
                        )
                    }
                </div>
                {/* Right Section */}
                <div className="w-1/3 border bg-opacity-20 bg-white border-[#ffffff]">
                    <div className="px-6 py-2">
                        <h1 className="text-white font-bold font-mono md:text-2xl text-lg py-3">              
                        Recent News
                        </h1>
                        {/* News item */}
                        <div className={ (showMoreItems ? "h-[600px] overflow-auto" : "h-[320px] overflow-hidden")}>
                      
                            {Array.isArray(newsItems) && newsItems.map((news, i) => (
                                <React.Fragment key={i}>
                                    <div className="focus:bg-opacity-50 border mb-1"  onClick={() => handleCardClick(news)}>
                                        <div className="flex items-center justify-start gap-2 bg-grey-200 h-20 my-2">
                                            <div className=" w-full   py-0 h-full">
                                                {news.image && news.image.data && (
                                                    <img
                                                        src={`data:${news.image.contentType};base64,${Buffer.from(news.image.data).toString('base64')}`}
                                                        alt={news.heading}
                                                        className="w-full h-full object-cover"
                                                    />
                                                )}
                                            </div>
                                        </div>
                                        <div className="mr-2 py-2">
                                            <h1 className="font-semibold text-[black] text-base">
                                                {news.heading}
                                            </h1>

                                            <div className=" mt-3 flex justify-between text-xs">
                                                <p className="text-black">{news.author}</p>
                                                <p className="text-gray-900">{news.createdDate}</p>
                                                <p> Display :<span className="text-gray-800">{(news.show).toString()}</span> </p>
                                            </div>
                                        </div>
                                    </div>
                                </React.Fragment> 
                            ))}    
                        </div>
                        <div className="my-3">
                            <button
                                type="button"
                                className="text-white w-full bg-ControllerSec hover:bg-ControllerHov focus:bg-slate-600 shadow-2xl border-[2px] shadow-black focus:ring-4 focus:ring-blue-300 font-bold rounded text-base px-5 py-2 me-2 mb-2  focus:outline-none "
                                onClick={(showMoreItems? showLess:showMore)}>
                                {(showMoreItems? "Show Less":"Show More")}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
            <div>
                {selectedEdit? (
                    <NewsCreatorForm selection={selectedEdit}/>
                    ):(
                        <NewsCreatorForm/>
                    )
                }            
            </div>      
        </div>        
    )
}