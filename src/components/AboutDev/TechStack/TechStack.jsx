import styles from './TechStack.module.css';
import { 
  FaReact, FaJs, FaNodeJs, FaDocker, FaFacebookF, FaGoogle, FaCss3Alt, FaHtml5 
} from "react-icons/fa";
import { 
  SiReactrouter, SiReactos, SiFormik, SiAxios, SiRedis, SiJsonwebtokens, 
  SiCloudinary, SiSocketdotio, SiGrafana, SiPrometheus, SiApachekafka, SiExpress 
} from "react-icons/si";
import { GiQuill } from "react-icons/gi";
import { TbBrandFramerMotion } from "react-icons/tb";
import { DiMongodb } from "react-icons/di";
import { GrGateway } from "react-icons/gr";
import LogoLoop from "./LogoLoop/LogoLoop";


const techLogos = [
  { node: <FaReact />, title: "React", href: "https://react.dev" },
  { node: <SiReactrouter />, title: "React Router", href: "https://reactrouter.com/" },
  { node: <SiReactos />, title: "React Icons", href: "https://react-icons.github.io/react-icons/" },
  { node: <SiFormik />, title: "Formik", href: "https://formik.org/" },
  { node: <SiAxios />, title: "Axios", href: "https://axios-http.com/" },
  { node: <FaFacebookF />, title: "Facebook Login", href: "https://www.facebook.com/" },
  { node: <FaGoogle />, title: "Google Login", href: "https://developers.google.com/identity" },
  { node: <GiQuill />, title: "Quill", href: "https://quilljs.com/" },
  { node: <TbBrandFramerMotion />, title: "Framer Motion", href: "https://www.framer.com/motion/" },
  { node: <FaJs />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <FaNodeJs />, title: "Node.js", href: "https://nodejs.org/" },
  { node: <SiExpress />, title: "Express.js", href: "https://expressjs.com/" },
  { node: <FaDocker />, title: "Docker", href: "https://www.docker.com/" },
  { node: <SiRedis />, title: "Redis", href: "https://redis.io/" },
  { node: <DiMongodb />, title: "MongoDB", href: "https://www.mongodb.com/" },
  { node: <SiJsonwebtokens />, title: "JWT", href: "https://jwt.io/" },
  { node: <GrGateway />, title: "API Gateway", href: "https://aws.amazon.com/api-gateway/" },
  { node: <SiCloudinary />, title: "Cloudinary", href: "https://cloudinary.com/" },
  { node: <SiSocketdotio />, title: "Socket.IO", href: "https://socket.io/" },
  { node: <SiGrafana />, title: "Grafana", href: "https://grafana.com/" },
  { node: <SiPrometheus />, title: "Prometheus", href: "https://prometheus.io/" },
  { node: <SiApachekafka />, title: "Kafka", href: "https://kafka.apache.org/" },
  { node: <FaCss3Alt />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { node: <FaHtml5 />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
];

const techCategories = {
  core: [
    { node: <FaHtml5 />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { node: <FaCss3Alt />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { node: <FaJs />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  ],
  frontend: [
    { node: <FaReact />, title: "React", href: "https://react.dev" },
    { node: <SiReactrouter />, title: "React Router", href: "https://reactrouter.com/" },
    { node: <TbBrandFramerMotion />, title: "Framer Motion", href: "https://www.framer.com/motion/" },
    { node: <SiFormik />, title: "Formik", href: "https://formik.org/" },
    { node: <GiQuill />, title: "Quill", href: "https://quilljs.com/" },
    { node: <SiReactos />, title: "React Icons", href: "https://react-icons.github.io/react-icons/" },
  ],
  backend: [
    { node: <FaNodeJs />, title: "Node.js", href: "https://nodejs.org/" },
    { node: <SiExpress />, title: "Express.js", href: "https://expressjs.com/" },
    { node: <SiAxios />, title: "Axios", href: "https://axios-http.com/" },
    { node: <SiSocketdotio />, title: "Socket.IO", href: "https://socket.io/" },
  ],
  database: [
    { node: <DiMongodb />, title: "MongoDB", href: "https://www.mongodb.com/" },
    { node: <SiRedis />, title: "Redis", href: "https://redis.io/" },
  ],
  auth: [
    { node: <SiJsonwebtokens />, title: "JWT", href: "https://jwt.io/" },
    { node: <FaGoogle />, title: "Google Login", href: "https://developers.google.com/identity" },
    { node: <FaFacebookF />, title: "Facebook Login", href: "https://www.facebook.com/" },
  ],
  infrastructure: [
    { node: <FaDocker />, title: "Docker", href: "https://www.docker.com/" },
    { node: <GrGateway />, title: "API Gateway", href: "https://aws.amazon.com/api-gateway/" },
    { node: <SiCloudinary />, title: "Cloudinary", href: "https://cloudinary.com/" },
  ],
  monitoring: [
    { node: <SiApachekafka />, title: "Kafka", href: "https://kafka.apache.org/" },
    { node: <SiPrometheus />, title: "Prometheus", href: "https://prometheus.io/" },
    { node: <SiGrafana />, title: "Grafana", href: "https://grafana.com/" },
  ]
};

const categoryTitles = {
  core: "Core Technologies",
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  auth: "Authentication",
  infrastructure: "Infrastructure & Cloud",
  monitoring: "Monitoring & Messaging"
};

function TechStack() {



  return (
    <div className={styles.techStackContainer}>
      <div className={styles.techStackContent}>
        <h2 className={styles.techStackTitle} style={{ color: '#fff' }}>
          Tech Stack
        </h2>
        
        {Object.entries(techCategories).map(([category, techs], idx) => (
          <div key={category} className={styles.categorySection}>
            <h3 className={styles.categoryTitle} style={{ color: 'rgba(223, 8, 187, 0.9)' }}>
              <span className={styles.categoryNumber} style={{ color: 'rgba(223, 8, 187, 0.6)' }}>
                {idx + 1}.
              </span>
              {categoryTitles[category]}
            </h3>
            
            <div className={styles.techGrid}>
              {techs.map((tech, techIdx) => (
                <a
                  key={tech.title ?? `${category}-${techIdx}`}
                  href={tech.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.techCard}
                >
                  <div className={styles.techIcon} style={{ color: 'rgba(223, 8, 187, 0.85)' }}>
                    {tech.node}
                  </div>
                  <span className={styles.techTitle} style={{ color: '#fff' }}>
                    {tech.title}
                  </span>
                  <span className={styles.techNumber} style={{ color: 'rgba(223, 8, 187, 0.5)' }}>
                    {idx + 1}.{techIdx + 1}
                  </span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.logoLoopContainer}>
        <LogoLoop
          logos={techLogos}
          speed={50}
          direction="left"
          logoHeight={84}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#0a0a0aff"
          ariaLabel="Technology stack"
        />
      </div>
    </div>
  );
}

export default TechStack;