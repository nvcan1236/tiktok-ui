import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './Video.module.scss';
import { ReportIcon } from '../Icons';
const cx = classNames.bind(styles);

function Video({ fileUrl }) {
    const [showAction, setShowAction] = useState(false);
    return (
        <div
            className={cx('wrapper', {
                showAction: showAction,
            })}
            onMouseEnter={() => setShowAction(true)}
            onMouseLeave={() => setShowAction(false)}
        >
            <video loop controls={showAction} muted>
                <source src={fileUrl} />
            </video>
            <div className={cx('report')}>
                <ReportIcon />
                <span>Report</span>
            </div>
        </div>
    );
}

export default Video;
