import classNames from 'classnames/bind';
import styles from './Footer.module.scss'
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function FooterItem({ to, title, readonly }) {
    return (
        <a
            href={to}
            className={cx('footer-item', {
                readonly: readonly,
            })}
            target='_blank' rel="noreferrer"
        >
            {title}
        </a>
    );
}

FooterItem.propTypes = {
    to: PropTypes.string,
    title: PropTypes.string.isRequired,
    readonly: PropTypes.bool
}
export default FooterItem;
