import React from 'react';
import * as styles from './WinnerYearCardList.module.css';
import WinnerYearCard from "./WinnerYearCard/WinnerYearCard";
import {useDispatch} from "react-redux";
import {setFilterYear} from "../../../../../store/winnerSlice";

/**
 *
 * @param {number[]} years - массив с годами
 * @param {number} max_years - максимальное количество годов, отображемых до пагинации
 * @param {boolean} is_max_width - включить или нет максимальную ширину у блока
 * @param {Function} onClick - callback при клике на +. Вставляется в конец обработчика клика.
 * @returns {Element}
 * @constructor
 */
const WinnerYearCardList = ({years, max_years, is_max_width, onClick}) => {
    let dispatch = useDispatch();

    return (
        <div className={`${styles.list} ${is_max_width && styles.max}`}>
            {
                years.slice(0, max_years).map(year => <WinnerYearCard key={year}
                                                                      year={year}
                                                                      onClick={(event) => {
                                                                          dispatch(setFilterYear(year));
                                                                          onClick || onClick(event);
                                                                      }}/>)
            }
        </div>
    );
}

export default WinnerYearCardList;