import React, { useState } from 'react';
import { TABLE_INPUT_STYLES, UNIT_OPTIONS } from '../../Statement.constants';
import TextField from '../../../../UI/TextField/TextField';
import chevronDown from '../../../../../assets/img/chevron-down.svg';
import trash from '../../../../../assets/img/trash.svg';
import plus from '../../../../../assets/img/plus.svg';
import * as styles from './StatementDropDownBlock.module.css';
import * as statement_main_fields_styles from '../StatementMainFields/StatementMainField.module.css';

const StatementDropDownBlock = ({
                                    projectDescription,
                                    setProjectDescription,
                                    changeValue,
                                    costEstimate,
                                    setCostEstimate
                                }) => {
    const [isProjectDescriptionOpen, setIsProjectDescriptionOpen] = useState(false);
    const [isCostEstimateOpen, setIsCostEstimateOpen] = useState(false);

    const changeTableValue = (e, index) => {
        const { name, value } = e.target;

        setCostEstimate(prevState => prevState.map((item, i) => {
            if (index === i) {
                return {
                    ...item,
                    [name]: value,
                };
            }
            return item;
        }));
    };

    return (
        <div className={styles.drop_down_block_wrapper}>
            <div>
                <div
                    className={styles.drop_down_block}
                    onClick={() => setIsProjectDescriptionOpen(!isProjectDescriptionOpen)}
                >
                    <h2>Описание проекта</h2>
                    <img
                        src={chevronDown}
                        style={{ rotate: isProjectDescriptionOpen ? '180deg' : 'none' }}
                        alt="chevron-up-img"
                    />
                </div>

                {isProjectDescriptionOpen &&
                    <div
                        className={[statement_main_fields_styles.text_fields, styles.drop_down_block_text_fields].join(' ')}>
                        <div className={styles.flex_column}>
                            <TextField
                                type="textarea"
                                name="shortDescription"
                                label="Краткое описание проекта"
                                placeholder="Опишите ваш проект"
                                value={projectDescription.shortDescription}
                                onChange={changeValue}
                                required
                            />

                            <TextField
                                name="projectTasks"
                                label="Задачи проекта"
                                value={projectDescription.projectTasks}
                                onChange={changeValue}
                                required
                            />

                            <TextField
                                name="implementationTimeline"
                                label="Сроки реализации проекта"
                                value={projectDescription.implementationTimeline}
                                onChange={changeValue}
                                required
                            />

                            <TextField
                                name="projectDeliverables"
                                label="Продукт проекта"
                                value={projectDescription.projectDeliverables}
                                onChange={changeValue}
                                required
                            />

                            <TextField
                                name="preliminaryCostForecasts"
                                label="Предварительные прогнозы по стоимости реализации проекта"
                                value={projectDescription.preliminaryCostForecasts}
                                onChange={changeValue}
                                required
                            />

                            <TextField
                                type="textarea"
                                name="projectImplementationGeography"
                                label="География реализации проекта (область, города республиканского значения, столица)"
                                value={projectDescription.projectImplementationGeography}
                                onChange={changeValue}
                                required
                            />
                        </div>

                        <div className={styles.flex_column}>
                            <TextField
                                name="targetAudience"
                                label="Целевая аудитория"
                                value={projectDescription.targetAudience}
                                onChange={changeValue}
                                required
                            />

                            <TextField
                                name="projectMission"
                                label="Миссия проекта"
                                value={projectDescription.projectMission}
                                onChange={changeValue}
                                required
                            />

                            <TextField
                                name="projectJustification"
                                label="Обоснование проекта"
                                value={projectDescription.projectJustification}
                                onChange={changeValue}
                                required
                            />

                            <TextField
                                name="projectObjectivesAndSuccessCriteria"
                                label="Целевые показатели и критерии оценки успеха проекта"
                                value={projectDescription.projectObjectivesAndSuccessCriteria}
                                onChange={changeValue}
                                required
                            />

                            <TextField
                                name="projectStakeholders"
                                label="Заинтересованые стороны проекта"
                                value={projectDescription.projectStakeholders}
                                onChange={changeValue}
                                required
                            />

                            <TextField
                                name="projectConstraintsAndRisks"
                                label="Ограничения (риски) проекта"
                                value={projectDescription.projectConstraintsAndRisks}
                                onChange={changeValue}
                                required
                            />
                        </div>
                    </div>
                }
            </div>

            <div
                className={styles.drop_down_block}
                onClick={() => setIsCostEstimateOpen(!isCostEstimateOpen)}
            >
                <h2>Смета расходов</h2>
                <img
                    src={chevronDown}
                    style={{ rotate: isCostEstimateOpen ? '180deg' : 'none' }}
                    alt="chevron-up-img"
                />
            </div>

            {isCostEstimateOpen &&
                <div className={styles.drop_down_block_cost_estimate}>
                    <div className={styles.drop_down_block_cost_estimate_header}>
                        <span>№</span>
                        <span>Статья расходов</span>
                        <span>Цена за ед.</span>
                        <span>Единица измерения</span>
                        <span>Кол-во</span>
                        <span>Сумма</span>
                    </div>

                    <div className={styles.drop_down_block_cost_estimate_table}>
                        {costEstimate.map((item, index) => (
                            <div key={`${item.number}-${index}`}>
                                <div className={styles.drop_down_block_cost_estimate_table_item}>
                                    <span>
                                        {item.number}
                                    </span>
                                    <span>
                                        <TextField
                                            type="text"
                                            name="expenseItem"
                                            value={item.expenseItem}
                                            onChange={(e) => changeTableValue(e, index)}
                                            placeholder="Название"
                                            required
                                            inputStyles={{ ...TABLE_INPUT_STYLES, paddingLeft: 20 }}
                                            className={styles.drop_down_block_cost_estimate_table_item_field}
                                        />
                                    </span>
                                    <span>
                                        <TextField
                                            name="pricePerOne"
                                            value={item.pricePerOne}
                                            onChange={(e) => changeTableValue(e, index)}
                                            type="number"
                                            placeholder="0"
                                            required
                                            inputStyles={{ ...TABLE_INPUT_STYLES, textAlign: 'center' }}
                                            className={styles.drop_down_block_cost_estimate_table_item_field}
                                        />
                                    </span>
                                    <span>
                                        <TextField
                                            name="unit"
                                            type="select"
                                            options={UNIT_OPTIONS}
                                            currentOption={item.unit}
                                            onChange={(e) => changeTableValue(e, index)}
                                            placeholder="М"
                                            required
                                            inputStyles={{ ...TABLE_INPUT_STYLES, padding: '0 7px 0 15px', }}
                                            className={styles.drop_down_block_cost_estimate_table_item_field}
                                        />
                                    </span>
                                    <span>
                                        <TextField
                                            name="quantity"
                                            value={item.quantity}
                                            onChange={(e) => changeTableValue(e, index)}
                                            type="number"
                                            placeholder="0"
                                            required
                                            inputStyles={{ ...TABLE_INPUT_STYLES, textAlign: 'center' }}
                                            className={styles.drop_down_block_cost_estimate_table_item_field}
                                        />
                                    </span>
                                    <span>
                                        {parseInt(item.pricePerOne * item.quantity).toLocaleString('ru-RU')} тг
                                    </span>
                                </div>
                                {
                                    index > 0 &&
                                    <img
                                        src={trash}
                                        className={styles.drop_down_block_cost_estimate_table_item_img}
                                        onClick={() =>
                                            setCostEstimate(prevState => prevState.filter((_, i) => i !== index))}
                                        alt="trash-img"
                                    />
                                }
                            </div>
                        ))}
                        <div className={styles.drop_down_block_cost_estimate_table_result}>
                            <span>Итого</span>
                            <span>
                                        {
                                            costEstimate
                                                .reduce((acc, item) =>
                                                    acc + parseInt((item.pricePerOne * item.quantity) || 0), 0)
                                                .toLocaleString('ru-RU')
                                        } тг
                                    </span>
                        </div>
                    </div>

                    <button
                        type="button"
                        className={styles.drop_down_block_cost_estimate_plus}
                        onClick={() =>
                            setCostEstimate(prevState => [...prevState,
                                {
                                    number: prevState.length + 1,
                                    expenseItem: '',
                                    pricePerOne: '',
                                    unit: '',
                                    quantity: '',
                                    summary: ''
                                },
                            ])
                        }
                    >
                        <img src={plus} alt="plus-img"/>
                    </button>

                    <div className={styles.drop_down_block_cost_estimate_note}>
                        <h2>Примечание</h2>
                        <p>Для целевого использования средств гранта грантополучателю не предусматривается
                            заработная плата</p>
                    </div>
                </div>
            }
        </div>
    );
};

export default StatementDropDownBlock;
