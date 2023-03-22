import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import styles from './AcountItem.module.scss';

const cx = classNames.bind(styles);

function AcountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/5e37ff4da73ba2fad83dd7728cfee477~c5_300x300.webp?x-expires=1679410800&x-signature=4zC79yt3t%2Fndp0gxhAeXa0aBR2U%3D"
                alt="avt"
            />
            <div className={cx('infor')}>
                <div className={cx('name')}>
                    <h4>Nguyen Van A</h4>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </div>
                <div className={cx('usernames')}> @nva </div>
            </div>
        </div>
    );
}

export default AcountItem;
