
import signupPageImg from '../../assets/images/singup-page.jpg';
import logo from '../../assets/logo.png';
import styles from './Signup.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { RiUserAddLine } from 'react-icons/ri';
import { useState } from 'react';
import { useGoogleLoginHandler, useFacebookLoginProps, useRecaptchaHelper, defaultSocialLoginSuccess, defaultSocialLoginError } from '../../utils/socialMediaHelper';
import googleIcon from '../../assets/google.png';
import FacebookLogin from '@greatsumini/react-facebook-login';
import { ImFacebook2 } from 'react-icons/im';
import { NavLink } from 'react-router-dom';
import SignupSchema from '../../validation/SignupSchema';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

// ---------------------------CONSTANTS --------------------------
const RECAPTCHA_ID = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

function SignupForm() {
  // --------------------------------STATES--------------------------
  const [animate, setAnimate] = useState(false);
  const [error, setSignupError] = useState("");

  //!-----------------------SOCİAL MEDİA LOGİN HANDLER---------------------

  //SOCIAL MEDIA LOGIN HANDLERS
  const loginWithGoogle = useGoogleLoginHandler(defaultSocialLoginSuccess, defaultSocialLoginError);
  
  //RECAPTCHA HANDLER
  const { executeRecaptchaVerification } = useRecaptchaHelper("signup");

  return (
    <section className={styles.signupContainer}>
      <div className={styles.imgSection}>
        <img src={signupPageImg} alt="signup-page" className={styles.signupImage} />
      </div>
      <div className={styles.signupFormContainer}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="logo" className={styles.logo} />
          <h3 className={styles.logoText}>
            Neuro Lift.<span className={styles.logoTextHighlight}>Ai</span>
          </h3>
        </div>

        <div className={styles.formWrapper}>
          <h3 className={styles.welcomeText}>
            Start your journey with us and unlock your potential.
          </h3>

          <Formik
            initialValues={{ 
              firstName: '', 
              lastName: '', 
              email: '', 
              password: '', 
              confirmPassword: '', 
              terms: false 
            }}
            validationSchema={SignupSchema}
            onSubmit={async (values, actions) => {
              await executeRecaptchaVerification(
                (token) => {
                  // Success handler
                  console.log("reCAPTCHA v3 token for signup:", token);
                  console.log("values:", values);
                  setAnimate(true);
                  setTimeout(() => setAnimate(false), 1200);
                  actions.resetForm();
                  setSignupError("");
                },
                (error) => {
                  // Error handler
                  setSignupError(error);
                }
              );
              actions.setSubmitting(false);
            }}
          >
            {() => (
              <Form className={styles.form}>
                <div className={styles.nameFields}>
                  <Field
                    name="firstName"
                    type="text"
                    className={styles.nameField}
                    placeholder="First Name"
                    style={{ 
                      color: 'var(--color-text-default)',
                      backgroundColor: 'var(--color-bg-surface)'
                    }}
                  />
                  <Field
                    name="lastName"
                    type="text"
                    className={styles.nameField}
                    placeholder="Last Name"
                    style={{ 
                      color: 'var(--color-text-default)',
                      backgroundColor: 'var(--color-bg-surface)'
                    }}
                  />
                </div>
                <ErrorMessage name="firstName">
                  {(msg) => <div className={styles.errorBox}>{msg}</div>}
                </ErrorMessage>
                <ErrorMessage name="lastName">
                  {(msg) => <div className={styles.errorBox}>{msg}</div>}
                </ErrorMessage>

                <Field
                  name="email"
                  type="email"
                  className={styles.inputField}
                  placeholder="name@example.com"
                  style={{ 
                    color: 'var(--color-text-default)',
                    backgroundColor: 'var(--color-bg-surface)'
                  }}
                />
                <ErrorMessage name="email">
                  {(msg) => <div className={styles.errorBox}>{msg}</div>}
                </ErrorMessage>

                <Field
                  name="password"
                  type="password"
                  className={styles.inputField}
                  placeholder="••••••••"
                  style={{ 
                    color: 'var(--color-text-default)',
                    backgroundColor: 'var(--color-bg-surface)'
                  }}
                />
                <ErrorMessage name="password">
                  {(msg) => <div className={styles.errorBox}>{msg}</div>}
                </ErrorMessage>

                <Field
                  name="confirmPassword"
                  type="password"
                  className={styles.inputField}
                  placeholder="Confirm Password"
                  style={{ 
                    color: 'var(--color-text-default)',
                    backgroundColor: 'var(--color-bg-surface)'
                  }}
                />
                <ErrorMessage name="confirmPassword">
                  {(msg) => <div className={styles.errorBox}>{msg}</div>}
                </ErrorMessage>

                <div className={styles.termsContainer}>
                  <label className={styles.termsLabel}>
                    <div className={styles.termsCheckbox}>
                      <Field
                        name="terms"
                        type="checkbox"
                      />
                      <span className={styles.checkmark}></span>
                    </div>
                    I agree to the{' '}
                    <NavLink to="/privacy-policy" className={styles.privacyLink}>
                      Terms and Conditions
                    </NavLink>
                    {' '}and{' '}
                    <NavLink to="/privacy-policy" className={styles.privacyLink}>
                      Privacy Policy
                    </NavLink>
                  </label>
                </div>
                <ErrorMessage name="terms">
                  {(msg) => <div className={styles.errorBox}>{msg}</div>}
                </ErrorMessage>

                {error && <div className={styles.errorBox}>{error}</div>}

                <button type="submit" className={styles.submitButton}>
                  Sign Up
                  <RiUserAddLine
                    className={`${styles.icon} ${animate ? styles.animate : ''}`}
                  />
                </button>
              </Form>
            )}
          </Formik>

          <div className={styles.orSignupContainer}>
            <p className={styles.orSignupWith}>Or Sign Up with</p>

            <button
              type="button"
              onClick={() => loginWithGoogle()}
              className={styles.googleButton}
            >
              <img src={googleIcon} alt="Google" className={styles.googleIcon} />
              Continue with Google
            </button>

            <FacebookLogin
              {...useFacebookLoginProps(
                defaultSocialLoginSuccess,
                defaultSocialLoginError,
                (renderProps) => (
                  <button
                    type="button"
                    onClick={renderProps.onClick}
                    className={styles.facebookButton}
                  >
                    <ImFacebook2 className={styles.facebookIcon} />
                    Continue with Facebook
                  </button>
                )
              )}
            />

            {/* 🔹 LOGIN LINK */}
            <div className={styles.loginContainer}>
              <p>
                Already have an account?{' '}
                <NavLink to="/login" className={styles.privacyLink}>
                  Log in
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 🔹 PROVİDER RUN JUST ON SIGNUP PAGE
export default function SignupPage() {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={RECAPTCHA_ID}
      scriptProps={{ async: true, defer: true }}
    >
      <SignupForm />
    </GoogleReCaptchaProvider>
  );
}
