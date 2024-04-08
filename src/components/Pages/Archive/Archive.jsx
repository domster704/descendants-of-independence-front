import React from 'react';

import Wrapper from "../../Wrapper/Wrapper";
import Gallery from "./Gallery/Gallery";
import WinnerGrant from "./WinnerGrant/WinnerGrant";
import {Route, Routes} from "react-router-dom";
import WinnerList from "./WinnerList/WinnerList";
import {useSelector} from "react-redux";

const Archive = () => {
    const YEARS_ON_PAGE = 3;
    let winnerStore = useSelector(state => state.winner);
    let years = Object.keys(winnerStore.winnerCards).reverse();

    return (
        <>
            <Wrapper>
                <Routes>
                    <Route exact path="/" element={<WinnerGrant years={years}
                                                                YEARS_ON_PAGE={YEARS_ON_PAGE}/>}/>
                    <Route exact path="/winner_list/" element={<WinnerList years={years}/>}/>
                </Routes>
            </Wrapper>
            <Gallery/>
        </>
    );
}

export default Archive;