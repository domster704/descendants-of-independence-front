import React from 'react';
import * as styles from './PaginationNumber.module.css';

const PaginationNumber = ({number}) => {
    return (
        <button className={styles.number}>
            {number}
        </button>
    );
}

export default PaginationNumber;