import Video from '~/components/Video/Video';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import * as getVideosService from '~/services/getVideosService';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Home() {
    const [videoList, setVideoList] = useState([]);
    
    

    useEffect(()=>{
        const fetchApi = async () => {
            const videos = await getVideosService.get();
            setVideoList(videos);
            console.log(videoList);
        };
        fetchApi();
    }, []);

    return (
        <div className={cx('wrapper')}>
            {
                videoList.map(video => <Video key={video.id} fileUrl={video.file_url} />)
            }
        </div>
    );
}

export default Home;
