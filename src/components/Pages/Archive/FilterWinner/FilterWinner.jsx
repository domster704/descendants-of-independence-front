import React from 'react';
import * as styles from './FilterWinner.module.css';
import FilterButton from "./FilterButton/FilterButton";

const FilterWinner = () => {
    let [buttonList, setButtonList] = React.useState([
        {children: 'Наука', active: false},
        {children: 'Культура', active: false},
        {children: 'Информационные технологии', active: true},
        {children: 'Бизнес', active: false},
        {children: 'Медиа', active: false},
    ]);

    return (
        <div className={styles.filter_winner_container}>
            <div className={styles.filter_winner_content}>
                {
                    buttonList.map((item, index) => {
                        return (
                            <FilterButton
                                key={index}
                                active={item.active}
                                index={index}
                                onClick={() => {
                                    let newButtonList = [...buttonList];
                                    newButtonList.forEach(element => {
                                        element.active = false;
                                    });
                                    newButtonList[index].active = true;
                                    setButtonList(newButtonList);
                                }}
                            >{item.children}</FilterButton>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default FilterWinner;