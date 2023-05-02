import PropTypes from 'prop-types';
import TippyHeadless from '@tippyjs/react/headless';


import styles from './SuggestAccounts.module.scss'
import classNames from 'classnames/bind';
import Image from '../Images/Image';
import Button from '../Buttons/Buttons';
const cx = classNames.bind(styles);

function AccountItem({img, icon, username, name}) {

    return ( 
        <div>

            <TippyHeadless
                placement='bottom'
                interactive
                delay={[1000, 300]}
                offset={[-12,0]}
                render={()=>(
                    <div className={cx('miniprofile')}>
                        <div className={cx('miniprofile-header')}>
                            <Image className={cx('avatar')} src={img} alt="Suggest Acount"  />
                            <Button primary className={cx('follow-btn')}>Follow</Button>
                        </div>
                        <div className={cx('miniprofile-body')}>
                            <h4 className={cx('username')}> nvcan1236 <span className={cx('check')}>{icon}</span></h4>
                            <p className={cx('name')}>Nguyen Van Canh</p>
                            <div className={cx('analytical')}>
                                <span className={cx('followers')}><strong>100.8M</strong>Followers</span>
                                <span className={cx('likes')}><strong>500.5M</strong>Likes</span>
                            </div>
                        </div>
                    </div>
                )}
            >
                <div className={cx('account-item')}>
                    <Image className={cx('avatar')} src={img} alt="Suggest Acount"/>
                    <div className={cx('infor')}>
                        <div className={cx('username-wrapper')}><strong className={cx('username')}>{username}</strong> <span className={cx('check')}>{icon}</span></div>
                        <h4 className={cx('name')}>{name}</h4>
                    </div>
                </div>
            </TippyHeadless>
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