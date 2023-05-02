import PropTypes from 'prop-types';
import { TagIcon, SoundIcon } from "~/components/Icons";
import classNames from "classnames/bind";
import styles from './DiscoverTags.module.scss'

const cx = classNames.bind(styles);
function Tag({type="Tag", title}) {

    return ( 
        <a href="/" className={cx('tag')}>
            <span className={cx('icon')}>{type === "Tag" ? <TagIcon />: <SoundIcon/>}</span>
            <p>{title}</p>
        </a>
     );
}

Tag.propTypes = {
    type: PropTypes.string,
    title: PropTypes.string.isRequired
}
export default Tag;