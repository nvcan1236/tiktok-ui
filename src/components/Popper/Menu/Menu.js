import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import HeaderMenu from './HeaderMenu';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Menu({ items = [], children, onChange, hideOnClick = false }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.sub;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.sub]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };
    const resetMenu = () => {
        setHistory((prev) => prev.slice(0, history.length - 1));
    }

    return (
        <Tippy
            interactive
            placement="bottom-end"
            delay={[0, 700]}
            offset={[12, 4]}
            onHide={() => setHistory((prev) => prev.slice(0, 1))}
            hideOnClick={hideOnClick}
            render={(attrs) => (
                <div className={cx('menu-popper')}>
                    <PopperWrapper className={cx('menu-list')}>
                        {history.length > 1 && (
                            <HeaderMenu
                                title={'Language'}
                                className={cx('menu-header')}
                                onBack={resetMenu}
                            />
                        )}
                        <div className={cx('menu-body')}>{renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    items : PropTypes.array,
    children : PropTypes.node,
    onChange : PropTypes.func,
    hideOnClick : PropTypes.bool
}
export default Menu;
