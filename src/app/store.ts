import placesSliceReducer from '@/slices/places/places-slice';
import reviewsSliceReducer from '@/slices/reviews/review-slice';
import hostsSliceReducer from '@/slices/hosts/hostSlice';
import { configureStore } from '@reduxjs/toolkit'
import SelectedDateSliceReducer from '@/slices/places/current-place-slice';
import userSliceReducer from '@/slices/users/userSlice';


const store = configureStore({
    reducer: {
        storePlaces: placesSliceReducer,
        storeReviews: reviewsSliceReducer,
        storeHosts: hostsSliceReducer,
        storeSelectedDate: SelectedDateSliceReducer,
        storeUsers: userSliceReducer
    }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;