import {createSlice} from '@reduxjs/toolkit'

let initialState = {
    someData: "test"
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
        }
    }
});

export const {setSomeData} = envSlice.actions;
export default envSlice.reducer;