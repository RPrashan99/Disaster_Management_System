import React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const LanguageBar = () => {
    const navigate = useNavigate();

    const logOut = () => {
        localStorage.removeItem('token');
        navigate('/');
    }

    return (
        <div className="flex items-center justify-between px-[20px] py-[2px] h-[35px] relative self-stretch w-full flex-[0_0_auto] bg-[#6d6969]">
            <div className="flex relative items-center self-stretch w-[150px] mt-[-1.00px] [font-family:'Roboto',Helvetica] font-bold text-[#fcfffe] text-[16px] tracking-[0.15px] leading-[24px] whitespace-nowrap">
                <h3>Call center 1717</h3>
            </div>
            <Button variant="contained" className='flex text-sm justify-center items-center w-28 h-6 p-1' onClick={logOut}>
                Log Out
            </Button>
        </div>
    )
}