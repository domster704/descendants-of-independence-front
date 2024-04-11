import React from "react";
import * as styles from './Status.module.css'
import Wrapper from "../../UI/Wrapper/Wrapper";
import StatusInputID from "./StatusInputID/StatusInputID";
import StatusStepContainer from "./StatusStepContainer/StatusStepContainer";
import {useSelector} from "react-redux";

const Status = () => {
    let statusStore = useSelector(state => state.status);

    return (
        <Wrapper>
            <div className={styles.status}>
                <h1>Узнать статус</h1>
                <p>Введите индивидуальный номер Вашей заявки</p>
                <StatusInputID/>
                {
                    statusStore.tickets[statusStore.ticketId] && <StatusStepContainer ticket={statusStore.tickets[statusStore.ticketId]}/>
                }
            </div>
        </Wrapper>
    );
}

export default Status;