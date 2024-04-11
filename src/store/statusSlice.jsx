import {createSlice} from "@reduxjs/toolkit";
import {
    COST_ESTIMATE_WITH_TEST_DATA,
    STATE_WITH_TEST_DATA
} from '../components/Pages/Status/StatusStepForm/StatusStepForm.constants';

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
                message: 'Не правильно заполнено',
            },
            // Объект со всеми данными для формы
            statement: STATE_WITH_TEST_DATA,
            // Данные таблицы "Смета расходов"
            costEstimate: COST_ESTIMATE_WITH_TEST_DATA,
        },
        2: {
            id: 2,
            name: "Серик Асылжан",
            date: '16.10.2023',
            region: 'Астана',
            status: 'Принято',
            points: null,
            admin_comment: {
            }
        },
        3: {
            id: 3,
            name: "Серик Асылжан",
            date: '16.10.2023',
            region: 'Астана',
            status: 'Отказано',
            points: null,
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