import React from 'react';
import * as style from './Main.module.css';
import {Link} from "react-router-dom";

const Main = () => {
    console.log(style)

    return (
        <div className={style.main}>
            <h1>Main</h1>
            <Link to="/test">Test Page</Link>
            <br/>
            <Link to="/archive">Archive Page</Link>
            <br/>
            <Link to="/statement">Statement</Link>
        </div>
    );
}

export default Main;