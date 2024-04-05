import React from 'react';
import {useSelector} from 'react-redux';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TestPage from "./components/Pages/TestPage/TestPage";
import Main from "./components/Pages/Main/Main";
import Archive from "./components/Pages/Archive/Archive";

const App = () => {
    let env = useSelector(state => state.env);
    console.log(env);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/test" element={<TestPage/>}/>
                <Route path="/archive" element={<Archive/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;