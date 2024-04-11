import React, { useEffect } from "react";
import * as styles from './Status.module.css'
import Wrapper from "../../UI/Wrapper/Wrapper";
import StatusInputID from "./StatusInputID/StatusInputID";
import StatusStepContainer from "./StatusStepContainer/StatusStepContainer";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { setTicketId } from '../../../store/statusSlice';

const Status = () => {
    const dispatch = useDispatch();
    let statusStore = useSelector(state => state.status);

    const params = useParams();

    useEffect(() => {
        if (params['*']) {
            dispatch(setTicketId(params['*']));
        }

        return () => {
            dispatch(setTicketId(null));
        };
    }, [params, dispatch]);

    return (
        <Wrapper>
            <div className={styles.status}>
                <h1>Узнать статус</h1>
                <p>Введите индивидуальный номер вашей заявки</p>
                <StatusInputID/>
                {
                    statusStore.tickets[statusStore.ticketId] ?
                        <StatusStepContainer ticket={statusStore.tickets[statusStore.ticketId]}/>
                        : statusStore.ticketId !== null ? <p>Ничего не найдено</p> : null
                }
            </div>
        </Wrapper>
    );
}

export default Status;