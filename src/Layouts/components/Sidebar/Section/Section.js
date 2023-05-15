import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Section.module.scss'
const cx = classNames.bind(styles);

function Section({ children, footer }) {
    return <div className={cx('wrapper', {
        footer: footer
    })}>{children}</div>;
}

Section.propTypes = {
    children: PropTypes.node
}
export default Section;
