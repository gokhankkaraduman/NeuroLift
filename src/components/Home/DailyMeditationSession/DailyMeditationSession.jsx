import meditationData from '../../../data/meditationData.json';
import { useState, useRef, useEffect } from 'react';
import styles from './DailyMeditationSession.module.css'; 
import { FaPlay, FaPause } from "react-icons/fa"; 

export default function DailyMeditationSession() {
    const [meditationTime, setMeditationTime] = useState(null);
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        if (isPlaying) audioRef.current.pause();
        else audioRef.current.play();
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        const now = new Date(); 
        const hour = now.getHours(); 

        if (hour >= 6 && hour < 12) setMeditationTime(meditationData.morning);
        else if (hour >= 12 && hour < 18) setMeditationTime(meditationData.midday);
        else if (hour >= 18 && hour < 24) setMeditationTime(meditationData.evening);
        else setMeditationTime(meditationData.night);
    }, []); 

    if (!meditationTime) return null; 

    return (
        <div className={styles.dailyMeditationSession}>
            <img src={meditationTime.imageUrl} alt="Meditation" className={styles.meditationImage} />
            <div className={styles.meditationContent}>
                <div className={styles.meditationInfo}>
                    <h2 className={styles.meditationTitle}>Meditation of Day</h2>
                    <h3 className={styles.meditationSubtitle}>{meditationTime.title}</h3>
                    <p className={styles.meditationDuration}>{meditationTime.duration} min</p>
                </div>
                <div className={styles.audioControls}>
                    <audio className={styles.audio} ref={audioRef} src={meditationTime.musicUrl} />
                    <button onClick={togglePlay} className={styles.playPauseButton}>
                        {isPlaying ? <FaPlay /> : <FaPause />}
                    </button>
                </div>
            </div>
        </div>
    )
}
