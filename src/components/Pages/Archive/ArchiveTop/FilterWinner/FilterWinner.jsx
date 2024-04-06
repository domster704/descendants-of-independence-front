import React from 'react';
import * as styles from './FilterWinner.module.css';
import FilterButton from "./FilterButton/FilterButton";

const FilterWinner = () => {
    return (
        <div className={styles.filter_winner_container}>
            <div className={styles.filter_winner_content}>
                <FilterButton>Наука</FilterButton>
                <FilterButton>Культура</FilterButton>
                <FilterButton active={true}>Информационные технологии</FilterButton>
                <FilterButton>Бизнес</FilterButton>
                <FilterButton>Медиа</FilterButton>
            </div>
        </div>
    );
}

export default FilterWinner;