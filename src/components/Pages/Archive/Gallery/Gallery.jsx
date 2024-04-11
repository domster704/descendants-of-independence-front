import React, { useEffect } from 'react';
import * as styles from './Gallery.module.css';
import Wrapper from "../../../UI/Wrapper/Wrapper";
import GalleryElement from "./GalleryElement/GalleryElement";
import ArrowButton from "../../../UI/ArrowButton/ArrowButton";

import gallery1 from "./img/gallery1.png";
import gallery4 from "./img/gallery4.png";
import gallery2 from "./img/gallery2.png";
import gallery3 from "./img/gallery3.png";
import * as constants from "./Gallery.constants";
import TextField from "../../../UI/TextField/TextField";


import { useTranslation } from "react-i18next";
import {useSelector} from "react-redux";

const Gallery = () => {
  const { t } = useTranslation("archive");
    let galleryListRef = React.useRef(null);

    let [galleryList, setGalleryList] = React.useState([{
        img: gallery1,
        description: t('gallery1'),
    }, {
        img: gallery2,
        description: t('gallery2')
    }, {
        img: gallery3,
        description: t('gallery3')
    }, {
        img: gallery4,
        description: t('gallery4')
    }, {
        img: gallery4,
        description: t('gallery4')
    }, {
        img: gallery4,
        description: t('gallery4')
    }]);

    useEffect(() => {
        setGalleryList([{
            img: gallery1,
            description: t('gallery1'),
        }, {
            img: gallery2,
            description: t('gallery2')
        }, {
            img: gallery3,
            description: t('gallery3')
        }, {
            img: gallery4,
            description: t('gallery4')
        }, {
            img: gallery4,
            description: t('gallery4')
        }, {
            img: gallery4,
            description: t('gallery4')
        }])
    }, [t])

    let galleryOptions = useSelector(state => state.gallery);
    let dropdownTextField = <TextField type="select"
                                       name="gallery"
                                       options={galleryOptions.dropdownOptions}
                                       currentOption={galleryOptions.default.label}
    onChange={(event) => {
        console.log(event.target.value);
    }}/>

    return (
        <div className={styles.gallery}>
            <Wrapper>
                <div className={styles.dropdown_list_mobile}>{dropdownTextField}</div>
                <div className={styles.header_mobile}>
                    <h1>{ t('gallery')}</h1>
                    <div className={styles.gallery_list_arrows}>
                        <ArrowButton size="large"
                                     onClick={() => {
                                         galleryListRef.current.scroll({
                                             left: galleryListRef.current.scrollLeft - constants.GALLERY_ELEMENT_WITH_GAP_WIDTH_PX,
                                             behavior: "smooth"
                                         });
                                     }}/>
                        <ArrowButton size="large"
                                     direction="right"
                                     onClick={() => {
                                         galleryListRef.current.scroll({
                                             left: galleryListRef.current.scrollLeft + constants.GALLERY_ELEMENT_WITH_GAP_WIDTH_PX,
                                             behavior: "smooth"
                                         });
                                     }}/>
                    </div>
                </div>
                <div className={styles.dropdown_list_desktop}>{dropdownTextField}</div>
                <div className={styles.gallery_list_block}>
                    <div ref={galleryListRef} className={styles.gallery_list}>
                        {
                            galleryList.map((item, index) => {
                                return (
                                    <GalleryElement
                                        key={index}
                                        img={item.img}
                                        description={item.description}
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
                                             behavior: "smooth"
                                         });
                                     }}/>
                        <ArrowButton size="large"
                                     direction="right"
                                     onClick={() => {
                                         galleryListRef.current.scroll({
                                             left: galleryListRef.current.scrollLeft + constants.GALLERY_ELEMENT_WITH_GAP_WIDTH_PX,
                                             behavior: "smooth"
                                         });
                                     }}/>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
}

export default Gallery;