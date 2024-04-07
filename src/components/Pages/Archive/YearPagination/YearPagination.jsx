import React from 'react';
import * as styles from './YearPagination.module.css';
import ArrowButton from "../../../UI/ArrowButton/ArrowButton";
import PaginationNumber from "./PaginationNumber/PaginationNumber";

const YearPagination = ({years_count}) => {
    let [max_numbers, setMaxNumbers] = React.useState(6);

    window.onload = window.onresize = () => {
        if (window.innerWidth < 551) {
            setMaxNumbers(4);
        } else{
            setMaxNumbers(6);
        }
    }

    // React.useLayoutEffect(() => {
    //     if (window.innerWidth < 768) {
    //         setMaxNumbers(4);
    //     }
    // });

    return (
        <div className={styles.pagination}>
            <ArrowButton/>
            <div className={styles.pagination_content}>
                {
                    [...Array(years_count).keys()].map(index => {
                        if (index === max_numbers) {
                            return <p key={index + 1}>...</p>;
                        }
                        if (index > max_numbers && index + 1 < years_count) {
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