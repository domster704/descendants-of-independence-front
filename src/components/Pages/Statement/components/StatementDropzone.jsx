import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsFormError } from '../../../../store/envSlice';
import { getRegularOrErrorDropZoneBorderUrl, MAX_MEGABYTES } from '../Statement.constants';
import Dropzone from 'react-dropzone';
import cloud from '../../../../assets/img/cloud.svg';
import trash from '../../../../assets/img/trash.svg';
import * as styles from '../Statement.module.css';

const StatementDropzone = ({ state, setState }) => {
    const dispatch = useDispatch();
    const { isFormError } = useSelector(state => state.env);

    const [filesMegabytes, setFilesMegabytes] = useState(0);

    useEffect(() => {
        setFilesMegabytes(parseInt((state.files
            .reduce((acc, file) => acc + file.size / (1024 * 1024), 0) / MAX_MEGABYTES) * 100));
    }, [state.files]);

    return (
        <div>

            <Dropzone
                accept={{ 'application/pdf': ['.pdf'], 'video/mp4': ['.mp4'] }}
                onDrop={acceptedFiles =>
                    setState(prevState => ({
                        ...prevState, files: [...prevState.files, ...acceptedFiles]
                    })) + dispatch(setIsFormError(false))}
            >
                {({ getRootProps, getInputProps }) => (
                    <section>
                        <div
                            {...getRootProps()}
                            className={styles.drop_zone}
                            style={{
                                backgroundImage: `url("${getRegularOrErrorDropZoneBorderUrl(!state.files.length && isFormError)}")`
                            }}
                        >
                            <input {...getInputProps()} />
                            <div className={styles.drop_zone_content}>
                                <h2>Загрузите файл</h2>
                                <img src={cloud} alt="cloud-img"/>
                                <p>Перетащите файлы для загрузки или щелкните</p>
                                <button type="button" className={styles.upload_file_button}>Загрузить</button>

                                <div className={styles.files} onClick={(e) => e.stopPropagation()}>
                                    {state.files.map((file, index) =>
                                        <div key={`file-${index + 1}`}>
                                            <p>
                                                {file.name.length > 30 ? file.name.substring(0, 27) + '..' + file.name.substring(file.name.length - 4) : file.name}
                                            </p>
                                            <img
                                                src={trash}
                                                onClick={() => setState(prevState => ({
                                                    ...prevState,
                                                    files: prevState.files.filter((_, i) => index !== i)
                                                }))}
                                                alt="trash-img"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>
                )}
            </Dropzone>

            <div className={styles.files_description}>
                <div className={styles.files_info}>
                    <p>Загружено: {state.files.length}</p>
                    <div className={styles.size_indicator}>
                        <div
                            className={styles.size_indicator_filler}
                            style={{
                                transition: 'width 250ms ease-in-out',
                                width: filesMegabytes + '%'
                            }}
                        ></div>
                    </div>
                    <p>mp4, pdf.</p>
                </div>

                <ul className={styles.files_info_list}>
                    <li>Уд.личности/свд.о рожд. лецевая и обратная сторона одним файлом.</li>
                    <li>Максимальный размер файлов <b>50 МБ</b> / видео до <b>1 мин</b></li>
                    <li>Презентация не более <strong>10 слайдов</strong></li>
                </ul>
            </div>
        </div>
    );
};

export default StatementDropzone;
