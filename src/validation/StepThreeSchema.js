import * as Yup from 'yup';

const StepThreeSchema = Yup.object().shape({
  // Kısa vadeli hedefler
  shortTermGoals: Yup.string()
    .required('Please describe your short-term goals')
    .min(10, 'Short-term goals must be at least 10 characters')
    .max(500, 'Short-term goals cannot exceed 500 characters'),

  // Uzun vadeli hedefler
  longTermGoals: Yup.string()
    .required('Please describe your long-term goals')
    .min(10, 'Long-term goals must be at least 10 characters')
    .max(500, 'Long-term goals cannot exceed 500 characters'),

  // Hedef önceliği
  goalPriority: Yup.string()
    .required('Please select your goal priority level')
    .oneOf(['high', 'medium', 'low'], 'Please select a valid priority level'),

  // Motivasyon seviyesi
  motivationLevel: Yup.string()
    .required('Please select your current motivation level')
    .oneOf(['very_high', 'high', 'medium', 'low', 'very_low'], 'Please select a valid motivation level'),

  // Büyüme alanı
  growthArea: Yup.string()
    .required('Please select your primary growth area')
    .oneOf(['career', 'health', 'relationships', 'education', 'finance', 'spiritual', 'creative', 'social', 'other'], 'Please select a valid growth area')
});

export default StepThreeSchema;
