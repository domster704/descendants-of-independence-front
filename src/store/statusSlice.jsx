import { createSlice } from '@reduxjs/toolkit';
import { fetchApplicationsById } from './applicationThunk';
import { fetchStatuses } from './statusThunk';
import {
    DAY_OPTIONS,
    EDUCATION_OPTIONS,
    MONTH_OPTIONS,
    REGION_OPTIONS,
    YEAR_OPTIONS,
} from '../components/Pages/Statement/Statement.constants';

let initialState = {
    categories: [],
    ticket: null,
    cost_estimate: [],
};

const statusSlice = createSlice({
    name: 'status',
    initialState,
    reducers: {
        setTicket(state, { payload }) {
            state.ticket = payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchApplicationsById.fulfilled, (state, { payload: { ticket, cost_estimate } }) => {
            if (!ticket) {
                state.ticket = ticket;
                state.cost_estimate = cost_estimate;
                return;
            }

            const returnOptionByLabel = (options, label) => options.find(option => option.label === label);

            const getFormattedDate = (date) => {
                const dateISO = new Date(date);
                const day = dateISO.getDate().toString().padStart(2, '0');
                const month = (dateISO.getMonth() + 1).toString().padStart(2, '0');
                const year = dateISO.getFullYear().toString();
                return { day, month, year };
            };

            const dateOfBirth = getFormattedDate(ticket.date_of_birth);
            const date = getFormattedDate(ticket.date);

            state.ticket = {
                ...ticket,
                date_of_birth_day: returnOptionByLabel(DAY_OPTIONS, dateOfBirth.day),
                date_of_birth_month: returnOptionByLabel(MONTH_OPTIONS, dateOfBirth.month),
                date_of_birth_year: returnOptionByLabel(YEAR_OPTIONS, dateOfBirth.year),
                date: `${date.day}.${date.month}.${date.year}`,
                address_region: returnOptionByLabel(REGION_OPTIONS, ticket.address_region),
                education: returnOptionByLabel(EDUCATION_OPTIONS, ticket.education),
            };
            state.cost_estimate = cost_estimate;
        });

        builder.addCase(fetchStatuses.fulfilled, (state, { payload }) => {
            if (typeof state.ticket.status === 'string') return;

            const result = payload.find((status) => status.id === state.ticket.status);
            state.ticket = { ...state.ticket, status: result.name };
        });
    },
});

export const { setTicket } = statusSlice.actions;
export default statusSlice.reducer;