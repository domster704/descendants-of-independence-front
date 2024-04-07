import React from 'react';
import * as styles from './Gallery.module.css';
import Wrapper from "../../../Wrapper/Wrapper";
import GalleryElement from "./GalleryElement/GalleryElement";
import ArrowButton from "../../../ArrowButton/ArrowButton";

import gallery1 from "./img/gallery1.png";
import gallery4 from "./img/gallery4.png";
import gallery2 from "./img/gallery2.png";
import gallery3 from "./img/gallery3.png";
import * as constants from "./Gallery.constants";

const Gallery = () => {
    let galleryListRef = React.useRef(null);

    let [galleryList, setGalleryList] = React.useState([{
        img: gallery1,
        description: "Глава государства принял участие в церемонии вручения грантов «Тәуелсіздік ұрпақтары»",
    }, {
        img: gallery2,
        description: "Награждение победителей гранта 2021 года"
    }, {
        img: gallery3,
        description: "Брифинг. О начале конкурса на присуждение гранта «Тәуелсіздік ұрпақтары»"
    }, {
        img: gallery4,
        description: "Награждение победителей гранта 2022 года"
    }, {
        img: gallery4,
        description: "Награждение победителей гранта 2022 года"
    }, {
        img: gallery4,
        description: "Награждение победителей гранта 2022 года"
    }]);

    const width = window.innerWidth;

    return (
        <div className={styles.gallery}>
            <Wrapper>
                <div className={styles.dropdown_list_mobile}>Выпадающий список</div>
                <div className={styles.header_mobile}>
                    <h1>Галерея</h1>
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
                <div className={styles.dropdown_list_desktop}>Выпадающий список</div>
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