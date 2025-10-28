import MoodPanel from "./MoodPanel/MoodPanel"
import style from './SummaryPanel.module.css'
import EnergyPanel from "./EnergyPanel/EnergyPanel"
import MindfulnessPanel from "./MindfulnessPanel/MindfulnessPanel"
import MotivationPanel from "./MotivationPanel/MotivationPanel"

export default function SummaryPanel() {
  return (
    <div className={style.summaryPanel}>
      <p className={style.summaryText}>Here's your wellness summary for today.</p>
      <div className={style.panelsContainer}>
        <MoodPanel />
        <EnergyPanel />
        <MindfulnessPanel />
        <MotivationPanel />
      </div>
    </div>
  )
}
