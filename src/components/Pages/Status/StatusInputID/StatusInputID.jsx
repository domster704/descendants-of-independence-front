import React, { useEffect, useState } from 'react';
import * as styles from './StatusInputID.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const StatusInputID = () => {
    const params = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [id, setId] = useState('');

    useEffect(() => {
        if (params['*']) {
            setId(params['*']);
        }
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();

        navigate(id);
    };

    return (
        <form onSubmit={onSubmit} className={styles.input_block}>
            <div className={styles.input_container}>
                <input
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder='Номер заявки'
                />
                <button>Найти</button>
            </div>
        </form>
    );
};

export default StatusInputID;