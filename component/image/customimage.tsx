import Image from 'next/image';
import React from 'react';
import styles from './customimage.module.css';

interface Props {
    src: string;
    alt: string;
    priority: boolean;
    width?: string;
    maxWidth?: string;
}

const CustomImage: React.FC<Props> = ({ src, width, maxWidth, alt, priority }) => {
    const widths: {
        width: string;
        maxWidth: string;
        height: string;
    } = {
        width: width ? width : '',
        maxWidth: maxWidth ? maxWidth : '',
        height: 'auto'
    };

    return (
        <>
            <div className={styles.imageContainer} style={widths}>
                <Image priority={priority} className={styles.image} src={src ? src : ''} layout='fill' alt={alt} />
            </div>
        </>
    );
};

export default CustomImage;
