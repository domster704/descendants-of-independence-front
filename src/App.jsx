import React from 'react';
import {useSelector} from 'react-redux';
import {HashRouter, Route, Routes} from "react-router-dom";
import TestPage from "./components/Pages/TestPage/TestPage";
import Main from "./components/Pages/Main/Main";
import Statement from './components/Pages/Statement/Statement';
import Archive from "./components/Pages/Archive/Archive";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import background from './assets/img/top_background.png';
import * as styles from './App.module.css';

const App = () => {
    let env = useSelector(state => state.env);
    console.log(env);

    return (
        <div className={styles.background} style={{backgroundImage: `url(${background})`}}>
            <Header/>
            <HashRouter >
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/test" element={<TestPage/>}/>
                    <Route path="/archive" element={<Archive/>}/>
                    <Route path="/statement" element={<Statement />}/>
                </Routes>
            </HashRouter >
            <Footer/>
        </div>
    );
}

export default App;