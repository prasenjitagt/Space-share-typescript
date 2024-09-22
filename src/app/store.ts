import placesSliceReducer from '@/features/places/placesSlice';
import { configureStore } from '@reduxjs/toolkit'


const store = configureStore({
    reducer: {
        storePlaces: placesSliceReducer,
    }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;