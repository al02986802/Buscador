import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Resultados from './Resultados/Resultados';
import PaginaInicio from './PaginaInicio/PaginaInicio';
import Cargando from './Cargando/Cargando';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<PaginaInicio />} />
          <Route path="/resultados" element={<Resultados />} />
          <Route path="/resultados/cargando" element={<Cargando />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
