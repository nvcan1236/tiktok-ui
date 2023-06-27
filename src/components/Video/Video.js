import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';

import styles from './Video.module.scss';
import { MuteIcon, PauseIcon, PlayIcon, ReportIcon, SpeakerIcon } from '../Icons';
const cx = classNames.bind(styles);

function Video({ fileUrl }) {
    const [showAction, setShowAction] = useState(false);
    const [isPlay, setIsPlay] = useState(false);
    const [isMute, setIsMute] = useState(true);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(0.5);
    const [prevVolume, setPrevVolume] = useState(0.5)
    const videoRef = useRef();

    const getTimeString = (time) => {
        time = Math.round(time);
        const mm = Math.floor(time / 60) > 9 ? Math.floor(time / 60) : '0' + Math.floor(time / 60); // get time in format mm:ss
        const ss = time % 60 > 9 ? time % 60 : '0' + (time % 60); // get time in format mm:ss
        return mm + ':' + ss;
    };
    const playVideo = () => {
        setIsPlay(true);
        setCurrentTime(videoRef.current.currentTime);
        videoRef.current.volume = volume;
        videoRef.current.play();
    };
    const pauseVideo = () => {
        setIsPlay(false);
        videoRef.current.pause();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        setDuration(videoRef.current.duration);
    });

    const handleMuteButton = (e) => {
        e.stopPropagation();
        setIsMute(!isMute);
        videoRef.current.muted = !isMute;
        if(!isMute) {
            setVolume(0);
            setPrevVolume(volume);
        }else {
            setVolume(prevVolume);
        }
    };

    const handleVolumeInput = (e) => {
        e.stopPropagation();
        setVolume(e.target.value / 100);
        videoRef.current.volume = e.target.value / 100;
        if((e.target.value / 100) === 0) {
            setIsMute(true);
        }
        else {
            setIsMute(false);
        }
    }

    return (
        <div
            className={cx('wrapper', {
                showAction: showAction,
                isMute: isMute,
            })}
            onMouseEnter={() => setShowAction(true)}
            onMouseLeave={() => setShowAction(false)}
            onClick={() => {
                isPlay ? pauseVideo() : playVideo();
            }}
        >
            <div className={cx('report')}>
                <ReportIcon />
                <span>Report</span>
            </div>

            <video loop muted ref={videoRef} onTimeUpdate={() => setCurrentTime(videoRef.current.currentTime)}>
                <source src={fileUrl} />
            </video>

            <div className={cx('controler')}>
                <div className={cx('action')}>
                    <div className={cx('play')}>{isPlay ? <PlayIcon /> : <PauseIcon />}</div>

                    <div className={cx('mute')} >
                        <div className={cx('volume-bar')} onClick={(e)=>e.stopPropagation()}>
                            <div className={cx('line')} style={{width: volume*48 + 'px'}}></div>
                            <input
                                type="range"
                                min={0}
                                max={100}
                                value={volume*100}
                                step={1}
                                onInput={handleVolumeInput}
                            />
                        </div>
                        <div onClick={handleMuteButton}>{isMute ? <MuteIcon /> : <SpeakerIcon />}</div>
                    </div>
                </div>

                <div className={cx('timer')}>
                    <div className={cx('progress-bar')}>
                        <div className={cx('full-bar')}></div>
                        <div className={cx('now-bar')} style={{ width: (currentTime * 100) / duration + '%' }}></div>
                    </div>
                    <div className={cx('time')}>
                        <span className={cx('current')}>{getTimeString(currentTime)}</span>/
                        <span className={cx('duration')}>{getTimeString(duration)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Video;
