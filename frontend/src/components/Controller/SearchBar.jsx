import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import { InputBase } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import {useNavigate} from 'react-router-dom'

export const SearchBar = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleChange =(e) => {
        setQuery(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/search?query=${query}`);
        
    };

    return(
        <div className="flex items-start pl-[2px] m-2 px-[10px] lg:justify-center  sm:justify-center bg-white md:justify-center lg:items-center md:text-[12px] lg:text-[16px] sm:text-[10px]  relative self-stretch w-full  rounded-[10px] border border-solid border-[#00000073] ">
            <div className="inline-flex h-[25px] items-center pl-[1px] pr-[20px] py-0 relative flex-[0_0_auto] mt-[9.00px] mb-[9.00px]">
                <div className={`items-start relative  w-[20px]`}>
                    <IconButton type="button" className=" inline-flex h-[30px] hover:text-[gray] items-center pr-[5px] py-0 relative flex-[0_0_auto] mt-[9.00px] mb-[9.00px]" onClick={handleSearch}>
                        <SearchIcon className=' text-[gray] hover:text-[black]'/>
                    </IconButton>        
                </div>
            </div>
            <InputBase className="flex self-stretch h-[10px] w-[80%] pl-20px my-5 mx-2 rounded-[5px] font-input-value font-[number:var(--input-value-font-weight)] text-palette-text-disabled
            text-[length:var(--input-value-font-size)] tracking-[var(--input-value-letter-spacing)] leading-[var(--input-value-line-height)] [font-style:var(--input-value-font-style)] [background:transparent]
            border-[none] p-0" placeholder="Search..." id='search' name='search' value={query} onChange={handleChange}/>
            
        </div>
    )
}