import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import images from '~/assets/images/index';
import Button from '~/components/Buttons';
import Menu from '~/components/Popper/Menu';
import {
    CoinIcon,
    InboxIcon,
    KeyboardIcon,
    LanguagesIcon,
    LogoutIcon,
    MessageIcon,
    QuestionIcon,
    SettingIcon,
    UserIcon,
} from '~/components/Icons';
import Image from '~/components/Images';
import Search from '~/components/Layouts/components/Search';

const MENU_ITEMS = [
    {
        icon: <LanguagesIcon />,
        title: 'English',
        sub: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <QuestionIcon />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <KeyboardIcon />,
        title: 'Keyboard and shotcuts',
    },
];

const userMenu = [
    {
        icon: <UserIcon />,
        title: 'View profile',
        to: '/profile',
    },
    {
        icon: <CoinIcon />,
        title: 'Get coins',
        to: '/getcoins',
    },
    {
        icon: <SettingIcon />,
        title: 'Settings',
        to: '/settings',
    },
    ...MENU_ITEMS,
    {
        icon: <LogoutIcon />,
        title: 'Log out',
        to: '/logout',
        seprature: true,
    },
];

const cx = classNames.bind(styles);

function Header() {
    const handleMenuChange = (item) => {
        // switch(item)
    };

    const currentUser = true;

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="logo" />
                
                <Search />

                <div className={cx('actions')}>
                    <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        Upload
                    </Button>
                    {currentUser ? (
                        <>
                            <Tippy content="Messages" delay={[0, 200]}>
                                <button className={cx('icon')}>
                                    <MessageIcon width="26" height="26" />
                                </button>
                            </Tippy>

                            <Tippy content="Inbox" delay={[0, 200]}>
                                <button className={cx('icon')}>
                                    <InboxIcon width="32" height="32" />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary> Log in </Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1660717275838469~c5_100x100.jpeg?x-expires=1679990400&x-signature=iER8APo7uKD%2BJA7o7Eie%2FGBmuGc%3D"
                                alt="avatar"
                                className={cx('avatar')}
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </div>
    );
}

export default Header;
