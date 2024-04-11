import React from "react";
import * as styles from './StatusStepContainer.module.css'
import {useSelector} from "react-redux";

const StatusStepContainer = ({ticket}) => {
    let statusStore = useSelector(state => state.status);

    const STATUS_COLOR_CLASSNAME = {
        'Отказано': styles.refused,
        'Принято': styles.accepted,
        'Отправлено на доработку': styles.modification
    }

    return (
        <div>
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
            <div className={styles.ticketCard}>
                <p>Проект не соответсвует требованиям конкурса.</p>
            </div>
        </div>
    );
}

export default StatusStepContainer;