import React from 'react';
import * as styles from './YearPagination.module.css';
import ArrowButton from "../../../../ArrowButton/ArrowButton";
import PaginationNumber from "./PaginationNumber/PaginationNumber";

const YearPagination = ({years_count}) => {
    const MAX_NUMBERS = 6;

    return (
        <div className={styles.pagination}>
            <ArrowButton/>
            <div className={styles.pagination_content}>
                {
                    [...Array(years_count).keys()].map(index => {
                        if (index === MAX_NUMBERS) {
                            return <p key={index + 1}>...</p>;
                        }
                        if (index > MAX_NUMBERS && index + 1 < years_count) {
                            return null;
                        }
                        return <PaginationNumber number={index + 1} key={index + 1}/>
                    })
                }
            </div>
            <ArrowButton direction="right"/>
        </div>
    );
}

export default YearPagination;