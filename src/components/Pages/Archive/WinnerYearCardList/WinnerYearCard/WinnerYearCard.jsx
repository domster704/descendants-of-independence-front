import React from 'react';
import * as styles from './WinnerYearCard.module.css';
import WinnerYearList from "./WinnerYearList/WinnerYearList";
import {useTranslation} from 'react-i18next';


const MINUS_BUTTON = <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="34" height="34" rx="17" fill="#1661F5" fillOpacity="0.1"/>
    <rect x="0.5" y="0.5" width="33" height="33" rx="16.5" stroke="#1661F5" strokeOpacity="0.5"/>
    <path
        d="M11.3295 15.8575C11.4361 15.8393 18.9688 15.8289 20.337 15.8289C21.7026 15.8289 22.5635 15.8393 22.6702 15.8575C23.1696 15.9356 23.5545 16.3231 23.6378 16.8277C23.7392 17.4416 23.2866 18.0555 22.665 18.1439C22.5739 18.1569 21.5257 18.1699 20.337 18.1699H13.6653C12.474 18.1699 11.4257 18.1569 11.3347 18.1439C10.713 18.0555 10.2605 17.4416 10.3619 16.8277C10.4451 16.3231 10.8301 15.9356 11.3295 15.8575Z"
        fill="#1661F5"/>
</svg>;

const PLUS_BUTTON = <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="34" height="34" rx="17" fill="#1661F5" fillOpacity="0.1"/>
    <rect x="0.5" y="0.5" width="33" height="33" rx="16.5" stroke="#1661F5" strokeOpacity="0.5"/>
    <path
        d="M16.7683 10.3698C16.3105 10.4583 15.9204 10.8718 15.8554 11.3348C15.8424 11.4259 15.8293 12.4741 15.8293 13.6628V15.8296H13.6653C12.2971 15.8296 11.4361 15.84 11.3295 15.8582C10.8301 15.9362 10.4451 16.3238 10.3619 16.8284C10.2605 17.4423 10.713 18.0561 11.3347 18.1446C11.4257 18.1576 12.474 18.1706 13.6653 18.1706H15.8293V20.3347C15.8293 21.526 15.8424 22.5742 15.8554 22.6653C15.9438 23.287 16.5576 23.7395 17.1715 23.6381C17.6761 23.5549 18.0637 23.1699 18.1417 22.6705C18.1599 22.5638 18.1703 21.7029 18.1703 20.3347V18.1706H20.337C21.5257 18.1706 22.5739 18.1576 22.665 18.1446C23.2866 18.0561 23.7392 17.4423 23.6378 16.8284C23.5545 16.3238 23.1696 15.9362 22.6702 15.8582C22.5635 15.84 21.7026 15.8296 20.337 15.8296H18.1703V13.6628C18.1703 12.4741 18.1573 11.4259 18.1443 11.3348C18.0533 10.6872 17.416 10.2424 16.7683 10.3698Z"
        fill="#1661F5"/>
</svg>;

/**
 *
 * @param {number} year - год выигрыша
 * @param {boolean} [not_expand=false] - если true, то не раскрывать список при клике на +.
 * @param {boolean} [active=false] - умолчательный статус нажатия кнопки
 * @param onClick
 * @returns {Element}
 * @constructor
 */
const WinnerYearCard = ({year, onClick, not_expand = false, active = false}) => {
    const {t} = useTranslation("archive")

    const [isPlus, setIsPlus] = React.useState(!active);

    const onClickSVG = (event) => {
        setIsPlus(!isPlus);
        onClick(event);
    };

    React.useEffect(() => {
        setIsPlus(!active);
    }, [active]);

    return (
        <div className={styles.card}>
            <div className={styles.card_row}>
                <p>{t('winners')} {year} { t('year')}</p>
                <button className={styles.button}
                        onClick={onClickSVG}>
                    {(!active || !not_expand && isPlus) ? PLUS_BUTTON : MINUS_BUTTON}
                </button>
            </div>
            {
                !not_expand && !isPlus && <WinnerYearList year={year}/>
            }
        </div>
    );
}

export default WinnerYearCard;