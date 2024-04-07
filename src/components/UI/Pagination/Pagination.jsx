import React from 'react';
import * as styles from './Pagination.module.css';
import PaginationNumber from "./PaginationNumber/PaginationNumber";
import ArrowButton from "../ArrowButton/ArrowButton";

/**
 *
 * @param {number} elements_count - количество элементов в списке
 * @param {number} [max_numbers=6] - максимальное количество элементов, отображаемых до ...
 * @param {Function} [onClick] - функция, вызываемая при клике на элемент пагинации
 * @returns {Element}
 * @constructor
 */
const Pagination = ({elements_count, max_numbers_ = 6, onClick}) => {
    let [max_numbers, setMaxNumbers] = React.useState(max_numbers_);
    let [min_numbers, setMinNumbers] = React.useState(0);

    window.onload = window.onresize = () => {
        if (window.innerWidth < 551) {
            setMaxNumbers(4);
        } else {
            setMaxNumbers(6);
        }
    }

    console.log(min_numbers, elements_count, max_numbers);
    return (
        <div className={styles.pagination}>
            <ArrowButton direction="left"
                         onClick={() => {
                             if (min_numbers < 1) {
                                 return;
                             }
                             setMinNumbers(min_numbers - 1);
                         }}/>
            <div className={styles.pagination_content}>
                {
                    [...Array(elements_count).keys()].map(index => {
                        if (index === max_numbers + min_numbers && min_numbers + 1 < (elements_count - 1) - max_numbers) {
                            return <p key={index + 1}>...</p>;
                        }
                        if (index > (max_numbers + min_numbers) && index + 1 < elements_count || index < min_numbers) {
                            return null;
                        }
                        return <PaginationNumber key={index + 1}>{index + 1}</PaginationNumber>;
                    })
                }
            </div>
            <ArrowButton direction="right"
                         onClick={() => {
                             if (min_numbers + 1 >= (elements_count - 1) - max_numbers) {
                                 return;
                             }
                             setMinNumbers(min_numbers + 1);
                         }}/>
        </div>
    );
}

export default Pagination;