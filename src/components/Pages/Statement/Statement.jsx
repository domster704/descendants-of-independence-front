import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsFormError } from '../../../store/envSlice';
import { INITIAL_STATE } from './Statement.constants';
import StatementDropDownBlock from './components/StatementDropDownBlock';
import StatementDropzone from './components/StatementDropzone';
import StatementMainFields from './components/StatementMainFields';
import * as styles from './Statement.module.css';

const Statement = () => {
    const dispatch = useDispatch();
    const { isFormError } = useSelector(state => state.env);

    const [state, setState] = useState(INITIAL_STATE);
    const [projectDescription, setProjectDescription] = useState(null);
    const [costEstimate, setCostEstimate] = useState(null);

    useEffect(() => {
        return () => {
            dispatch(setIsFormError(false));
        };
    }, [dispatch]);

    const changeValue = (e) => {
        const { name, value } = e.target;

        if (projectDescription !== null && Object.keys(projectDescription).includes(name)) {
            setProjectDescription((prevState) => ({ ...prevState, [name]: value }));
            return;
        }

        if (name.includes('[')) {
            let parts = name.split('[');
            let firstPart = parts[0];
            let secondPart = parts[1].slice(0, -1);

            setState((prevState) => ({ ...prevState, [firstPart]: { ...prevState[firstPart], [secondPart]: value } }));
            return;
        }

        setState((prevState) => ({ ...prevState, [name]: value }));
    };

    const sendData = (e) => {
        e.preventDefault();

        const isStateValid = (obj) => {
            for (const key in obj) {
                if (Array.isArray(obj[key])) {
                    if (obj[key].length === 0) return false;
                } else if (typeof obj[key] === 'object' && obj[key] !== null) {
                    if (!isStateValid(obj[key])) return false;
                } else if (obj[key] === '') return false;
            }
            return true;
        };

        if (!isStateValid(state)) {
            dispatch(setIsFormError(true));
            return;
        }

        // Request code...
    };

    return (
        <div className={styles.statement}>
            <div className={styles.title}>
                <h1>ЗАЯВКА</h1>
                <p>для участия в конкурсе</p>
            </div>

            <form onSubmit={sendData} className={styles.form}>
                <StatementMainFields
                    state={state}
                    changeValue={changeValue}
                />

                <StatementDropDownBlock
                    projectDescription={projectDescription}
                    setProjectDescription={setProjectDescription}
                    changeValue={changeValue}
                    costEstimate={costEstimate}
                    setCostEstimate={setCostEstimate}
                />

                <StatementDropzone
                    state={state}
                    setState={setState}
                />

                <div style={{ textAlign: 'end' }}>
                    <button className={styles.submit_button}>Подать заявку</button>
                </div>
            </form>
        </div>
    );
};

export default Statement;
