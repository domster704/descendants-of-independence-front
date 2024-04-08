import React from'react'
import * as styles from './WinnerGrant.module.css'

import {Link} from "react-router-dom";
import FilterWinner from "./FilterWinner/FilterWinner";
import WinnerYearCardList from "./WinnerYearCardList/WinnerYearCardList";
import WinnerCardFiltered from "./WinnerCardFiltered/WinnerCardFiltered";
import Pagination from "../../../UI/Pagination/Pagination";
import {useSelector} from "react-redux";

const WinnerGrant = ({years, YEARS_ON_PAGE}) => {
    return (
        <div className={styles.top}>
            <h1>Победители гранта</h1>
            <div className={styles.top_left_and_right}>
                <div></div>
                <FilterWinner/>
            </div>
            <div className={styles.top_left_and_right + " " + styles.years_and_card}>
                <WinnerYearCardList years={years}
                                    max_years={YEARS_ON_PAGE}
                                    is_max_width={true}/>
                <WinnerCardFiltered/>
            </div>
            <div className={styles.top_bottom_block}>
                <Pagination elements_count={years.length}/>
                <Link to="/archive/winner_list"
                      className={styles.show_all_winner_button}>Список победителей</Link>
            </div>
        </div>
    );
}

export default WinnerGrant;
