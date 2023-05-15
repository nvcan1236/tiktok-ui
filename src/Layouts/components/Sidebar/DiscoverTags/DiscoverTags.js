import classNames from "classnames/bind";
import Tag from "./Tag";
import styles from './DiscoverTags.module.scss'
import Section from "../Section";

const cx = classNames.bind(styles);

function DiscoverTags({tags, title='Discover'}) {
    return ( 
        <Section>
            <div className={cx("wrapper")}>
                <h4 className={cx('title')}>{title}</h4>
                <div className={cx('tag-list')}>
                    <Tag title="suthatla" />
                    <Tag title="mackedoi" />
                    <Tag title="sansangthaydoi" />
                    <Tag type='Sound' title="Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n & BHMedia" />
                    <Tag type='Sound' title="Thiên Thần Tình Yêu - RICKY STAR ạnd T.R.I" />
                    <Tag title="7749hieuung" />
                    <Tag title="genzlife" />
                </div>
            </div>
        </Section>
     );
}

export default DiscoverTags;