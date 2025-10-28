import SpotlightCard from '../../../Shared/SpotLightCard/SpotLightCard'
import styles from './SidebarButtons.module.css'
import { GiMeditation } from "react-icons/gi";
import { BsPlusCircleFill } from "react-icons/bs";
import { MdOutlineQueryStats } from "react-icons/md";

export default function SidebarButtons() {
  return (
    <div className={styles.sidebarButtons}>
        <SpotlightCard>
            <button className={styles.btn}><GiMeditation /> Meditation</button>
        </SpotlightCard>
        <SpotlightCard>
            <button className={styles.btn}><BsPlusCircleFill /> New Journal</button>
        </SpotlightCard>
        <SpotlightCard>
            <button className={styles.btn}><MdOutlineQueryStats /> View Stats</button>
        </SpotlightCard>
    </div>
  )
}
