import React from "react";
import {useNavigate} from "react-router-dom"

export const Card_Button = (props) => {

    const {main_text, other_text, path_img, type} = props;
    const navigate = useNavigate();

    const handleClick = () =>{
        if(type == "Add") navigate("/controller/status/newReport")
        else navigate("/controller/status/editReport")
    };

    return(
        <div className="flex flex-row w-[365px] border rounded-lg bg-white ps-5 space-x-2 shadow hover:ring focus:bg-white-500" 
            onClick={handleClick}>

            <div className="flex flex-col space-y-1 justify-center w-3/4">
                <div className="text-black font-bold">{main_text}</div>
                <div className="flex justify-center text-[10px]">{other_text}</div>
            </div>
            <img className="flex border-l-2" src={`${path_img}`} alt= "Image"/>
        </div>
    )
}