import React from 'react';
import * as styles from './Archive.module.css';

import top_background from './img/top_background.png';

const Archive = () => {
    return (
        <div className={styles.archive}>
            <div style={{backgroundImage: `url(${top_background})`}}></div>
        </div>
    );
}

export default Archive;