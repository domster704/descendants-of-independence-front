import React from 'react';
import { COST_ESTIMATE_INITIAL_STATE, PROJECT_DESCRIPTION_INITIAL_STATE } from '../Statement.constants';
import TextField from '../../../UI/TextField/TextField';
import chevronDown from '../../../../assets/img/chevron-down.svg';
import trash from '../../../../assets/img/trash.svg';
import plus from '../../../../assets/img/plus.svg';
import * as styles from '../Statement.module.css';

const StatementDropDownBlock = ({
                                    projectDescription,
                                    setProjectDescription,
                                    changeValue,
                                    costEstimate,
                                    setCostEstimate
                                }) => {
    return (
        <div className={styles.drop_down_block_wrapper}>
            <div>
                <div
                    className={styles.drop_down_block}
                    onClick={() =>
                        setProjectDescription(projectDescription ? null : PROJECT_DESCRIPTION_INITIAL_STATE)
                    }
                >
                    <h2>Описание проекта</h2>
                    <img
                        src={chevronDown}
                        style={{ rotate: projectDescription ? '180deg' : 'none' }}
                        alt="chevron-up-img"
                    />
                </div>

                {projectDescription &&
                    <div className={[styles.text_fields, styles.drop_down_block_text_fields].join(' ')}>
                        <div className={styles.flex_column}>
                            <TextField
                                type="textarea"
                                name="shortDescription"
                                label="Краткое описание проекта"
                                placeholder="Опишите ваш проект"
                                value={projectDescription.shortDescription}
                                onChange={changeValue}
                            />

                            <TextField
                                name="projectTasks"
                                label="Задачи проекта"
                                value={projectDescription.projectTasks}
                                onChange={changeValue}
                            />

                            <TextField
                                name="implementationTimeline"
                                label="Сроки реализации проекта"
                                value={projectDescription.implementationTimeline}
                                onChange={changeValue}
                            />

                            <TextField
                                name="projectDeliverables"
                                label="Продукт проекта"
                                value={projectDescription.projectDeliverables}
                                onChange={changeValue}
                            />

                            <TextField
                                name="preliminaryCostForecasts"
                                label="Предварительные прогнозы по стоимости реализации проекта"
                                value={projectDescription.preliminaryCostForecasts}
                                onChange={changeValue}
                            />

                            <TextField
                                type="textarea"
                                name="projectImplementationGeography"
                                label="География реализации проекта (область, города республиканского значения, столица)"
                                value={projectDescription.projectImplementationGeography}
                                onChange={changeValue}
                            />
                        </div>

                        <div className={styles.flex_column}>
                            <TextField
                                name="targetAudience"
                                label="Целевая аудитория"
                                value={projectDescription.targetAudience}
                                onChange={changeValue}
                            />

                            <TextField
                                name="projectMission"
                                label="Миссия проекта"
                                value={projectDescription.projectMission}
                                onChange={changeValue}
                            />

                            <TextField
                                name="projectJustification"
                                label="Обоснование проекта"
                                value={projectDescription.projectJustification}
                                onChange={changeValue}
                            />

                            <TextField
                                name="projectObjectivesAndSuccessCriteria"
                                label="Целевые показатели и критерии оценки успеха проекта"
                                value={projectDescription.projectObjectivesAndSuccessCriteria}
                                onChange={changeValue}
                            />

                            <TextField
                                name="projectStakeholders"
                                label="Заинтересованые стороны проекта"
                                value={projectDescription.projectStakeholders}
                                onChange={changeValue}
                            />

                            <TextField
                                name="projectConstraintsAndRisks"
                                label="Ограничения (риски) проекта"
                                value={projectDescription.projectConstraintsAndRisks}
                                onChange={changeValue}
                            />
                        </div>
                    </div>
                }
            </div>

            <div
                className={styles.drop_down_block}
                onClick={() =>
                    setCostEstimate(costEstimate ? null : COST_ESTIMATE_INITIAL_STATE)}
            >
                <h2>Смета расходов</h2>
                <img
                    src={chevronDown}
                    style={{ rotate: costEstimate ? '180deg' : 'none' }}
                    alt="chevron-up-img"
                />
            </div>

            {costEstimate &&
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
                                    <span>{item.number}</span>
                                    <span>{item.expenseItem}</span>
                                    <span>{item.pricePerOne}</span>
                                    <span>{item.unit} <img src={chevronDown} alt="chevron-img"/></span>
                                    <span>{item.quantity}</span>
                                    <span>{parseInt(item.summary).toLocaleString('ru-RU')} тг</span>
                                </div>
                                <img
                                    src={trash}
                                    className={styles.drop_down_block_cost_estimate_table_item_img}
                                    onClick={() =>
                                        setCostEstimate(prevState => prevState.filter((_, i) => i !== index))}
                                    alt="trash-img"
                                />
                            </div>
                        ))}
                        <div className={styles.drop_down_block_cost_estimate_table_result}>
                            <span>Итого</span>
                            <span>
                                        {
                                            costEstimate
                                                .reduce((acc, item) =>
                                                    acc + parseInt(item.summary), 0)
                                                .toLocaleString('ru-RU')
                                        } тг
                                    </span>
                        </div>
                    </div>

                    <button type="button" className={styles.drop_down_block_cost_estimate_plus}>
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