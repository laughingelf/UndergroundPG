
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import SawyersPlayground from './pages/SawyersPlayground';
import SawyerMath from './pages/SawyerMath';
import SawyerLetters from './pages/SawyerLetters';
import SawyerWords from './pages/SawyerWords';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AboutMe from './pages/AboutMe';
import Footer from './components/Footer';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">

      <Navbar />

      <Routes>

        <Route path='/' element={<Homepage />} />
        <Route path='/sawyers-playground' element={<SawyersPlayground />} />
        <Route path='/sawyers-playground/math' element={<SawyerMath />} />
        <Route path='/sawyers-playground/letters' element={<SawyerLetters />} />
        <Route path='/sawyers-playground/words' element={<SawyerWords />} />
        <Route path='/auth/login' element={<LoginPage />} />
        <Route path='/auth/signup' element={<SignupPage />} />
        <Route path='/about-me' element={<AboutMe />} />
        <Route path='/user/profile' element={<Profile />} />


      </Routes>

      <Footer />

    </div>
  );
}

export default App;
