import styles from './MotivationPanel.module.css';
import { FaLightbulb } from "react-icons/fa";
import SpotLightCard from '../../../Shared/SpotLightCard/SpotLightCard';

export default function MotivationPanel() {

    // Şimdilik statik bir örnek motivasyon mesajı
    const motivationMessage = "Keep pushing forward! Small steps lead to big changes.";

    return (
        <SpotLightCard>
        <div className={styles.motivationPanel}>
            <div className={styles.motivationInfo}>
                <span className={styles.motivationIcon}>
                    <FaLightbulb />
                </span>
                <p className={styles.motivationLabel}>Motivation</p>
                <p className={styles.motivationValue}>{motivationMessage}</p>
            </div>
        </div>
        </SpotLightCard>
    )
}
