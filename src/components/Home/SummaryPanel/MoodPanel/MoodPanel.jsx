import styles from './MoodPanel.module.css';
import { MdMood } from "react-icons/md";
import SpotLightCard from '../../../Shared/SpotLightCard/SpotLightCard';

export default function MoodPanel() {

    const moods = "happy";

  return (
    <SpotLightCard>
    <div className={styles.moodPanel}>
        <div className={styles.moodInfo}>
            <span className={styles.moodIcon}>
            <MdMood />
            </span>
            <p className={styles.moodLabel}>Mood</p>
            <p className={styles.moodValue}>{moods}</p>
        </div>
    </div>
    </SpotLightCard>
  )
}

