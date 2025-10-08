import { Formik, Form, Field, ErrorMessage } from 'formik';
import Select from 'react-select';
import { 
  FaFrown, 
  FaMeh, 
  FaSmile, 
  FaGrinStars, 
  FaSurprise, 
  FaAngry, 
  FaTired, 
  FaGrimace, 
  FaLaughBeam 
} from 'react-icons/fa';
import LocationAutocomplete from './LocationAutocomplete';
import validationSchema from '../../../../validation/StepOneSchema';
import styles from './StepOne.module.css';

const jobHoursOptions = ['<4', '4-6', '6-8', '8-10', '10+'];
const genderOptions = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Non-binary', value: 'non_binary' },
  { label: 'Transgender', value: 'transgender' },
  { label: 'Prefer not to say', value: 'prefer_not_to_say' },
  { label: 'Other', value: 'other' }
];

const moodOptions = [
  { value: 'very_sad', label: 'Very Sad', icon: <FaFrown color="#5c6bc0" /> },
  { value: 'sad', label: 'Sad', icon: <FaTired color="#7e57c2" /> },
  { value: 'slightly_sad', label: 'Slightly Sad', icon: <FaMeh color="#ba68c8" /> },
  { value: 'neutral', label: 'Neutral', icon: <FaMeh color="#9e9e9e" /> },
  { value: 'slightly_happy', label: 'Slightly Happy', icon: <FaSmile color="#81c784" /> },
  { value: 'happy', label: 'Happy', icon: <FaSmile color="#66bb6a" /> },
  { value: 'very_happy', label: 'Very Happy', icon: <FaGrinStars color="#4caf50" /> },
  { value: 'excited', label: 'Excited', icon: <FaLaughBeam color="#ffb300" /> },
  { value: 'surprised', label: 'Surprised', icon: <FaSurprise color="#ff7043" /> },
  { value: 'angry', label: 'Angry', icon: <FaAngry color="#ef5350" /> },
  { value: 'overjoyed', label: 'Overjoyed', icon: <FaGrimace color="#26a69a" /> }
];

function MoodSelect({ field, form }) {
  return (
    <Select
      options={moodOptions}
      value={moodOptions.find(option => option.value === field.value)}
      onChange={option => form.setFieldValue(field.name, option.value)}
      classNamePrefix="mood-select"
      placeholder="Select your mood..."
      menuPlacement="auto"
      maxMenuHeight={250}
      getOptionLabel={option => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {option.icon} <span>{option.label}</span>
        </div>
      )}
      styles={{
        container: (base) => ({
          ...base,
          width: '100%',
        }),
        control: (base, state) => ({
          ...base,
          width: '100%',
          backgroundColor: 'var(--color-bg-surface)',
          borderColor: state.isFocused 
            ? 'var(--color-brand-primary)' 
            : 'var(--color-border-subtle)',
          borderWidth: state.isFocused ? '2px' : '1px',
          boxShadow: 'none',
          color: 'var(--color-text-default)',
          minHeight: '44px',
          height: '44px',
          borderRadius: 'var(--border-radius-base)',
          transition: 'all 0.2s ease-in-out',
          cursor: 'pointer',
          '&:hover': {
            borderColor: 'var(--color-brand-primary)',
            borderWidth: '1.5px',
          },
        }),
        valueContainer: (base) => ({
          ...base,
          padding: '0 var(--spacing-lg)',
          height: '44px',
        }),
        input: (base) => ({
          ...base,
          margin: 0,
          padding: 0,
          color: 'var(--color-text-default)',
        }),
        singleValue: (base) => ({
          ...base,
          color: 'var(--color-text-default)',
          display: 'flex',
          alignItems: 'center',
          margin: 0,
        }),
        indicatorSeparator: () => ({
          display: 'none',
        }),
        indicatorsContainer: (base) => ({
          ...base,
          height: '44px',
        }),
        dropdownIndicator: (base) => ({
          ...base,
          color: 'var(--color-text-secondary)',
          padding: '8px',
          '&:hover': {
            color: 'var(--color-text-default)',
          },
        }),
        menu: (base) => ({
          ...base,
          backgroundColor: 'var(--color-bg-elevated)',
          borderRadius: 'var(--border-radius-base)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
          border: '1px solid var(--color-border-subtle)',
          marginTop: '4px',
          overflow: 'hidden',
          zIndex: 100,
        }),
        menuList: (base) => ({
          ...base,
          padding: '8px',
          maxHeight: '250px',
          overflowY: 'auto',
          '::-webkit-scrollbar': {
            width: '8px',
          },
          '::-webkit-scrollbar-track': {
            background: 'rgba(0, 0, 0, 0.1)',
            borderRadius: '4px',
          },
          '::-webkit-scrollbar-thumb': {
            background: 'var(--color-border-default)',
            borderRadius: '4px',
          },
          '::-webkit-scrollbar-thumb:hover': {
            background: 'var(--color-text-secondary)',
          },
        }),
        option: (base, state) => ({
          ...base,
          backgroundColor: state.isSelected
            ? 'var(--color-brand-primary)'
            : state.isFocused
            ? 'var(--color-bg-hover)'
            : 'var(--color-bg-elevated)',
          color: 'var(--color-text-default)',
          cursor: 'pointer',
          padding: '12px',
          borderRadius: '4px',
          transition: 'background-color 0.15s ease',
          '&:active': {
            backgroundColor: 'var(--color-brand-primary)',
          },
        }),
        placeholder: (base) => ({
          ...base,
          color: 'var(--color-text-secondary)',
          margin: 0,
        }),
      }}
    />
  );
}

