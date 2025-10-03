import loginPageImg from '../../assets/images/login-page.png';
import logo from '../../assets/logo.png';
import styles from './Login.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik'; 
import { RiLoginCircleLine } from 'react-icons/ri';
import { useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import googleIcon from '../../assets/google.png';
import FacebookLogin from '@greatsumini/react-facebook-login';
import { ImFacebook2 } from 'react-icons/im';
import { NavLink } from 'react-router-dom';
import LoginSchema from '../../validation/LoginSchema';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';

// ---------------------------CONSTANTS --------------------------
const RECAPTCHA_ID = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
const FB_APP_ID = import.meta.env.VITE_FACEBOOK_APP_ID;

function LoginForm() {
  // --------------------------------STATES--------------------------
  const [animate, setAnimate] = useState(false);
  const [error, setLoginError] = useState(""); 
  const { executeRecaptcha } = useGoogleReCaptcha();

  const RECAPTCHA_ACTION = "login";

  //!-----------------------SOCİAL MEDİA LOGİN HANDLER---------------------

  //FACEBOOK LOGİN HANDLER
  const responseFacebook = (response) => {
    if (response.status !== 'unknown') {
      console.log('Facebook user info:', { ...response, provider: 'facebook' });
    } else {
      console.error('Facebook login failed');
    }
  };

  //GOOGLE LOGİN HANDLER
  const loginWithGoogle = useGoogleLogin({
    onSuccess: async (tokenRes) => {
      try {
        const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: { Authorization: `Bearer ${tokenRes.access_token}` },
        });
        const userInfo = await res.json();
        console.log('Google user info:', { ...userInfo, provider: 'google' });
      } catch (err) {
        console.error('Error fetching Google user info:', err);
      }
    },
    onError: () => console.error('Google login failed'),
  });

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
            validationSchema={LoginSchema}
            onSubmit={async (values, actions) => {
              if (!executeRecaptcha) {
                setLoginError("Captcha is not ready. Please try again.");
                actions.setSubmitting(false);
                return;
              }

              try {
                const token = await executeRecaptcha(RECAPTCHA_ACTION);
                if (!token) {
                  setLoginError("Captcha verification failed.");
                  actions.setSubmitting(false);
                  return;
                }

                console.log("reCAPTCHA v3 token:", token);

                setAnimate(true);
                setTimeout(() => setAnimate(false), 1200);
                actions.resetForm();
                setLoginError("");
              } catch (err) {
                console.error(err);
                setLoginError("Captcha error. Please try again.");
              } finally {
                actions.setSubmitting(false);
              }
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
                <ErrorMessage name="email">
                  {(msg) => <div className={styles.errorBox}>{msg}</div>}
                </ErrorMessage>

                <Field
                  name="password"
                  type="password"
                  className={styles.inputField}
                  placeholder="••••••••"
                />
                <ErrorMessage name="password">
                  {(msg) => <div className={styles.errorBox}>{msg}</div>}
                </ErrorMessage>

                {error && <div className={styles.errorBox}>{error}</div>}

                <button type="submit" className={styles.submitButton}>
                  Log In
                  <RiLoginCircleLine
                    className={`${styles.icon} ${animate ? styles.animate : ''}`}
                  />
                </button>
              </Form>
            )}
          </Formik>

          <div className={styles.orLoginContainer}>
            <p className={styles.orLoginWith}>Or Log In with</p>

            <button
              type="button"
              onClick={() => loginWithGoogle()}
              className={styles.googleButton}
            >
              <img src={googleIcon} alt="Google" className={styles.googleIcon} />
              Continue with Google
            </button>

            <FacebookLogin
              appId={FB_APP_ID}
              autoLoad={false}
              fields="name,email,picture"
              callback={responseFacebook}
              render={(renderProps) => (
                <button
                  type="button"
                  onClick={renderProps.onClick}
                  className={styles.facebookButton}
                >
                  <ImFacebook2 className={styles.facebookIcon} />
                  Continue with Facebook
                </button>
              )}
            />

            <div className={styles.privacyContainer}>
              <p>
                By logging in, you agree to our{' '}
                <NavLink to="/privacy-policy" className={styles.privacyLink}>
                  Privacy Policy
                </NavLink>
                .
              </p>
            </div>

            {/* 🔹 SIGNUP LINK */}
            <div className={styles.signupContainer}>
              <p>
                Don’t have an account?{' '}
                <NavLink to="/signup" className={styles.privacyLink}>
                  Sign up
                </NavLink>
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

// 🔹 PROVİDER RUN JUST ON LOGİN PAGE
export default function LoginPage() {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={RECAPTCHA_ID}
      scriptProps={{ async: true, defer: true }}
    >
      <LoginForm />
    </GoogleReCaptchaProvider>
  );
}
