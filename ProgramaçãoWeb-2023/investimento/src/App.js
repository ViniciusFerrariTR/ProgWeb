import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculo from './pages/Investimento/Calculo';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
       <BrowserRouter>
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route exact path='/calculo' Component={Calculo} />
        </Routes>
      </BrowserRouter> 
    </div>
  )
}

export default App;
