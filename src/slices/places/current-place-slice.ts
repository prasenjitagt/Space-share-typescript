import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface EachSelectedDate {
    SelectedDateId: string;
    selectedDate: string; // Change from Date to string
}

export interface EachSelectedDateState {
    sliceSelectedDates: EachSelectedDate[];
}

const initialState: EachSelectedDateState = {
    sliceSelectedDates: [],
};

const SelectedDateSlice = createSlice({
    name: "SelectedDateSlice",
    initialState: initialState,
    reducers: {
        setSelectedDate: (state, action: PayloadAction<{ placId: string; date: string }>): void => {
            const existingPlace = state.sliceSelectedDates.find(
                (eachSelectedDate: EachSelectedDate) => eachSelectedDate.SelectedDateId === action.payload.placId
            );

            if (existingPlace) {
                // If found, update the selected date
                existingPlace.selectedDate = action.payload.date;
            } else {
                // If not found, append a new place
                state.sliceSelectedDates.push({
                    SelectedDateId: action.payload.placId,
                    selectedDate: action.payload.date,
                });
            }

            console.log(state.sliceSelectedDates);

        },
    },
});

// Export actions and reducer
export const { setSelectedDate } = SelectedDateSlice.actions;

const SelectedDateSliceReducer = SelectedDateSlice.reducer;
export default SelectedDateSliceReducer;
