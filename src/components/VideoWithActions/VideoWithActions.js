import classNames from 'classnames/bind';

import Video from '../Video/Video';
import styles from './VideoWithActions.module.scss';
import { CommentIcon, HeartFillIcon, SaveIcon, ShareIcon } from '../Icons';

const cx = classNames.bind(styles);

function VideoWithAction({ video }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('video')}>
                <Video fileUrl={video.file_url} />
            </div>
            <ul className={cx('actions')}>
                {/* like */}
                <li className={cx('action-item')}>
                    <div className={cx('icon')}>
                        <HeartFillIcon />
                    </div>
                    <span className={cx('data')}>{video.likes_count}</span>
                </li>

                {/* comment */}
                <li className={cx('action-item')}>
                    <div className={cx('icon')}>
                        <CommentIcon />
                    </div>
                    <span className={cx('data')}>{video.comments_count}</span>
                </li>

                {/* save */}
                <li className={cx('action-item')}>
                    <div className={cx('icon')}>
                        <SaveIcon />
                    </div>
                    <span className={cx('data')}>{0}</span>
                </li>

                {/* share */}
                <li className={cx('action-item')}>
                    <div className={cx('icon')}>
                        <ShareIcon />
                    </div>
                    <span className={cx('data')}>{video.shares_count}</span>
                </li>
            </ul>
        </div>
    );
}

export default VideoWithAction;
