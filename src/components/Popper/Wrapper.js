import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

function Wrapper({ className,children }) {
    return <div className={cx('wrapper', className)}>{children}</div>;
}


Wrapper.propTypes ={
    classNames:PropTypes.string,
    children: PropTypes.node,
}
export default Wrapper;
