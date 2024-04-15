import React, { useState } from 'react';
import { TABLE_INPUT_STYLES, UNIT_OPTIONS } from '../../Statement.constants';
import TextField from '../../../../UI/TextField/TextField';
import chevronDown from '../../../../../assets/img/chevron-down.svg';
import trash from '../../../../../assets/img/trash.svg';
import plus from '../../../../../assets/img/plus.svg';
import * as styles from './StatementDropdownBlock.module.css';
import * as statement_main_fields_styles from '../StatementMainFields/StatementMainField.module.css';
import { useTranslation } from 'react-i18next';

const StatementDropdownBlock = ({
                                    projectDescription,
                                    setProjectDescription,
                                    changeValue,
                                    costEstimate,
                                    setCostEstimate,
                                }) => {
    const { t } = useTranslation('statement');

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
                    <h2>{t('project_description')}</h2>
                    <img
                        src={chevronDown}
                        style={{ rotate: isProjectDescriptionOpen ? '180deg' : 'none' }}
                        alt='chevron-up-img'
                    />
                </div>

                {isProjectDescriptionOpen &&
                    <div
                        className={[statement_main_fields_styles.text_fields, styles.drop_down_block_text_fields].join(' ')}>
                        <div className={styles.flex_column}>
                            <TextField
                                type='textarea'
                                name='short_description'
                                label={t('short_description')}
                                placeholder={t('short_description_placeholder')}
                                value={projectDescription.short_description}
                                onChange={changeValue}
                                required
                            />

                            <TextField
                                name='project_tasks'
                                label={t('project_tasks')}
                                value={projectDescription.project_tasks}
                                onChange={changeValue}
                                required
                            />

                            <TextField
                                name='implementation_timeline'
                                label={t('implementation_timeline')}
                                value={projectDescription.implementation_timeline}
                                onChange={changeValue}
                                required
                            />

                            <TextField
                                name='project_deliverables'
                                label={t('project_deliverables')}
                                value={projectDescription.project_deliverables}
                                onChange={changeValue}
                                required
                            />

                            <TextField
                                name='preliminary_cost_forecasts'
                                label={t('preliminary_cost_forecasts')}
                                value={projectDescription.preliminary_cost_forecasts}
                                onChange={changeValue}
                                required
                            />

                            <TextField
                                type='textarea'
                                name='project_implementation_geography'
                                label={t('project_implementation_geography')}
                                value={projectDescription.project_implementation_geography}
                                onChange={changeValue}
                                required
                            />
                        </div>

                        <div className={styles.flex_column}>
                            <TextField
                                name='target_audience'
                                label={t('target_audience')}
                                value={projectDescription.target_audience}
                                onChange={changeValue}
                                required
                            />

                            <TextField
                                name='project_mission'
                                label={t('project_mission')}
                                value={projectDescription.project_mission}
                                onChange={changeValue}
                                required
                            />

                            <TextField
                                name='project_justification'
                                label={t('project_justification')}
                                value={projectDescription.project_justification}
                                onChange={changeValue}
                                required
                            />

                            <TextField
                                name='project_objectives_and_success_criteria'
                                label={t('project_objectives_and_success_criteria')}
                                value={projectDescription.project_objectives_and_success_criteria}
                                onChange={changeValue}
                                required
                            />

                            <TextField
                                name='project_stakeholders'
                                label={t('project_stakeholders')}
                                value={projectDescription.project_stakeholders}
                                onChange={changeValue}
                                required
                            />

                            <TextField
                                name='project_constraints_and_risks'
                                label={t('project_constraints_and_risks')}
                                value={projectDescription.project_constraints_and_risks}
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
                <h2>{t('cost_estimate')}</h2>
                <img
                    src={chevronDown}
                    style={{ rotate: isCostEstimateOpen ? '180deg' : 'none' }}
                    alt='chevron-up-img'
                />
            </div>

            {isCostEstimateOpen &&
                <div className={styles.drop_down_block_cost_estimate}>
                    <div className={styles.drop_down_block_cost_estimate_table_wrapper}>
                        <div className={styles.drop_down_block_cost_estimate_table_scroll_wrapper}>
                            <div className={styles.drop_down_block_cost_estimate_header}>
                                <span>№</span>
                                <span>{t('expense_item')}</span>
                                <span>{t('price_per_one')}</span>
                                <span>{t('unit')}</span>
                                <span>{t('quantity')}</span>
                                <span>{t('total')}</span>
                            </div>

                            <div className={styles.drop_down_block_cost_estimate_table}>
                                {costEstimate.map((item, index) => (
                                    <div key={`${item.number}-${index}`}>
                                        <div className={styles.drop_down_block_cost_estimate_table_item}>
                                    <span>
                                        {index + 1}
                                    </span>
                                            <span>
                                        <TextField
                                            type='text'
                                            name='expense_item'
                                            value={item.expense_item}
                                            onChange={(e) => changeTableValue(e, index)}
                                            placeholder={t('expense_item_placeholder')}
                                            required
                                            inputStyles={{ ...TABLE_INPUT_STYLES, paddingLeft: 20 }}
                                            className={styles.drop_down_block_cost_estimate_table_item_field}
                                        />
                                    </span>
                                            <span>
                                        <TextField
                                            name='price_per_one'
                                            value={item.price_per_one}
                                            onChange={(e) => changeTableValue(e, index)}
                                            type='number'
                                            placeholder='0'
                                            required
                                            inputStyles={{ ...TABLE_INPUT_STYLES, textAlign: 'center' }}
                                            className={styles.drop_down_block_cost_estimate_table_item_field}
                                        />
                                    </span>
                                            <span>
                                        <TextField
                                            name='unit'
                                            type='select'
                                            options={UNIT_OPTIONS}
                                            currentOption={item.unit}
                                            onChange={(e) => changeTableValue(e, index)}
                                            placeholder='М'
                                            required
                                            inputStyles={{ ...TABLE_INPUT_STYLES, padding: '0 7px 0 15px' }}
                                            className={styles.drop_down_block_cost_estimate_table_item_field}
                                        />
                                    </span>
                                            <span>
                                        <TextField
                                            name='quantity'
                                            value={item.quantity}
                                            onChange={(e) => changeTableValue(e, index)}
                                            type='number'
                                            placeholder='0'
                                            required
                                            inputStyles={{ ...TABLE_INPUT_STYLES, textAlign: 'center' }}
                                            className={styles.drop_down_block_cost_estimate_table_item_field}
                                        />
                                    </span>
                                            <span>
                                        {parseInt(item.price_per_one * item.quantity).toLocaleString('ru-RU')} тг
                                    </span>
                                        </div>
                                        {
                                            index > 0 &&
                                            <img
                                                src={trash}
                                                className={styles.drop_down_block_cost_estimate_table_item_img}
                                                onClick={() =>
                                                    setCostEstimate(prevState => prevState.filter((_, i) => i !== index))}
                                                alt='trash-img'
                                            />
                                        }
                                    </div>
                                ))}
                                <div className={styles.drop_down_block_cost_estimate_table_result}>
                                    <span>{t('result')}</span>
                                    <span>
                                        {
                                            costEstimate
                                                .reduce((acc, item) =>
                                                    acc + parseInt((item.price_per_one * item.quantity) || 0), 0)
                                                .toLocaleString('ru-RU')
                                        } тг
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button
                        type='button'
                        className={styles.drop_down_block_cost_estimate_plus}
                        onClick={() =>
                            setCostEstimate(prevState => [...prevState,
                                {
                                    expense_item: '',
                                    price_per_one: '',
                                    unit: '',
                                    quantity: '',
                                },
                            ])
                        }
                    >
                        <img src={plus} alt='plus-img' />
                    </button>

                    <div className={styles.drop_down_block_cost_estimate_note}>
                        <h2>{t('note')}</h2>
                        <p>{t('note_description')}</p>
                    </div>
                </div>
            }
        </div>
    );
};

export default StatementDropdownBlock;
