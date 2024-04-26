import { createSlice } from '@reduxjs/toolkit'


const initialState ={

    currentUser:null,
    error:null,
    loading:false
}

const userSlice = createSlice({
    name:'user',
    initialState,
    // logic for the reducers
    reducers:{
        signInStart:(state)=>{
            state.loading=true; 
            state.error=null; // if there is an error, it will be cleared
        },
        signInSccuss:(state,action)=>{
            state.currentUser= action.payload;
            state.loading=false;
            state.error=null;
        },
        signInFailure:(state,action)=>{
            state.error=action.payload;
            state.loading=false;
        },
        signOutSuccess:(state)=>{
            state.currentUser=null;
            state.loading=false;
            state.error=null;
        }

    }

});

export const {signInStart,signInSccuss,signInFailure,signOutSuccess}= userSlice.actions;

// To use the state in the components
export default userSlice.reducer;