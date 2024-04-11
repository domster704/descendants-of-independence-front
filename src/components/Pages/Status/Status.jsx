import React, { useEffect } from "react";
import * as styles from './Status.module.css'
import Wrapper from "../../UI/Wrapper/Wrapper";
import StatusInputID from "./StatusInputID/StatusInputID";
import StatusStepContainer from "./StatusStepContainer/StatusStepContainer";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { setTicketId } from '../../../store/statusSlice';
import { useTranslation } from "react-i18next";


const Status = () => {
    const {t} = useTranslation('status')
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
                <h1>{ t("heading")}</h1>
                <p>{ t("description")}</p>
                <StatusInputID/>
                {
                    statusStore.tickets[statusStore.ticketId] ?
                        <StatusStepContainer ticket={statusStore.tickets[statusStore.ticketId]}/>
                        : statusStore.ticketId !== null ? <p>{ t("noResultsMessage")}</p> : null
                }
            </div>
        </Wrapper>
    );
}

export default Status;