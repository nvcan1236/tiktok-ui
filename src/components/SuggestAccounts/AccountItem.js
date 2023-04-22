import PropTypes from 'prop-types';
import styles from './SuggestAccounts.module.scss'
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function AccountItem({img, icon, username, name}) {
    return (  
        <div className={cx('account-item')}>
            <img className={cx('avatar')} src={img} alt="Suggest Acount"/>
            <div className={cx('infor')}>
                <div className={cx('username-wrapper')}><strong className={cx('username')}>{username}</strong> <span className={cx('check')}>{icon}</span></div>
                <h4 className={cx('name')}>{name}</h4>
            </div>
        </div>
    );
}

AccountItem.propTypes = {
    img: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    username: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}
export default AccountItem;