import Video from '~/components/Video/Video';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import * as getVideosService from '~/services/getVideosService';
import { useEffect, useState } from 'react';
import VideoWithAction from '~/components/VideoWithActions/VideoWithActions';
import Post from '~/components/Post/Post';

const cx = classNames.bind(styles);

function Home() {
    const [videoList, setVideoList] = useState([]);
    
    useEffect(()=>{
        const fetchApi = async () => {
            try{
                const videos = await getVideosService.get();
                setVideoList(videos);
            }catch(err){
                console.log(err);
            }
        };
        fetchApi();
    }, []);

    return (
        <div className={cx('wrapper')}>
            {
                // videoList.map(video => <Video key={video.id} fileUrl={video.file_url} />)
                // videoList.map(video => <VideoWithAction key={video.id} video={video} />)
                videoList.map(video => <Post key={video.id} video={video} />)
                // <VideoWithAction fileUrl={"https://files.fullstack.edu.vn/f8-tiktok/videos/2501-649ab07aac2b0.mp4"} />
                // console.log(videoList[0])
                // videoList.length>0 && <Post video={videoList[0]} />
            }
        </div>
    );
}

export default Home;
