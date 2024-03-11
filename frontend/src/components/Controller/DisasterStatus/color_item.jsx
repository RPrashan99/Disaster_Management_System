import React from "react"


export const ColorItem = ({d_type, color, margin}) => {
    const divStyle = {
        backgroundColor: color,
        width: "15px",
        height: "15px",
        marginLeft:margin,
        
        
    }
    return(
        <div className="flex flex-row w-15 h-5 ml-10">
            <span className="flex text-[15px] text-[#04040e]">{d_type}</span>
            <div className="mt-1 p-1" style={divStyle}/>
        </div>
    );
};    