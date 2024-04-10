import {createSlice} from "@reduxjs/toolkit";
import winner_img from "../assets/img/archiveWinnerImg/winner.png";

const initialState = {
    filter: {
        active: "it",
        year: 2023,
        filterCategory: {
            science: {children: 'Наука'},
            culture: {children: 'Культура'},
            it: {children: 'Информационные технологии'},
            business: {children: 'Бизнес'},
            media: {children: 'Медиа'},
        }
    },
    winnerCards: {
        2023: {
            science: [],
            culture: [],
            it: [{
                name: "Наумова Динара",
                age: "20 лет",
                region: "Астана",
                project: "ЛФК-кабинет “Life+”",
                purpose: "Помощь людям с ограниченными возможностями",
                status: "Завершен",
                image: winner_img,

            }, {
                name: "Иванов Иван",
                age: "25 лет",
                region: "Москва",
                project: "ЛЦТ Расчет недвижимости",
                purpose: "Помощь людям с ограниченными возможностями",
                status: "Завершен",
                image: winner_img,
            }],
            business: [],
            media: []
        },
        2022: {
            science: [{
                name: 'Амирова Аида Зухрабкызы',
                age: '25 лет',
                region: 'Астана',
                project: '«Life on the Spectrum: Механизмы социальной поддержки детей с расстройствами аутистического спектра и способы их улучшения»',
                purpose: 'Достичь мечты',
                status: 'Завершен',
                image: null
            }],
            culture: [],
            it: [],
            business: [],
            media: []
        },
        2021: {
            science: [],
            culture: [],
            it: [],
            business: [],
            media: []
        }
    }
}

const winnerSlice = createSlice({
    name: "winner",
    initialState,
    reducers: {
        /**
         * @param state
         * @param action {{payload: string}}
         */
        setFilterCategoryActive(state, action) {
            state.filter.active = action.payload;
        },
        /**
         * @param state
         * @param action {{payload: number}}
         */
        setFilterYear(state, action) {
            state.filter.year = action.payload;
        }
    }
});

export const {
    setFilterCategoryActive,
    setFilterYear
} = winnerSlice.actions;
export default winnerSlice.reducer;