export default function StepOne({ nextStep, updateFormData, formData }) {
  return (
    <div className={styles.stepContainer}>
      <Formik
        // ✅ initialValues'a mevcut formData'yı ekle
        initialValues={{
          age: formData.age || '',
          gender: formData.gender || '',
          job: formData.job || '',
          jobHours: formData.jobHours || '',
          mood: formData.mood || '',
          location: formData.location || ''
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          // ✅ Önce formData'yı güncelle
          updateFormData(values);
          // ✅ Sonra next step'e geç
          nextStep();
          // ✅ Console log artık güncel değerleri gösterecek
          console.log('Step One Data:', values);
        }}
      >
        {({ setFieldValue, values }) => (
          <Form className={styles.formWrapper}>
            
            <Field 
              type="number" 
              name="age" 
              placeholder="Your age in years, e.g., 29" 
              min="18" 
              max="100" 
              className={styles.inputField}
            />
            <ErrorMessage name="age" component="div" className={styles.errorBox} />

            <Field as="select" name="gender" className={styles.inputField}>
              <option value="" disabled>Select your gender</option>
              {genderOptions.map((option, idx) => (
                <option key={idx} value={option.value}>{option.label}</option>
              ))}
            </Field>
            <ErrorMessage name="gender" component="div" className={styles.errorBox} />

            <Field 
              type="text" 
              name="job" 
              placeholder="Enter your current job title" 
              className={styles.inputField}
            />
            <ErrorMessage name="job" component="div" className={styles.errorBox} />

            <Field as="select" name="jobHours" className={styles.inputField}>
              <option value="" disabled>Select hours</option>
              {jobHoursOptions.map((s, idx) => (
                <option key={idx} value={s}>{s}</option>
              ))}
            </Field>
            <ErrorMessage name="jobHours" component="div" className={styles.errorBox} />

            <LocationAutocomplete
              onSelect={(location) => setFieldValue('location', location.display_name)}
            />
            <ErrorMessage name="location" component="div" className={styles.errorBox} />

            <Field name="mood" component={MoodSelect} />
            <ErrorMessage name="mood" component="div" className={styles.errorBox} />

            <button type="submit" className={styles.submitButton}>Next</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}