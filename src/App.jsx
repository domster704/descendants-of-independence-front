import React from 'react';
import {useSelector} from 'react-redux';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TestPage from "./components/Pages/TestPage/TestPage";
import Main from "./components/Pages/Main/Main";
import Archive from "./components/Pages/Archive/Archive";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
    let env = useSelector(state => state.env);
    console.log(env);

    return (
        <>
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/test" element={<TestPage/>}/>
                    <Route path="/archive" element={<Archive/>}/>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </>
    );
}

export default App;