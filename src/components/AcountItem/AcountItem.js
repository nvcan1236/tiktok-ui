import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import styles from './AcountItem.module.scss';
import Image from '~/components/Images/index';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AcountItem({ user }) {
    return (
        <Link to={`/profile/${user.username}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src="" alt="avt" />
            <div className={cx('infor')}>
                <div className={cx('name')}>
                    <h4>{user.name}</h4>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </div>
                <div className={cx('usernames')}>@{user.username}</div>
            </div>
        </Link>
    );
}

AcountItem.propTypes = {
    user: PropTypes.object.isRequired,
}

export default AcountItem;
