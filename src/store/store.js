import {configureStore} from '@reduxjs/toolkit'
import envSlice from "./envSlice";

const store = configureStore({
    reducer: {
        env: envSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
});

export default store;