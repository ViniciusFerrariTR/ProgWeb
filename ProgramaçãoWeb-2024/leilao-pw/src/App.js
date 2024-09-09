import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import DefaultLayout from './components/DefaultLayout';
import SimpleLayout from './components/SimpleLayout';
import PrivateRouter from './components/PrivateRouter';
import Cadastro from './pages/cadastro/Cadastro';
import RecSenha from './pages/RecSenha/RecSenha';
import AltSenha from './pages/altsenha/AltSenha';
import EditPerfil from './pages/editperfil/EditPerfil';
import Dashboard from './pages/dashboard/Dashboard';


function App() {
  return (
    <>
      {/*  <Header/> */}
      <BrowserRouter>
        <Routes>

          <Route element={<PrivateRouter />}>
            <Route path='/'
              element={<DefaultLayout><Home /></DefaultLayout>} />
            {/* Inserir outras rotas de acesso restrito */}  
          </Route>
          
          <Route path='/login'
            element={<SimpleLayout><Login /></SimpleLayout>} />
          <Route path='/cadastro'
            element={<SimpleLayout><Cadastro /></SimpleLayout>} />
          <Route path='/recsenha'
            element={<SimpleLayout><RecSenha /></SimpleLayout>} />
          <Route path='/altsenha'
            element={<SimpleLayout><AltSenha /></SimpleLayout>} />
          <Route path='/editperfil'
            element={<SimpleLayout><EditPerfil /></SimpleLayout>} />
          <Route path='/resultados'
            element={<DefaultLayout><Dashboard /></DefaultLayout>} />
        </Routes>
      </BrowserRouter>
      {/* <Footer/> */}
    </>
  );
}

export default App;
