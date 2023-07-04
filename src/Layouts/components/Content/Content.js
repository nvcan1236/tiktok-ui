import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './Content.module.scss'
import BackToTop from '../BackToTop/';
const cx = classNames.bind(styles)

function Content({children}) {
    const [scrollTop, setScrollTop] = useState(0);

    return (
        <div
            className={cx('content')}
            onScroll={(e) => {
                setScrollTop(e.target.scrollTop);
            }}
        >
            <div className={cx('inner')}>{children}</div>
            <BackToTop scrollTop={scrollTop} />
        </div>
    );
}

export default Content;
