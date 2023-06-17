import PropTypes from 'prop-types';
import TippyHeadless from '@tippyjs/react/headless';

import styles from './SuggestAccounts.module.scss';
import classNames from 'classnames/bind';
import Image from '../Images/Image';
import Button from '../Buttons/Buttons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const cx = classNames.bind(styles);

function AccountItem({ user }) {
    return (
        <div>
            <TippyHeadless
                placement="bottom"
                interactive
                delay={[1000, 300]}
                offset={[-12, 0]}
                render={() => (
                    <div className={cx('miniprofile')}>
                        <div className={cx('miniprofile-header')}>
                            <Image className={cx('avatar')} src={user.avatar} alt="Suggest Acount" />
                            {user.is_followed ? (
                                <Button text className={cx('follow-btn')}>
                                    Following
                                </Button>
                            ) : (
                                <Button primary className={cx('follow-btn')}>
                                    Follow
                                </Button>
                            )}
                        </div>
                        <div className={cx('miniprofile-body')}>
                            <h4 className={cx('username')}>
                                {' '}
                                {user.nickname}{' '}
                                <span className={cx('check')}>
                                    {user.tick && <FontAwesomeIcon icon={faCheckCircle} />}
                                </span>
                            </h4>
                            <p className={cx('name')}>{user.first_name + ' ' + user.last_name}</p>
                            <div className={cx('analytical')}>
                                <span className={cx('followers')}>
                                    <strong>{user.followers_count}</strong>
                                    {user.followers_count > 1 ? 'Followers' : 'Follower'}
                                </span>
                                <span className={cx('likes')}>
                                    <strong>{user.likes_count}</strong>
                                    {user.likes_count > 1 ? 'Likes' : 'Like'}
                                </span>
                            </div>
                        </div>
                    </div>
                )}
            >
                <div className={cx('account-item')}>
                    <Image className={cx('avatar')} src={user.avatar} alt="Suggest Acount" />
                    <div className={cx('infor')}>
                        <div className={cx('username-wrapper')}>
                            <strong className={cx('username')}>{user.nickname}</strong>{' '}
                            <span className={cx('check')}>{user.tick && <FontAwesomeIcon icon={faCheckCircle} />}</span>
                        </div>
                        <h4 className={cx('name')}>{user.first_name + ' ' + user.last_name}</h4>
                    </div>
                </div>
            </TippyHeadless>
        </div>
    );
}

AccountItem.propTypes = {
    user: PropTypes.object.isRequired,
};
export default AccountItem;
