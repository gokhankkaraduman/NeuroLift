import { Formik, Form, Field, ErrorMessage } from 'formik';
import Select from 'react-select';
import { FaCheck, FaArrowLeft } from 'react-icons/fa';
import validationSchema from '../../../../validation/StepThreeSchema';
import styles from './StepThree.module.css';

const goalPriorityOptions = [
  { value: 'high', label: 'High Priority' },
  { value: 'medium', label: 'Medium Priority' },
  { value: 'low', label: 'Low Priority' }
];

const motivationLevelOptions = [
  { value: 'very_high', label: 'Very High' },
  { value: 'high', label: 'High' },
  { value: 'medium', label: 'Medium' },
  { value: 'low', label: 'Low' },
  { value: 'very_low', label: 'Very Low' }
];

const growthAreaOptions = [
  { value: 'career', label: 'Career Development' },
  { value: 'health', label: 'Health & Fitness' },
  { value: 'relationships', label: 'Relationships' },
  { value: 'education', label: 'Education & Learning' },
  { value: 'finance', label: 'Financial Growth' },
  { value: 'spiritual', label: 'Spiritual Growth' },
  { value: 'creative', label: 'Creative Skills' },
  { value: 'social', label: 'Social Skills' },
  { value: 'other', label: 'Other' }
];

export default function StepThree({ prevStep, formData, updateFormData, onComplete }) {
  return (
    <div className={styles.stepContainer}>
      <Formik
        initialValues={{
          shortTermGoals: formData.shortTermGoals || '',
          longTermGoals: formData.longTermGoals || '',
          goalPriority: formData.goalPriority || '',
          motivationLevel: formData.motivationLevel || '',
          growthArea: formData.growthArea || ''
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          updateFormData(values);
          onComplete();
          console.log('Step Three Data:', values);
        }}
      >
        {({ values }) => (
          <Form className={styles.formWrapper}>
            <div className={styles.fieldGroup}>
              <label htmlFor="shortTermGoals" className={styles.label}>
                Short-term Goals (3-6 months)
              </label>
              <Field 
                as="textarea" 
                name="shortTermGoals" 
                id="shortTermGoals" 
                className={styles.textareaField}
                placeholder="Describe your short-term goals (e.g., lose 10 pounds, learn a new skill, save $5000)"
                rows="3"
              />
              <ErrorMessage name="shortTermGoals" component="div" className={styles.errorBox} />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="longTermGoals" className={styles.label}>
                Long-term Goals (1-3 years)
              </label>
              <Field 
                as="textarea" 
                name="longTermGoals" 
                id="longTermGoals" 
                className={styles.textareaField}
                placeholder="Describe your long-term goals (e.g., start a business, buy a house, travel the world)"
                rows="3"
              />
              <ErrorMessage name="longTermGoals" component="div" className={styles.errorBox} />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="goalPriority" className={styles.label}>
                Goal Priority Level
              </label>
              <Field as="select" name="goalPriority" id="goalPriority" className={styles.inputField}>
                <option value="" disabled>Select your goal priority</option>
                {goalPriorityOptions.map((option, idx) => (
                  <option key={idx} value={option.value}>{option.label}</option>
                ))}
              </Field>
              <ErrorMessage name="goalPriority" component="div" className={styles.errorBox} />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="motivationLevel" className={styles.label}>
                Current Motivation Level
              </label>
              <Field as="select" name="motivationLevel" id="motivationLevel" className={styles.inputField}>
                <option value="" disabled>Select your motivation level</option>
                {motivationLevelOptions.map((option, idx) => (
                  <option key={idx} value={option.value}>{option.label}</option>
                ))}
              </Field>
              <ErrorMessage name="motivationLevel" component="div" className={styles.errorBox} />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="growthArea" className={styles.label}>
                Primary Growth Area
              </label>
              <Field as="select" name="growthArea" id="growthArea" className={styles.inputField}>
                <option value="" disabled>Select your main growth area</option>
                {growthAreaOptions.map((option, idx) => (
                  <option key={idx} value={option.value}>{option.label}</option>
                ))}
              </Field>
              <ErrorMessage name="growthArea" component="div" className={styles.errorBox} />
            </div>

            <div className={styles.buttonGroup}>
              <button 
                type="button" 
                onClick={prevStep}
                className={styles.prevButton}
              >
                <FaArrowLeft className={styles.buttonIcon} />
                <span>Previous</span>
              </button>

              <button 
                type="submit" 
                className={styles.completeButton}
              >
                <FaCheck className={styles.buttonIcon} />
                <span>Complete Profile</span>
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
