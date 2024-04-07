import React from 'react';
import * as styles from './PaginationNumber.module.css';

/**
 *
 * @param children - контент внтутри элемента
 * @param onClick - функция обратного вызова при нажатии на элемент пагинации
 * @returns {Element}
 * @constructor
 */
const PaginationNumber = ({children, onClick}) => {
    return (
        <button className={styles.number}
                onClick={onClick}>
            {children}
        </button>
    );
}

export default PaginationNumber;