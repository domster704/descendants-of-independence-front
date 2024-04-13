import React from 'react';
import * as styles from './StepOne.module.css';
import Tabs from "../../Tabs/Tabs";

const StepOne = () => {
    return (
        <div className={styles.step}>
            <Tabs/>
        </div>
    );
}

export default StepOne;