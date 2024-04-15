import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsFormError } from '../../../../../store/envSlice';
import { getRegularOrErrorDropZoneBorderUrl, MAX_MEGABYTES } from '../../Statement.constants';
import Dropzone from 'react-dropzone';
import cloud from '../../../../../assets/img/cloud.svg';
import trash from '../../../../../assets/img/trash.svg';
import * as styles from './StatementDropzone.module.css';
import * as statement_styles from '../../Statement.module.css';
import { useTranslation } from 'react-i18next';

const StatementDropzone = ({ state, setState }) => {
    const { t } = useTranslation('statement');

    const dispatch = useDispatch();
    const { isFormError } = useSelector(state => state.env);

    const [isDragOver, setIsDragOver] = useState(false);

    const [percentageOfMaximum, setPercentageOfMaximum] = useState(0);
    const [filesMegabytes, setFilesMegabytes] = useState(0);

    useEffect(() => {
        if (typeof state.files_path[0] === 'string') return;
        const megabytes = Math.round(state.files_path
            .reduce((acc, file) => acc + file.size / (1024 * 1024), 0) * 10) / 10;

        setFilesMegabytes(megabytes);
        setPercentageOfMaximum(megabytes / MAX_MEGABYTES * 100);
    }, [state.files_path]);

    return (
        <div>
            <Dropzone
                accept={{ 'application/pdf': ['.pdf'], 'video/mp4': ['.mp4'] }}
                onDrop={acceptedFiles => {
                    if (state.files_path.length < 2) {
                        setState(prevState => ({
                            ...prevState, files_path: [...prevState.files_path, ...acceptedFiles],
                        }));
                        dispatch(setIsFormError(false));
                    }
                    setIsDragOver(false);
                }}
                onDragOver={() => !isDragOver && setIsDragOver(true)}
                onDragLeave={() => isDragOver && setIsDragOver(false)}
            >
                {({ getRootProps, getInputProps }) => (
                    <section>
                        <div
                            {...getRootProps()}
                            className={styles.drop_zone}
                            style={{
                                backgroundImage: `url("${getRegularOrErrorDropZoneBorderUrl(!state.files_path.length && isFormError)}")`,
                            }}
                        >
                            {isDragOver && <div className={styles.drop_zone_over}></div>}
                            <input {...getInputProps()} />
                            <div className={styles.drop_zone_content}>
                                <h2>{t('drop_zone_title')}</h2>
                                <img src={cloud} alt='cloud-img' />
                                <p>{t('drop_zone_description')}</p>
                                <button
                                    type='button'
                                    className={[statement_styles.upload_file_button, styles.upload_file_button].join(' ')}
                                >
                                    {t('drop_zone_button')}
                                </button>

                                {
                                    state ?
                                        typeof state.files_path[0] === 'string' ?
                                            <div>files_path</div>
                                            : <div className={styles.files} onClick={(e) => e.stopPropagation()}>
                                                {state.files_path.map((file, index) =>
                                                    <div key={`file-${index + 1}`}>
                                                        <p>{
                                                            file.name.length > 25 ?
                                                                file.name.substring(0, 26) + '...' + file.name.substring(file.name.length - 4)
                                                                : file.name
                                                        }</p>
                                                        <img
                                                            src={trash}
                                                            onClick={() => setState(prevState => ({
                                                                ...prevState,
                                                                files_path: prevState.files_path.filter((_, i) => index !== i),
                                                            }))}
                                                            alt='trash-img'
                                                        />
                                                    </div>,
                                                )}
                                            </div> : null
                                }

                            </div>
                        </div>
                    </section>
                )}
            </Dropzone>

            {
                (state && typeof state.files_path[0] !== 'string') &&
                <div className={styles.files_description}>
                    <div className={styles.files_info}>
                        <p>{t('drop_zone_info')}: <span>{state.files_path.length}{t('drop_zone_info_end')}</span></p>
                        <div className={styles.size_indicator_wrapper}>
                            <p>{files_pathMegabytes} МБ</p>
                            <div className={styles.size_indicator}>
                                <div
                                    className={styles.size_indicator_filler}
                                    style={{ width: percentageOfMaximum + '%' }}
                                ></div>
                            </div>
                            <p>{MAX_MEGABYTES} МБ</p>
                        </div>
                        <p>mp4, pdf.</p>
                    </div>

                    <ul className={styles.files_info_list}>
                        <li>{t('drop_zone_info_list_one')}</li>
                        <li dangerouslySetInnerHTML={{ __html: t('drop_zone_info_list_two') }} />
                        <li dangerouslySetInnerHTML={{ __html: t('drop_zone_info_list_three') }} />
                    </ul>
                </div>
            }
        </div>
    );
};

export default StatementDropzone;
