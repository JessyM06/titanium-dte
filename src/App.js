import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Importar componentes
import Inicio from './pages/Inicio';
import ArchivoDte from './pages/ArchivoDte';
import ConsultaDte from './pages/ConsultaDte';
import DocumentoGrafico from './pages/DocumentoGrafico';
import MenuNavbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <MenuNavbar /> }>
            <Route index element={ <Inicio /> } />
            <Route path='documento-grafico' element={ <DocumentoGrafico /> } />
            <Route path='consulta-dte' element={ <ConsultaDte /> } />
            <Route path='archivo-dte' element={ <ArchivoDte /> } />

            <Route path='*' element={ <Navigate replace to="/" /> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
