import { Formik, Form, Field, ErrorMessage } from 'formik';
import Select from 'react-select';
import { useState } from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaTumblr, FaSnapchat, FaTiktok, FaLinkedin, FaHashtag, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import validationSchema from '../../../../validation/StepTwoSchema';
import styles from './StepTwo.module.css';

const socialOptions = [
  { value: 'instagram', label: 'Instagram', icon: <FaInstagram color="#C13584" /> },
  { value: 'facebook', label: 'Facebook', icon: <FaFacebook color="#1877F2" /> },
  { value: 'twitter', label: 'Twitter', icon: <FaTwitter color="#1DA1F2" /> },
  { value: 'tumblr', label: 'Tumblr', icon: <FaTumblr color="#34526f" /> },
  { value: 'threads', label: 'Threads', icon: <FaHashtag color="#000000" /> },
  { value: 'snapchat', label: 'Snapchat', icon: <FaSnapchat color="#FFFC00" /> },
  { value: 'tiktok', label: 'TikTok', icon: <FaTiktok color="#000000" /> },
  { value: 'linkedin', label: 'LinkedIn', icon: <FaLinkedin color="#0A66C2" /> }
];

function SocialSelect({ field, form }) {
  return (
    <Select
      options={socialOptions}
      isMulti
      value={socialOptions.filter(option => field.value?.includes(option.value))}
      onChange={options => form.setFieldValue(field.name, options.map(o => o.value))}
      classNamePrefix="social-select"
      placeholder="Select platforms..."
      className={styles.selectWrapper}
      getOptionLabel={option => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {option.icon} <span>{option.label}</span>
        </div>
      )}
      // menuIsOpen kaldırıldı - normal dropdown davranışı
      styles={{
        control: (base, state) => ({
          ...base,
          minHeight: '40px',
          height: '40px',
          backgroundColor: 'var(--color-bg-surface)',
          border: state.isFocused ? '2px solid var(--color-brand-primary)' : '1px solid var(--color-border-subtle)',
          borderRadius: 'var(--border-radius-base)',
          boxShadow: state.isFocused ? `0 0 0 2px var(--color-brand-primary)33` : 'none',
          cursor: 'pointer',
          transition: 'all 0.2s ease-in-out',
          '&:hover': { borderColor: 'var(--color-brand-primary)' },
          fontSize: 'var(--font-size-sm)',
        }),
        valueContainer: base => ({
          ...base,
          padding: '0 var(--spacing-md)',
          height: '40px',
        }),
        multiValue: base => ({
          ...base,
          backgroundColor: 'var(--color-brand-primary)',
          borderRadius: 'var(--border-radius-base)',
          padding: '2px 6px',
          fontSize: 'var(--font-size-sm)',
        }),
        multiValueLabel: base => ({
          ...base,
          color: '#fff',
          fontSize: 'var(--font-size-sm)',
        }),
        multiValueRemove: base => ({
          ...base,
          color: 'var(--color-text-secondary)',
          ':hover': { backgroundColor: 'var(--color-brand-primary)', color: '#fff' },
        }),
        placeholder: base => ({
          ...base,
          color: 'var(--color-text-secondary)',
          fontSize: 'var(--font-size-sm)',
        }),
        dropdownIndicator: base => ({
          ...base,
          color: 'var(--color-text-secondary)',
        }),
        indicatorSeparator: base => ({
          ...base,
          backgroundColor: 'var(--color-border-subtle)',
        }),
        menu: base => ({
          ...base,
          zIndex: 1000,
          fontSize: 'var(--font-size-sm)',
          backgroundColor: 'var(--color-bg-surface)',
          border: '1px solid var(--color-border-subtle)',
          borderRadius: 'var(--border-radius-base)',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          maxHeight: '300px',
          overflowY: 'auto',
        }),
        option: (base, state) => ({
          ...base,
          fontSize: 'var(--font-size-sm)',
          padding: 'var(--spacing-sm) var(--spacing-md)',
          backgroundColor: state.isSelected 
            ? 'var(--color-brand-primary)' 
            : state.isFocused 
            ? 'var(--color-bg-elevated)' 
            : 'var(--color-bg-surface)',
          color: state.isSelected 
            ? '#fff' 
            : 'var(--color-text-default)',
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: state.isSelected 
              ? 'var(--color-brand-primary)' 
              : 'var(--color-bg-elevated)',
          },
        }),
        multiValueContainer: base => ({
          ...base,
          maxWidth: 'none',
          overflow: 'visible',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '4px',
        }),
      }}
    />
  );
}


const routineOptions = [
  { value: 'none', label: 'None' },
  { value: 'light', label: 'Light' },
  { value: 'moderate', label: 'Moderate' },
  { value: 'heavy', label: 'Heavy' },
];

