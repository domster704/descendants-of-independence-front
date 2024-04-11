import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    ticketId: null,
    tickets: {
        1: {
            id: 1,
            name: "Серик Асылжан",
            date: '16.10.2023',
            region: 'Астана',
            status: 'Отправлено на доработку',
            // Максимум - 10
            points: null,
            // Комментарий и какая-то информация от администратора для доработки заявки
            admin_comment: {
            }
        }
    }
};

const statusSlice = createSlice({
    name: 'status',
    initialState,
    reducers: {
        /**
         *
         * @param state
         * @param action {{payload: number}}
         */
        setTicketId(state, action) {
            state.ticketId = action.payload;
        }
    }
});

export const {setTicketId} = statusSlice.actions;
export default statusSlice.reducer;