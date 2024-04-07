import {configureStore} from '@reduxjs/toolkit'
import envSlice from "./envSlice";
import gallerySlice from "./gallerySlice";
import winnerSlice from "./winnerSlice";

const store = configureStore({
    reducer: {
        env: envSlice,
        gallery: gallerySlice,
        winner: winnerSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
});

export default store;