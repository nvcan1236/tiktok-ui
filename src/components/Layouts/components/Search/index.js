import { useRef, useState } from 'react';
import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import TippyHeadless from '@tippyjs/react/headless';
import AcountItem from '~/components/AcountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Search.module.scss';
import { SearchIcon } from '~/components/Icons';
const cx = classNames.bind(styles);

function Search() {
    const [results, setResults] = useState([1]);
    const [searchInput, setSearchInput] = useState('');
    const [showResults, setShowResults] = useState(true);
    const inputRef = useRef();

    const handleClear = () => {
        setSearchInput('');
        inputRef.current.focus();
        setShowResults(false);
    };

    return (
        <TippyHeadless
            interactive
            placement="bottom"
            visible={showResults && results.length > 0}
            onClickOutside={()=> {
                setShowResults(false);
            }}
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
                <input
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange={(e) => {
                        setSearchInput(e.target.value);
                    }}
                    onFocus={() => {
                        setShowResults(true);
                    }}
                    value={searchInput}
                    ref={inputRef}
                />

                {!!searchInput && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {/* <button className={cx('load')}>
                    <FontAwesomeIcon icon={faSpinner} />
                </button> */}

                <button className={cx('search-btn')}>
                    <SearchIcon width="24" height="24" />
                </button>
            </div>
        </TippyHeadless>
    );
}

export default Search;
