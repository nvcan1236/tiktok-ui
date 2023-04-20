import Menu, {MenuItem} from '~/Layouts/components/Sidebar/Menu'
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import config from '~/configs';
import {HomeIcon, HomeActiveIcon, UserGroupIcon, UserGroupActiveIcon, CameraIcon, CameraActiveIcon} from '~/components/Icons'
import Home from '~/pages/Home/Home';

const cx = classNames.bind(styles)

function SideBar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Menu>
                    <MenuItem title="For you" icon={<HomeIcon/>} iconActive={<HomeActiveIcon/>} to={config.route.home}/>
                    <MenuItem title="Following" icon={<UserGroupIcon/>} iconActive={<UserGroupActiveIcon/>} to={config.route.following}/>
                    <MenuItem title="LIVE" icon={<CameraIcon/>} iconActive={<CameraActiveIcon/>} to={config.route.live}/>
                </Menu>
            </div>
        </div>
    );
}

export default SideBar;
