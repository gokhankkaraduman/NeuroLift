// App.jsx
import { Routes, Route } from 'react-router-dom';
import Login from '../Login/Login';
import PrivacyPolicy from '../../pages/PrivacyPolicy/PrivacyPolicy';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  );
}

export default App;