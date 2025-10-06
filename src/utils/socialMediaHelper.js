import { useGoogleLogin } from '@react-oauth/google';
import FacebookLogin from '@greatsumini/react-facebook-login';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

/**
 * Social Media Helper Utility
 * Provides reusable Google and Facebook login handlers
 * 
 * Usage Examples:
 * 
 * // Basic usage with default handlers
 * const loginWithGoogle = useGoogleLoginHandler(defaultSocialLoginSuccess, defaultSocialLoginError);
 * 
 * // Custom success handler
 * const handleGoogleSuccess = (userData) => {
 *   console.log('User signed up with Google:', userData);
 *   // Add your custom logic here
 * };
 * const loginWithGoogle = useGoogleLoginHandler(handleGoogleSuccess, defaultSocialLoginError);
 * 
 * // Facebook login with custom render
 * <FacebookLogin
 *   {...useFacebookLoginProps(
 *     handleGoogleSuccess,
 *     defaultSocialLoginError,
 *     (renderProps) => (
 *       <button onClick={renderProps.onClick}>
 *         Continue with Facebook
 *       </button>
 *     )
 *   )}
 * />
 * 
 * // reCAPTCHA usage
 * const { executeRecaptchaVerification } = useRecaptchaHelper("login");
 * 
 * const handleSubmit = async () => {
 *   await executeRecaptchaVerification(
 *     (token) => {
 *       console.log('reCAPTCHA token:', token);
 *       // Handle successful verification
 *     },
 *     (error) => {
 *       console.error('reCAPTCHA error:', error);
 *       // Handle error
 *     }
 *   );
 * };
 */

// Constants
const FB_APP_ID = import.meta.env.VITE_FACEBOOK_APP_ID;

/**
 * Google Login Handler
 * @param {Function} onSuccess - Callback function when login is successful
 * @param {Function} onError - Callback function when login fails
 * @returns {Function} Google login function
 */
export const useGoogleLoginHandler = (onSuccess, onError) => {
  return useGoogleLogin({
    onSuccess: async (tokenRes) => {
      try {
        const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: { Authorization: `Bearer ${tokenRes.access_token}` },
        });
        const userInfo = await res.json();
        const userData = { ...userInfo, provider: 'google' };
        console.log('Google user info:', userData);
        onSuccess && onSuccess(userData);
      } catch (err) {
        console.error('Error fetching Google user info:', err);
        onError && onError(err);
      }
    },
    onError: (error) => {
      console.error('Google login failed:', error);
      onError && onError(error);
    },
  });
};

/**
 * Facebook Login Handler
 * @param {Function} onSuccess - Callback function when login is successful
 * @param {Function} onError - Callback function when login fails
 * @returns {Function} Facebook response handler function
 */
export const useFacebookLoginHandler = (onSuccess, onError) => {
  return (response) => {
    if (response.status !== 'unknown') {
      const userData = { ...response, provider: 'facebook' };
      console.log('Facebook user info:', userData);
      onSuccess && onSuccess(userData);
    } else {
      console.error('Facebook login failed');
      onError && onError(response);
    }
  };
};

/**
 * Facebook Login Component Props Hook
 * @param {Function} onSuccess - Callback function when login is successful
 * @param {Function} onError - Callback function when login fails
 * @param {Function} render - Render function for custom button
 * @returns {Object} FacebookLogin component props
 */
export const useFacebookLoginProps = (onSuccess, onError, render) => {
  const responseFacebook = useFacebookLoginHandler(onSuccess, onError);
  
  return {
    appId: FB_APP_ID,
    autoLoad: false,
    fields: "name,email,picture",
    callback: responseFacebook,
    render,
  };
};

/**
 * Default success handler for social media login
 * @param {Object} userData - User data from social media provider
 */
export const defaultSocialLoginSuccess = (userData) => {
  console.log('Social login successful:', userData);
  // Add your default success logic here
  // For example: redirect, store user data, etc.
};

/**
 * Default error handler for social media login
 * @param {Error} error - Error from social media provider
 */
export const defaultSocialLoginError = (error) => {
  console.error('Social login error:', error);
  // Add your default error handling logic here
  // For example: show error message, log error, etc.
};

/**
 * reCAPTCHA Helper Hook
 * Provides reCAPTCHA functionality for form submissions
 * @param {string} action - reCAPTCHA action name (e.g., 'login', 'signup')
 * @returns {Object} reCAPTCHA utilities
 */
export const useRecaptchaHelper = (action = 'submit') => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  /**
   * Execute reCAPTCHA verification
   * @param {Function} onSuccess - Success callback with token
   * @param {Function} onError - Error callback
   */
  const executeRecaptchaVerification = async (onSuccess, onError) => {
    if (!executeRecaptcha) {
      onError && onError("Captcha is not ready. Please try again.");
      return;
    }

    try {
      const token = await executeRecaptcha(action);
      if (!token) {
        onError && onError("Captcha verification failed.");
        return;
      }

      console.log(`reCAPTCHA v3 token for ${action}:`, token);
      onSuccess && onSuccess(token);
    } catch (err) {
      console.error('reCAPTCHA error:', err);
      onError && onError("Captcha error. Please try again.");
    }
  };

  return {
    executeRecaptchaVerification,
    isRecaptchaReady: !!executeRecaptcha
  };
};

/**
 * Default reCAPTCHA success handler
 * @param {string} token - reCAPTCHA token
 */
export const defaultRecaptchaSuccess = (token) => {
  console.log('reCAPTCHA verification successful:', token);
  // Add your default success logic here
  // For example: submit form, make API call, etc.
};

/**
 * Default reCAPTCHA error handler
 * @param {string} error - Error message
 */
export const defaultRecaptchaError = (error) => {
  console.error('reCAPTCHA error:', error);
  // Add your default error handling logic here
  // For example: show error message, log error, etc.
};
