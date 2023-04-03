import classNames from 'classnames/bind';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faPlus,
    faEllipsisVertical,
    faLanguage,
    faCircleQuestion,
    faKeyboard,
    faCoins,
    faGear,
    faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane, faMessage, faUser } from '@fortawesome/free-regular-svg-icons';
import TippyHeadless from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import images from '~/assets/images/index';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AcountItem from '~/components/AcountItem';
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
    SearchIcon,
    SettingIcon,
    UserIcon,
} from '~/components/Icons';
import Image from '~/components/Images';

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
    const [results, setResults] = useState([0]);

    const handleMenuChange = (item) => {
        // switch(item)
    };

    const currentUser = true;

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="logo" />
                <TippyHeadless
                    interactive
                    visible={results.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-results')}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AcountItem />
                                <AcountItem />
                                <AcountItem />
                                <AcountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <button className={cx('load')}>
                            <FontAwesomeIcon icon={faSpinner} />
                        </button>

                        <button className={cx('search-btn')}>
                            <SearchIcon width="24" height="24" />
                        </button>
                    </div>
                </TippyHeadless>

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
                                fallback="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ad1de2aaf172f091cca453f3e4007ef8~c5_100x100.jpeg?x-expires=1680602400&x-signature=p57X9RqzWUlv47akJI7wK389Vec%3D"
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
