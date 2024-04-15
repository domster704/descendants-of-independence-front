import {configureStore} from '@reduxjs/toolkit'
import envSlice from "./envSlice";
import gallerySlice from "./gallerySlice";
import winnerSlice from "./winnerSlice";
import statusSlice from "./statusSlice";
import applicationSlice from './applicationSlice';

const store = configureStore({
    reducer: {
        env: envSlice,
        application: applicationSlice,
        gallery: gallerySlice,
        winner: winnerSlice,
        status: statusSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
});

export default store;