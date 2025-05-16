import './index.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Contato from './pages/Contato';
import Planos from './pages/Planos';



function App() {
 return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/planos" element={<Planos />} />
      </Routes>
    </BrowserRouter>
 )
}

export default App
