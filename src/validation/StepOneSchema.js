import * as Yup from 'yup';

const validationSchema = Yup.object({
  age: Yup.number().min(18, 'Minimum age is 18').max(100, 'Maximum age is 100').required('Required'),
  gender: Yup.string().required('Required'),
  job: Yup.string().required('Required'),
  jobHours: Yup.string().required('Required'),
  location: Yup.string().required('Required'),
  mood: Yup.string().required('Required')
});

export default validationSchema;