import React from 'react';
import * as styles from './FilterWinner.module.css';
import FilterButton from "./FilterButton/FilterButton";
import {useDispatch, useSelector} from "react-redux";
import {setFilterCategoryActive} from "../../../../store/winnerSlice";

const FilterWinner = () => {
    let dispatch = useDispatch();
    let winnerState = useSelector(state => state.winner);

    return (
        <div className={styles.filter_winner_container}>
            <div className={styles.filter_winner_content}>
                {
                    Object.keys(winnerState.filter.filterCategory).map((key, index) => {
                        return (
                            <FilterButton
                                key={key}
                                active={winnerState.filter.active === key}
                                index={index}
                                onClick={() => {
                                    dispatch(setFilterCategoryActive(Object.keys(winnerState.filter.filterCategory)[index]));
                                }}
                            >{winnerState.filter.filterCategory[key].children}</FilterButton>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default FilterWinner;