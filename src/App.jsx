import React from 'react';
import {HashRouter, Route, Routes} from 'react-router-dom';
import Main from './components/Pages/Main/Main';
import Statement from './components/Pages/Statement/Statement';
import Archive from './components/Pages/Archive/Archive';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import background from './assets/img/top_background.png';
import * as styles from './App.module.css';
import About from './components/Pages/AboutTheCompetition/About';
import Success from './components/Pages/Success/Success';
import Status from './components/Pages/Status/Status';
import ChatBot from './components/ChatBot/ChatBot';

const App = () => {
    return (
        <HashRouter>
            <div className={styles.background}
                 style={{backgroundImage: `url(${background})`}}
            >
                <Header/>
                <main>
                    <Routes>
                        <Route exact path="/" element={<Main/>}/>
                        <Route exact path="/archive/*" element={<Archive/>}/>
                        <Route exact path="/statement" element={<Statement/>}/>
                        <Route exact path="/about" element={<About/>}/>
                        <Route exact path="/success" element={<Success/>}/>
                        <Route exact path="/status/*" element={<Status/>}/>
                    </Routes>
                    <ChatBot/>
                </main>
                <Footer/>
            </div>
        </HashRouter>

    );
};

export default App;
