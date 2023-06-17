import classNames from 'classnames/bind';
import Button from '~/components/Buttons/Buttons';
import { BackToTopIcon } from '~/components/Icons';

import styles from './BackToTop.module.scss'
const cx = classNames.bind(styles)

function BackToTop({scrollTop, parent}) {
    return (
        <div className={cx('wrapper', {hide: scrollTop<=0})}>
            <div className={cx('btn')}>
                <Button rounded text small>
                    Get app
                </Button>
            </div>
            <div className={cx('icon')} >
                <BackToTopIcon />
            </div>
        </div>
    );
}

export default BackToTop;
