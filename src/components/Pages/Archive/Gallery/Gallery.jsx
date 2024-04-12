import React, { useEffect } from 'react';
import * as styles from './Gallery.module.css';
import Wrapper from '../../../UI/Wrapper/Wrapper';
import GalleryElement from './GalleryElement/GalleryElement';
import ArrowButton from '../../../UI/ArrowButton/ArrowButton';

import gallery1 from './img/gallery1.png';
import gallery4 from './img/gallery4.png';
import gallery2 from './img/gallery2.png';
import gallery3 from './img/gallery3.png';
import * as constants from './Gallery.constants';
import TextField from '../../../UI/TextField/TextField';

import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentOption } from '../../../../store/gallerySlice';

const Gallery = () => {
    const { t } = useTranslation('archive');

    const dispatch = useDispatch();
    const galleryStore = useSelector(state => state.gallery);

    const galleryListRef = React.useRef(null);

    // const [galleryList, setGalleryList] = React.useState([]);
    //
    // useEffect(() => {
    //     setGalleryList([{
    //         img: gallery1,
    //         description: t('gallery1'),
    //     }, {
    //         img: gallery2,
    //         description: t('gallery2'),
    //     }, {
    //         img: gallery3,
    //         description: t('gallery3'),
    //     }, {
    //         img: gallery4,
    //         description: t('gallery4'),
    //     }, {
    //         img: gallery4,
    //         description: t('gallery4'),
    //     }, {
    //         img: gallery4,
    //         description: t('gallery4'),
    //     }])
    // }, [t])

    const galleryOptions = useSelector(state => state.gallery);

    const dropdownTextField = (
        <TextField type="select"
                   name="gallery"
                   options={galleryOptions.dropdownOptions}
                   currentOption={galleryOptions.currentOption}
                   onChange={(e) => dispatch(setCurrentOption(e.target.value))}
        />
    );

    console.log()

    return (
        <div className={styles.gallery}>
            <Wrapper>
                <div className={styles.dropdown_list_mobile}>{dropdownTextField}</div>
                <div className={styles.header_mobile}>
                    <h1>{t('gallery')}</h1>
                    <div className={styles.gallery_list_arrows}>
                        <ArrowButton size="large"
                                     onClick={() => {
                                         galleryListRef.current.scroll({
                                             left: galleryListRef.current.scrollLeft - constants.GALLERY_ELEMENT_WITH_GAP_WIDTH_PX,
                                             behavior: 'smooth',
                                         });
                                     }}/>
                        <ArrowButton size="large"
                                     direction="right"
                                     onClick={() => {
                                         galleryListRef.current.scroll({
                                             left: galleryListRef.current.scrollLeft + constants.GALLERY_ELEMENT_WITH_GAP_WIDTH_PX,
                                             behavior: 'smooth',
                                         });
                                     }}/>
                    </div>
                </div>
                <div className={styles.dropdown_list_desktop}>{dropdownTextField}</div>
                <div className={styles.gallery_list_block}>
                    <div ref={galleryListRef} className={styles.gallery_list}>
                        {
                            galleryStore.galleryList.map((item, index) => {
                                if (galleryOptions.currentOption.value !== 'all' && galleryOptions.currentOption.value !== item.type) {
                                    return null;
                                }
                                return (
                                    <GalleryElement
                                        key={index}
                                        type={item.type}
                                        img={item.img}
                                        description={item.description}
                                        link={item?.link}
                                    />
                                )
                            })
                        }
                    </div>
                    <div className={styles.gallery_list_arrows}>
                        <ArrowButton size="large"
                                     onClick={() => {
                                         galleryListRef.current.scroll({
                                             left: galleryListRef.current.scrollLeft - constants.GALLERY_ELEMENT_WITH_GAP_WIDTH_PX,
                                             behavior: 'smooth',
                                         });
                                     }}/>
                        <ArrowButton size="large"
                                     direction="right"
                                     onClick={() => {
                                         galleryListRef.current.scroll({
                                             left: galleryListRef.current.scrollLeft + constants.GALLERY_ELEMENT_WITH_GAP_WIDTH_PX,
                                             behavior: 'smooth',
                                         });
                                     }}/>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
}

export default Gallery;