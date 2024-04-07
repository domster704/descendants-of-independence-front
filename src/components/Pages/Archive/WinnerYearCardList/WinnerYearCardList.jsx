import React from 'react';
import * as styles from './WinnerYearCardList.module.css';
import WinnerYearCard from "./WinnerYearCard/WinnerYearCard";

const WinnerYearCardList = ({years, max_years}) => {
    return (
        <div className={styles.list}>
            {
                years.slice(0, max_years).map(year => <WinnerYearCard key={year} year={year}/>)
            }
        </div>
    );
}

export default WinnerYearCardList;