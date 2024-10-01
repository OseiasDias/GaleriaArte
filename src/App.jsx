import "./App.css";
import InicioGalleria from "./pages/InicioGalleria";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      
      <BrowserRouter>
        <Routes>
      
          <Route path="/" element={<InicioGalleria />} />
          
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
