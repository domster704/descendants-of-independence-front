import React from "react";
import * as styles from './StatusInputID.module.css'
import { useDispatch, useSelector } from "react-redux";
import { setTicketId } from "../../../../store/statusSlice";
import { useNavigate } from "react-router-dom";

const StatusInputID = () => {
    let inputTicketIdRef = React.useRef(null);

    let navigate = useNavigate();
    let dispatch = useDispatch();
    let statusTicketId = useSelector(state => state.status.ticketId);

    const onClick = (e) => {
        e.preventDefault();

        const ticketId = parseInt(inputTicketIdRef.current?.value || 0);
        dispatch(setTicketId(ticketId));
        navigate('/status/' + ticketId);
    }

    return (
        <form onSubmit={onClick} className={styles.input_block}>
            <div className={styles.input_container}>
                <input ref={inputTicketIdRef} placeholder="Номер заявки"/>
                <button>Найти</button>
            </div>
        </form>
    );
}

export default StatusInputID;