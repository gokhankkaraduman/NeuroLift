import WelcomeText from '../components/WelcomeText/WelcomeText';
import SummaryPanel from '../components/SummaryPanel/SummaryPanel';
import styles from './HomeLayout.module.css';
import RecentEntries from '../components/RecentEntries/RecentEntries';
import HomeSidebar from '../components/HomeSidebar/HomeSidebar';

export default function HomeLayout() {
  return (
    <div className={styles.homeLayout}>
      <div className={styles.rightDecoration}>
        <WelcomeText />
        <SummaryPanel />
        <RecentEntries />
      </div>
      <div className={styles.leftDecoration}>
        <HomeSidebar />
      </div>
    </div>
  )
}