import classNames from 'classnames/bind';

import Section from '../Section/Section';
import FooterItem from './FooterItem';
import styles from './Footer.module.scss';
const cx = classNames.bind(styles);

function Footer() {
    return (
        <Section footer>
            <div className={cx('links-container')}>
                <FooterItem to="https://www.tiktok.com" title="About" />
                <FooterItem to="https://www.tiktok.com" title="Newsroom" />
                <FooterItem to="https://www.tiktok.com" title="Contact" />
                <FooterItem to="https://www.tiktok.com" title="Careers" />
                <FooterItem to="https://www.tiktok.com" title="ByteDance" />
            </div>
            <div className={cx('links-container')}>
                <FooterItem to="https://www.tiktok.com" title="Tiktok for Good" />
                <FooterItem to="https://www.tiktok.com" title="Advertise" />
                <FooterItem to="https://www.tiktok.com" title="Developers" />
                <FooterItem to="https://www.tiktok.com" title="Transparency" />
                <FooterItem to="https://www.tiktok.com" title="Tiktok Rewards" />
                <FooterItem to="https://www.tiktok.com" title="Tiktok Embeds" />
            </div>
            <div className={cx('links-container')}>
                <FooterItem to="https://www.tiktok.com" title="Help" />
                <FooterItem to="https://www.tiktok.com" title="Safety" />
                <FooterItem to="https://www.tiktok.com" title="Terms" />
                <FooterItem to="https://www.tiktok.com" title="Privacy" />
                <FooterItem to="https://www.tiktok.com" title="Creater Portal" />
                <FooterItem to="https://www.tiktok.com" title="Community Guidelines" />
            </div>
            <div className={cx('links-container')}>
                <FooterItem readonly title="© 2023 TikTok cloned by nvcan1236" />
            </div>
        </Section>
    );
}

export default Footer;
