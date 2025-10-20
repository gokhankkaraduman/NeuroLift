import TextType from "./TextType/TextType";
import style from './WelcomeText.module.css';

export default function WelcomeText() {

  const user = "Gokhan"; // Dummy user data for demonstration

  return (
    <div className={style.welcomeText}>
      <TextType 
        className={style.textType}
        text={[
          `Welcome to ${user}! We're truly glad to have you here.`,
          `Welcome to ${user}! This is your space to create, grow, and make an impact.`,
          `Welcome to ${user}! Every great journey starts with a single step and you're already on your way.`,
          `Welcome to ${user}! Take a deep breath, stay curious, and enjoy exploring the platform.`,
          `Welcome to ${user}! We believe in you. Let’s build something amazing together!`
        ]}
      />
    </div>
  );
}
