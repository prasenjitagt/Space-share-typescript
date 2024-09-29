
import { createSlice,PayloadAction } from "@reduxjs/toolkit";

import {EachUser,Users} from '@/data/user-data'


 interface UserSliceState {
sliceUsers : EachUser[]
}


const UserSliceInitialState : UserSliceState = {
    sliceUsers : Users
}


const userSlice = createSlice({
    name:"userSlice",
    initialState : UserSliceInitialState,
    reducers : {
        logUsers : (state,action:PayloadAction<{useId:string}>) => {


            console.log(action.payload.useId);
            
        }
    }
})


export const {logUsers} = userSlice.actions;

const userSliceReducer = userSlice.reducer;
export default userSliceReducer;