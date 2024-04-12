import React from 'react';
import * as styles from './GalleryElement.module.css';
import ImagePopup from "./ImagePopup/ImagePopup";

/**
 *
 * @param img
 * @param {string} description - описание картинки или сылки
 * @param {string} type - тип элемента галереи (картинка, новость)
 * @returns {Element}
 * @constructor
 */
const GalleryElement = ({img, description, type, link = undefined}) => {
    const elementRef = React.useRef(null);
    const [width, setWidth] = React.useState(0);

    React.useLayoutEffect(() => {
        setWidth(elementRef.current.offsetWidth);
    });

    let [isPopup, setPopup] = React.useState(false);


    const onClick = () => {
        if (type === "photo") {
            setPopup(true);
        }
    }

    return (
        <>
            <a ref={elementRef} href={link} className={styles.element}>
                <img loading="lazy" src={img} alt="" onClick={onClick}/>
                <p>{description}</p>
            </a>
            {
                isPopup && <ImagePopup img={img}
                                       onClick={() => {
                                           setPopup(false);
                                       }}/>
            }
        </>
    );
}

export default GalleryElement;