import React from 'react';
import * as styles from './ArchiveGallery.module.css'
import Wrapper from "../../../Wrapper/Wrapper";
import GalleryList from "./GalleryList/GalleryList";

const ArchiveGallery = () => {
    return (
        <div className={styles.gallery}>
            <Wrapper>
                <h1>Галерея</h1>
                <div>Выпадающий список</div>
                <GalleryList/>
            </Wrapper>
        </div>
    );
}
export default ArchiveGallery;