import React from 'react';
import * as styles from './WinnerYearCardList.module.css';
import WinnerYearCard from "./WinnerYearCard/WinnerYearCard";
import {useDispatch} from "react-redux";
import {setFilterYear} from "../../../../store/winnerSlice";

const WinnerYearCardList = ({years, max_years}) => {
    let dispatch = useDispatch();

    return (
        <div className={styles.list}>
            {
                years.slice(0, max_years).map(year => <WinnerYearCard key={year}
                                                                      year={year}
                                                                      onClick={() => {
                                                                          dispatch(setFilterYear(year));
                                                                      }}/>)
            }
        </div>
    );
}

export default WinnerYearCardList;