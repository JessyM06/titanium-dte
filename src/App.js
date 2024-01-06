import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

//Importar componentes
import Inicio from './pages/Inicio';
import Archivo_Dte from './pages/Archivo_Dte';
import Consulta_Dte from './pages/Consulta_Dte';
import Documento_Grafico from './pages/Documento_Grafico';
import MenuNavbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <MenuNavbar /> }>
            <Route index element={ <Inicio /> } />
            <Route path='documento-grafico' element={ <Documento_Grafico /> } />
            <Route path='consulta-dte' element={ <Consulta_Dte /> } />
            <Route path='archivo-dte' element={ <Archivo_Dte /> } />

            <Route path='*' element={ <Navigate replace to="/" /> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
