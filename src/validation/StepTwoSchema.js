import * as Yup from 'yup';

const StepTwoSchema = Yup.object().shape({
  // Spor yapma durumu
  doesSports: Yup.string()
    .required('Please select if you exercise regularly')
    .oneOf(['yes', 'no'], 'Please select a valid option'),

  // Haftalık egzersiz saati
  weeklyExerciseHours: Yup.number()
    .nullable()
    .min(0, 'Exercise hours cannot be negative')
    .max(168, 'Exercise hours cannot exceed 168 hours per week')
    .integer('Exercise hours must be a whole number'),

  // Hobiler
  hobbies: Yup.string()
    .nullable()
    .max(200, 'Hobbies description cannot exceed 200 characters'),

  // Sosyal medya kullanımı
  socialMediaUse: Yup.string()
    .required('Please select if you use social media')
    .oneOf(['yes', 'no'], 'Please select a valid option'),

  // Sosyal medya saatleri
  socialMediaHours: Yup.number()
    .nullable()
    .min(0, 'Social media hours cannot be negative')
    .max(168, 'Social media hours cannot exceed 168 hours per week')
    .integer('Social media hours must be a whole number'),

  // Sosyal medya platformları
  socialPlatforms: Yup.array()
    .nullable(),

  // Sabah rutini
  morningRoutine: Yup.string()
    .required('Please select your morning routine')
    .oneOf(['none', 'light', 'moderate', 'heavy'], 'Please select a valid morning routine'),

  // Akşam rutini
  eveningRoutine: Yup.string()
    .required('Please select your evening routine')
    .oneOf(['none', 'light', 'moderate', 'heavy'], 'Please select a valid evening routine'),

  // Kahve tüketimi
  coffeeIntake: Yup.number()
    .required('Please enter your daily coffee intake')
    .min(0, 'Coffee intake cannot be negative')
    .max(20, 'Coffee intake cannot exceed 20 cups per day')
    .integer('Coffee intake must be a whole number'),

  // Uyku kalitesi
  sleepQuality: Yup.string()
    .required('Please select your sleep quality')
    .oneOf(['poor', 'average', 'good', 'excellent'], 'Please select a valid sleep quality'),

  // Meditasyon
  meditation: Yup.string()
    .required('Please select your meditation practice')
    .oneOf(['yes', 'no'], 'Please select a valid meditation practice')
});

export default StepTwoSchema;
