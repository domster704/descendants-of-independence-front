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

    const onClick = () => {
        const ticketId = parseInt(inputTicketIdRef.current?.value || 0);
        dispatch(setTicketId(ticketId));
        navigate('/status/' + ticketId);
    }

    return (
        <form className={styles.input_block}>
            <div className={styles.input_container}>
                <input ref={inputTicketIdRef} placeholder="Номер заявки"/>
                <button onClick={onClick}>Найти</button>
            </div>
        </form>
    );
}

export default StatusInputID;