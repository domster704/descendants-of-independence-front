import React, { useEffect, useState } from 'react';
import * as styles from './StatusStepContainer.module.css';
import { useDispatch, useSelector } from 'react-redux';
import StatusStepForm from '../StatusStepForm/StatusStepForm';
import StatusStepConfirm from '../StatusStepConfirm/StatusStepConfirm';
import { fetchStatuses } from '../../../../store/statusThunk';

const StatusStepContainer = ({ ticket }) => {
    const dispatch = useDispatch();

    let statusStore = useSelector(state => state.status);

    const [isConfirmStatement, setIsConfirmStatement] = useState(false);

    useEffect(() => {
        if (ticket && typeof ticket.status === 'number') {
            dispatch(fetchStatuses());
        }
    }, [dispatch, ticket]);

    const STATUS_COLOR_CLASSNAME = {
        'Отказано': styles.refused,
        'Принято': styles.accepted,
        'Отправлено на доработку': styles.modification,
        'В ожидании действий': styles.pending,
    };

    return (
        <div className={styles.status_step_container}>
            <div className={`${styles.ticket_header_table}`}>
                <div className={`${styles.out_block} ${ticket.points && styles.layout_with_points}`}>
                    <p>Номер заявки</p>
                    <p>ФИО</p>
                    <p>Дата</p>
                    <p>Регион</p>
                    {ticket.points && <p>Кол-во б.</p>}
                    {/*Статус*/}
                    <p></p>
                </div>
                <div className={`${styles.in_block} ${ticket.point && styles.layout_with_points}`}>
                    <p>Заявка №{ticket.id}</p>
                    <p>{ticket.full_name}</p>
                    <p>{ticket.date}</p>
                    <p>{ticket.address_region.label}</p>
                    {ticket.point && <p>{ticket.point}/10 б.</p>}
                    <p className={STATUS_COLOR_CLASSNAME[ticket.status]}>{ticket.status}</p>
                </div>
            </div>

            {
                ticket.status !== 'Принято' && ticket.status !== 'В ожидании действий' &&
                <div className={styles.ticketCard}>
                    {
                        ticket.status === 'Отказано' ?
                            <div className={styles.ticketCard_cause}>
                                <h4>Причина:</h4>
                                <p>{ticket.comment}</p>
                            </div> : ticket.status === 'Отправлено на доработку' ?
                                <div>
                                    {isConfirmStatement ?
                                        <>
                                            <div>
                                                <h4>Комментарий администратора</h4>
                                                <p>{ticket.comment}</p>
                                            </div>
                                            <StatusStepForm />
                                        </>
                                        :
                                        <StatusStepConfirm ticket={ticket} setIsConfirmStatement={setIsConfirmStatement} />
                                    }
                                </div>
                                : null
                    }
                </div>
            }
        </div>
    );
};

export default StatusStepContainer;