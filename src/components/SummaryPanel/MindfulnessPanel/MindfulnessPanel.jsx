import styles from './MindfulnessPanel.module.css';
import { PiFlowerLotus } from "react-icons/pi";

export default function MindfulnessPanel() {

    // Manuel score
    const mindfulnessScore = 72;

    // Score aralıklarına göre mesajlar
    let mindfulnessMessage = "";
    if (mindfulnessScore >= 80) {
        mindfulnessMessage = "You're extremely calm and focused today!";
    } else if (mindfulnessScore >= 60) {
        mindfulnessMessage = "You seem calmer today than yesterday.";
    } else if (mindfulnessScore >= 40) {
        mindfulnessMessage = "A little stress today, take some deep breaths.";
    } else {
        mindfulnessMessage = "Try to relax and give yourself a break today.";
    }

    return (
        <div className={styles.mindfulnessPanel}>
            <div className={styles.mindfulnessInfo}>
                <span className={styles.mindfulnessIcon}>
                    <PiFlowerLotus />
                </span>
                <p className={styles.mindfulnessLabel}>Mindfulness</p>
                <p className={styles.mindfulnessValue}>
                    Mindfulness: {mindfulnessScore}% — {mindfulnessMessage}
                </p>
            </div>
        </div>
    )
}
