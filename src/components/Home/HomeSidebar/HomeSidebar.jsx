import SidebarInsights from "./SidebarInsights/SidebarInsights"
import SidebarProfile from "./SidebarProfile/SidebarProfile";
import styles from './HomeSidebar.module.css';
import SidebarButtons from "./SidebarButtons/SidebarButtons";

export default function HomeSidebar() {
  return (
    <div className={styles.homeSidebar}>
        <SidebarProfile />
        <SidebarInsights />
        <SidebarButtons />
    </div>
  )
}
