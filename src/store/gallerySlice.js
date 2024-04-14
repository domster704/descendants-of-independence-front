import { createSlice } from "@reduxjs/toolkit";

import winner_2021_awarding_1 from "../assets/img/gallery/winner_2021_awarding_1.webp";
import winner_2021_awarding_2 from "../assets/img/gallery/winner_2021_awarding_2.webp";
import winner_2021_awarding_3 from "../assets/img/gallery/winner_2021_awarding_3.webp";
import winner_2021_awarding_4 from "../assets/img/gallery/winner_2021_awarding_4.webp";
import winner_2021_awarding_5 from "../assets/img/gallery/winner_2021_awarding_5.webp";
import winner_2021_awarding_6 from "../assets/img/gallery/winner_2021_awarding_6.webp";
import news_1 from "../assets/img/gallery/news_1.webp";
import news_2 from "../assets/img/gallery/news_2.webp";
import news_3 from "../assets/img/gallery/news_3.webp";

import i18n from "../i18next";

let getArchiveTranslationRu = (key, lng) => {
  return i18n.t(`archive:${key}`, { lng: `${lng}` });
};
const initialState = {
  lang: "ru",
  dropdownOptions: [
    {
      value: "news",
      label: getArchiveTranslationRu("news", "ru"),
    },
    { value: "photo", label: getArchiveTranslationRu("foto", "ru") },
    { value: "all", label: getArchiveTranslationRu("all", "ru") },
  ],
  currentOption: { value: "all", label: getArchiveTranslationRu("all", "ru") },
  galleryList: [
    {
      type: "photo",
      description: getArchiveTranslationRu("2021", "ru"),
      img: winner_2021_awarding_1,
    },
    {
      type: "photo",
      description: getArchiveTranslationRu("2021", "ru"),
      img: winner_2021_awarding_2,
    },
    {
      type: "photo",
      description: getArchiveTranslationRu("2021", "ru"),
      img: winner_2021_awarding_3,
    },
    {
      type: "photo",
      description: getArchiveTranslationRu("2021", "ru"),
      img: winner_2021_awarding_4,
    },
    {
      type: "photo",
      description: getArchiveTranslationRu("2021", "ru"),
      img: winner_2021_awarding_5,
    },
    {
      type: "photo",
      description: getArchiveTranslationRu("2021", "ru"),
      img: winner_2021_awarding_6,
    },
    {
      type: "news",
      description: getArchiveTranslationRu("30", "ru"),
      img: news_1,
      link: "https://egemen.kz/article/282168-tauelsizdik-urpaqtary-3-million-tenhgeden-30-grant-beriledi",
    },
    {
      type: "news",
      description: getArchiveTranslationRu("bastik", "ru"),
      img: news_2,
      link: "https://akorda.kz/ru/glava-gosudarstva-prinyal-uchastie-v-ceremonii-vrucheniya-grantov-tauelsizdik-urpaktary-8113634 ",
    },
    {
      type: "news",
      description: getArchiveTranslationRu("33", "ru"),
      img: news_3,
      link: "https://el.kz/ru/33-proekta-stali-pobeditelyami-granta-tauelsizdik-urpaqtary_58700/",
    },
  ],
};

const updateDropdownOptions = (lang) => [
  {
    value: "news",
    label: getArchiveTranslationRu("news", lang),
  },
  {
    value: "photo",
    label: getArchiveTranslationRu("foto", lang),
  },
  {
    value: "all",
    label: getArchiveTranslationRu("all", lang),
  },
];

const updateCurrentOptionLabel = (lang) => {
  return {
    value: "all",
    label: getArchiveTranslationRu("all", lang),
  };
};

const updateGalleryList = (lang) => {
  return [
    {
      type: "photo",
      description: getArchiveTranslationRu("2021", lang),
      img: winner_2021_awarding_1,
    },
    {
      type: "photo",
      description: getArchiveTranslationRu("2021", lang),
      img: winner_2021_awarding_2,
    },
    {
      type: "photo",
      description: getArchiveTranslationRu("2021", lang),
      img: winner_2021_awarding_3,
    },
    {
      type: "photo",
      description: getArchiveTranslationRu("2021", lang),
      img: winner_2021_awarding_4,
    },
    {
      type: "photo",
      description: getArchiveTranslationRu("2021", lang),
      img: winner_2021_awarding_5,
    },
    {
      type: "photo",
      description: getArchiveTranslationRu("2021", lang),
      img: winner_2021_awarding_6,
    },
    {
      type: "news",
      description: getArchiveTranslationRu("30", lang),
      img: news_1,
      link: "https://egemen.kz/article/282168-tauelsizdik-urpaqtary-3-million-tenhgeden-30-grant-beriledi",
    },
    {
      type: "news",
      description: getArchiveTranslationRu("bastik", lang),
      img: news_2,
      link: "https://akorda.kz/ru/glava-gosudarstva-prinyal-uchastie-v-ceremonii-vrucheniya-grantov-tauelsizdik-urpaktary-8113634 ",
    },
    {
      type: "news",
      description: getArchiveTranslationRu("33", lang),
      img: news_3,
      link: "https://el.kz/ru/33-proekta-stali-pobeditelyami-granta-tauelsizdik-urpaqtary_58700/",
    },
  ];
};

const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    setCurrentOption: (state, { payload }) => {
      state.currentOption = payload;
    },
    setLanguage: (state, { payload }) => {
      state.lang = payload;
      state.dropdownOptions = updateDropdownOptions(payload);
      state.currentOption = updateCurrentOptionLabel(payload);
      state.galleryList = updateGalleryList(payload);
    },
  },
});

export default gallerySlice.reducer;
export const { setCurrentOption, setLanguage } = gallerySlice.actions;
