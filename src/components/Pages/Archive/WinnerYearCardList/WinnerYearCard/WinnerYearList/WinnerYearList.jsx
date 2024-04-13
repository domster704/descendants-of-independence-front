import React from "react";
import {useSelector} from "react-redux";
import WinnerYearListRow from "./WinnerYearListRow/WinnerYearListRow";

import * as styles from './WinnerYearList.module.css'

const WinnerYearList = ({year}) => {
    let winnerStore = useSelector(store => store.winner);
    let yearList = winnerStore.winnerCards[year];
    let filterCategory = winnerStore.filter.filterCategory;

    return (
        <div className={styles.table}>
            <WinnerYearListRow data={{
                name: 'ФИО',
                project: 'Название проекта',
                region: 'Регион',
                status: 'Статус проект'
            }} isHeader={true} category='Направление'/>
            {
                Object.keys(yearList).map((key, index) => {
                    return yearList[key].map((el, index) => {
                        return <WinnerYearListRow data={el} key={index} category={filterCategory[key].children}/>
                    })
                })
            }
        </div>
    );
}

export default WinnerYearList;