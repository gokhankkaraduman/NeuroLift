import styles from './Aboutme.module.css';
import { FaGithub, FaLinkedin, FaDownload   } from "react-icons/fa";
import SpotlightCard from '../../Shared/SpotLightCard/SpotLightCard';

export default function Aboutme() {
  return (
    
    <SpotlightCard>
        <div className={styles.aboutMeContainer}>
            <div className={styles.profileSection}>
                <img src="https://res.cloudinary.com/dnlj4mzx6/image/upload/v1761688351/profilepicture_c5zklo.png" alt="Profile" className={styles.profileImage} />
            </div>
            <div className={styles.textSection}>
                <h2>My Path to Becoming a Software Engineer</h2>
                <p>
                    I’m a passionate and growth-oriented Full Stack Developer currently pursuing a Bachelor’s degree in Computer Science at the University of the People.
                    After completing a Full Stack Development Bootcamp at GoIT, I’ve gained solid experience in React, Node.js, Express, MongoDB, and modern API architecture, allowing me to design complete web solutions from scratch.

                    Beyond front-end and back-end development, I’m actively expanding my knowledge in artificial intelligence, Docker, and Redis, aiming to build more intelligent, scalable, and efficient systems.
                    My growing interest in AI comes from a belief that intelligent applications should not only automate tasks — but understand, guide, and adapt to human needs. That’s why I’m exploring how machine learning and AI-driven insights can enhance user experience and decision-making in real-world applications.

                    I’ve also completed professional courses from IBM and Meta, which strengthened my understanding of cloud technologies, system architecture, and modern software design principles.

                    Driven by curiosity and continuous learning, I’m working to evolve into a developer who can bridge human insight with intelligent automation, crafting applications that truly make life easier and more meaningful.
                </p>
            </div>
            <div className={styles.buttonSection}>
                <a 
                    href="https://github.com/gokhankaraduman" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.githubButton}
                >
                    <FaGithub /> GitHub
                </a>

                <a 
                    href="https://linkedin.com/in/gokhankaraduman" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.linkedinButton}
                >
                    <FaLinkedin /> LinkedIn
                </a>

                <a 
                    href="/GokhanKaraduman-Resume.pdf" 
                    download 
                    className={styles.resumeButton}
                >
                    <FaDownload /> Download Resume
                </a>
            </div>
        </div>
    </SpotlightCard>
    
  )
}
