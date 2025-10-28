import WelcomeText from '../components/Home/WelcomeText/WelcomeText';
import SummaryPanel from '../components/Home/SummaryPanel/SummaryPanel';
import styles from './HomeLayout.module.css';
import RecentEntries from '../components/Home/RecentEntries/RecentEntries';
import HomeSidebar from '../components/Home/HomeSidebar/HomeSidebar';
import DailyMeditationSession from '../components/Home/DailyMeditationSession/DailyMeditationSession';
import GoalEditor from '../components/Home/GoalEditor/GoalEditor';

export default function HomeLayout() {
  return (
    <div className={styles.homeLayout}>
      <div className={styles.welcomeTextContainer}>
      <WelcomeText />
      </div>
      <div className={styles.homeLayoutContainer}>
        <div className={styles.rightDecoration}>
          <SummaryPanel />
          <RecentEntries />
          <div className={styles.twoColumnSection}>
            <DailyMeditationSession />
            <GoalEditor />
          </div>
        </div>
        <div className={styles.leftDecoration}>
          <HomeSidebar />
        </div>
      </div>

    </div>
  )
}