import styles from './energyPanel.module.css';
import { AiFillThunderbolt } from "react-icons/ai";
import SpotLightCard from '../../../Shared/SpotLightCard/SpotLightCard';

export default function EnergyPanel() {

    const energys = "High";

  return (
    <SpotLightCard>
        <div className={styles.energyPanel}>
            <div className={styles.energyInfo}>
                <span className={styles.energyIcon}>
                    <AiFillThunderbolt />
                </span>
                <p className={styles.energyLabel}>Energy</p>
                <p className={styles.energyValue}>{energys}</p>
            </div>
        </div>
    </SpotLightCard>
  )
}

