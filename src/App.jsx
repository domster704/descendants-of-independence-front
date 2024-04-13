import React from 'react';
import {useSelector} from 'react-redux';
import {HashRouter, Route, Routes} from 'react-router-dom';
import TestPage from './components/Pages/TestPage/TestPage';
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
import HeaderAdmin from "./components/Admin/HeaderAdmin/Header";
import Login from "./components/Admin/Login/Login";
import StepOne from "./components/Admin/Pages/StepOne/StepOne";

const ClientSide =
    <div className={styles.background}
         style={{backgroundImage: `url(${background})`}}
    >
        <Header/>
        <main>
            <Routes>
                <Route exact path="/" element={<Main/>}/>
                <Route exact path="/test" element={<TestPage/>}/>
                <Route exact path="/archive/*" element={<Archive/>}/>
                <Route exact path="/statement" element={<Statement/>}/>
                <Route exact path="/about" element={<About/>}/>
                <Route exact path="/success" element={<Success/>}/>
                <Route exact path="/status/*" element={<Status/>}/>
            </Routes>
            <ChatBot/>
        </main>
        <Footer/>
    </div>;


const AdminSide =
    <div>
        <HeaderAdmin/>
        <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route exact path="/step-one" element={<StepOne/>}/>
        </Routes>
    </div>;

const App = () => {
    let env = useSelector((state) => state.env);


    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={ClientSide}/>
                <Route path="/admin/*" element={AdminSide}/>
            </Routes>
        </HashRouter>

    );
};

export default App;
