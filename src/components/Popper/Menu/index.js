import classNames from 'classnames/bind';

import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);


function Menu({ items=[], children }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItem key={index} data={item} />);
    };

    return (
        <Tippy
            interactive
            placement='bottom-end'
            delay={[0,700]}
            render={(attrs) => (
                <div className={cx('menu-popper')}>
                    <PopperWrapper className={cx('menu-list')}>{renderItems()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
