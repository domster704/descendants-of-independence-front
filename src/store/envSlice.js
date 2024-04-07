import { createSlice } from '@reduxjs/toolkit'

let initialState = {
    someData: "test",
    isFormError: false,
}

const envSlice = createSlice({
    name: 'env',
    initialState,
    reducers: {
        /**
         * @param state
         * @param action {{payload: string}}
         */
        setSomeData: (state, action) => {
            state.someData = action.payload
        },
        setIsFormError: (state, { payload }) => {
            state.isFormError = payload;
        }
    }
});

export const { setSomeData, setIsFormError } = envSlice.actions;
export default envSlice.reducer;