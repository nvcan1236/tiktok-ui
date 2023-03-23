import classNames from 'classnames/bind';
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
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { useState, useEffect } from 'react';

import styles from './Header.module.scss';
import images from '~/assets/images/index';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AcountItem from '~/components/AcountItem';
import Button from '~/components/Buttons';
import Menu from '~/components/Popper/Menu';

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'English',
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard and shotcuts',
    },
];

const cx = classNames.bind(styles);

function Header() {
    const [results, setResults] = useState([]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="logo" />
                <Tippy
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
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        Upload
                    </Button>
                    <Button primary> Log in </Button>
                    <Menu items={MENU_ITEMS}>
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </div>
    );
}

export default Header;
