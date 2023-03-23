import classNames from "classnames/bind";
import Button from "~/components/Buttons";
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);


function MenuItem({data}) {
    return ( 
        <Button className={cx('menu-item')} to={data.to} leftIcon={data.icon}>{data.title}</Button>
     );
}

export default MenuItem;