import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestAccounts.module.scss';
import AccountItem from './AccountItem';
import Section from '~/Layouts/components/Sidebar/Section/Section';

const cx = classNames.bind(styles);

function SuggestAccounts({ label }) {
    return (
        <Section>
            <div className={cx('wrapper')}>
                <div className={cx('seprature')}></div>
                <label className={cx('label')}>{label}</label>
                <AccountItem
                    img="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/856d6e040a2b3181553f302cdef7f5f5.jpeg?x-expires=1682348400&x-signature=D%2BN%2F%2FW1rvBsWHfWFd2VbDv8V6k4%3D"
                    username="roses_are_rosie "
                    name="ROSÉ"
                    icon={<FontAwesomeIcon icon={faCheckCircle} />}
                />
                <AccountItem
                    img="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1682348400&x-signature=e4Yoa0sSQLriP2tv8tfVj1st8Ag%3D"
                    username="nvcan1236"
                    name="Nguyễn Văn Cảnh"
                    icon={<FontAwesomeIcon icon={faCheckCircle} />}
                />
                <AccountItem
                    img="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1682348400&x-signature=e4Yoa0sSQLriP2tv8tfVj1st8Ag%3D"
                    username="nvcan1236"
                    name="Nguyễn Văn Cảnh"
                    icon={<FontAwesomeIcon icon={faCheckCircle} />}
                />
                <AccountItem
                    img="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1682348400&x-signature=e4Yoa0sSQLriP2tv8tfVj1st8Ag%3D"
                    username="nvcan1236"
                    name="Nguyễn Văn Cảnh"
                    icon={<FontAwesomeIcon icon={faCheckCircle} />}
                />
    
                <span className={cx('more-btn')}>See more</span>
            </div>
        </Section>
    );
}

SuggestAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};
export default SuggestAccounts;
