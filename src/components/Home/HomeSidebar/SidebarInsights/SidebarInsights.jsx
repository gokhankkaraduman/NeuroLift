import styles from './SidebarInsights.module.css';
import SpotlightCard from '../../../Shared/SpotLightCard/SpotLightCard';  


export default function SidebarInsights() {


  return (
    <SpotlightCard>
    <div className={styles.sidebarInsights}>
      <div className={styles.insightsHeader}>
        <h2 className={styles.insightsTitle}>AI Quick Insights</h2>
      </div>
      <div>
          <div className={styles.insightsDescription}>
            <p>Get quick insights from your journal entries using AI.</p>
          </div>
      </div>
    </div>
    </SpotlightCard>
  );
}