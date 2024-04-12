import {createSlice} from '@reduxjs/toolkit';

import winner_2021_awarding_1 from '../assets/img/gallery/winner_2021_awarding_1.webp';
import winner_2021_awarding_2 from '../assets/img/gallery/winner_2021_awarding_2.webp';
import winner_2021_awarding_3 from '../assets/img/gallery/winner_2021_awarding_3.webp';
import winner_2021_awarding_4 from '../assets/img/gallery/winner_2021_awarding_4.webp';
import winner_2021_awarding_5 from '../assets/img/gallery/winner_2021_awarding_5.webp';
import winner_2021_awarding_6 from '../assets/img/gallery/winner_2021_awarding_6.webp';
import news_1 from '../assets/img/gallery/news_1.webp';
import news_2 from '../assets/img/gallery/news_2.webp';
import news_3 from '../assets/img/gallery/news_3.webp';

const initialState = {
    dropdownOptions: [
        { value: 'news', label: 'Новости' },
        { value: 'photo', label: 'Фотоотчет' },
        { value: 'all', label: 'Всё' },
    ],
    currentOption: { value: 'all', label: 'Всё' },
    galleryList: [{
        type: 'photo',
        description: 'Награждение победителей гранта 2021 года',
        img: winner_2021_awarding_1
    }, {
        type: 'photo',
        description: 'Награждение победителей гранта 2021 года',
        img: winner_2021_awarding_2
    }, {
        type: 'photo',
        description: 'Награждение победителей гранта 2021 года',
        img: winner_2021_awarding_3
    }, {
        type: 'photo',
        description: 'Награждение победителей гранта 2021 года',
        img: winner_2021_awarding_4
    }, {
        type: 'photo',
        description: 'Награждение победителей гранта 2021 года',
        img: winner_2021_awarding_5
    }, {
        type: 'photo',
        description: 'Награждение победителей гранта 2021 года',
        img: winner_2021_awarding_6
    }, {
        type: 'news',
        description: '3 миллион теңгеден 30 грант беріледі',
        img: news_1,
        link: 'https://egemen.kz/article/282168-tauelsizdik-urpaqtary-3-million-tenhgeden-30-grant-beriledi'
    }, {
        type: 'news',
        description: 'Глава государства принял участие в церемонии вручения грантов «Тәуелсіздік ұрпақтары»',
        img: news_2,
        link: 'https://akorda.kz/ru/glava-gosudarstva-prinyal-uchastie-v-ceremonii-vrucheniya-grantov-tauelsizdik-urpaktary-8113634 '
    }, {
        type: 'news',
        description: '33 проекта стали победителями гранта «Тәуелсіздік ұрпақтары»',
        img: news_3,
        link: 'https://el.kz/ru/33-proekta-stali-pobeditelyami-granta-tauelsizdik-urpaqtary_58700/'
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