import { HashRouter, Routes, Route } from "react-router-dom";
import Presentation from "./Pages/Presentation";
import UnitOne from "./Pages/UnitOne";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Presentation />} />
        <Route path="*" element={<h1>404</h1>} />
        <Route path="/unidaduno" element={<UnitOne />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
