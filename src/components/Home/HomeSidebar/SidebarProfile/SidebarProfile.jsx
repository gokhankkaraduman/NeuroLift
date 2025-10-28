import styles from './SidebarProfile.module.css';
import SpotlightCard from '../../../Shared/SpotLightCard/SpotLightCard';

export default function SidebarProfile() {
    const position = "Software Engineer";
    const age = 28;
    const gender = "Male";
    const username = "John Doe";
    const userImgUrl = "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250";
  return (

    <SpotlightCard style={{marginTop: "200px"}}>
      <div className={styles.sidebarProfile}>
        <div className={styles.profileImage}>
            <img className={styles.profileImg} src={userImgUrl} alt="User Profile" width={200} />
        </div>
        <div className={styles.profileInfo}>
            <h3 className={styles.username}>{username}</h3>
            <p className={styles.position}>{position}</p>
            <p className={styles.gender}>{gender}, {age}</p>
        </div>
    </div>
  </SpotlightCard>
  )
}
