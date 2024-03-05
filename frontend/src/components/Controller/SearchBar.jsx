import React from 'react'
import Paper from '@mui/material/Paper'
import { InputBase } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'

export const SearchBar = () => {
    return(
        <div className="flex  items-start pl- [10px] px-[10px] lg:justify-center sm:justify-center md:justify-center lg:items-center md:text-[12px] md:w-[50%] lg:text-[16px] lg:w-[50%] sm:w-[50%] sm:text-[10px]  relative self-stretch w-full mb-[15px] rounded-[40px] border border-solid border-[#00000073]">
            <div className="inline-flex h-[30px] items-center pl-[3px] pr-[5px] py-0 relative flex-[0_0_auto] mt-[9.00px] mb-[9.00px]">
                <div className={`items-start relative  w-[30px]`}>
                    <IconButton type="button" className="p-10 inline-flex h-[30px] items-center pl-5px pr-[5px] py-0 relative flex-[0_0_auto] mt-[9.00px] mb-[9.00px]">
                        <SearchIcon/>
                    </IconButton>
                
                </div>
            </div>
            <InputBase className="flex self-stretch w-[90%] pl-20px mt-[7.50px] mb-[7.50px] rounded-[5px] font-input-value font-[number:var(--input-value-font-weight)] text-palette-text-disabled
            text-[length:var(--input-value-font-size)] tracking-[var(--input-value-letter-spacing)] leading-[var(--input-value-line-height)] [font-style:var(--input-value-font-style)] [background:transparent]
            border-[none] p-0" placeholder="Search.."/>
            
        </div>
    )
}