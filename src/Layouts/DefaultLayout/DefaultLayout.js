import { useState } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import Sidebar from '~/Layouts/components/Sidebar';
import styles from './DefaultLayout.module.scss';
import BackToTop from '../components/BackToTop/BackToTop';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const [scrollTop, setScrollTop] = useState(0);
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div
                    className={cx('content')}
                    onScroll={(e) => {
                        setScrollTop(e.target.scrollTop);
                    }}
                >
                    <div className={cx('inner')}>{children}</div>
                    <BackToTop scrollTop={scrollTop} />
                </div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node,
};

export default DefaultLayout;
