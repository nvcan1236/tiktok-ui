import classNames from 'classnames/bind';
import Button from '~/components/Buttons';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);


function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', {
        seprature: data.seprature
    })
    return (
        <Button className={classes} to={data.to} leftIcon={data.icon} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