export default function StepTwo({ nextStep, prevStep, formData, updateFormData }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div className={styles.stepContainer}>
      <Formik
        initialValues={{
          doesSports: formData.doesSports || '',
          weeklyExerciseHours: formData.weeklyExerciseHours || '',
          hobbies: formData.hobbies || '',
          socialMediaUse: formData.socialMediaUse || '',
          socialMediaHours: formData.socialMediaHours || '',
          socialPlatforms: formData.socialPlatforms || [],
          morningRoutine: formData.morningRoutine || '',
          eveningRoutine: formData.eveningRoutine || '',
          coffeeIntake: formData.coffeeIntake || '',
          sleepQuality: formData.sleepQuality || '',
          meditation: formData.meditation || ''
        }}
        
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          setIsSubmitting(true);
          console.log('Step Two Data:', values);
          updateFormData(values);
          
          // Animasyon için kısa bir gecikme
          setTimeout(() => {
            nextStep();
          }, 1200);
        }}
      >
        {() => (
          <Form className={styles.formWrapper}>

            {/* Row 1: Exercise + Exercise Hours */}
            <div className={styles.fieldRow}>
              <div className={styles.fieldGroup}>
                <label className={styles.label} htmlFor="doesSports">Do you exercise regularly?</label>
                <Field as="select" name="doesSports" id="doesSports" className={styles.inputField}>
                  <option value="" disabled>Select your exercise preference</option>
                  <option value="yes">Yes, I exercise regularly</option>
                  <option value="no">No, I don't exercise</option>
                </Field>
                <ErrorMessage name="doesSports" component="div" className={styles.errorMessage} />
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label} htmlFor="weeklyExerciseHours">How many hours per week do you exercise?</label>
                <Field type="number" name="weeklyExerciseHours" id="weeklyExerciseHours" className={styles.inputField} placeholder="Enter hours (e.g., 5 hours per week)" />
                <ErrorMessage name="weeklyExerciseHours" component="div" className={styles.errorMessage} />
              </div>
            </div>

            {/* Row 2: Social Media + Social Media Hours */}
            <div className={styles.fieldRow}>
              <div className={styles.fieldGroup}>
                <label className={styles.label} htmlFor="socialMediaUse">Do you use social media?</label>
                <Field as="select" name="socialMediaUse" id="socialMediaUse" className={styles.inputField}>
                  <option value="" disabled>Select your social media usage</option>
                  <option value="yes">Yes, I use social media</option>
                  <option value="no">No, I don't use social media</option>
                </Field>
                <ErrorMessage name="socialMediaUse" component="div" className={styles.errorMessage} />
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label} htmlFor="socialMediaHours">How many hours per week on social media?</label>
                <Field type="number" name="socialMediaHours" id="socialMediaHours" className={styles.inputField} placeholder="Enter hours (e.g., 10 hours per week)" />
                <ErrorMessage name="socialMediaHours" component="div" className={styles.errorMessage} />
              </div>
            </div>

            {/* Row 3: Social Media Platforms + Morning Routine */}
            <div className={styles.fieldRow}>
              <div className={styles.fieldGroup}>
                <label className={styles.label} htmlFor="socialPlatforms">Which social media platforms do you use?</label>
                <Field name="socialPlatforms" component={SocialSelect} />
                <ErrorMessage name="socialPlatforms" component="div" className={styles.errorMessage} />
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label} htmlFor="morningRoutine">What's your morning routine intensity?</label>
                <Field as="select" name="morningRoutine" id="morningRoutine" className={styles.inputField}>
                  <option value="" disabled>Select your morning routine intensity</option>
                  {routineOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                </Field>
                <ErrorMessage name="morningRoutine" component="div" className={styles.errorMessage} />
              </div>
            </div>

            {/* Row 4: Evening Routine + Coffee */}
            <div className={styles.fieldRow}>
              <div className={styles.fieldGroup}>
                <label className={styles.label} htmlFor="eveningRoutine">What's your evening routine intensity?</label>
                <Field as="select" name="eveningRoutine" id="eveningRoutine" className={styles.inputField}>
                  <option value="" disabled>Select your evening routine intensity</option>
                  {routineOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                </Field>
                <ErrorMessage name="eveningRoutine" component="div" className={styles.errorMessage} />
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label} htmlFor="coffeeIntake">How many cups of coffee do you drink daily?</label>
                <Field type="number" name="coffeeIntake" id="coffeeIntake" className={styles.inputField} placeholder="Enter number of cups (e.g., 2 cups per day)" />
                <ErrorMessage name="coffeeIntake" component="div" className={styles.errorMessage} />
              </div>
            </div>

            {/* Row 5: Sleep Quality + Meditation */}
            <div className={styles.fieldRow}>
              <div className={styles.fieldGroup}>
                <label className={styles.label} htmlFor="sleepQuality">How would you rate your sleep quality?</label>
                <Field as="select" name="sleepQuality" id="sleepQuality" className={styles.inputField}>
                  <option value="" disabled>Select your sleep quality rating</option>
                  <option value="poor">Poor - I don't sleep well</option>
                  <option value="average">Average - My sleep is okay</option>
                  <option value="good">Good - I sleep well most nights</option>
                  <option value="excellent">Excellent - I always sleep great</option>
                </Field>
                <ErrorMessage name="sleepQuality" component="div" className={styles.errorMessage} />
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label} htmlFor="meditation">Do you meditate regularly?</label>
                <Field as="select" name="meditation" id="meditation" className={styles.inputField}>
                  <option value="" disabled>Select your meditation practice</option>
                  <option value="yes">Yes, I meditate regularly</option>
                  <option value="no">No, I don't meditate</option>
                </Field>
                <ErrorMessage name="meditation" component="div" className={styles.errorMessage} />
              </div>
            </div>

            {/* Row 6: Hobbies */}
            <div className={styles.fieldRow}>
              <div className={styles.fieldGroup}>
                <label className={styles.label} htmlFor="hobbies">What are your hobbies and interests?</label>
                <Field type="text" name="hobbies" id="hobbies" className={styles.inputField} placeholder="Describe your hobbies (e.g., reading, painting, gaming, sports)" />
                <ErrorMessage name="hobbies" component="div" className={styles.errorMessage} />
              </div>
            </div>

            <div className={styles.buttonGroup}>
              <button type="button" onClick={prevStep} className={styles.prevButton}>
                <FaArrowLeft className={styles.buttonIcon} />
                Previous
              </button>
              <button 
                type="submit" 
                className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ''}`}
                disabled={isSubmitting}
              >
                <span>Next</span>
                <FaArrowRight className={styles.buttonIcon} />
              </button>
            </div>

          </Form>
        )}
      </Formik>
    </div>
  );
}
