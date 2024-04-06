import React from 'react';

import * as styles from './WinnerCardFiltered.module.css';
import ArrowButton from "../../../../ArrowButton/ArrowButton";

const WinnerCardFiltered = (props) => {
    return (
        <div className={styles.winner_card}>
            <div className={styles.info}>
                <div className={styles.left}>
                    <p><b>Ф.И.О.:</b></p>
                    <p>Наумова Динара</p>

                    <p><b>Возраст:</b></p>
                    <p>20 лет</p>

                    <p><b>Регион:</b></p>
                    <p>Астана</p>

                    <p><b>Проект:</b></p>
                    <p>ЛФК-кабинет “Life+”</p>

                    <p><b>Цель:</b></p>
                    <p>Помощь людям с ограниченными возможностями</p>
                </div>
                <div>
                    <img className={styles.winner_card_img} src={props.winner_img} alt=""/>
                </div>
            </div>
            <div className={styles.status}>
                <div className={styles.left}>
                    <p><b>Статус проекта:</b></p>
                    <p><a>Завершен</a></p>
                </div>
                <div className={styles.arrows}>
                    <ArrowButton/>
                    <ArrowButton direction="right"/>
                </div>
            </div>
        </div>
    );
}

export default WinnerCardFiltered;