import { createSlice } from '@reduxjs/toolkit';
import { fetchApplicationsById } from './applicationThunk';
import { fetchStatuses } from './statusThunk';

let initialState = {
    ticketId: null,
    ticket: null,
    cost_estimate: [],
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
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchApplicationsById.fulfilled, (state, { payload }) => {
            state.ticket = payload.ticket;
            state.cost_estimate = payload.cost_estimate;
        });

        builder.addCase(fetchStatuses.fulfilled, (state, { payload }) => {
            if (state.ticket === null || typeof state.ticket.status === 'string') return;

            const result = payload.find((status) => status.id === state.ticket.status);
            state.ticket = { ...state.ticket, status: result.name };
        });
    },
});

export const { setTicketId } = statusSlice.actions;
export default statusSlice.reducer;