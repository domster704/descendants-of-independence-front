import React from 'react';
import * as styles from './ArrowButton.module.css';

/**
 *
 * @param {string} [direction=left] - 'left' or 'right' - стрелка направлена влево или вправо
 * @param {string} [size=small] -'small' or 'large' - размер кнопки
 * @param {Function} onClick - свой обработчик клика
 * @returns {JSX.Element}
 */
const ArrowButton = ({direction = 'left', size='small', onClick}) => {
    return (
        <button className={`${styles.arrow} ${styles[direction]} ${styles[size]}`} onClick={onClick}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1905_7211)">
                    <path
                        d="M11.3334 15.9998C11.4211 16.0003 11.5081 15.9835 11.5893 15.9503C11.6705 15.9171 11.7444 15.8683 11.8067 15.8065C11.8692 15.7445 11.9188 15.6708 11.9526 15.5895C11.9865 15.5083 12.0039 15.4211 12.0039 15.3331C12.0039 15.2451 11.9865 15.158 11.9526 15.0767C11.9188 14.9955 11.8692 14.9218 11.8067 14.8598L6.36004 9.41313C5.98551 9.03813 5.77513 8.5298 5.77513 7.9998C5.77513 7.4698 5.98551 6.96147 6.36004 6.58646L11.8067 1.1398C11.9322 1.01426 12.0028 0.843999 12.0028 0.666465C12.0028 0.48893 11.9322 0.318667 11.8067 0.193131C11.6812 0.0675956 11.5109 -0.00292969 11.3334 -0.00292969C11.1558 -0.00292969 10.9856 0.0675956 10.86 0.193131L5.41337 5.6398C5.10295 5.94944 4.85667 6.31727 4.68862 6.72224C4.52058 7.12721 4.43408 7.56135 4.43408 7.9998C4.43408 8.43825 4.52058 8.87239 4.68862 9.27736C4.85667 9.68232 5.10295 10.0502 5.41337 10.3598L10.86 15.8065C10.9223 15.8683 10.9962 15.9171 11.0774 15.9503C11.1587 15.9835 11.2456 16.0003 11.3334 15.9998Z"
                        fill="black"/>
                </g>
                <defs>
                    <clipPath id="clip0_1905_7211">
                        <rect width="16" height="16" fill="white" transform="matrix(-1 0 0 1 16 0)"/>
                    </clipPath>
                </defs>
            </svg>
        </button>
    );
}

export default ArrowButton;