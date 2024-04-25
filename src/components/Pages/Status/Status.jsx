import React, { useEffect } from 'react';
import * as styles from './Status.module.css';
import Wrapper from '../../UI/Wrapper/Wrapper';
import StatusInputID from './StatusInputID/StatusInputID';
import StatusStepContainer from './StatusStepContainer/StatusStepContainer';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { fetchApplicationsById } from '../../../store/applicationThunk';
import {setTicket} from "../../../store/statusSlice";


const Status = () => {
    const { t } = useTranslation('status');
    const dispatch = useDispatch();
    let statusStore = useSelector(state => state.status);

    const params = useParams();

    useEffect(() => {
        if (params['*']) {
            dispatch(fetchApplicationsById(params['*']));
        }

        return () => {
            dispatch(setTicket(null));
        }
    }, [dispatch, params['*']]);

    useEffect(() => {
        const element = document.documentElement;
        element.scrollIntoView({ behavior: "instant", block: "start" });
  }, []);

    return (
        <Wrapper className={styles.status_wrapper}>
            <div className={styles.status}>
                <h1>{t('heading')}</h1>
                <p>{t('description')}</p>
                <StatusInputID />
                {
                    statusStore.ticket ?
                        <StatusStepContainer ticket={statusStore.ticket} />
                        : params['*'] && <p>{t('noResultsMessage')}</p>
                }
            </div>
        </Wrapper>
    );
};

export default Status;