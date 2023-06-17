import Video from "~/components/Video/Video";
import styles from './Home.module.scss'
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Home() {
    return ( 
        <div className={cx('wrapper')}>
            <Video fileUrl={'https://files.fullstack.edu.vn/f8-tiktok/videos/2445-64857411ca34f.mp4'} />
            <Video fileUrl={'https://files.fullstack.edu.vn/f8-tiktok/videos/2444-6483b48dadb79.mp4'} />
            <Video fileUrl={'https://files.fullstack.edu.vn/f8-tiktok/videos/2445-64857411ca34f.mp4'} />
        </div>
     );
}

export default Home;