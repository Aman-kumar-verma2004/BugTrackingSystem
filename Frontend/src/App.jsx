import { Routes, Route } from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';
import LandingPage from './components/LandingPage';
import DashBoard from './components/DashBoard';

function App() {
  return (
    <div className='bg-black'>
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/dashboard' element={<DashBoard />} />
      </Routes>
    </div>
  );
}

export default App;
