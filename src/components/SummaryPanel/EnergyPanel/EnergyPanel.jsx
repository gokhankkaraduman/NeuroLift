import styles from './energyPanel.module.css';
import { AiFillThunderbolt } from "react-icons/ai";

export default function EnergyPanel() {

    const energys = "High";

  return (
    <div className={styles.energyPanel}>
        <div className={styles.energyInfo}>
            <span className={styles.energyIcon}>
            <AiFillThunderbolt />
            </span>
            <p className={styles.energyLabel}>Energy</p>
            <p className={styles.energyValue}>{energys}</p>
        </div>
    </div>
  )
}

