import React from 'react';
import * as styles from "./Archive.module.css";

import winner_img from "./img/winner.png";
import {Link} from "react-router-dom";

import Wrapper from "../../Wrapper/Wrapper";
import FilterWinner from "./FilterWinner/FilterWinner";
import WinnerCardFiltered from "./WinnerCardFiltered/WinnerCardFiltered";
import WinnerYearCardList from "./WinnerYearCardList/WinnerYearCardList";
import YearPagination from "./YearPagination/YearPagination";
import Gallery from "./Gallery/Gallery";

const Archive = () => {
    const YEARS_ON_PAGE = 3;
    let [years, setYears] = React.useState([
        2023, 2022, 2021, 2020, 2019, 2018,
        2007, 2006, 2005, 2004, 2003, 2002,
        2001, 2000, 1999, 1998, 1997, 1996,
        1995, 1994, 1993, 1992, 1991, 1990
    ]);

    return (
        <>
            <Wrapper>
                <div className={styles.top}>
                    <h1>Победители гранта</h1>
                    <div className={styles.top_left_and_right}>
                        <div></div>
                        <FilterWinner/>
                    </div>
                    <div className={styles.top_left_and_right + " " + styles.years_and_card}>
                        <WinnerYearCardList years={years}
                                            max_years={YEARS_ON_PAGE}/>
                        <WinnerCardFiltered winner_img={winner_img}/>
                    </div>
                    <div className={styles.top_bottom_block}>
                        <YearPagination years_count={years.length}/>
                        <Link to="/"
                              className={styles.show_all_winner_button}>Список победителей</Link>
                    </div>
                </div>
            </Wrapper>
            <Gallery/>
        </>
    );
}

export default Archive;