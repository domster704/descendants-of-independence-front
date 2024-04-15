import { createSlice } from '@reduxjs/toolkit';
import { createApplication, fetchApplicationsById, fetchCategories } from './applicationThunk';

const initialState = {
    categories: [],
};

const applicationSlice = createSlice({
    name: 'application',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.fulfilled, (state, { payload }) => {
            state.categories = payload;
        });
    }
});

export default applicationSlice.reducer;