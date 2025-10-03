import loginPageImg from '../../assets/images/login-page.png';
import logo from '../../assets/logo.png';
import styles from './Login.module.css';
import { Formik, Form, Field } from 'formik';
import { RiLoginCircleLine } from 'react-icons/ri';
import { useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import googleIcon from '../../assets/google.png';
import FacebookLogin from '@greatsumini/react-facebook-login';
import { NavLink } from 'react-router-dom';



export default function Login() {
  // STATES
  const [animate, setAnimate] = useState(false);


  // FACEBOOK LOGIN HANDLER
  const FB_APP_ID = import.meta.env.VITE_FACEBOOK_APP_ID;

  const responseFacebook = (response) => {
    if (response.status !== 'unknown') {
      const userWithProvider = {
        ...response,
        provider: 'facebook',
      };
      console.log('Facebook user info:', userWithProvider);
    } else {
      console.error('Facebook login failed');
    }
  };

  // GOOGLE LOGIN HANDLER
  const loginWithGoogle = useGoogleLogin({
    onSuccess: async (tokenRes) => {
      try {
        const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: {
            Authorization: `Bearer ${tokenRes.access_token}`,
          },
        });
        const userInfo = await res.json();

        const userWithProvider = {
          ...userInfo,
          provider: 'google',
        };

        console.log('Google user info:', userWithProvider);
      } catch (error) {
        console.error('Error fetching Google user info:', error);
      }
    },
    onError: () => {
      console.error('Google login failed');
    },
  });

  // LOGIN BUTTON ANIMATION
  const handleLoginAnimation = (e) => {
    e.preventDefault();
    setAnimate(true);
    setTimeout(() => setAnimate(false), 1200);
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginFormContainer}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="logo" className={styles.logo} />
          <h3 className={styles.logoText}>
            Neuro Lift.<span className={styles.logoTextHighlight}>Ai</span>
          </h3>
        </div>

        <div className={styles.formWrapper}>
          <h3 className={styles.welcomeText}>
            Pick up your journey back to yourself, right where you left off.
          </h3>

          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {() => (
              <Form className={styles.form}>
                <Field
                  name="email"
                  type="email"
                  className={styles.inputField}
                  placeholder="name@example.com"
                />
                <Field
                  name="password"
                  type="password"
                  className={styles.inputField}
                  placeholder="••••••••"
                />
                <button
                  type="submit"
                  className={styles.submitButton}
                  onClick={handleLoginAnimation}
                >
                  Log In{' '}
                  <RiLoginCircleLine
                    className={`${styles.icon} ${animate ? styles.animate : ''}`}
                  />
                </button>
              </Form>
            )}
          </Formik>

          <div className={styles.orLoginContainer}>
            <p className={styles.orLoginWith}>Or Log In with</p>

            <button onClick={() => loginWithGoogle()} className={styles.googleButton}>
              <img src={googleIcon} alt="Google" className={styles.googleIcon} />
              Continue with Google
            </button>

            <FacebookLogin
              appId={FB_APP_ID}
              autoLoad={false}
              fields="name,email,picture"
              callback={responseFacebook}
              icon="fa-facebook"
              textButton="Continue with Facebook"
              className={styles.facebookButton}
            />
            <div>
                <p>
                  By logging in, you agree to our{" "}
                  <NavLink to="/privacy-policy" className={styles.privacyLink}>
                    Privacy Policy
                  </NavLink>
                  .
                </p>
            </div>
            
          </div>
        </div>
      </div>
        
      <div>
        <img src={loginPageImg} alt="login-page" className={styles.loginImage} />
      </div>
    </div>
  );
}