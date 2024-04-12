import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    dropdownOptions: [
        { value: 'news', label: 'Новости' },
        { value: 'gallery-report', label: 'Фотоотчет' },
        { value: 'all', label: 'Всё' },
    ],
    currentOption: { value: 'all', label: 'Всё' },
}

const gallerySlice = createSlice({
    name: 'gallery',
    initialState,
    reducers: {
        setCurrentOption: (state, { payload }) => {
            state.currentOption = payload;
        }
    }
});

export default gallerySlice.reducer;
export const { setCurrentOption } = gallerySlice.actions;