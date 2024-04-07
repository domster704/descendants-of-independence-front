import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    dropdownOptions: [
        {value: "news", label: "Нововсти"},
        {value: "gallery-report", label: "Фотоотчет"},
        {value: "all", label: "Всё"},
    ],
    default: {value: "all", label: "Всё"}
}

const gallerySlice = createSlice({
    name: "gallery",
    initialState,
    reducers: {}
});

export default gallerySlice.reducer;