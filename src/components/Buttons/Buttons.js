import classNames from 'classnames/bind';
import styles from './Buttons.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Button({
    href,
    to,
    small = false,
    large = false,
    primary = false,
    outline = false,
    text = false,
    rounded = false,
    disabled = false,
    children,
    className,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) {
    const props = { onClick, ...passProps };
    let Comp = 'button';

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        small,
        large,
        text,
        rounded,
        disabled,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}
Button.propTypes = {
    href : PropTypes.string,
    to : PropTypes.string,
    small : PropTypes.bool,
    large : PropTypes.bool,
    primary : PropTypes.bool,
    outline : PropTypes.bool,
    text : PropTypes.bool,
    rounded : PropTypes.bool,
    disabled : PropTypes.bool,
    classname : PropTypes.string,
    children : PropTypes.node,
    leftIcon : PropTypes.node,
    rightIcon : PropTypes.node,
    onClick : PropTypes.func
}
export default Button;
