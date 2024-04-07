import {configureStore} from '@reduxjs/toolkit'
import envSlice from "./envSlice";
import gallerySlice from "./gallerySlice";

const store = configureStore({
    reducer: {
        env: envSlice,
        gallery: gallerySlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
});

export default store;