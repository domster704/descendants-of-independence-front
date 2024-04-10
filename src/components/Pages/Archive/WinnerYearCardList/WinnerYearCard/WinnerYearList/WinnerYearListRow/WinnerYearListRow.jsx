import React from "react";
import * as styles from './WinnerYearListRow.module.css'

const WinnerYearListRow = ({data, isHeader, category}) => {
    return (
        <div className={`${styles.row} ${isHeader && styles.header}`}>
            <div>{data.name}</div>
            <div>{data.project}</div>
            <div>{category}</div>
            <div>{data.region}</div>
            <div>{data.status}</div>
        </div>
    );
}

export default WinnerYearListRow;