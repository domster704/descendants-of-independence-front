import React from'react';
import * as styles from './GalleryElement.module.css';

const GalleryElement = ({img, description}) => {
    const elementRef = React.useRef(null);
    const [width, setWidth] = React.useState(0);

    React.useLayoutEffect(() => {
        setWidth(elementRef.current.offsetWidth);
    });

    return (
        <a ref={elementRef} href="#" className={styles.element}>
            <img loading="lazy" src={img} alt=""/>
            <p>{description}</p>
        </a>
    );
}

export default GalleryElement;