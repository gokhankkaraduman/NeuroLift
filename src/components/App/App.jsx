// App.jsx
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../Login/Login';
import PrivacyPolicy from '../../pages/PrivacyPolicy/PrivacyPolicy';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  );
}

export default App;