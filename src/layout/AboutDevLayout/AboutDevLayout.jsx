import Aboutme from '../../components/AboutDev/Aboutme/Aboutme'
import Purpose from '../../components/AboutDev/Purpose/Purpose'
import TechStack from '../../components/AboutDev/TechStack/TechStack'
import Stats from '../../components/AboutDev/Stats/Stats'
import styles from './AboutDevLayout.module.css'

export default function AboutDevLayout() {
  return (
    <div className={styles.aboutDevLayout}>
        <Aboutme />
        <Purpose />
        <TechStack />
        <Stats />
    </div>
  )
}
