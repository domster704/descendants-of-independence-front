import React, { useEffect } from "react";
import * as styles from "./FilterWinner.module.css";
import FilterButton from "./FilterButton/FilterButton";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilterCategoryActive,
  setLanguage,
} from "../../../../../store/winnerSlice";
import { useTranslation } from "react-i18next";

const FilterWinner = () => {
  const { t } = useTranslation("archive");
  let dispatch = useDispatch();
  let winnerState = useSelector((state) => state.winner);
  const local = localStorage.getItem("lang");
  useEffect(() => {
    dispatch(setLanguage(local));
  }, [t]);
  return (
    <div className={styles.filter_winner_container}>
      <div className={styles.filter_winner_content}>
        {Object.keys(winnerState.filter.filterCategory).map((key, index) => {
          return (
            <FilterButton
              key={key}
              active={winnerState.filter.active === key}
              index={index}
              onClick={() => {
                dispatch(
                  setFilterCategoryActive(
                    Object.keys(winnerState.filter.filterCategory)[index]
                  )
                );
              }}
            >
              {winnerState.filter.filterCategory[key].children}
            </FilterButton>
          );
        })}
      </div>
    </div>
  );
};

export default FilterWinner;
