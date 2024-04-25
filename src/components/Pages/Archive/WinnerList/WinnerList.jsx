import React, { useEffect } from 'react'
import * as styles from './WinnerList.module.css'
import WinnerYearCardList from "../WinnerYearCardList/WinnerYearCardList";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const WinnerList = ({ years }) => {
    useEffect(() => {
        const element = document.documentElement;
        element.scrollIntoView({ behavior: "instant", block: "start" });
  }, []);
    const { t } = useTranslation("archive");
    const YEARS_ON_PAGE = 3

    return (
        <div className={styles.winner_list}>
            <h1>{t("winnerHeader")}</h1>
            <WinnerYearCardList years={years}
                                max_years={YEARS_ON_PAGE}/>
            <Link to={"/archive"} className={styles.back}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    fill="none"
                    viewBox="0 0 24 24">
                    <path
                        fill="#fff"
                        fillRule="evenodd"
                        d="M8.293 5.293a1 1 0 011.414 1.414L5.414 11H21a1 1 0 110 2H5.414l4.293 4.293a1 1 0 01-1.414 1.414l-6-6L1.586 12l.707-.707 6-6z"
                        clipRule="evenodd"
                    ></path>
                </svg>
            </Link>
        </div>
    );
}

export default WinnerList;