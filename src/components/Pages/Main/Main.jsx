import React from 'react';
import Carth from './MainComponents/Carth';
import GrandInfo from './MainComponents/GrantInfo';
import mainLogo from './img/KZ1_9633_2.webp';
import * as style from './Main.module.css';

const Main = () => {
    return (
        <div className={style.main}>
            <h1 className={style.hidden}>Main</h1>
            <img loading="lazy" className={style.main_logo} src={mainLogo} alt="main logo"/>
            <div style={{ position: 'relative' }}>
                <GrandInfo/>
            </div>
            <Carth/>
        </div>
    );
};

export default Main;
