import React from 'react';
export const Card = ({imageUrl,d_type,severity,time,date,location, affectedPeople}) => {

    return(
        <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 shadow-2xl border-b-[5px] border-[gray] relative rounded-lg justify-center items-center h-full w-[100%]  self-stretch flex-wrap md:text-wrap sm:text-wrap'>
            <div className="flex relative w-full md:justify-center sm:justify-center h-fit items-center" >
                {imageUrl && <img src={imageUrl} alt="Image" className="w-[200px] h-[100px] shadow-2xl  rounded-lg" />}
            </div>
            <div className='flex flex-col relative text-center justify-center items-center mb-2 w-full h-full m-1'>
                {d_type && <text className="w-[50%] h-[30%] bg-[#04262c] mx-10 my-3 shadow-lg rounded-[50px] border-none justify-center items-center text-center text-[white]  text-[1.5rem]">{d_type}</text>}
                {severity && <text className="w-full h-full font-bold text-[#b43333] text-[1.3rem]  mx-2">{severity}</text>}
            </div>
            <div className='flex flex-col relative text-center justify-center items-center  shadow-2xl w-full h-full m-1'>
                <div className='flex relative justify-center items-center h-[80%] flex-row'>
                    <img src='/controller/time.png' alt='time' className='w-5 h-5  mx-2'/>
                    <div className='flex relative w-full justify-center items-center'>
                        {time && <text className="w-full h-full   text-[black] text-[1rem]  mx-2">{time}</text>}
                    </div>
                    <text>|</text>
                    <img src='/controller/calendar.png' alt='time' className='w-5 h-5 mx-2'/>
                    <div className='flex relative w-full justify-center items-center'>
                        {date && <text className="w-full h-full rounded-lg text-[black] text-[1rem] mx-2">{date}</text>}
                    </div>       
                    <text>|</text>
                </div>
            </div>
            <div className='flex flex-col relative justify-center items-center  shadow-2xl  text-center w-full h-full m-1'>
                <div className='flex relative justify-center items-center h-[80%] flex-row'>
                    <img src='/controller/Location.png' alt='time' className='w-5 h-5 mx-2'/>
                    <div className='flex relative w-full justify-center items-center'>
                        {location && <text className="w-full h-full rounded-lg text-[black] text-[1.3rem] mx-2">{location}</text>}
                    </div>                 
                    <text>|</text>
                    <img src='/controller/people.png' alt='time' className='w-5 h-5 mx-2'/>
                    <div className='flex flex-wrap relative w-full justify-center items-center'>
                        {affectedPeople && <text className="w-full h-full rounded-lg text-[black] text-[1rem] mx-1">{affectedPeople}</text>}
                    </div> 
                </div>
            </div>
        </div>

    )
}    