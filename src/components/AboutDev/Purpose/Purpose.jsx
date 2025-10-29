import styles from './Purpose.module.css'
import SpotlightCard from '../../Shared/SpotLightCard/SpotLightCard'

export default function Purpose() {
  return (
    <SpotlightCard>
        <div className={styles.purposeSection}>
            <div className={styles.contentWrapper}>
                <h2 className={styles.title}>
                    The Story Behind My AI-Powered Journal
                </h2>
                <div className={styles.textWrapper}>
                    <p className={styles.text}>
                        The pace of modern life, constant interactions in the digital world, and increasing personal responsibilities make it difficult for people to track their emotional state, energy levels, and mindfulness. Often, individuals cannot observe how they feel, how motivated they are throughout the day, or which habits impact their psychological well-being. This is where the idea for this project was born: to create a tool that allows users to meaningfully and objectively understand their inner world, habits, and motivation.
                    </p>
                    <p className={styles.text}>
                        This application works by analyzing the daily journal entries that users input. AI-powered analysis evaluates critical parameters such as mood, energy, motivation levels, and mindfulness activities. By deeply examining journal entries, the AI provides personalized daily summaries, actionable insights, and recommendations. This allows users to understand their behavioral patterns, review past emotional and motivational states, and consciously plan future habits.
                    </p>
                        
                    <p className={styles.text}>
                        On the technical side, the goal was to leverage modern web technologies to maximize user experience. React-based interactive panels, AI-driven insight modules, and a minimalist yet engaging UI design ensure that users do more than just enter data—they can observe their psychological and emotional states in real time. Every detail of the user interface is designed with accessibility and visual aesthetics in mind: the color palette aligns with user psychology, panel interactions are intuitive and fluid, and data visualizations are clear and motivating.
                    </p>
                        
                    <p className={styles.text}>
                        With this project, the aim is to merge technology with human experience. Users do not just look at statistics; they get to understand themselves better, track fluctuations in daily motivation, and contextualize their mindfulness activities. AI-driven suggestions are based on data derived from journal entries, ensuring that insights go beyond surface-level analytics and help users deeply understand their behaviors and psychology.
                    </p>
                        
                    <p className={styles.text}>
                        In short, this application serves as a guide in the complexity of modern life, a tool for enhancing self-awareness, and a digital companion for supporting motivation. Every module and panel aims to improve users’ quality of life and help them explore their inner worlds. The application transforms technology into a human-centered experience, helping users regain the self-awareness that often gets lost in the hustle of daily life.
                    </p>
                </div>

                    
            </div>
        </div>
    </SpotlightCard>
  )
}
