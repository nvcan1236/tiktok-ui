import classNames from 'classnames/bind';
import styles from './Post.module.scss'
import Image from '../Images/Image';
import VideoWithAction from '../VideoWithActions/VideoWithActions';
import { SoundIcon } from '../Icons';
import Button from '../Buttons/Buttons';

const cx = classNames.bind(styles)

function Post({video}) {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('avatar')}>
                <Image className={cx('img')} src={video.user.avatar} />
            </div>

            <div className={cx('content')}>
                <Button className={cx('follow-btn')} outline text small>Follow</Button>
                <div className={cx('infor')}>
                    <div className={cx('name')}>
                        <h3 className={cx('nickname')}>{video.user.nickname}</h3>
                        <span className={cx('username')}>{video.user.first_name + " " + video.user.last_name}</span>
                    </div>
                    <div className={cx('desc')}>{video.description}</div>
                    <div className={cx('sound')}>
                        <SoundIcon />
                        <span>{video.music}</span>
                    </div>
                </div>
                <div className={cx('video')}>
                    <VideoWithAction video={video} />
                </div>
            </div>
        </div>
     );
}

export default Post;