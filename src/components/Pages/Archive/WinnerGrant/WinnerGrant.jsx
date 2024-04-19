import React from "react";
import * as styles from "./WinnerGrant.module.css";

import {Link, useNavigate} from "react-router-dom";
import FilterWinner from "./FilterWinner/FilterWinner";
import WinnerYearCardList from "../WinnerYearCardList/WinnerYearCardList";
import WinnerCardFiltered from "./WinnerCardFiltered/WinnerCardFiltered";
import Pagination from "../../../UI/Pagination/Pagination";
import {useTranslation} from "react-i18next";

const WinnerGrant = ({years, YEARS_ON_PAGE, winner_list_path}) => {
    const navigate = useNavigate();
    const {t} = useTranslation("archive");

    return (
        <div className={styles.top}>
            <h1>{t("grant_winner")}</h1>
            <div className={styles.top_left_and_right}>
                <div></div>
                <FilterWinner/>
            </div>
            <div className={styles.top_left_and_right + " " + styles.years_and_card}>
                <WinnerYearCardList
                    years={years}
                    max_years={YEARS_ON_PAGE}
                    is_max_width={true}
                    not_expand={true}
                />
                <WinnerCardFiltered/>
            </div>
            <div className={styles.top_bottom_block}>
                {/*<Pagination elements_count={years.length}/>*/}
                <div></div>
                <Link to={winner_list_path} className={styles.show_all_winner_button}>
                    {t("list_of_winners")}
                </Link>
            </div>
        </div>
    );
};

export default WinnerGrant;
