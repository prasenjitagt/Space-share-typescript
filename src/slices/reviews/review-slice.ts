

import { reviews, eachReview } from '@/data/reviews-data'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'




interface reviewState {
    sliceReviews: eachReview[]
}


const reviewsInitialState: reviewState = {
    sliceReviews: reviews
}


const reviewsSlice = createSlice({
    name: 'reviews',
    initialState: reviewsInitialState,
    reducers: {
        removeReview: (state, action: PayloadAction<{ id: string }>) => {

            console.log(action.payload.id, state.sliceReviews);


        }
    }

});



export const { removeReview } = reviewsSlice.actions;

const reviewsSliceReducer = reviewsSlice.reducer;


export default reviewsSliceReducer;