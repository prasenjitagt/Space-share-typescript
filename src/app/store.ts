import placesSliceReducer from '@/slices/places/places-slice';
import reviewsSliceReducer from '@/slices/reviews/review-slice';
import { configureStore } from '@reduxjs/toolkit'


const store = configureStore({
    reducer: {
        storePlaces: placesSliceReducer,
        storeReviews: reviewsSliceReducer,
    }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;