import React, { useState } from "react";
import * as styles from './StatusStepContainer.module.css'
import { useSelector } from "react-redux";
import StatusStepForm from '../StatusStepForm/StatusStepForm';
import StatusStepConfirm from '../StatusStepConfirm/StatusStepConfirm';

const StatusStepContainer = ({ ticket }) => {
    let statusStore = useSelector(state => state.status);

    const [isConfirmStatement, setIsConfirmStatement] = useState(false);

    const STATUS_COLOR_CLASSNAME = {
        'Отказано': styles.refused,
        'Принято': styles.accepted,
        'Отправлено на доработку': styles.modification
    }

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
                <div className={`${styles.in_block} ${ticket.points && styles.layout_with_points}`}>
                    <p>Заявка №{ticket.id}</p>
                    <p>{ticket.name}</p>
                    <p>{ticket.date}</p>
                    <p>{ticket.region}</p>
                    {ticket.points && <p>{ticket.points}</p>}
                    <p className={STATUS_COLOR_CLASSNAME[ticket.status]}>{ticket.status}</p>
                </div>
            </div>

            {/*ТУТ ПИСАТЬ НОВЫЕ ЭТАПЫ*/}
            {
                ticket.status !== 'Принято' &&
                <div className={styles.ticketCard}>
                    {
                        ticket.status === 'Отказано' ?
                            <div className={styles.ticketCard_cause}>
                                <h4>Причина:</h4>
                                <p>Проект не соответсвует требованиям конкурса.</p>
                            </div> : ticket.status === 'Отправлено на доработку' ?
                                <div>
                                    {isConfirmStatement ?
                                        <>
                                            <div>
                                                <h4>Комментарий администратора</h4>
                                                <p>{ticket.admin_comment.message}</p>
                                            </div>
                                            <StatusStepForm/>
                                        </>
                                        :
                                        <StatusStepConfirm ticket={ticket} setIsConfirmStatement={setIsConfirmStatement}/>
                                    }
                                </div>
                                : null
                    }
                </div>
            }
        </div>
    );
}

export default StatusStepContainer;