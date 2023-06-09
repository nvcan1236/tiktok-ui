import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function HeaderMenu({ onBack, title }) {
    return (
        <header className={cx('menu-header')}>
            <button className={cx('back-btn')} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className={cx('menu-title')}>{title}</h4>
        </header>
    );
}

HeaderMenu.propTypes = {
    onBack: PropTypes.func,
    title: PropTypes.string
}

export default HeaderMenu;
