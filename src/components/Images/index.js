import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import classNames from 'classnames';
import styles from './Image.module.scss';

function Image({ className, alt, src, fallback: customFallback = images.noImage,...props }, ref) {
    const [fallback, setFallback] = useState('');
    const handelErrorImage = () => {
        setFallback(customFallback);
    };

    return (
        <img
            className={classNames(styles.wapper, className)}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handelErrorImage}
            ref={ref}
        />
    );
}

export default forwardRef(Image);
