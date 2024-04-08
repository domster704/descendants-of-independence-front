import React from 'react'
import * as styles from './WinnerList.module.css'
import WinnerYearCardList from "../WinnerGrant/WinnerYearCardList/WinnerYearCardList";
import {useSelector} from "react-redux";

const WinnerList = ({years}) => {
    const YEARS_ON_PAGE = 3

    return (
        <div className={styles.winner_list}>
            <h1>Список победителей </h1>
            <WinnerYearCardList years={years}
                                max_years={YEARS_ON_PAGE}/>
        </div>
    );
}

export default WinnerList;