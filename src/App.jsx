import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Eli from "./pages/Eli";
import Gulle from "./pages/Gulle";
import David from "./pages/David";
import Villas from "./pages/Villas";
import Niko from "./pages/Niko";

function App() {

  return (
    <main>
      <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/eli" element={<Eli />} />
          <Route path="/david" element={<David />} />
          <Route path="/niko" element={<Niko />} />
          <Route path="/villas" element={<Villas />} />
          <Route path="/gulle" element={<Gulle />} />
      </Routes>
    </main>
  )
}

export default App
