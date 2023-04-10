import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import styles from './AcountItem.module.scss';
import Image from '~/components/Images/index';

const cx = classNames.bind(styles);

function AcountItem({user}) {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src=""
                alt="avt"
            />
            <div className={cx('infor')}>
                <div className={cx('name')}>
                    <h4>{user.name}</h4>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </div>
                <div className={cx('usernames')}>@{user.username}</div>
            </div>
        </div>
    );
}

export default AcountItem;
