import React from 'react';
import * as styles from './Archive.module.css';

import Wrapper from "../../Wrapper/Wrapper";
import FilterWinner from "./FilterWinner/FilterWinner";
import WinnerCard from "./FilterWinner/WinnerCard/WinnerCard";

import winner_img from "./img/winner.png"

const Archive = () => {
    return (
        <Wrapper>
            <div className={styles.archive}>
                <div className={styles.top}>
                    <h1>Победители гранта</h1>
                    <div className={styles.top_left_and_right}>
                        <div>

                        </div>
                        <div className={styles.top_right}>
                            <FilterWinner/>
                            <WinnerCard winner_img={winner_img}/>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default Archive;