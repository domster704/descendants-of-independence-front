import React from 'react';
import * as styles from './WinnerYearCardList.module.css';
import WinnerYearCard from "./WinnerYearCard/WinnerYearCard";
import {useDispatch, useSelector} from "react-redux";
import {setFilterYear} from "../../../../store/winnerSlice";

/**
 *
 * @param {number[]} years - массив с годами
 * @param {number} max_years - максимальное количество годов, отображемых до пагинации
 * @param {boolean} is_max_width - включить или нет максимальную ширину у блока
 * @param {boolean} not_expand - если true, то не раскрывать список при клике на +.
 * @param {Function} onClick - callback при клике на +. Вставляется в конец обработчика клика.
 * @returns {Element}
 * @constructor
 */
const WinnerYearCardList = ({
                                years,
                                max_years,
                                is_max_width,
                                onClick,
                                not_expand
                            }) => {
    const dispatch = useDispatch();
    const filterYear = useSelector(state => state.winner.filter.year);
    return (
        <div className={`${styles.list} ${is_max_width && styles.max}`}>
            {
                years.slice(0, max_years).map(year => <WinnerYearCard key={year}
                                                                      year={year}
                                                                      active={year === filterYear}
                                                                      not_expand={not_expand}
                                                                      onClick={(event) => {
                                                                          dispatch(setFilterYear(year));

                                                                          if (typeof onClick === 'function') {
                                                                              onClick(event);
                                                                          }
                                                                      }}/>)
            }
        </div>
    );
}

export default WinnerYearCardList;