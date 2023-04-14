import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)

function SideBar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <h1>Sidebar</h1>
            </div>
        </div>
    );
}

export default SideBar;
