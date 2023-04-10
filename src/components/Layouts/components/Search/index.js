import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import TippyHeadless from '@tippyjs/react/headless';
import AcountItem from '~/components/AcountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Search.module.scss';
import { SearchIcon } from '~/components/Icons';
import useDebounce from '~/hooks/useDebounce';
import * as searchService from '~/apiServices/searchService';
const cx = classNames.bind(styles);

function Search() {
    const [results, setResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [showResults, setShowResults] = useState(true);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();
    const debounceValue = useDebounce(searchInput, 500);

    const handleSearchInput = (e) => {
        if (!e.target.value || e.target.value.startsWith(' ')) {
            setSearchInput(e.target.value.trim());
            return;
        }

        setSearchInput(e.target.value);
    };

    useEffect(() => {
        if (!debounceValue) {
            setResults([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);

            const results = await searchService.search(debounceValue);
            setResults(results);

            setLoading(false);
        };

        fetchApi();
    }, [debounceValue]);

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
            onClickOutside={() => {
                setShowResults(false);
            }}
            render={(attrs) => (
                <div className={cx('search-results')}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {results
                            .filter((item) => {
                                return (
                                    item.name.toLowerCase().includes(debounceValue.toLowerCase()) ||
                                    item.username.toLowerCase().includes(debounceValue.toLowerCase())
                                );
                            })
                            .map((user) => {
                                return <AcountItem user={user} key={user.id} />;
                            })}
                    </PopperWrapper>
                </div>
            )}
        >
            <div className={cx('search')}>
                <input
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange={handleSearchInput}
                    onFocus={() => {
                        setShowResults(true);
                    }}
                    value={searchInput}
                    ref={inputRef}
                />

                {!!searchInput && !loading && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {loading && (
                    <button className={cx('load')}>
                        <FontAwesomeIcon icon={faSpinner} />
                    </button>
                )}

                <button className={cx('search-btn')}>
                    <SearchIcon width="24" height="24" />
                </button>
            </div>
        </TippyHeadless>
    );
}

export default Search;
