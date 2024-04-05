import React from 'react';
import * as styles from './FilterButton.module.css';

const FilterButton = ({children, active}) => {
    const onClick = (event) => {

    }

    return (
        <button className={`${styles.filter_button} ${active? styles.active : ''}`} onClick={onClick}>
            {children}
        </button>
    );
}

export default FilterButton;