import React from 'react'
import Paper from '@mui/material/Paper'
import { InputBase } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'

export const SearchBar = () => {
    return(
        <div className="flex px-2 py-0 align-items-center w-400 border rounded-[20px] border-solid border-3 border-gray">
            <IconButton type="button" className="p-10">
                <SearchIcon/>
            </IconButton>
            <InputBase className="ml-1 flex" placeholder="Search.."/>
        </div>
    )
}