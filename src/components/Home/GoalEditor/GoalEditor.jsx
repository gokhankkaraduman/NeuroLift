import React from 'react'
import JournalEditor from './JournalEditor/JournalEditor'
import styles from './GoalEditor.module.css'

export default function GoalEditor() {

  const handleSave = (content) => {
    console.log("Goals saved:", content);
  }

  return (
    <div className={styles.goalEditor}>
        <JournalEditor onSave={handleSave} />
    </div>
  )
}
