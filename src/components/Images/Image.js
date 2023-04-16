import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './Image.module.scss';

const  Image = forwardRef(({ className, alt, src, fallback: customFallback = images.noImage,...props }, ref) => {
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
})

Image.propTypes = {
    className : PropTypes.string,
    alt : PropTypes.string,
    src : PropTypes.string,
    fallback : PropTypes.string,
}
export default (Image);
