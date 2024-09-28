import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { eachHost, Hosts } from '@/data/host-data';

interface eachHostState {
    sliceHosts: eachHost[]
}

const hostInitialState: eachHostState = {
    sliceHosts: Hosts
};

const hostsSlice = createSlice({
    name: 'hosts',
    initialState: hostInitialState,
    reducers: {
        removeHost: (state, action: PayloadAction<{ id: string }>) => {

            console.log(action.payload.id, state.sliceHosts);

        }
    }
})


export const { removeHost } = hostsSlice.actions;

const hostsSliceReducer = hostsSlice.reducer;

export default hostsSliceReducer;