import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";
import Places from "@/data/homePageData";

import { eachPlace } from "@/data/homePageData";

interface eachPlaceState {
    slicePlaces: eachPlace[]
}

const placeInitialState: eachPlaceState = {
    slicePlaces: Places
};

const placesSlice = createSlice({
    name: 'places',
    initialState: placeInitialState,
    reducers: {
        removePlace: (state, action: PayloadAction<{ id: string }>) => {

            console.log('remove Trigreed');

        }
    }
})


export const { removePlace } = placesSlice.actions;

const placesSliceReducer = placesSlice.reducer;

export default placesSliceReducer;