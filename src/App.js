
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import SawyersPlayground from './pages/SawyersPlayground';
import SawyerMath from './pages/SawyerMath';
import SawyerLetters from './pages/SawyerLetters';
import SawyerWords from './pages/SawyerWords';

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


      </Routes>


    </div>
  );
}

export default App;
