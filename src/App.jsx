import { HashRouter, Routes, Route } from "react-router-dom";
import Presentation from "./Pages/Presentation";
import UnitOne from "./Pages/UnitOne";
import UnitTwo from "./Pages/UnitTwo";
import UnitThree from "./Pages/UnitThree";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Presentation />} />
        <Route path="*" element={<h1>404</h1>} />
        <Route path="/unidaduno" element={<UnitOne />} />
        <Route path="/unidaddos" element={<UnitTwo />} />
        <Route path="/unidadtres" element={<UnitThree/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
