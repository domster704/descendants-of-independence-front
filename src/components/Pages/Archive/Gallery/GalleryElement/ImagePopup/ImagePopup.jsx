import React from 'react';
import * as styles from './ImagePopup.module.css';

const ImagePopup = ({onClick, img}) => {
    const onClickOverlay = () => {
        onClick();
    };

    return (
        <div className={styles.popup}>
            <div className={styles.overlay}
                 onClick={onClickOverlay}>
            </div>
            <div className={styles.content}>
                <img loading="lazy" src={img} alt="" width="100%" height="100%"/>
            </div>
        </div>
    );
}

export default ImagePopup;