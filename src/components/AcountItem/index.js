import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import styles from './AcountItem.module.scss';
import Image from '~/components/Images/index';

const cx = classNames.bind(styles);

function AcountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/5e37ff4da73ba2fad83dd7728cfee477~c5_100x100.jpeg?x-expires=1679990400&x-signature=G66R7B0G6pNxDwg6IkIv%2FKfamOI%3D"
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
