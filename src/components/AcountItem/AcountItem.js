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
        <Link to={`/profile/${user.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={user.avatar} alt="avt" />
            <div className={cx('infor')}>
                <div className={cx('name')}>
                    <h4>{user.full_name}</h4>
                    {user.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </div>
                <div className={cx('usernames')}>@{user.nickname}</div>
            </div>
        </Link>
    );
}

AcountItem.propTypes = {
    user: PropTypes.object.isRequired,
}

export default AcountItem;
