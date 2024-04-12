import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    dropdownOptions: [
        { value: 'news', label: 'Новости' },
        { value: 'photo', label: 'Фотоотчет' },
        { value: 'all', label: 'Всё' },
    ],
    currentOption: { value: 'all', label: 'Всё' },
    galleryList: [{
        type: 'news',
        description: '',
        img: null
    }]
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