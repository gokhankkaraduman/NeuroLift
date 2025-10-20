import styles from './SidebarProfile.module.css';

export default function SidebarProfile() {
    const username = "JohnDoe";
    const userImgUrl = "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250";
  return (

    <div className={styles.sidebarProfile}>
        <div className={styles.profileImage}>
            <img className={styles.profileImg} src={userImgUrl} alt="User Profile" width={200} />
        </div>
        <div className={styles.profileInfo}>
            <h3 className={styles.username}>{username}</h3>
        </div>
    </div>
  )
}
