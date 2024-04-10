import React from'react'
import * as styles from './WinnerGrant.module.css'

import {Link} from "react-router-dom";
import FilterWinner from "./FilterWinner/FilterWinner";
import WinnerYearCardList from "../WinnerYearCardList/WinnerYearCardList";
import WinnerCardFiltered from "./WinnerCardFiltered/WinnerCardFiltered";
import Pagination from "../../../UI/Pagination/Pagination";
import { useNavigate } from "react-router-dom";

const WinnerGrant = ({years, YEARS_ON_PAGE, winner_list_path}) => {
    const navigate = useNavigate();

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
                                    is_max_width={true}
                                    onClick={() => navigate(winner_list_path)}
                                    />
                <WinnerCardFiltered/>
            </div>
            <div className={styles.top_bottom_block}>
                <Pagination elements_count={years.length}/>
                <Link to={winner_list_path}
                      className={styles.show_all_winner_button}>Список победителей</Link>
            </div>
        </div>
    );
}

export default WinnerGrant;
